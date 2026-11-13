// Timed events: scheduling and modifier combination. Modifiers are data-driven (economy.json).
import { pickWeighted, nextRandom } from '../core/rng.js';

export function startEvent(state, id, cfg) {
  const def = cfg.economy.events[id];
  if (!def) return false;
  state.events.active.push({ id, endsAt: state.gameTime + def.durationSeconds });
  return true;
}

// Returns events that ended or started during this tick (for toasts / visuals).
export function updateEvents(state, dt, cfg, out) {
  const e = cfg.economy.time;
  state.events.active = state.events.active.filter((a) => {
    if (state.gameTime >= a.endsAt) {
      out.push({ type: 'event_end', id: a.id });
      return false;
    }
    return true;
  });
  if (state.events.active.length === 0 && state.gameTime >= state.events.nextAt) {
    const entries = Object.entries(cfg.economy.events).filter(([, d]) => d.weight > 0).map(([key, d]) => ({ key, weight: d.weight }));
    const id = pickWeighted(state, entries);
    startEvent(state, id, cfg);
    out.push({ type: 'event_start', id });
    const gap = e.randomEventMinSeconds + (e.randomEventMaxSeconds - e.randomEventMinSeconds) * nextRandom(state);
    state.events.nextAt = state.gameTime + gap;
  }
}

export function activeModifiers(state, cfg) {
  const mods = { spawnMult: 1, patienceDrainMult: 1, cashMult: 1, styleDemand: {} };
  for (const a of state.events.active) {
    const d = cfg.economy.events[a.id];
    if (!d) continue;
    mods.spawnMult *= d.spawnMult;
    mods.patienceDrainMult *= d.patienceDrainMult;
    mods.cashMult *= d.cashMult;
    for (const [k, v] of Object.entries(d.styleDemand || {})) {
      mods.styleDemand[k] = (mods.styleDemand[k] || 1) * v;
    }
  }
  return mods;
}
