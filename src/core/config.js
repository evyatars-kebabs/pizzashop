// Loads tunable data and strings. Runs on any static server (fetch needs http, not file://).
export async function loadJSON(path) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

// Every location listed in data/locations/index.json is loaded. Adding a street means adding its file and an index entry.
export async function loadAllData() {
  // The single-file build embeds the data (see src/bundle-data.js).
  if (globalThis.__PIZZA_DATA__) return globalThis.__PIZZA_DATA__;
  const [economy, strings, ids] = await Promise.all([
    loadJSON('data/economy.json'),
    loadJSON('data/strings/en.json'),
    loadJSON('data/locations/index.json'),
  ]);
  const locs = await Promise.all(ids.map((id) => loadJSON(`data/locations/${id}.json`)));
  const locations = Object.fromEntries(locs.map((l) => [l.id, l]));
  return { economy, strings, locations };
}
