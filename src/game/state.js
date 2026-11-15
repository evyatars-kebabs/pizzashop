// Save-state template. Every persisted field lives here; save.js fills in any missing field
// from this template, so adding a field only needs a default here (plus a migration if it
// changes the meaning of existing data).
export const DEFAULT_STATE_PARTIAL = {
  schemaVersion: 3,
  rngSeed: 1234567,
  cash: 0,
  lifetimeCash: 0,
  gameTime: 0,
  dayClock: 0.3,
  savedAt: 0,
  createdAt: 0,
  // The city you are in. Every franchise starts back in the first city.
  city: 'riccione',
  // Cities reached in this franchise run (the map shows these).
  cityVisited: ['riccione'],
  // The street behind the stand (the city's background layout id).
  location: 'cityRiccione',
  // Decorations installed in the current city. Moving to a city removes them; the decor
  // upgrade keeps its level, so they can be put back for free (Map > Decorate again).
  decorShown: 0,
  upgrades: { oven: 0, counter: 0, cheese: 0, decor: 0, neon: 0, scooter: 0, marketing: 0, pizzaSchool: 0, megaOven: 0, terrace: 0, delivery: 0, trattoria: 0, rooftop: 0, zurichUp: 0, monacoUp: 0, barcelonaUp: 0, madridUp: 0, lisbonUp: 0, parisUp: 0, brusselsUp: 0, amsterdamUp: 0, londonUp: 0, liverpoolUp: 0, berlinUp: 0, warsawUp: 0, minskUp: 0, budapestUp: 0, zagrebUp: 0, belgradeUp: 0, sofiaUp: 0, bucharestUp: 0, istanbulUp: 0, athensUp: 0, telavivUp: 0 },
  staff: { cashier: 0, cook: 0 },
  // Extra employees recruited after franchising (on top of the first hire of each role).
  staffing: { cashier: 0, cook: 0 },
  // Shops open (the first is free). Each extra shop doubles customers, staff and income.
  shops: 1,
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
  // The happy-hour mini game: available again once gameTime reaches nextAt.
  bonus: { nextAt: 240, readyNotified: false },
  customers: [],
  pizzas: [],
  nextId: 1,
  cashierTimers: [],
  cashierIdle: 0,
  cookIdle: 0,
  idleNotified: { cashier: false, cook: false },
  spawnTimer: 4,
  tutorialSpawnTimer: 1.5,
  settings: { sound: true, notify: false, graphics: 'auto', look: '3d' },
  cosmetics: { ovenSkin: 'skin.classic' },
};

export function newGame(cfg, now = Date.now()) {
  const s = structuredClone(DEFAULT_STATE_PARTIAL);
  s.cash = cfg.economy.beginner?.startingCash ?? cfg.economy.startingCash;
  s.dayClock = cfg.economy.time.startDayClock;
  s.rngSeed = (now % 2147483647) | 0 || 1;
  s.createdAt = now;
  s.savedAt = now;
  return s;
}
