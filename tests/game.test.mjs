import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (p) => JSON.parse(readFileSync(path.join(root, p), 'utf8'));
const cfg = { economy: load('data/economy.json') };

const { newGame } = await import('../src/game/state.js');
const { tick } = await import('../src/game/sim.js');
const { takeOrder, applyManual, buyUpgrade, hireStaff, franchise, canFranchise } = await import('../src/game/actions.js');
const { derive, upgradeCost, franchiseGain, payment } = await import('../src/game/economy.js');
const { offlineReport, applyOffline } = await import('../src/game/offline.js');
const { migrate } = await import('../src/core/save.js');
const { DEFAULT_STATE_PARTIAL } = await import('../src/game/state.js');

const NOW = 1_700_000_000_000;

function runFor(state, seconds, step = 0.25) {
  const events = [];
  for (let t = 0; t < seconds; t += step) tick(state, step, cfg, events);
  return events;
}

test('upgrade cost curve is exponential and matches the formula', () => {
  const oven = cfg.economy.upgrades.oven;
  assert.equal(upgradeCost(oven, 0), 40);
  assert.equal(upgradeCost(oven, 1), Math.ceil(40 * oven.growth));
  assert.ok(upgradeCost(oven, 2) > upgradeCost(oven, 1));
});

test('a new game starts with cash and no staff', () => {
  const s = newGame(cfg, NOW);
  assert.equal(s.cash, cfg.economy.beginner.startingCash);
  assert.equal(s.staff.cashier, 0);
  assert.equal(s.staff.cook, 0);
});

test('customers arrive and the queue respects counter size', () => {
  const s = newGame(cfg, NOW);
  const events = runFor(s, 600);
  assert.ok(events.some((e) => e.type === 'arrived'), 'someone arrived');
  const d = derive(s, cfg);
  assert.ok(s.customers.filter((c) => c.state === 'waiting').length <= d.maxQueue);
});

test('a manual pizza goes dough -> topping -> load -> baking -> ready and sells', () => {
  const s = newGame(cfg, NOW);
  s.customers.push({ id: 900, type: 'hungry', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 90, maxPatience: 90, state: 'waiting' });
  s.nextId = 1000;
  const o = takeOrder(s, 900, cfg);
  assert.ok(o.ok);
  const pid = o.pizzaId;
  assert.ok(applyManual(s, pid, 'stretch', { finished: true, timeLeftFrac: 0.5 }, cfg).ok);
  assert.ok(applyManual(s, pid, 'topping', { topping: 'basil' }, cfg).ok);
  assert.equal(applyManual(s, pid, 'topping', { topping: 'basil' }, cfg).reason, 'wrongStage');
  assert.ok(applyManual(s, pid, 'load', { markerPos: 0.5 }, cfg).ok);
  const p = s.pizzas.find((x) => x.id === pid);
  assert.equal(p.stage, 'baking');
  assert.ok(p.q.bake === 1);
  runFor(s, cfg.economy.styles.margherita.bakeSeconds * 0.9 + 1);
  const ready = s.pizzas.find((x) => x.id === pid);
  assert.equal(ready.stage, 'ready');
  const before = s.cash;
  const r = applyManual(s, pid, 'serve', {}, cfg);
  assert.ok(r.ok);
  assert.ok(r.total > 0);
  assert.ok(s.cash > before);
  assert.equal(s.stats.served, 1);
});

test('wrong topping still sells but earns less than the right one', () => {
  const make = (topping) => {
    const s = newGame(cfg, NOW);
    s.customers.push({ id: 1, type: 'chatty', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 100, maxPatience: 100, state: 'waiting' });
    s.nextId = 10;
    const { pizzaId } = takeOrder(s, 1, cfg);
    applyManual(s, pizzaId, 'stretch', { finished: true, timeLeftFrac: 1 }, cfg);
    applyManual(s, pizzaId, 'topping', { topping }, cfg);
    applyManual(s, pizzaId, 'load', { markerPos: 0.5 }, cfg);
    s.pizzas[0].stage = 'ready';
    return applyManual(s, pizzaId, 'serve', {}, cfg);
  };
  const good = make('basil');
  const bad = make('olive');
  assert.ok(good.total > bad.total);
  assert.equal(bad.wrongTopping, true);
});

test('a cashier and a cook keep the stand running with no input', () => {
  const s = newGame(cfg, NOW);
  s.cash = 100000;
  buyUpgrade(s, 'oven', cfg);
  buyUpgrade(s, 'counter', cfg);
  hireStaff(s, 'cashier', cfg);
  hireStaff(s, 'cook', cfg);
  const before = s.lifetimeCash;
  const events = runFor(s, 900);
  assert.ok(events.some((e) => e.type === 'served' && e.auto), 'auto-served');
  assert.ok(s.lifetimeCash > before + 50, 'earned money automatically');
  assert.ok(events.some((e) => e.type === 'stage' && e.auto), 'cook worked automatically');
});

test('an unattended customer eventually gets angry and the penalty never drops cash below zero', () => {
  const s = newGame(cfg, NOW);
  s.tutorialDone = true;
  s.cash = 1;
  s.customers.push({ id: 5, type: 'grumpy', style: 'margherita', topping: 'basil', nameIdx: 2, patience: 3, maxPatience: 45, state: 'waiting' });
  const events = runFor(s, 10);
  assert.ok(events.some((e) => e.type === 'angry'));
  assert.equal(s.cash, 0);
});

test('offline earnings are capped at 8 hours', () => {
  const s = newGame(cfg, NOW);
  s.staff.cashier = 1;
  s.staff.cook = 1;
  const eightHours = offlineReport({ ...s, savedAt: NOW }, NOW + 8 * 3600_000, cfg);
  const threeDays = offlineReport({ ...s, savedAt: NOW }, NOW + 72 * 3600_000, cfg);
  assert.equal(threeDays.elapsed, cfg.economy.time.offlineCapSeconds);
  assert.equal(threeDays.earned, eightHours.earned);
  assert.ok(threeDays.capped);
  assert.ok(eightHours.earned > 0);
});

test('ad boost doubles offline earnings', () => {
  const s = newGame(cfg, NOW);
  const r = offlineReport(s, NOW + 3600_000, cfg);
  const base = s.cash;
  applyOffline(s, r, cfg, 2);
  assert.equal(s.cash - base, r.earned * 2);
});

test('franchise resets progress but keeps points, recipes and stats', () => {
  const s = newGame(cfg, NOW);
  s.lifetimeCash = 25000;
  s.cash = 500;
  s.upgrades.oven = 3;
  s.staff.cook = 2;
  s.styles.pepperoni = true;
  s.stats.served = 42;
  assert.ok(canFranchise(s, cfg));
  const gain = franchiseGain(s, cfg);
  const { state: f } = franchise(s, cfg, newGame, NOW);
  assert.equal(f.franchise.points, gain);
  assert.equal(f.franchise.count, 1);
  assert.equal(f.cash, cfg.economy.startingCash);
  assert.equal(f.upgrades.oven, 0);
  assert.equal(f.staff.cook, 0);
  assert.equal(f.styles.pepperoni, true);
  assert.equal(f.stats.served, 42);
  assert.equal(f.lifetimeCash, 25000);
  assert.ok(derive(f, cfg).prestigeMult > 1);
});

test('tutorial advances on stats and completes', () => {
  const s = newGame(cfg, NOW);
  s.stats.ordersTaken = 1;
  const ev = runFor(s, 1);
  assert.equal(s.tutorialStep, 1);
  assert.ok(ev.some((e) => e.type === 'tutorial_step'));
  s.stats.manualStretch = s.stats.manualTopping = s.stats.manualLoad = s.stats.served = 1;
  s.stats.upgradesBought = 1;
  s.stats.staffHired = 1;
  runFor(s, 1);
  assert.equal(s.tutorialDone, true);
});

test('save migration fills in missing fields from the template', () => {
  const old = { schemaVersion: 0, cash: 12 };
  const m = migrate(old);
  assert.equal(m.schemaVersion, 3);
  assert.equal(m.cash, 12);
  assert.deepEqual(Object.keys(m.stats).sort(), Object.keys(DEFAULT_STATE_PARTIAL.stats).sort());
});

// ---- Cities ----
const CITY_IDS = ['riccione', 'ravenna', 'florence', 'milan', 'rome'];
const cityCfg = {
  economy: cfg.economy,
  locations: Object.fromEntries(['cityRiccione', 'cityRavenna', 'cityFlorence', 'cityMilan', 'cityRome'].map((id) => [id, load('data/locations/' + id + '.json')])),
};
const { moveCity, redecorate } = await import('../src/game/actions.js');
const { mapUnlocked, cityOf, nextCity, decorStepsFor } = await import('../src/game/economy.js');

// A save that has reached the given cities, with cash to spare.
function inCity(id, reached = [id], franchises = 0) {
  const s = newGame(cityCfg, NOW);
  s.city = id;
  s.location = 'city' + id[0].toUpperCase() + id.slice(1);
  s.cityVisited = reached;
  s.franchise.count = franchises;
  s.cash = 1e80;
  return s;
}

test('each city multiplies income by its multiplier', () => {
  const base = derive(inCity('riccione'), cityCfg).empirePay;
  assert.equal(derive(inCity('ravenna', ['riccione', 'ravenna']), cityCfg).empirePay / base, 1.5);
  assert.equal(derive(inCity('rome', CITY_IDS), cityCfg).empirePay / base, 7);
});

test('the next city costs its relocation fee and needs its franchises; order is enforced', () => {
  const s = inCity('riccione');
  assert.equal(nextCity(s, cityCfg).id, 'ravenna');
  s.cash = 0;
  assert.equal(moveCity(s, cityCfg, 'ravenna').reason, 'needsFranchise');
  s.franchise.count = 1;
  assert.equal(moveCity(s, cityCfg, 'ravenna').reason, 'cash');
  assert.equal(moveCity(s, cityCfg, 'florence').reason, 'order');
  s.cash = 1e47;
  const before = s.cash;
  const r = moveCity(s, cityCfg, 'ravenna');
  assert.equal(r.ok, true);
  assert.equal(r.first, true);
  const fee = cityCfg.economy.cities.list.find((c) => c.id === 'ravenna').relocationCost;
  assert.ok(Math.abs((before - s.cash) / fee - 1) < 1e-9, 'charged the relocation fee');
  assert.equal(s.city, 'ravenna');
  assert.equal(s.location, 'cityRavenna');
  assert.deepEqual(s.cityVisited, ['riccione', 'ravenna']);
});

test('a city cannot be skipped, and reached cities are free to revisit', () => {
  const s = inCity('riccione', ['riccione'], 9);
  assert.equal(moveCity(s, cityCfg, 'florence').reason, 'order');
  moveCity(s, cityCfg, 'ravenna');
  const cash = s.cash;
  assert.equal(moveCity(s, cityCfg, 'riccione').cost, 0);
  assert.equal(s.cash, cash);
  assert.equal(moveCity(s, cityCfg, 'riccione').reason, 'current');
});

test('moving takes the decorations down but keeps the decor level; redecorate puts them back for free', () => {
  const s = inCity('riccione', ['riccione'], 1);
  s.upgrades.decor = 4;
  s.decorShown = 4;
  moveCity(s, cityCfg, 'ravenna');
  assert.equal(s.decorShown, 0);
  assert.equal(s.upgrades.decor, 4);
  const cash = s.cash;
  const r = redecorate(s, cityCfg);
  assert.equal(r.ok, true);
  assert.equal(r.n, 4);
  assert.equal(s.decorShown, 4);
  assert.equal(s.cash, cash);
  assert.equal(redecorate(s, cityCfg).reason, 'none');
});

test('moving keeps the shops, upgrades and staff, and clears the queue', () => {
  const s = inCity('riccione', ['riccione'], 1);
  s.shops = 2;
  s.upgrades.oven = 5;
  s.staff.cashier = 2;
  s.customers.push({ id: 7, type: 'hungry', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 50, maxPatience: 90, state: 'waiting' });
  moveCity(s, cityCfg, 'ravenna');
  assert.equal(s.shops, 2);
  assert.equal(s.upgrades.oven, 5);
  assert.equal(s.staff.cashier, 2);
  assert.equal(s.customers.length, 0);
});

test('a city upgrade needs the city to be reached in this run, then works like the others', () => {
  const s = inCity('riccione', ['riccione'], 1);
  assert.equal(buyUpgrade(s, 'terrace', cityCfg).reason, 'needsCity');
  moveCity(s, cityCfg, 'ravenna');
  assert.equal(buyUpgrade(s, 'terrace', cityCfg).ok, true);
  assert.equal(s.upgrades.terrace, 1);
  assert.ok(derive(s, cityCfg).traffic > derive(inCity('ravenna', ['riccione', 'ravenna'], 1), cityCfg).traffic);
});

test('a franchise sends the stand back to Riccione and starts the map run again', () => {
  const s = inCity('milan', CITY_IDS.slice(0, 4), 4);
  s.lifetimeCash = 1e9;
  const { state: f } = franchise(s, cityCfg, newGame, NOW);
  assert.equal(f.city, 'riccione');
  assert.equal(f.location, 'cityRiccione');
  assert.deepEqual(f.cityVisited, ['riccione']);
  assert.equal(f.decorShown, 0);
});

test('the map opens once lifetime cash reaches the threshold', () => {
  const s = inCity('riccione');
  s.lifetimeCash = cityCfg.economy.cities.mapUnlockLifetime - 1;
  assert.equal(mapUnlocked(s, cityCfg), false);
  s.lifetimeCash = cityCfg.economy.cities.mapUnlockLifetime;
  assert.equal(mapUnlocked(s, cityCfg), true);
});

test('a save from before cities starts in Riccione with its decorations still up', () => {
  const old = { schemaVersion: 2, cash: 5, location: 'sideStreet', upgrades: { decor: 3 }, unlockedLocations: { corner: true } };
  const m = migrate(old);
  assert.equal(m.schemaVersion, 3);
  assert.equal(m.location, 'cityRiccione');
  assert.equal(m.city, 'riccione');
  assert.deepEqual(m.cityVisited, ['riccione']);
  assert.equal(m.decorShown, 3);
  assert.equal(m.unlockedLocations, undefined);
});

test('each city shows its own decorations before the shared ones', () => {
  const s = inCity('florence', CITY_IDS.slice(0, 3));
  assert.deepEqual(decorStepsFor(s, cityCfg).slice(0, 3), ['lilies', 'banners', 'statuette']);
  assert.equal(cityOf(s, cityCfg).id, 'florence');
});

// ---- Franchise tiers ----
const economyMod = await import('../src/game/economy.js');
const { tierOf, franchiseRequirement, runCash } = economyMod;

test('every franchise has to be earned again, and each one needs more', () => {
  const s = newGame(cfg, NOW);
  const need0 = franchiseRequirement(s, cfg);
  // The first franchises are boosted: half the usual amount.
  assert.equal(need0, cfg.economy.prestige.milestoneLifetimeCash * cfg.economy.earlyFranchises.requirementMult);
  assert.equal(canFranchise(s, cfg), false);
  s.lifetimeCash = need0;
  const ev = runFor(s, 1);
  assert.ok(ev.some((e) => e.type === 'franchise_ready'));
  assert.ok(canFranchise(s, cfg));

  // Right after franchising it is NOT available again: nothing has been earned at the new stand.
  const f1 = franchise(s, cfg, newGame, NOW).state;
  assert.equal(f1.franchise.count, 1);
  assert.equal(runCash(f1), 0);
  assert.equal(canFranchise(f1, cfg), false, 'no free repeat');

  // The second one needs more than the first, earned at this stand.
  const need1 = franchiseRequirement(f1, cfg);
  assert.ok(need1 > need0);
  f1.lifetimeCash += need0;
  assert.equal(canFranchise(f1, cfg), false, 'old amount is no longer enough');
  f1.lifetimeCash += need1 - need0;
  assert.ok(canFranchise(f1, cfg));
  // The gain counts only what this stand earned, not the lifetime total.
  assert.equal(franchiseGain(f1, cfg), Math.floor(need1 / cfg.economy.prestige.pointsDivisor));
});

test('an old save that already franchised does not get a free franchise', () => {
  const old = { schemaVersion: 1, lifetimeCash: 90000, cash: 10, franchise: { points: 3, count: 2, unlocked: true } };
  const m = migrate(old);
  assert.equal(m.schemaVersion, 3);
  assert.equal(m.franchise.lifetimeAtLast, 90000);
  assert.equal(canFranchise(m, cfg), false);
  assert.equal(m.franchise.unlocked, undefined);
});

test('the place grows with franchises: cart, stand, shop, with more capacity', () => {
  const s = newGame(cfg, NOW);
  assert.equal(tierOf(s, cfg).id, 'cart');
  const base = derive(s, cfg);
  s.franchise.count = 1;
  assert.equal(tierOf(s, cfg).id, 'stand');
  s.franchise.count = 2;
  const shop = derive(s, cfg);
  assert.equal(tierOf(s, cfg).id, 'shop');
  assert.ok(shop.ovenSlots > base.ovenSlots);
  assert.ok(shop.maxQueue > base.maxQueue);
  assert.ok(tierOf(s, cfg).staffVisible > 1);
  s.franchise.count = 9;
  assert.equal(tierOf(s, cfg).id, 'shop');
});

test('each franchise brings more customers, with no upper limit', () => {
  const { franchiseTraffic } = economyMod;
  const s = newGame(cfg, NOW);
  s.tutorialDone = true;
  // The early boost ends at the third franchise, so compare from there on.
  s.franchise.count = 3;
  const base = derive(s, cfg).spawnBase;
  let last = base;
  for (let n = 4; n <= 7; n++) {
    s.franchise.count = n;
    const now = derive(s, cfg).spawnBase;
    assert.ok(now < last, 'customers arrive more often after franchise ' + n);
    last = now;
  }
  assert.ok(Math.abs(base / last - (1 + cfg.economy.prestige.trafficPerFranchise * 7) / (1 + cfg.economy.prestige.trafficPerFranchise * 3)) < 1e-9);
  s.franchise.count = 999;
  assert.equal(franchiseTraffic(s, cfg), 1 + cfg.economy.prestige.trafficPerFranchise * 999);
  s.franchise.count = 1000;
  assert.ok(franchiseTraffic(s, cfg) > 1 + cfg.economy.prestige.trafficPerFranchise * 999, 'still growing');
  // The sim stays stable at an extreme rate: the queue fills and the rest are turned away.
  const busy = newGame(cfg, NOW);
  busy.tutorialDone = true;
  busy.franchise.count = 1000;
  const evs = runFor(busy, 30);
  assert.ok(busy.customers.filter((c) => c.state === 'waiting').length <= derive(busy, cfg).maxQueue);
  assert.ok(evs.some((e) => e.type === 'turned_away'));
  // More customers actually show up in play, not just on paper.
  const count = (franchises) => {
    const g = newGame(cfg, NOW);
    g.tutorialDone = true;
    g.rngSeed = 42;
    g.franchise.count = franchises;
    g.upgrades.counter = 5;
    return runFor(g, 600).filter((e) => e.type === 'arrived' || e.type === 'turned_away').length;
  };
  // Compared from the third franchise, once the early boost has ended.
  assert.ok(count(7) > count(3) * 1.3);
});

// ---- Empire upgrades ----
test('Empire upgrades cannot be bought before the required franchises', () => {
  const s = newGame(cfg, NOW);
  s.cash = 1e80;
  assert.equal(buyUpgrade(s, 'marketing', cfg).reason, 'needsFranchise');
  assert.equal(buyUpgrade(s, 'pizzaSchool', cfg).reason, 'needsFranchise');
  assert.equal(buyUpgrade(s, 'megaOven', cfg).reason, 'needsFranchise');
  assert.equal(s.upgrades.marketing, 0);
  s.franchise.count = 1;
  assert.equal(buyUpgrade(s, 'marketing', cfg).ok, true);
  assert.equal(buyUpgrade(s, 'pizzaSchool', cfg).reason, 'needsFranchise', 'pizza school needs 2');
  s.franchise.count = 2;
  assert.equal(buyUpgrade(s, 'pizzaSchool', cfg).ok, true);
  assert.equal(buyUpgrade(s, 'megaOven', cfg).reason, 'needsFranchise', 'industrial ovens need 3');
});

test('Empire upgrades give large boosts to customers, pay and oven capacity', () => {
  const s = newGame(cfg, NOW);
  s.franchise.count = 3;
  s.cash = 1e80;
  const base = derive(s, cfg);
  const basePay = payment('margherita', 1, base, { cashMult: 1 }, false, cfg);
  for (let i = 0; i < 5; i++) buyUpgrade(s, 'marketing', cfg);
  for (let i = 0; i < 5; i++) buyUpgrade(s, 'pizzaSchool', cfg);
  for (let i = 0; i < 4; i++) buyUpgrade(s, 'megaOven', cfg);
  assert.equal(s.upgrades.marketing, 5);
  const boosted = derive(s, cfg);
  assert.ok(Math.abs(boosted.empireTraffic - 3.5) < 1e-9, 'marketing at level 5 is x3.5 customers');
  assert.ok(boosted.spawnBase < base.spawnBase / 3.4, 'customers arrive about 3.5 times as often');
  assert.ok(Math.abs(boosted.empirePay - 3) < 1e-9, 'pizza school at level 5 is x3 pay');
  const boostedPay = payment('margherita', 1, boosted, { cashMult: 1 }, false, cfg);
  assert.ok(Math.abs(boostedPay / basePay - 3) < 1e-9);
  assert.equal(boosted.ovenSlots, base.ovenSlots + 8, 'industrial ovens add 2 slots per level, 4 levels');
});

test('Empire upgrades reset with a franchise, and the gate applies again afterwards', () => {
  const s = newGame(cfg, NOW);
  s.franchise.count = 1;
  s.lifetimeCash = 25000;
  s.cash = 1e80;
  buyUpgrade(s, 'marketing', cfg);
  const after = franchise(s, cfg, newGame, NOW).state;
  assert.equal(after.upgrades.marketing, 0);
  assert.equal(after.franchise.count, 2);
  assert.equal(buyUpgrade(after, 'pizzaSchool', cfg).ok, false, 'two franchises are now done, but nothing yet bought');
});

// ---- Oven speed ----
test('ovens bake faster with each franchise, but never below the minimum', () => {
  const { ovenSpeed } = economyMod;
  const style = cfg.economy.styles.margherita;
  const bakeSecondsAt = (franchises) => {
    const s = newGame(cfg, NOW);
    s.franchise.count = franchises;
    s.cash = 1e9;
    s.stats.manualLoad = 0;
    s.nextId = 1;
    s.customers.push({ id: 1, type: 'hungry', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 90, maxPatience: 90, state: 'ordered' });
    s.pizzas.push({ id: 2, customerId: 1, style: 'margherita', stage: 'load', work: 0, q: { dough: 1, top: 1, bake: 0 }, topping: 'basil', bakeLeft: 0, readyTimer: 0 });
    applyManual(s, 2, 'load', { markerPos: 0.5 }, cfg);
    return s.pizzas[0].bakeTotal;
  };
  const t0 = bakeSecondsAt(0);
  // A centred tap is a perfect bake (x0.85), and franchises are zero, so this is the starting time.
  assert.ok(Math.abs(t0 - style.bakeSeconds * cfg.economy.stages.perfectBakeSpeedMult) < 1e-9, 'starting bake time is unchanged');
  const t2 = bakeSecondsAt(2);
  assert.ok(t2 < t0 / 2, 'two franchises more than halve the bake time');
  const t20 = bakeSecondsAt(20);
  // The floor applies before the perfect-bake bonus, so a perfect bake at the floor is floor x0.85.
  assert.ok(Math.abs(t20 - cfg.economy.prestige.minBakeSeconds * cfg.economy.stages.perfectBakeSpeedMult) < 1e-9, 'a very fast oven stops at the minimum');
  assert.ok(ovenSpeed({ franchise: { count: 3 } }, cfg) > ovenSpeed({ franchise: { count: 2 } }, cfg));
});
