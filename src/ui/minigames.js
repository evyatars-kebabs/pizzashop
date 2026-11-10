// Manual mini-steps. Each one resolves into a raw result the sim turns into quality.
// The mini-game only collects input; quality is decided in src/game/actions.js.
import { t } from '../core/i18n.js';

const $ = (id) => document.getElementById(id);
let current = null;
let hooks = { onOpen: () => {}, onClose: () => {} };
let cfg = null;

export function initMinigames(config, h) {
  cfg = config;
  hooks = h;
  $('miniClose').addEventListener('click', () => closeMini());
}

// Closes the open mini-step without a result (used by Esc).
export function cancelMini() {
  closeMini();
}

export function isMiniOpen() {
  return current !== null;
}

function closeMini() {
  if (!current) return;
  const session = current;
  current = null;
  for (const fn of session.cleanups) fn();
  $('mini').classList.add('hidden');
  $('miniBody').innerHTML = '';
  hooks.onClose();
}

// Opens a mini-step. build(body, api) creates the UI; api.finish(result) resolves it.
function open({ station, title, hint, build, onDone }) {
  if (current) closeMini();
  $('miniTitle').textContent = title;
  $('miniHint').textContent = hint;
  const body = $('miniBody');
  body.innerHTML = '';
  const session = { frames: [], cleanups: [], raf: 0, done: false };
  current = session;
  const finish = (result) => {
    if (session.done) return;
    session.done = true;
    closeMini();
    onDone(result);
  };
  build(body, {
    finish,
    frame: (fn) => session.frames.push(fn),
    cleanup: (fn) => session.cleanups.push(fn),
  });
  $('mini').classList.remove('hidden');
  hooks.onOpen(station);
  let last = performance.now();
  const loop = (now) => {
    if (current !== session) return;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    for (const fn of session.frames) fn(dt);
    if (current === session) session.raf = requestAnimationFrame(loop);
  };
  session.raf = requestAnimationFrame(loop);
  session.cleanups.push(() => cancelAnimationFrame(session.raf));
}

// Keyboard helper: listens on window until the mini-step closes.
function onKey(cleanup, handler) {
  const fn = (e) => handler(e);
  window.addEventListener('keydown', fn);
  cleanup(() => window.removeEventListener('keydown', fn));
}

// 1) Dough: scroll the wheel or tap the arrow keys (touch and mouse drag still work).
// Forgiving: the timer ends it with a lower score.
export function doughStep(onDone) {
  const m = cfg.economy.manual;
  open({
    station: 'dough',
    title: t('mini.dough.title'),
    hint: t('mini.dough.hint'),
    onDone,
    build(body, { finish, frame, cleanup }) {
      const area = el('div', 'dough-area');
      const blob = el('div', 'dough-blob');
      area.appendChild(blob);
      const prog = el('div', 'bar');
      const fill = el('div', 'fill');
      prog.appendChild(fill);
      const time = el('div', 'bar time');
      const tfill = el('div', 'fill');
      time.appendChild(tfill);
      body.append(area, prog, time);

      let progress = 0;
      let timeLeft = m.doughWindowSeconds;
      let lastX = null;
      const add = (px) => { progress = Math.min(1, progress + px / m.doughSwipesNeeded); };

      // Mouse wheel or trackpad: any scroll stretches the dough.
      area.addEventListener('wheel', (e) => {
        e.preventDefault();
        add(Math.abs(e.deltaX) + Math.abs(e.deltaY));
      }, { passive: false });
      // Keyboard: each arrow press (or A / D) stretches a little.
      onKey(cleanup, (e) => {
        if (['ArrowLeft', 'ArrowRight', 'a', 'd', 'A', 'D'].includes(e.key)) {
          e.preventDefault();
          add(m.doughKeyStep);
        }
      });
      // Touch and mouse drag, as before.
      area.addEventListener('pointerdown', (e) => {
        lastX = e.clientX;
        try { area.setPointerCapture(e.pointerId); } catch (err) { /* synthetic pointer: nothing to capture */ }
      });
      area.addEventListener('pointermove', (e) => {
        if (lastX === null) return;
        add(Math.abs(e.clientX - lastX));
        lastX = e.clientX;
      });
      const release = () => { lastX = null; };
      area.addEventListener('pointerup', release);
      area.addEventListener('pointercancel', release);

      frame((dt) => {
        timeLeft -= dt;
        blob.style.transform = `scale(${1 + progress * 0.45}, ${1 - progress * 0.2})`;
        fill.style.width = progress * 100 + '%';
        tfill.style.width = Math.max(0, timeLeft / m.doughWindowSeconds) * 100 + '%';
        if (progress >= 1) finish({ finished: true, timeLeftFrac: Math.max(0, timeLeft) / m.doughWindowSeconds });
        else if (timeLeft <= 0) finish({ finished: false, timeLeftFrac: 0 });
      });
    },
  });
}

// 2) Topping: click a topping to pick it up, then click the pizza. Dragging it on also works.
// Keys 1 to 3 pick a topping, then Space or Enter places it.
export function toppingStep(customer, toppings, onDone) {
  open({
    station: 'dough',
    title: t('mini.top.title'),
    hint: t('mini.top.hint'),
    onDone,
    build(body, { finish, cleanup }) {
      const wants = el('div', 'wants', t('customer.wants', { topping: t('topping.' + customer.topping) }));
      const target = el('div', 'pizza-target');
      const chips = el('div', 'chips');
      const options = shuffle([customer.topping, ...toppings.filter((x) => x !== customer.topping).slice(0, 2)]);
      let selected = null;
      let ghost = null;
      let origin = null;
      let moved = false;

      const select = (name) => {
        selected = name;
        for (const c of chips.children) c.classList.toggle('selected', c.dataset.topping === name);
      };
      const place = () => { if (selected) finish({ topping: selected }); };

      const onMove = (e) => {
        if (!ghost) return;
        if (!moved && Math.hypot(e.clientX - origin.x, e.clientY - origin.y) < 6) return;
        moved = true;
        ghost.style.display = '';
        ghost.style.left = e.clientX - 40 + 'px';
        ghost.style.top = e.clientY - 40 + 'px';
      };
      const onUp = (e) => {
        if (!ghost) return;
        const name = ghost.dataset.topping;
        const wasMoved = moved;
        ghost.remove();
        ghost = null;
        moved = false;
        if (!wasMoved) return select(selected === name ? null : name);
        const r = target.getBoundingClientRect();
        const inside = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) < r.width / 2 + 24;
        if (inside) finish({ topping: name });
      };
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      cleanup(() => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        if (ghost) ghost.remove();
      });

      target.addEventListener('click', place);
      onKey(cleanup, (e) => {
        if (/^[1-3]$/.test(e.key) && options[Number(e.key) - 1]) select(options[Number(e.key) - 1]);
        else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); place(); }
      });

      for (const name of options) {
        const chip = el('div', 'chip-topping ' + name, t('topping.' + name));
        chip.dataset.topping = name;
        chip.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          origin = { x: e.clientX, y: e.clientY };
          moved = false;
          ghost = el('div', 'chip-topping ghost ' + name, t('topping.' + name));
          ghost.dataset.topping = name;
          ghost.style.display = 'none';
          ghost.style.left = e.clientX - 40 + 'px';
          ghost.style.top = e.clientY - 40 + 'px';
          document.body.appendChild(ghost);
        });
        chips.appendChild(chip);
      }
      body.append(wants, target, chips);
    },
  });
}

// 3) Oven: click or press Space while the marker is in the green. A miss still bakes.
export function ovenStep(onDone) {
  const m = cfg.economy.manual;
  open({
    station: 'oven',
    title: t('mini.oven.title'),
    hint: t('mini.oven.hint'),
    onDone,
    build(body, { finish, frame, cleanup }) {
      const track = el('div', 'oven-track');
      const zone = el('div', 'zone');
      zone.style.left = (50 - (m.ovenSweetZone * 100) / 2) + '%';
      zone.style.width = m.ovenSweetZone * 100 + '%';
      const marker = el('div', 'marker');
      track.append(zone, marker);
      const tap = el('button', 'big-tap', t('mini.oven.tap'));
      body.append(track, tap);
      let elapsed = 0;
      let pos = 0;
      frame((dt) => {
        elapsed += dt;
        pos = (1 - Math.cos((2 * Math.PI * elapsed) / m.ovenMarkerPeriodSeconds)) / 2;
        marker.style.left = pos * 100 + '%';
      });
      const hit = () => finish({ markerPos: pos });
      tap.addEventListener('click', hit);
      track.addEventListener('pointerdown', hit);
      onKey(cleanup, (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); hit(); }
      });
    },
  });
}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
