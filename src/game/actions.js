// Player and staff actions. All mutate the state object and return small result objects
// so the UI and renderer can react. No DOM, no Three.js.
import { derive, upgradeCost, payment, franchiseGain, franchiseReady, ovenSpeed, tierOf } from './economy.js';
import { startEvent } from './events.js';
import { activeModifiers } from './events.js';

export function findCustomer(state, id) {
  return state.customers.find((c) => c.id === id);
}

export function findPizza(state, id) {
  return state.pizzas.find((p) => p.id === id);
}

function newId(state) {
  return state.nextId++;
}

export function takeOrder(state, customerId, cfg) {
  const c = findCustomer(state, customerId);
  if (!c || c.state !== 'waiting') return { ok: false };
  // The kitchen can only hold so many pizzas at once; the order waits in the queue instead.
  if (state.pizzas.length >= (cfg.economy.queueHardCap || 40)) return { ok: false, reason: 'kitchenFull' };
  c.state = 'ordered';
  const pizza = {
    id: newId(state),
    customerId: c.id,
    style: c.style,
    stage: 'dough',
    work: 0,
    q: { dough: 0, top: 0, bake: 0 },
    topping: null,
    bakeLeft: 0,
    readyTimer: 0,
  };
  state.pizzas.push(pizza);
  state.stats.ordersTaken++;
  return { ok: true, type: 'order_taken', customerId: c.id, pizzaId: pizza.id };
}

// Manual mini-game results. `input` is raw UI data; the sim turns it into quality.
export function applyManual(state, pizzaId, action, input, cfg) {
  const p = findPizza(state, pizzaId);
  if (!p) return { ok: false, reason: 'noPizza' };
  const m = cfg.economy.manual;
  const st = cfg.economy.stages;

  if (action === 'stretch') {
    if (p.stage !== 'dough') return { ok: false, reason: 'wrongStage' };
    const timeLeft = Math.max(0, Math.min(1, input.timeLeftFrac ?? 0));
    p.q.dough = input.finished
      ? m.doughFinishMinQuality + (1 - m.doughFinishMinQuality) * timeLeft
      : m.doughRushedQuality;
    p.work = 0;
    p.stage = 'topping';
    state.stats.manualStretch++;
    return { ok: true, type: 'stage', pizzaId, stage: 'topping', auto: false };
  }

  if (action === 'topping') {
    if (p.stage !== 'topping') return { ok: false, reason: 'wrongStage' };
    const c = findCustomer(state, p.customerId);
    const correct = c && input.topping === c.topping;
    p.topping = input.topping;
    p.q.top = correct ? m.toppingCorrectQuality : m.toppingWrongQuality;
    p.work = 0;
    p.stage = 'load';
    state.stats.manualTopping++;
    return { ok: true, type: 'stage', pizzaId, stage: 'load', auto: false, correct };
  }

  if (action === 'load') {
    if (p.stage !== 'load') return { ok: false, reason: 'wrongStage' };
    const d = derive(state, cfg);
    if (bakingCount(state) >= d.ovenSlots) return { ok: false, reason: 'ovenFull' };
    const zone = m.ovenSweetZone / 2;
    const dist = Math.abs((input.markerPos ?? 0.5) - 0.5);
    const q = dist <= zone
      ? 1
      : Math.max(m.ovenMinQuality, 1 - (dist - zone) * 2.2);
    return bake(state, p, q, cfg, 'manual');
  }

  if (action === 'serve') {
    if (p.stage !== 'ready') return { ok: false, reason: 'wrongStage' };
    return serve(state, p, cfg);
  }
  return { ok: false, reason: 'unknownAction' };
}

function bakingCount(state) {
  return state.pizzas.filter((p) => p.stage === 'baking').length;
}

function bake(state, p, q, cfg, mode) {
  const st = cfg.economy.stages;
  const style = cfg.economy.styles[p.style];
  p.q.bake = q;
  p.stage = 'baking';
  const minBake = cfg.economy.prestige.minBakeSeconds || 0;
  const secs = Math.max(minBake, style.bakeSeconds / ovenSpeed(state, cfg));
  p.bakeLeft = secs * (q >= st.perfectBakeQuality ? st.perfectBakeSpeedMult : 1);
  p.bakeTotal = p.bakeLeft;
  p.work = 0;
  if (mode === 'manual') state.stats.manualLoad++;
  return { ok: true, type: 'stage', pizzaId: p.id, stage: 'baking', auto: mode !== 'manual', quality: q };
}

export function serve(state, p, cfg) {
  const c = findCustomer(state, p.customerId);
  state.pizzas = state.pizzas.filter((x) => x.id !== p.id);
  if (!c) return { ok: false, reason: 'noCustomer' };
  state.customers = state.customers.filter((x) => x.id !== c.id);

  const stats = derive(state, cfg);
  const mods = activeModifiers(state, cfg);
  const e = cfg.economy;
  const q = (p.q.dough + p.q.top + p.q.bake) / 3;
  const wrong = p.topping !== c.topping;
  const amount = payment(p.style, q, stats, mods, wrong, cfg);
  const patienceFrac = Math.max(0, c.patience / c.maxPatience);
  const typeTip = e.customers.types[c.type].tipMult;
  const tipMult = wrong ? e.customers.wrongToppingTipMult : 1;
  const tip = amount * e.customers.tipMax * patienceFrac * typeTip * tipMult;
  const total = amount + tip;

  state.cash += total;
  state.lifetimeCash += total;
  state.stats.served++;
  return {
    ok: true,
    type: 'served',
    pizzaId: p.id,
    customerId: c.id,
    customerType: c.type,
    amount,
    tip,
    total,
    big: total >= e.bigSaleThreshold,
    wrongTopping: wrong,
  };
}

// Helper for the cook: complete a stage automatically.
export function autoStage(state, p, cfg) {
  const st = cfg.economy.stages;
  const c = findCustomer(state, p.customerId);
  if (p.stage === 'dough') {
    p.q.dough = st.autoDoughQuality;
    p.stage = 'topping';
    p.work = 0;
    return { ok: true, type: 'stage', pizzaId: p.id, stage: 'topping', auto: true };
  }
  if (p.stage === 'topping') {
    p.topping = c ? c.topping : null;
    p.q.top = st.autoToppingQuality;
    p.stage = 'load';
    p.work = 0;
    return { ok: true, type: 'stage', pizzaId: p.id, stage: 'load', auto: true };
  }
  return { ok: false };
}

export function autoLoad(state, p, cfg) {
  return bake(state, p, cfg.economy.stages.autoLoadQuality, cfg, 'auto');
}

export function buyUpgrade(state, key, cfg, now = Date.now()) {
  const def = cfg.economy.upgrades[key];
  if (!def || def.enabled === false) return { ok: false, reason: 'locked' };
  if (def.requires && state.franchise.count < (def.requires.franchises || 0)) {
    return { ok: false, reason: 'needsFranchise', need: def.requires.franchises };
  }
  const level = state.upgrades[key];
  if (level >= def.maxLevel) return { ok: false, reason: 'maxed' };
  const cost = upgradeCost(def, level);
  if (state.cash < cost) return { ok: false, reason: 'cash', cost };
  state.cash -= cost;
  state.upgrades[key] = level + 1;
  state.stats.upgradesBought++;
  return { ok: true, type: 'bought', key, cost, first: firstPurchase(state) };
}

export function hireStaff(state, role, cfg) {
  const def = cfg.economy.staff[role];
  const level = state.staff[role];
  if (level >= def.maxLevel) return { ok: false, reason: 'maxed' };
  const cost = upgradeCost(def, level);
  if (state.cash < cost) return { ok: false, reason: 'cash', cost };
  state.cash -= cost;
  state.staff[role] = level + 1;
  if (level === 0) state.stats.staffHired++;
  return { ok: true, type: 'hired', role, cost, first: firstPurchase(state) };
}

// Returns true only the first time (for analytics "first_purchase").
function firstPurchase(state) {
  if (state.flags.firstPurchase) return false;
  state.flags.firstPurchase = true;
  return true;
}

// Recruits an extra employee of a role. Needs franchising, the role hired, and room at this stand.
export function recruitStaff(state, role, cfg) {
  const rc = cfg.economy.recruit;
  if (!rc || !rc[role]) return { ok: false, reason: 'unknown' };
  if (state.franchise.count < rc.requiresFranchises) return { ok: false, reason: 'needsFranchise', need: rc.requiresFranchises };
  if ((state.staff[role] || 0) < 1) return { ok: false, reason: 'needsHire' };
  const cap = tierOf(state, cfg).recruitCap;
  const have = state.staffing[role] || 0;
  if (have >= cap) return { ok: false, reason: 'maxed', cap };
  const cost = Math.ceil(rc[role].baseCost * Math.pow(rc[role].growth, have));
  if (state.cash < cost) return { ok: false, reason: 'cash', cost };
  state.cash -= cost;
  state.staffing[role] = have + 1;
  return { ok: true, type: 'recruited', role, cost, count: have + 1, cap };
}

export function canFranchise(state, cfg) {
  return franchiseReady(state, cfg);
}

// Returns a brand-new state object that keeps what the design says carries over.
export function franchise(state, cfg, newGameFn, now = Date.now()) {
  const gain = franchiseGain(state, cfg);
  const fresh = newGameFn(cfg, now);
  fresh.unlockedLocations = { ...state.unlockedLocations };
  fresh.franchise = {
    points: state.franchise.points + gain,
    count: state.franchise.count + 1,
    lifetimeAtLast: state.lifetimeCash,
    readyNotified: false,
  };
  fresh.styles = { ...state.styles };
  fresh.tutorialStep = state.tutorialStep;
  fresh.tutorialDone = state.tutorialDone;
  // A franchise starts the normal economy, not the first-time one.
  fresh.cash = cfg.economy.startingCash;
  fresh.stats = { ...state.stats };
  fresh.lifetimeCash = state.lifetimeCash;
  fresh.settings = { ...state.settings };
  fresh.cosmetics = { ...state.cosmetics };
  fresh.flags = { ...state.flags };
  fresh.rngSeed = state.rngSeed;
  fresh.gameTime = state.gameTime;
  fresh.dayClock = state.dayClock;
  fresh.createdAt = state.createdAt;
  fresh.events = { active: [], nextAt: state.gameTime + 240 };
  return { state: fresh, gain };
}

export function unlockedStyles(state, cfg) {
  return Object.keys(cfg.economy.styles).filter((k) => state.styles[k]);
}

// Moves the stand to another unlocked location. The queue and cooking pizzas do not come along.
export function moveLocation(state, id, cfg) {
  if (!cfg.locations?.[id]) return { ok: false, reason: 'unknown' };
  if (!state.unlockedLocations[id]) return { ok: false, reason: 'locked' };
  if (state.location === id) return { ok: false, reason: 'current' };
  state.location = id;
  state.customers = [];
  state.pizzas = [];
  state.cashierTimer = 0;
  state.spawnTimer = cfg.economy.customers.spawnBaseSeconds;
  return { ok: true, type: 'moved', location: id };
}

// The happy-hour mini game can be played when its cooldown has passed and no double is running.
// Opens another shop. Needs franchising; each shop costs more than the one before.
export function openShop(state, cfg) {
  const sc = cfg.economy.shops;
  if (!sc) return { ok: false, reason: 'unknown' };
  if (state.franchise.count < sc.requiresFranchises) return { ok: false, reason: 'needsFranchise', need: sc.requiresFranchises };
  const open = state.shops || 1;
  if (open >= sc.maxShops) return { ok: false, reason: 'maxed', cap: sc.maxShops };
  const cost = Math.ceil(sc.baseCost * Math.pow(sc.growth, open - 1));
  if (state.cash < cost) return { ok: false, reason: 'cash', cost };
  state.cash -= cost;
  state.shops = open + 1;
  return { ok: true, type: 'shop', shops: state.shops, cost };
}

export function bonusAvailable(state, cfg) {
  return state.gameTime >= state.bonus.nextAt && !state.events.active.some((a) => a.id === 'doubleCash');
}

// Ends a happy-hour game: starts the cooldown, and starts the double if enough targets were hit.
export function completeBonus(state, hits, cfg) {
  const hh = cfg.economy.happyHour;
  state.bonus.nextAt = state.gameTime + hh.intervalSeconds;
  state.bonus.readyNotified = false;
  const won = hits >= hh.needed;
  if (won) startEvent(state, 'doubleCash', cfg);
  return { ok: true, won, hits };
}
