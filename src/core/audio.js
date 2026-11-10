// Tiny synthesized sound effects (no audio files, no licensed music).
let ctx = null;
let enabled = true;

export function setSoundEnabled(on) {
  enabled = on;
}

function ensure() {
  if (!enabled) return null;
  if (!ctx) {
    const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq, start, dur, type = 'sine', vol = 0.2, endFreq = null) {
  const c = ensure();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, c.currentTime + start);
  if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, c.currentTime + start + dur);
  g.gain.setValueAtTime(vol, c.currentTime + start);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
  o.connect(g).connect(c.destination);
  o.start(c.currentTime + start);
  o.stop(c.currentTime + start + dur + 0.02);
}

export const sfx = {
  // "Ka-ching": two quick high blips, the second higher.
  cash() { tone(1318, 0, 0.12, 'triangle', 0.25); tone(1760, 0.07, 0.25, 'triangle', 0.22); },
  click() { tone(520, 0, 0.05, 'square', 0.08, 380); },
  bell() { tone(880, 0, 0.5, 'sine', 0.18); tone(1320, 0.02, 0.4, 'sine', 0.08); },
  pop() { tone(300, 0, 0.12, 'sine', 0.15, 600); },
  angry() { tone(220, 0, 0.3, 'sawtooth', 0.1, 140); },
  whoosh() { tone(180, 0, 0.25, 'sine', 0.08, 420); },
};
