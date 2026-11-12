// Bundle-only: embeds the data files so the built game needs no server and no fetch().
// The development page (dev.html) does not load this file and fetches the JSON instead.
import economy from '../data/economy.json';
import strings from '../data/strings/en.json';
import ids from '../data/locations/index.json';
import corner from '../data/locations/corner.json';
import sideStreet from '../data/locations/sideStreet.json';

const all = { corner, sideStreet };
const locations = {};
for (const id of ids) {
  if (all[id]) locations[all[id].id] = all[id];
  else console.warn('[bundle] location listed in index.json but not bundled:', id);
}
globalThis.__PIZZA_DATA__ = { economy, strings, locations };
