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

export function money(n) {
  return fmt.format(Math.floor(n));
}

export function moneyFull(n) {
  return fmtFull.format(Math.floor(n));
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
