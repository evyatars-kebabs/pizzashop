// Pure economy formulas. Everything here reads tunables from cfg.economy (data/economy.json).

// How many levels a purchase covers, from `level` up: `amount` is 1, 5, 10 or 'max'.
// Stops at the top level, or earlier when the cash runs out. costAt(lv) is the price of level lv.
export function quoteLevels(def, level, amount, cash, costAt = (lv) => upgradeCost(def, lv)) {
  const want = amount === 'max' ? Infinity : amount;
  const cap = Math.min(want, def.maxLevel - level);
  let total = 0;
  let n = 0;
  for (let i = 0; i < cap; i++) {
    const c = costAt(level + i);
    if (total + c > cash) break;
    total += c;
    n++;
  }
  return { n, cost: total };
}

export function upgradeCost(def, level) {
  return Math.ceil(def.baseCost * Math.pow(def.growth, level));
}

export function daylightOf(dayClock) {
  // 0 at midnight, 1 at noon, smooth at sunrise/sunset.
  const sun = Math.sin(2 * Math.PI * (dayClock - 0.25));
  const x = Math.min(1, Math.max(0, (sun + 0.2) / 0.5));
  return x * x * (3 - 2 * x);
}

export function unlockMet(state, cond) {
  if (!cond) return true;
  switch (cond.type) {
    case 'start': return true;
    case 'lifetime': return state.lifetimeCash >= cond.value;
    case 'staffLevel': return (state.staff[cond.role] || 0) >= cond.value;
    case 'upgradeLevel': return (state.upgrades[cond.upgrade] || 0) >= cond.value;
    case 'franchise': return state.franchise.count >= cond.value;
    default: return false;
  }
}

// The location the stand is on, with its economy block (traffic, style demand).
export function locationOf(state, cfg) {
  return cfg.locations?.[state.location];
}

export function locationEconomy(state, cfg) {
  const loc = locationOf(state, cfg);
  return loc?.economy ?? { trafficMult: 1, styleDemand: {} };
}

// Total of one bonus kind over every city upgrade bought (each upgrade's effect and perLevel).
export function cityEffect(state, cfg, kind) {
  let sum = 0;
  for (const [key, u] of Object.entries(cfg.economy.upgrades)) {
    if (u.group === 'city' && u.effect === kind) sum += u.perLevel * (state.upgrades[key] || 0);
  }
  return sum;
}

// Cities in travel order: the first is where every franchise starts.
export function cityList(cfg) {
  return [...cfg.economy.cities.list].sort((a, b) => a.order - b.order);
}

export function cityById(cfg, id) {
  return cityList(cfg).find((c) => c.id === id);
}

// The city the stand is in. Its multiplier scales all income.
export function cityOf(state, cfg) {
  return cityById(cfg, state.city) || cityList(cfg)[0];
}

// The decorations this city offers, then the shared ones. The decor upgrade's level says
// how many are installed (state.decorShown), and moving cities takes them down again.
export function decorStepsFor(state, cfg) {
  return [...(cityOf(state, cfg).decorSteps || []), ...cfg.economy.upgrades.decor.steps];
}

// The next city to travel to: the first one after the furthest city reached.
export function nextCity(state, cfg) {
  const list = cityList(cfg);
  const reached = Math.max(0, ...list.filter((c) => (state.cityVisited || []).includes(c.id)).map((c) => c.order));
  return list.find((c) => c.order === reached + 1) || null;
}

// Lifetime cash that opens the map (it stays open after that).
export function mapUnlocked(state, cfg) {
  return state.lifetimeCash >= (cfg.economy.cities.mapUnlockLifetime || 0);
}

// Stand tier from the number of franchises: cart, big stand, pizza shop.
export function tierIndex(state, cfg) {
  const tiers = cfg.economy.prestige.tiers;
  let idx = 0;
  tiers.forEach((t, i) => { if (state.franchise.count >= t.minFranchises) idx = i; });
  return idx;
}

export function tierOf(state, cfg) {
  return cfg.economy.prestige.tiers[tierIndex(state, cfg)];
}

// Cash earned at the current stand (since the last franchise, or since the start).
export function runCash(state) {
  return Math.max(0, state.lifetimeCash - (state.franchise.lifetimeAtLast || 0));
}

// What the current stand must earn before it can franchise. Grows with every franchise.
export function isEarlyFranchising(state, cfg) {
  return state.franchise.count < (cfg.economy.earlyFranchises?.count ?? 0);
}

export function franchiseRequirement(state, cfg) {
  const p = cfg.economy.prestige;
  // Grows steadily: about 20k, 49k, 83k, 121k, 452k at 10 franchises, 1.7M at 30.
  const base = p.milestoneLifetimeCash * Math.pow(state.franchise.count + 1, p.requirementExponent ?? 1.3);
  const early = isEarlyFranchising(state, cfg) ? (cfg.economy.earlyFranchises.requirementMult ?? 1) : 1;
  return Math.round(base * early);
}

export function franchiseReady(state, cfg) {
  return runCash(state) >= franchiseRequirement(state, cfg);
}

// Ovens bake faster with every franchise: 1 = the starting speed.
export function ovenSpeed(state, cfg) {
  return 1 + (cfg.economy.prestige.ovenSpeedPerFranchise || 0) * state.franchise.count;
}

// More franchises bring more customers, without limit unless prestige.trafficMaxMult is set.
// Returns the spawn-rate multiplier (1 = none yet).
export function franchiseTraffic(state, cfg, count = state.franchise.count) {
  const p = cfg.economy.prestige;
  return Math.min(p.trafficMaxMult ?? Infinity, 1 + (p.trafficPerFranchise || 0) * count);
}

export function prestigeMult(state, cfg) {
  return 1 + cfg.economy.prestige.bonusPerPoint * state.franchise.points;
}

// Derived stats for the current state. Pure; call freely.
// Each open shop doubles customers, staff, oven capacity and money per second: 1, 2, 4, 8.
export function shopMultiplier(state, cfg) {
  const per = cfg.economy.shops?.multiplierPerShop || 2;
  return Math.pow(per, Math.max(0, (state.shops || 1) - 1));
}

// Headcounts for every role, including recruits and every shop.
export function staffCounts(state, cfg) {
  const m = shopMultiplier(state, cfg);
  const cashier = state.staff.cashier > 0 ? 1 + (state.staffing?.cashier || 0) : 0;
  const cook = state.staff.cook > 0 ? 1 + (state.staffing?.cook || 0) : 0;
  return { cashier: Math.round(cashier * m), cook: Math.round(cook * m) };
}

export function derive(state, cfg) {
  const e = cfg.economy;
  const up = e.upgrades;
  const lvl = state.upgrades;
  const cashierLvl = state.staff.cashier;
  const cookLvl = state.staff.cook;

  const city = cityOf(state, cfg);
  // City upgrades each add one kind of bonus (traffic, pay or oven slots) per level.
  const cityFx = (kind) => cityEffect(state, cfg, kind);
  const traffic = up.decor.trafficPerLevel * lvl.decor + up.neon.trafficPerLevel * lvl.neon + cityFx('traffic');
  const locEcon = locationEconomy(state, cfg);
  const frTraffic = franchiseTraffic(state, cfg);
  const bakeSpeed = ovenSpeed(state, cfg);
  const empireTraffic = up.marketing ? 1 + up.marketing.trafficMultPerLevel * (lvl.marketing || 0) : 1;
  // Empire and city bonuses: pizza school, delivery, and the city's own multiplier.
  const empirePay = (up.pizzaSchool ? 1 + up.pizzaSchool.payMultPerLevel * (lvl.pizzaSchool || 0) : 1)
    * (1 + cityFx('pay')) * city.multiplier;
  const shopM = shopMultiplier(state, cfg);
  const beginner = !state.tutorialDone;
  const beginnerSpawn = beginner ? (e.beginner?.spawnMult || 1) : 1;
  const early = isEarlyFranchising(state, cfg) ? (e.earlyFranchises || {}) : null;
  const earlyPay = early?.payMult || 1;
  const earlyCustomers = early?.customerMult || 1;
  const beginnerPay = (beginner ? (e.beginner?.payMult || 1) : 1) * earlyPay;
  const spawnBase = e.customers.spawnBaseSeconds * beginnerSpawn / ((1 + traffic) * locEcon.trafficMult * frTraffic * empireTraffic * shopM * earlyCustomers);
  const tier = tierOf(state, cfg);
  const ovenSlots = (up.oven.ovenSlotsBase + up.oven.ovenSlotsPerLevel * lvl.oven + tier.ovenSlotsBonus
    + (up.megaOven ? up.megaOven.ovenSlotsPerLevel * (lvl.megaOven || 0) : 0)
    + cityFx('oven')) * shopM;
  // The queue is capped (queueHardCap) so a huge queue can never overload the game.
  const maxQueue = Math.min(
    (up.counter.maxQueueBase + up.counter.maxQueuePerLevel * lvl.counter + tier.maxQueueBonus) * shopM,
    e.queueHardCap || 40,
  );
  const cheeseMult = 1 + up.cheese.cheeseMultPerLevel * lvl.cheese;
  const pMult = prestigeMult(state, cfg);
  const cashierOrderSec = e.cashier.orderSecondsBase / (1 + e.cashier.orderSpeedPerLevel * cashierLvl);
  const cookSpeed = 1 + e.cook.speedPerLevel * cookLvl;

  // Idle rate estimate used by the HUD and offline earnings. Demand vs. oven capacity, whichever is lower.
  const unlockedPrices = Object.entries(e.styles)
    .filter(([k, s]) => s.enabled && state.styles[k])
    .map(([, s]) => s.basePrice);
  const avgPrice = unlockedPrices.length
    ? unlockedPrices.reduce((a, b) => a + b, 0) / unlockedPrices.length
    : e.styles.margherita.basePrice;
  const avgBake = Math.max(e.prestige.minBakeSeconds || 0, 10 / bakeSpeed);
  const demandPerSec = 1 / spawnBase;
  const capacityPerSec = ovenSlots / avgBake;
  const pizzasPerSec = Math.min(demandPerSec, capacityPerSec);
  const payPerPizza = avgPrice * (e.pizzaQuality.payBase + e.pizzaQuality.payPerQuality * 0.8) * cheeseMult * pMult * empirePay;
  const idleRate = pizzasPerSec * payPerPizza * 1.1; // ~10% expected tips

  const staffRoles = (cashierLvl > 0 ? 1 : 0) + (cookLvl > 0 ? 1 : 0);
  const recruits = (state.staffing?.cashier || 0) + (state.staffing?.cook || 0);
  const counts = staffCounts(state, cfg);
  const cashierCount = counts.cashier;
  const cookCount = counts.cook;
  const offlineEfficiency = Math.min(1, e.time.offlineBaseEfficiency + e.time.offlineEfficiencyPerStaffRole * staffRoles + (e.recruit?.offlineEfficiencyPerRecruit || 0) * recruits);

  return {
    traffic, locEcon, tier, frTraffic, empireTraffic, empirePay, cityMult: city.multiplier, beginnerPay, bakeSpeed, spawnBase, ovenSlots, maxQueue, cheeseMult, prestigeMult: pMult,
    cashierOrderSec, cashierLvl, cashierCount, cookSpeed, cookLvl, cookCount, idleRate, offlineEfficiency,
  };
}

// Price of a served pizza. q is pizza quality in [0,1].
export function payment(style, q, stats, mods, wrongTopping, cfg) {
  const e = cfg.economy;
  const base = e.styles[style].basePrice;
  const qualityMult = e.pizzaQuality.payBase + e.pizzaQuality.payPerQuality * q;
  const wrongMult = wrongTopping ? e.customers.wrongToppingPayMult : 1;
  return base * qualityMult * stats.cheeseMult * stats.prestigeMult * (stats.empirePay || 1) * (stats.beginnerPay || 1) * mods.cashMult * wrongMult;
}

export function franchiseGain(state, cfg) {
  return Math.max(1, Math.floor(runCash(state) / cfg.economy.prestige.pointsDivisor));
}

export function nextGoal(state, cfg) {
  for (const g of cfg.economy.goals) {
    if (!unlockMet(state, g.condition)) return g;
  }
  return null;
}
