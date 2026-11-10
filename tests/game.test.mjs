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
const { derive, upgradeCost, franchiseGain } = await import('../src/game/economy.js');
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
  assert.equal(upgradeCost(oven, 1), 68);
  assert.ok(upgradeCost(oven, 2) > upgradeCost(oven, 1));
});

test('a new game starts with cash and no staff', () => {
  const s = newGame(cfg, NOW);
  assert.equal(s.cash, cfg.economy.startingCash);
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
  assert.equal(m.schemaVersion, 1);
  assert.equal(m.cash, 12);
  assert.deepEqual(Object.keys(m.stats).sort(), Object.keys(DEFAULT_STATE_PARTIAL.stats).sort());
});

// ---- Locations ----
const locCfg = {
  economy: cfg.economy,
  locations: {
    corner: load('data/locations/corner.json'),
    sideStreet: load('data/locations/sideStreet.json'),
  },
};
const { moveLocation } = await import('../src/game/actions.js');

test('the side street has more traffic than the corner', () => {
  const corner = newGame(locCfg, NOW);
  const side = newGame(locCfg, NOW);
  side.location = 'sideStreet';
  const a = derive(corner, locCfg).spawnBase;
  const b = derive(side, locCfg).spawnBase;
  assert.ok(b < a, 'side street spawns more often');
  assert.ok(Math.abs(a / b - 1.35) < 1e-9, 'by the configured trafficMult');
});

test('a location unlocks at its lifetime cash threshold and emits one event', () => {
  const s = newGame(locCfg, NOW);
  s.lifetimeCash = 3000;
  const run = () => { const out = []; tick(s, 0.25, locCfg, out); return out.filter((e) => e.type === 'location_unlocked'); };
  assert.equal(run().length, 1);
  assert.equal(s.unlockedLocations.sideStreet, true);
  assert.equal(run().length, 0);
});

test('moving to a locked location fails; moving to an unlocked one clears the queue', () => {
  const s = newGame(locCfg, NOW);
  s.customers.push({ id: 7, type: 'hungry', style: 'margherita', topping: 'basil', nameIdx: 1, patience: 50, maxPatience: 90, state: 'waiting' });
  assert.equal(moveLocation(s, 'sideStreet', locCfg).reason, 'locked');
  s.unlockedLocations.sideStreet = true;
  assert.equal(moveLocation(s, 'sideStreet', locCfg).ok, true);
  assert.equal(s.location, 'sideStreet');
  assert.equal(s.customers.length, 0);
});

test('franchise keeps unlocked locations but sends the stand back to the corner', () => {
  const s = newGame(locCfg, NOW);
  s.unlockedLocations.sideStreet = true;
  s.location = 'sideStreet';
  s.lifetimeCash = 25000;
  const { state: f } = franchise(s, locCfg, newGame, NOW);
  assert.equal(f.location, 'corner');
  assert.equal(f.unlockedLocations.sideStreet, true);
});
