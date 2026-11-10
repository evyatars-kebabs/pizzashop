// Pure economy formulas. Everything here reads tunables from cfg.economy (data/economy.json).

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

export function prestigeMult(state, cfg) {
  return 1 + cfg.economy.prestige.bonusPerPoint * state.franchise.points;
}

// Derived stats for the current state. Pure; call freely.
export function derive(state, cfg) {
  const e = cfg.economy;
  const up = e.upgrades;
  const lvl = state.upgrades;
  const cashierLvl = state.staff.cashier;
  const cookLvl = state.staff.cook;

  const traffic = up.decor.trafficPerLevel * lvl.decor + up.neon.trafficPerLevel * lvl.neon;
  const locEcon = locationEconomy(state, cfg);
  const spawnBase = e.customers.spawnBaseSeconds / ((1 + traffic) * locEcon.trafficMult);
  const ovenSlots = up.oven.ovenSlotsBase + up.oven.ovenSlotsPerLevel * lvl.oven;
  const maxQueue = up.counter.maxQueueBase + up.counter.maxQueuePerLevel * lvl.counter;
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
  const avgBake = 10;
  const demandPerSec = 1 / spawnBase;
  const capacityPerSec = ovenSlots / avgBake;
  const pizzasPerSec = Math.min(demandPerSec, capacityPerSec);
  const payPerPizza = avgPrice * (e.pizzaQuality.payBase + e.pizzaQuality.payPerQuality * 0.8) * cheeseMult * pMult;
  const idleRate = pizzasPerSec * payPerPizza * 1.1; // ~10% expected tips

  const staffRoles = (cashierLvl > 0 ? 1 : 0) + (cookLvl > 0 ? 1 : 0);
  const offlineEfficiency = Math.min(1, e.time.offlineBaseEfficiency + e.time.offlineEfficiencyPerStaffRole * staffRoles);

  return {
    traffic, locEcon, spawnBase, ovenSlots, maxQueue, cheeseMult, prestigeMult: pMult,
    cashierOrderSec, cashierLvl, cookSpeed, cookLvl, idleRate, offlineEfficiency,
  };
}

// Price of a served pizza. q is pizza quality in [0,1].
export function payment(style, q, stats, mods, wrongTopping, cfg) {
  const e = cfg.economy;
  const base = e.styles[style].basePrice;
  const qualityMult = e.pizzaQuality.payBase + e.pizzaQuality.payPerQuality * q;
  const wrongMult = wrongTopping ? e.customers.wrongToppingPayMult : 1;
  return base * qualityMult * stats.cheeseMult * stats.prestigeMult * mods.cashMult * wrongMult;
}

export function franchiseGain(state, cfg) {
  return Math.floor(state.lifetimeCash / cfg.economy.prestige.pointsDivisor);
}

export function nextGoal(state, cfg) {
  for (const g of cfg.economy.goals) {
    if (!unlockMet(state, g.condition)) return g;
  }
  return null;
}
