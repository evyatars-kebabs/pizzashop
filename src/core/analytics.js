// Analytics stub. Events are buffered locally and forwarded to a sink when one is set.
// Required events: session_start, session_end (duration), first_purchase, prestige,
// churn_point (where a session was abandoned), customer_turned_away, customer_angry.
const BUFFER_KEY = 'pizzastand.analytics';
const MAX_BUFFER = 200;
let sink = null;
let sessionStart = Date.now();

export function setSink(fn) {
  sink = fn;
}

export function track(name, props = {}) {
  const evt = { name, props, t: Date.now() };
  if (import.meta.env?.DEV) console.debug('[analytics]', evt);
  try {
    const buf = JSON.parse(globalThis.localStorage?.getItem(BUFFER_KEY) || '[]');
    buf.push(evt);
    while (buf.length > MAX_BUFFER) buf.shift();
    globalThis.localStorage?.setItem(BUFFER_KEY, JSON.stringify(buf));
  } catch (e) { /* buffer is best effort */ }
  if (sink) {
    try { sink(evt); } catch (e) { /* never let analytics break the game */ }
  }
}

export function startSession() {
  sessionStart = Date.now();
  track('session_start');
}

export function endSession(extra = {}) {
  track('session_end', { durationSeconds: Math.round((Date.now() - sessionStart) / 1000), ...extra });
}
