// City data checks: every city has a background street, strings, and a place on the map,
// and the travel order is unambiguous.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (p) => JSON.parse(readFileSync(path.join(root, p), 'utf8'));
const economy = load('data/economy.json');
const strings = load('data/strings/en.json');
const list = economy.cities.list;
const index = load('data/locations/index.json');

test('cities have unique ids and orders, starting at Riccione with no fee', () => {
  const ids = new Set(list.map((c) => c.id));
  const orders = new Set(list.map((c) => c.order));
  assert.equal(ids.size, list.length);
  assert.equal(orders.size, list.length);
  const sorted = [...list].sort((a, b) => a.order - b.order);
  assert.equal(sorted[0].id, 'riccione');
  assert.equal(sorted[0].relocationCost, 0);
  assert.equal(sorted[0].multiplier, 1);
});

test('costs and multipliers rise along the travel order', () => {
  const sorted = [...list].sort((a, b) => a.order - b.order);
  for (let i = 1; i < sorted.length; i++) {
    assert.ok(sorted[i].multiplier > sorted[i - 1].multiplier, sorted[i].id + ' multiplier');
    assert.ok(sorted[i].relocationCost > sorted[i - 1].relocationCost, sorted[i].id + ' cost');
  }
});

test('every city has a background street that is listed and loads', () => {
  for (const c of list) {
    assert.ok(index.includes(c.background), c.background + ' is listed in index.json');
    const file = path.join(root, 'data/locations', c.background + '.json');
    assert.ok(existsSync(file), c.background + ' file exists');
    const loc = load('data/locations/' + c.background + '.json');
    assert.equal(loc.id, c.background);
    assert.ok(loc.props.some((p) => p.type === 'building'), c.background + ' has buildings');
  }
});

test('bigger cities have taller skylines than the first town', () => {
  const tallest = (id) => Math.max(...load('data/locations/' + id + '.json').props.filter((p) => p.type === 'building').map((p) => p.size[1]));
  assert.ok(tallest('cityMilan') > tallest('cityRiccione') * 1.5);
  assert.ok(tallest('cityRome') > tallest('cityRiccione'));
});

test('every city has its name, description and decorations in the strings table', () => {
  for (const c of list) {
    assert.ok(strings['city.' + c.id + '.name'], c.id + ' name');
    assert.ok(strings['city.' + c.id + '.desc'], c.id + ' description');
    for (const step of c.decorSteps || []) assert.ok(strings['decor.step.' + step], step + ' decoration string');
  }
});

test('every city upgrade is tied to a city and has its strings', () => {
  const cityUps = Object.entries(economy.upgrades).filter(([, u]) => u.group === 'city');
  assert.equal(cityUps.length, list.filter((c) => c.upgrade).length);
  for (const [key, u] of cityUps) {
    assert.ok(list.some((c) => c.id === u.requires.city), key + ' has a city');
    assert.ok(strings['upgrade.' + key + '.name'], key + ' name');
    assert.ok(strings['upgrade.' + key + '.desc'], key + ' description');
  }
});

test('the first paid city costs a trillion, and each city after costs 10,000 times the last', () => {
  const sorted = [...list].sort((a, b) => a.order - b.order);
  assert.equal(sorted[1].relocationCost, 1e12);
  for (let i = 2; i < sorted.length; i++) {
    assert.ok(Math.abs(Math.log10(sorted[i].relocationCost / sorted[i - 1].relocationCost) - 4) < 1e-9, sorted[i].id);
  }
});

test('the map covers the 26 cities in travel order, each with a place on the map', () => {
  assert.equal(list.length, 26);
  for (const c of list) {
    assert.ok(c.map.lat >= 30 && c.map.lat <= 57, c.id + ' latitude on the map');
    assert.ok(c.map.lon >= -10 && c.map.lon <= 36, c.id + ' longitude on the map');
  }
});
