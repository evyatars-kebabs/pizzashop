// Offline earnings. Estimated from the idle rate, capped, and never simulated tick-by-tick.
import { derive } from './economy.js';

export function offlineReport(state, nowMs, cfg) {
  const t = cfg.economy.time;
  const rawSeconds = Math.max(0, (nowMs - state.savedAt) / 1000);
  const elapsed = Math.min(rawSeconds, t.offlineCapSeconds);
  const d = derive(state, cfg);
  const earned = Math.floor(elapsed * d.idleRate * d.offlineEfficiency);
  return {
    rawSeconds,
    elapsed,
    capped: rawSeconds > t.offlineCapSeconds,
    earned,
    rate: d.idleRate * d.offlineEfficiency,
  };
}

// Applies a report to the state. `multiplier` is 1 normally, 2 after the optional ad.
export function applyOffline(state, report, cfg, multiplier = 1) {
  const amount = Math.floor(report.earned * multiplier);
  state.cash += amount;
  state.lifetimeCash += amount;
  // The stand "closed" while you were away: the queue went home, the oven cooled.
  state.customers = [];
  state.pizzas = [];
  state.cashierTimer = 0;
  state.spawnTimer = cfg.economy.customers.spawnBaseSeconds;
  state.gameTime += report.elapsed;
  state.dayClock = (state.dayClock + report.elapsed / cfg.economy.time.dayLengthSeconds) % 1;
  state.events.active = [];
  state.events.nextAt = state.gameTime + 240;
  return amount;
}
