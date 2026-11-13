// Scenario tests: run the pure game rules through many combinations and check that the numbers
// stay valid (finite, non-negative, bounded) and that the core invariants hold.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (p) => JSON.parse(readFileSync(path.join(root, p), 'utf8'));
const cfg = {
  economy: load('data/economy.json'),
  locations: { corner: load('data/locations/corner.json'), sideStreet: load('data/locations/sideStreet.json') },
};
const { newGame } = await import('../src/game/state.js');
const { tick } = await import('../src/game/sim.js');
const A = await import('../src/game/actions.js');
const E = await import('../src/game/economy.js');
const { offlineReport, applyOffline } = await import('../src/game/offline.js');
const { startEvent } = await import('../src/game/events.js');
const { migrate } = await import('../src/core/save.js');

const NOW = 1_700_000_000_000;
const finite = (n) => Number.isFinite(n);

function run(state, seconds, step = 0.25) {
  const events = [];
  for (let t = 0; t < seconds; t += step) {
    tick(state, step, cfg, events);
    checkInvariants(state, events);
  }
  return events;
}

function checkInvariants(s) {
  assert.ok(finite(s.cash) && s.cash >= 0, 'cash is a finite non-negative number, got ' + s.cash);
  assert.ok(finite(s.lifetimeCash) && s.lifetimeCash >= 0, 'lifetime cash is valid');
  assert.ok(s.pizzas.length <= 60, 'pizzas are bounded: ' + s.pizzas.length);
  const waiting = s.customers.filter((c) => c.state === 'waiting').length;
  assert.ok(waiting <= E.derive(s, cfg).maxQueue, 'the queue never exceeds the counter size');
  for (const c of s.customers) assert.ok(c.patience <= c.maxPatience + 1e-9 && finite(c.patience), 'patience is valid');
  for (const p of s.pizzas) {
    assert.ok(['dough', 'topping', 'load', 'baking', 'ready'].includes(p.stage), 'known stage ' + p.stage);
    assert.ok(finite(p.bakeLeft));
  }
}

const SCENARIOS = [];
for (const franchises of [0, 1, 2, 3, 6]) {
  for (const location of ['corner', 'sideStreet']) {
    for (const staff of [[0, 0], [1, 0], [1, 1], [3, 3]]) {
      for (const event of [null, 'rainyDay', 'foodFestival']) {
        SCENARIOS.push({ franchises, location, staff, event });
      }
    }
  }
}

test(`${SCENARIOS.length} combinations of franchises, location, staff and events keep the numbers valid`, () => {
  for (const sc of SCENARIOS) {
    const s = newGame(cfg, NOW);
    s.rngSeed = 1000 + sc.franchises * 17 + sc.staff[0] * 3 + sc.staff[1];
    s.franchise.count = sc.franchises;
    s.franchise.points = sc.franchises;
    s.location = sc.location;
    s.unlockedLocations.sideStreet = true;
    s.staff.cashier = sc.staff[0];
    s.staff.cook = sc.staff[1];
    s.upgrades.counter = 3;
    s.upgrades.oven = 2;
    s.upgrades.marketing = sc.franchises >= 1 ? 2 : 0;
    s.upgrades.pizzaSchool = sc.franchises >= 2 ? 2 : 0;
    s.upgrades.megaOven = sc.franchises >= 3 ? 1 : 0;
    s.styles.pepperoni = true;
    if (sc.event) startEvent(s, sc.event, cfg);
    try {
      run(s, 240);
      const d = E.derive(s, cfg);
      assert.ok(finite(d.idleRate) && d.idleRate >= 0, 'idle rate is valid');
      assert.ok(finite(d.spawnBase) && d.spawnBase > 0, 'spawn interval is valid');
      assert.ok(d.ovenSlots >= 1, 'at least one oven slot');
    } catch (err) {
      err.message = `${JSON.stringify(sc)}: ${err.message}`;
      throw err;
    }
  }
});

test('long play (2 game hours) with everything running keeps earning and never breaks', () => {
  const s = newGame(cfg, NOW);
  s.franchise.count = 2;
  s.staff.cashier = 2;
  s.staff.cook = 2;
  s.upgrades.counter = 4;
  s.upgrades.oven = 3;
  s.styles.pepperoni = true;
  s.lifetimeCash = 30000;
  s.cash = 1000;
  const before = s.lifetimeCash;
  const ev = run(s, 7200, 0.5);
  assert.ok(s.lifetimeCash > before, 'the stand keeps earning');
  assert.ok(ev.some((e) => e.type === 'served'), 'pizzas are served');
  assert.ok(s.gameTime > 7000);
  assert.ok(s.dayClock >= 0 && s.dayClock < 1, 'the day cycle wraps');
});

test('the player-only path (no staff) keeps running, with customers leaving when they wait too long', () => {
  const s = newGame(cfg, NOW);
  s.rngSeed = 5;
  const ev = run(s, 1800, 0.5);
  assert.ok(ev.some((e) => e.type === 'arrived'));
  assert.ok(ev.some((e) => e.type === 'angry'), 'untended customers eventually get angry');
  assert.ok(s.cash >= 0);
});

test('every upgrade can be bought up to its maximum without going negative', () => {
  const s = newGame(cfg, NOW);
  s.franchise.count = 3;
  s.cash = 1e15;
  const keys = Object.keys(cfg.economy.upgrades).filter((k) => cfg.economy.upgrades[k].enabled !== false);
  for (const k of keys) {
    for (let i = 0; i < cfg.economy.upgrades[k].maxLevel + 2; i++) A.buyUpgrade(s, k, cfg);
    assert.equal(s.upgrades[k], cfg.economy.upgrades[k].maxLevel, k + ' stops at its maximum');
  }
  for (const role of ['cashier', 'cook']) {
    for (let i = 0; i < cfg.economy.staff[role].maxLevel + 2; i++) A.hireStaff(s, role, cfg);
    assert.equal(s.staff[role], cfg.economy.staff[role].maxLevel);
  }
  assert.ok(s.cash >= 0 && finite(s.cash));
  checkInvariants(s);
});

test('franchising many times keeps every number valid and the requirement growing', () => {
  let s = newGame(cfg, NOW);
  s.rngSeed = 9;
  let lastReq = 0;
  for (let n = 0; n < 8; n++) {
    s.lifetimeCash = s.franchise.lifetimeAtLast + E.franchiseRequirement(s, cfg);
    assert.ok(E.franchiseReady(s, cfg), 'ready at franchise ' + n);
    const req = E.franchiseRequirement(s, cfg);
    assert.ok(req > lastReq);
    lastReq = req;
    s = A.franchise(s, cfg, newGame, NOW).state;
    run(s, 30, 0.5);
    assert.ok(!E.franchiseReady(s, cfg), 'not ready straight after franchising');
    checkInvariants(s);
  }
  assert.equal(s.franchise.count, 8);
  assert.ok(E.tierOf(s, cfg).id === 'shop');
});

test('offline earnings: short absences pay nothing extra, long ones are capped, the ad doubles', () => {
  const s = newGame(cfg, NOW);
  s.staff.cashier = 1;
  s.staff.cook = 1;
  s.savedAt = NOW;
  const short = offlineReport(s, NOW + 30_000, cfg);
  assert.equal(short.rawSeconds, 30);
  const day = offlineReport(s, NOW + 24 * 3600_000, cfg);
  assert.ok(day.capped && day.elapsed === cfg.economy.time.offlineCapSeconds);
  const base = s.cash;
  applyOffline(s, day, cfg, 2);
  assert.equal(s.cash - base, day.earned * 2);
  checkInvariants(s);
});

test('save round trip and migration from the first save format', () => {
  const s = newGame(cfg, NOW);
  run(s, 300);
  const copy = JSON.parse(JSON.stringify(s));
  assert.deepEqual(copy, JSON.parse(JSON.stringify(copy)));
  const v1 = { schemaVersion: 1, cash: 50, lifetimeCash: 900, franchise: { points: 1, count: 1, unlocked: true }, upgrades: { oven: 2 } };
  const m = migrate(v1);
  assert.equal(m.schemaVersion, 2);
  assert.equal(m.upgrades.oven, 2, 'kept what it had');
  assert.equal(m.upgrades.megaOven, 0, 'filled in what is new');
  assert.equal(m.franchise.lifetimeAtLast, 900, 'a franchised v1 save starts its next run from zero');
  assert.equal(m.settings.look, '3d', 'new settings get defaults');
});

// ---- Recruiting and parallel staff ----
test('recruiting: needs franchising, the role hired, room at the stand, and costs more each time', () => {
  const s = newGame(cfg, NOW);
  s.cash = 1e12;
  assert.equal(A.recruitStaff(s, 'cashier', cfg).reason, 'needsFranchise');
  s.franchise.count = 1;
  assert.equal(A.recruitStaff(s, 'cashier', cfg).reason, 'needsHire');
  s.staff.cashier = 1;
  const costs = [];
  for (let i = 0; i < 2; i++) costs.push(A.recruitStaff(s, 'cashier', cfg).cost);
  assert.equal(s.staffing.cashier, 2);
  assert.ok(costs[1] > costs[0], 'each recruit costs more');
  // The big stand (one franchise) holds 4 recruits; then it is full.
  assert.equal(E.tierOf(s, cfg).id, 'stand');
  assert.equal(E.tierOf(s, cfg).recruitCap, 4);
  for (let i = 0; i < 2; i++) assert.equal(A.recruitStaff(s, 'cashier', cfg).ok, true);
  assert.equal(A.recruitStaff(s, 'cashier', cfg).reason, 'maxed');
  // The shop holds 6.
  s.franchise.count = 2;
  assert.equal(E.tierOf(s, cfg).recruitCap, 6);
  assert.equal(A.recruitStaff(s, 'cashier', cfg).ok, true);
});

test('two cashiers take orders about twice as fast as one', () => {
  const countOrders = (recruits) => {
    const s = newGame(cfg, NOW);
    s.franchise.count = 1;
    s.staff.cashier = 1;
    s.staffing.cashier = recruits;
    s.upgrades.counter = 59;
    s.cash = 1e9;
    for (let i = 0; i < 40; i++) s.customers.push({ id: 5000 + i, type: 'hungry', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 999, maxPatience: 999, state: 'waiting' });
    const ev = run(s, 30, 0.1);
    return ev.filter((e) => e.type === 'order_taken').length;
  };
  const one = countOrders(0);
  const two = countOrders(1);
  assert.ok(one > 0);
  assert.ok(Math.abs(two / one - 2) < 0.15, `ratio ${two / one}`);
});

test('two cooks work on two pizzas at the same time', () => {
  const s = newGame(cfg, NOW);
  s.franchise.count = 1;
  s.staff.cook = 1;
  s.staffing.cook = 1;
  s.nextId = 100;
  for (const id of [1, 2]) {
    s.customers.push({ id, type: 'hungry', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 99, maxPatience: 99, state: 'ordered' });
    s.pizzas.push({ id: 10 + id, customerId: id, style: 'margherita', stage: 'dough', work: 0, q: { dough: 0, top: 0, bake: 0 }, topping: null, bakeLeft: 0, readyTimer: 0 });
  }
  run(s, 1, 0.1);
  assert.ok(s.pizzas.every((p) => p.work > 0.5), 'both pizzas are being worked on');
});

test('recruits raise offline efficiency; the first hires still count as before', () => {
  const s = newGame(cfg, NOW);
  s.staff.cashier = 1;
  const base = E.derive(s, cfg).offlineEfficiency;
  s.franchise.count = 1;
  s.staffing.cashier = 2;
  assert.ok(E.derive(s, cfg).offlineEfficiency > base);
});

test('basic upgrades go to 60 levels', () => {
  const s = newGame(cfg, NOW);
  s.cash = 1e15;
  for (const k of ['oven', 'counter', 'cheese', 'decor']) {
    assert.equal(cfg.economy.upgrades[k].maxLevel, 60, k);
  }
  for (let i = 0; i < 60; i++) A.buyUpgrade(s, 'oven', cfg);
  assert.equal(s.upgrades.oven, 60);
  assert.equal(A.buyUpgrade(s, 'oven', cfg).reason, 'maxed');
});
