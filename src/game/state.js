// Save-state template. Every persisted field lives here; save.js fills in any missing field
// from this template, so adding a field only needs a default here (plus a migration if it
// changes the meaning of existing data).
export const DEFAULT_STATE_PARTIAL = {
  schemaVersion: 2,
  rngSeed: 1234567,
  cash: 0,
  lifetimeCash: 0,
  gameTime: 0,
  dayClock: 0.3,
  savedAt: 0,
  createdAt: 0,
  location: 'corner',
  // Locations unlocked so far. Carries over franchises.
  unlockedLocations: { corner: true, sideStreet: false },
  upgrades: { oven: 0, counter: 0, cheese: 0, decor: 0, neon: 0, scooter: 0, marketing: 0, pizzaSchool: 0, megaOven: 0 },
  staff: { cashier: 0, cook: 0 },
  // Recipes carry over franchises.
  styles: { margherita: true, pepperoni: false, veggie: false, seasonal: false },
  // lifetimeAtLast: lifetime cash at the last franchise. Cash earned since then is what counts
  // toward the next one, so every franchise has to be earned again.
  franchise: { points: 0, count: 0, lifetimeAtLast: 0, readyNotified: false },
  tutorialStep: 0,
  tutorialDone: false,
  stats: {
    ordersTaken: 0, manualStretch: 0, manualTopping: 0, manualLoad: 0,
    served: 0, angry: 0, turnedAway: 0, upgradesBought: 0, staffHired: 0,
  },
  flags: { firstPurchase: false },
  events: { active: [], nextAt: 240 },
  customers: [],
  pizzas: [],
  nextId: 1,
  cashierTimer: 0,
  cashierIdle: 0,
  cookIdle: 0,
  idleNotified: { cashier: false, cook: false },
  spawnTimer: 4,
  settings: { sound: true, notify: false, graphics: 'auto', look: '3d' },
  cosmetics: { ovenSkin: 'skin.classic' },
};

export function newGame(cfg, now = Date.now()) {
  const s = structuredClone(DEFAULT_STATE_PARTIAL);
  s.cash = cfg.economy.startingCash;
  s.dayClock = cfg.economy.time.startDayClock;
  s.rngSeed = (now % 2147483647) | 0 || 1;
  s.createdAt = now;
  s.savedAt = now;
  return s;
}
