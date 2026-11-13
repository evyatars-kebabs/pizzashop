import { test } from 'node:test';
import assert from 'node:assert/strict';
import { abbrev, moneyFull, money } from '../src/core/i18n.js';

test('amounts below a billion keep their full digits', () => {
  assert.equal(moneyFull(999_999_999), '999,999,999');
  assert.equal(abbrev(999_999_999), null);
});

test('amounts from a billion up use B, T, Qa and so on', () => {
  assert.equal(moneyFull(1_000_000_000), '1B');
  assert.equal(moneyFull(1_250_000_000), '1.25B');
  assert.equal(moneyFull(1_000_000_000_000), '1T');
  assert.equal(moneyFull(2_500_000_000_000), '2.5T');
  assert.equal(moneyFull(3e15), '3Qa');
  assert.equal(moneyFull(4e18), '4Qi');
});

test('the rate display uses the same big-number format', () => {
  assert.equal(money(7_400_000_000_000), '7.4T');
});
