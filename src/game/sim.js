// The live simulation tick. Pure: takes state + dt, mutates state, returns a list of
// events for the renderer, audio and UI to react to.
import { derive, daylightOf, unlockMet, franchiseReady } from './economy.js';
import { updateEvents, activeModifiers } from './events.js';
import { nextRandom, pickWeighted } from '../core/rng.js';
import { takeOrder, autoStage, autoLoad, serve } from './actions.js';

const IDLE_NOTIFY_SECONDS = 12;

export function tick(state, dt, cfg, out = []) {
  const e = cfg.economy;
  state.gameTime += dt;
  state.dayClock = (state.dayClock + dt / e.time.dayLengthSeconds) % 1;

  updateEvents(state, dt, cfg, out);
  const mods = activeModifiers(state, cfg);
  const d = derive(state, cfg);
  const daylight = daylightOf(state.dayClock);

  unlockStyles(state, cfg, out);
  unlockLocations(state, cfg, out);
  if (!state.bonus.readyNotified && state.gameTime >= state.bonus.nextAt) {
    state.bonus.readyNotified = true;
    out.push({ type: 'bonus_ready' });
  }
  if (!state.franchise.readyNotified && franchiseReady(state, cfg)) {
    state.franchise.readyNotified = true;
    out.push({ type: 'franchise_ready' });
  }
  drainPatience(state, dt, mods, cfg, out);
  spawn(state, dt, mods, d, daylight, cfg, out);
  runCashier(state, dt, d, cfg, out);
  runCook(state, dt, d, cfg, out);
  runBake(state, dt, out);
  checkTutorial(state, cfg, out);
  return out;
}

function unlockStyles(state, cfg, out) {
  for (const [k, def] of Object.entries(cfg.economy.styles)) {
    if (def.enabled && !state.styles[k] && unlockMet(state, def.unlock)) {
      state.styles[k] = true;
      out.push({ type: 'style_unlocked', style: k });
    }
  }
}

function unlockLocations(state, cfg, out) {
  if (!cfg.locations) return;
  for (const [id, loc] of Object.entries(cfg.locations)) {
    if (!state.unlockedLocations[id] && unlockMet(state, loc.unlock)) {
      state.unlockedLocations[id] = true;
      out.push({ type: 'location_unlocked', location: id });
    }
  }
}

function drainPatience(state, dt, mods, cfg, out) {
  for (const c of [...state.customers]) {
    c.patience -= dt * mods.patienceDrainMult;
    if (c.patience <= 0) {
      const penalty = Math.min(state.cash, cfg.economy.customers.angryPenalty);
      state.cash -= penalty;
      state.customers = state.customers.filter((x) => x.id !== c.id);
      state.pizzas = state.pizzas.filter((p) => p.customerId !== c.id);
      state.stats.angry++;
      out.push({ type: 'angry', customerId: c.id, customerType: c.type, nameIdx: c.nameIdx, penalty });
    }
  }
}

function spawn(state, dt, mods, d, daylight, cfg, out) {
  const cc = cfg.economy.customers;
  const nightMult = cc.nightSpawnMult + (1 - cc.nightSpawnMult) * daylight;
  state.spawnTimer -= dt * mods.spawnMult * nightMult;
  let guard = 0;
  while (state.spawnTimer <= 0 && guard++ < 20) {
    const interval = d.spawnBase * (1 + (nextRandom(state) * 2 - 1) * cc.spawnJitter);
    state.spawnTimer += interval;
    const waiting = state.customers.filter((c) => c.state === 'waiting').length;
    if (waiting >= d.maxQueue) {
      state.stats.turnedAway++;
      out.push({ type: 'turned_away' });
      continue;
    }
    const type = pickWeighted(state, Object.entries(cc.types).map(([key, t]) => ({ key, weight: t.weight })));
    const styleEntries = Object.keys(cfg.economy.styles)
      .filter((k) => state.styles[k])
      .map((k) => ({ key: k, weight: (mods.styleDemand[k] || 1) * (d.locEcon.styleDemand[k] || 1) }));
    const style = pickWeighted(state, styleEntries);
    const topping = cc.toppings[Math.floor(nextRandom(state) * cc.toppings.length)];
    const c = {
      id: state.nextId++,
      type,
      style,
      topping,
      nameIdx: 1 + Math.floor(nextRandom(state) * 5),
      patience: cc.types[type].patience,
      maxPatience: cc.types[type].patience,
      state: 'waiting',
    };
    state.customers.push(c);
    out.push({ type: 'arrived', customerId: c.id });
  }
}

function runCashier(state, dt, d, cfg, out) {
  const n = d.cashierCount;
  if (n === 0) return;
  const waitingNow = () => state.customers.filter((c) => c.state === 'waiting').sort((x, y) => x.id - y.id);
  const ready = state.pizzas.filter((p) => p.stage === 'ready');
  while (state.cashierTimers.length < n) state.cashierTimers.push(0);
  state.cashierTimers.length = n;
  // Each cashier has their own order timer, so extra cashiers take orders at the same time.
  for (let i = 0; i < n; i++) {
    if (waitingNow().length > 0) {
      state.cashierTimers[i] += dt;
      if (state.cashierTimers[i] >= d.cashierOrderSec) {
        state.cashierTimers[i] = 0;
        const next = waitingNow()[0];
        const r = takeOrder(state, next.id, cfg);
        if (r.ok) out.push({ ...r, auto: true });
      }
    } else {
      state.cashierTimers[i] = 0;
    }
  }
  if (waitingNow().length === 0 && ready.length === 0) {
    state.cashierIdle += dt;
    maybeIdleNotify(state, 'cashier', out);
  } else {
    state.cashierIdle = 0;
    state.idleNotified.cashier = false;
  }
  for (const p of ready) {
    p.readyTimer += dt;
    if (p.readyTimer >= cfg.economy.stages.autoServeDelaySeconds) {
      const r = serve(state, p, cfg);
      if (r.ok) out.push({ ...r, auto: true });
    }
  }
}

function runCook(state, dt, d, cfg, out) {
  const n = d.cookCount;
  if (n === 0) return;
  const st = cfg.economy.stages;
  // Each cook works on a different pizza at the same time.
  const tasks = state.pizzas.filter((p) => p.stage === 'dough' || p.stage === 'topping').sort((a, b) => a.id - b.id).slice(0, n);
  if (tasks.length > 0) {
    state.cookIdle = 0;
    state.idleNotified.cook = false;
    for (const task of tasks) {
      task.work += dt * d.cookSpeed;
      const need = task.stage === 'dough' ? st.autoDoughSeconds : st.autoToppingSeconds;
      if (task.work >= need) {
        const r = autoStage(state, task, cfg);
        if (r.ok) out.push({ ...r, auto: true });
      }
    }
  } else {
    state.cookIdle += dt;
    maybeIdleNotify(state, 'cook', out);
  }
  // Cook loads the oven whenever a slot is free.
  const loads = state.pizzas.filter((p) => p.stage === 'load').sort((a, b) => a.id - b.id);
  for (const p of loads) {
    const baking = state.pizzas.filter((x) => x.stage === 'baking').length;
    if (baking >= d.ovenSlots) break;
    const r = autoLoad(state, p, cfg);
    if (r.ok) out.push(r);
  }
}

function maybeIdleNotify(state, role, out) {
  const idleFor = role === 'cook' ? state.cookIdle : state.cashierIdle;
  if (idleFor >= IDLE_NOTIFY_SECONDS && !state.idleNotified[role]) {
    state.idleNotified[role] = true;
    out.push({ type: 'idle_staff', role });
  }
}

function runBake(state, dt, out) {
  for (const p of state.pizzas) {
    if (p.stage !== 'baking') continue;
    p.bakeLeft -= dt;
    if (p.bakeLeft <= 0) {
      p.stage = 'ready';
      p.bakeLeft = 0;
      out.push({ type: 'stage', pizzaId: p.id, stage: 'ready', auto: false });
    }
  }
}

function checkTutorial(state, cfg, out) {
  if (state.tutorialDone) return;
  const steps = cfg.economy.tutorial;
  while (state.tutorialStep < steps.length) {
    const check = steps[state.tutorialStep].check;
    if ((state.stats[check.stat] || 0) < check.gte) break;
    state.tutorialStep++;
    out.push({ type: 'tutorial_step', step: state.tutorialStep });
  }
  if (state.tutorialStep >= steps.length) {
    state.tutorialDone = true;
    out.push({ type: 'tutorial_done' });
  }
}

