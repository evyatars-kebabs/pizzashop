// Deterministic PRNG (mulberry32). The seed lives in the save so runs are reproducible.
export function nextRandom(state) {
  state.rngSeed = (state.rngSeed + 0x6d2b79f5) | 0;
  let t = state.rngSeed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function pickWeighted(state, entries) {
  // entries: [{ key, weight }]
  const total = entries.reduce((s, e) => s + e.weight, 0);
  let r = nextRandom(state) * total;
  for (const e of entries) {
    r -= e.weight;
    if (r <= 0) return e.key;
  }
  return entries[entries.length - 1].key;
}
