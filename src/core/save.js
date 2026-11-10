// Versioned local save. Bump SAVE_VERSION and append a migration when the shape changes.
// Migrations run in order: MIGRATIONS[v] upgrades a save from version v to v+1.
import { DEFAULT_STATE_PARTIAL } from '../game/state.js';

export const SAVE_VERSION = 1;
const KEY = 'pizzastand.save';

const MIGRATIONS = {
  // 0: (save) => { ...; return save; }  // example for a future v1 -> v2 change
};

function deepDefaults(target, defaults) {
  for (const k of Object.keys(defaults)) {
    const d = defaults[k];
    if (target[k] === undefined) target[k] = structuredClone(d);
    else if (d && typeof d === 'object' && !Array.isArray(d) && typeof target[k] === 'object') {
      deepDefaults(target[k], d);
    }
  }
  return target;
}

export function migrate(save) {
  let v = save.schemaVersion ?? 0;
  while (v < SAVE_VERSION) {
    const fn = MIGRATIONS[v];
    if (fn) save = fn(save);
    v++;
  }
  save.schemaVersion = SAVE_VERSION;
  return deepDefaults(save, DEFAULT_STATE_PARTIAL);
}

export function readSave() {
  try {
    const raw = globalThis.localStorage?.getItem(KEY);
    if (!raw) return null;
    const save = JSON.parse(raw);
    if (typeof save.schemaVersion === 'number' && save.schemaVersion > SAVE_VERSION) {
      console.warn('[save] save is from a newer version; ignoring');
      return null;
    }
    return migrate(save);
  } catch (e) {
    console.warn('[save] could not read save', e);
    return null;
  }
}

export function writeSave(state) {
  try {
    globalThis.localStorage?.setItem(KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.warn('[save] could not write save', e);
    return false;
  }
}

export function clearSave() {
  try {
    globalThis.localStorage?.removeItem(KEY);
  } catch (e) { /* storage blocked: nothing to clear */ }
}
