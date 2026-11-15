// Bundle-only: embeds the data files so the built game needs no server and no fetch().
// The development page (dev.html) does not load this file and fetches the JSON instead.
import economy from '../data/economy.json';
import strings from '../data/strings/en.json';
import ids from '../data/locations/index.json';
import cityRiccione from '../data/locations/cityRiccione.json';
import cityRavenna from '../data/locations/cityRavenna.json';
import cityFlorence from '../data/locations/cityFlorence.json';
import cityMilan from '../data/locations/cityMilan.json';
import cityRome from '../data/locations/cityRome.json';
import cityZurich from '../data/locations/cityZurich.json';
import cityMonaco from '../data/locations/cityMonaco.json';
import cityBarcelona from '../data/locations/cityBarcelona.json';
import cityMadrid from '../data/locations/cityMadrid.json';
import cityLisbon from '../data/locations/cityLisbon.json';
import cityParis from '../data/locations/cityParis.json';
import cityBrussels from '../data/locations/cityBrussels.json';
import cityAmsterdam from '../data/locations/cityAmsterdam.json';
import cityLondon from '../data/locations/cityLondon.json';
import cityLiverpool from '../data/locations/cityLiverpool.json';
import cityBerlin from '../data/locations/cityBerlin.json';
import cityWarsaw from '../data/locations/cityWarsaw.json';
import cityMinsk from '../data/locations/cityMinsk.json';
import cityBudapest from '../data/locations/cityBudapest.json';
import cityZagreb from '../data/locations/cityZagreb.json';
import cityBelgrade from '../data/locations/cityBelgrade.json';
import citySofia from '../data/locations/citySofia.json';
import cityBucharest from '../data/locations/cityBucharest.json';
import cityIstanbul from '../data/locations/cityIstanbul.json';
import cityAthens from '../data/locations/cityAthens.json';
import cityTelaviv from '../data/locations/cityTelaviv.json';

const all = { cityRiccione, cityRavenna, cityFlorence, cityMilan, cityRome, cityZurich, cityMonaco, cityBarcelona, cityMadrid, cityLisbon, cityParis, cityBrussels, cityAmsterdam, cityLondon, cityLiverpool, cityBerlin, cityWarsaw, cityMinsk, cityBudapest, cityZagreb, cityBelgrade, citySofia, cityBucharest, cityIstanbul, cityAthens, cityTelaviv };
const locations = {};
for (const id of ids) {
  if (all[id]) locations[all[id].id] = all[id];
  else console.warn('[bundle] location listed in index.json but not bundled:', id);
}
globalThis.__PIZZA_DATA__ = { economy, strings, locations };
