// Single string table access. All player-facing text must go through t().
let table = {};

export function setStrings(obj) {
  table = obj;
}

export function t(key, vars = {}) {
  let s = table[key];
  if (s === undefined) {
    console.warn('[i18n] missing key', key);
    return key;
  }
  for (const k of Object.keys(vars)) {
    s = s.split('{' + k + '}').join(String(vars[k]));
  }
  return s;
}

const fmt = new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 });
const fmtFull = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });

// Big amounts: 1B, 1.25T, 3Qa ... (billions, trillions, quadrillions, and so on).
const BIG = [
  [1e9, 'B'], [1e12, 'T'], [1e15, 'Qa'], [1e18, 'Qi'], [1e21, 'Sx'],
  [1e24, 'Sp'], [1e27, 'Oc'], [1e30, 'No'], [1e33, 'Dc'],
];

// Returns the abbreviated form for amounts of a billion or more, otherwise null.
export function abbrev(n) {
  const a = Math.abs(n);
  let hit = null;
  for (const entry of BIG) if (a >= entry[0]) hit = entry;
  if (!hit) return null;
  const x = parseFloat((n / hit[0]).toFixed(2));
  return x + hit[1];
}

export function money(n) {
  const v = Math.floor(n);
  return abbrev(v) ?? fmt.format(v);
}

export function moneyFull(n) {
  const v = Math.floor(n);
  return abbrev(v) ?? fmtFull.format(v);
}

export function duration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

// Rates are small early on, so show one decimal below 10.
export function rate(n) {
  return n < 10 ? n.toFixed(1) : money(n);
}
