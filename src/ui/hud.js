// HUD: top bar, action bar, event chips, hint banner, toasts and floating numbers.
import { t, rate as fmtRate, moneyFull } from '../core/i18n.js';

const $ = (id) => document.getElementById(id);
const ACTIONS = ['customers', 'stretch', 'top', 'oven', 'serve', 'shop'];

export function createHUD(onAction) {
  const actionBtns = {};
  for (const a of ACTIONS) {
    const b = document.querySelector(`#actions [data-action="${a}"]`);
    actionBtns[a] = b;
    b.addEventListener('click', () => onAction(a));
  }
  let shownCash = null;
  let toastCount = 0;

  // Count-up animation for the cash total. The first value is shown immediately.
  function tickCash(value) {
    if (shownCash === null) shownCash = value;
    shownCash += (value - shownCash) * 0.25;
    if (Math.abs(value - shownCash) < 0.5) shownCash = value;
    $('cash').textContent = moneyFull(shownCash);
  }

  return {
    tickCash,
    setRate(rate) {
      $('rate').textContent = t('hud.rate', { rate: fmtRate(rate) });
    },
    setGoal(goal, state) {
      $('goal').textContent = goal ? t('hud.goal', { goal: t(goal.id) }) : t('hud.goalDone');
    },
    setBadges(counts) {
      for (const [key, n] of Object.entries(counts)) {
        const btn = actionBtns[key];
        if (!btn) continue;
        const badge = btn.querySelector('.badge');
        badge.textContent = n;
        badge.hidden = n === 0;
      }
    },
    setHighlight(key) {
      for (const [k, btn] of Object.entries(actionBtns)) btn.classList.toggle('pulse', k === key);
    },
    setHint(text) {
      const el = $('hint');
      if (text) {
        el.textContent = text;
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    },
    setEvents(list) {
      const el = $('events');
      el.innerHTML = '';
      for (const a of list) {
        const chip = document.createElement('div');
        chip.className = 'chip-event';
        chip.textContent = `${t('event.' + a.id + '.name')} · ${Math.max(0, Math.ceil(a.left))}s`;
        el.appendChild(chip);
      }
    },
    toast(text, kind = '') {
      if (toastCount >= 3) return;
      toastCount++;
      const el = document.createElement('div');
      el.className = 'toast ' + kind;
      el.textContent = text;
      $('toasts').appendChild(el);
      setTimeout(() => {
        el.classList.add('out');
        setTimeout(() => { el.remove(); toastCount--; }, 300);
      }, 2200);
    },
    float(pos, text, kind = 'gold') {
      const el = document.createElement('div');
      el.className = 'float ' + kind;
      el.textContent = text;
      el.style.left = pos.x + 'px';
      el.style.top = pos.y + 'px';
      $('floats').appendChild(el);
      setTimeout(() => el.remove(), 1100);
    },
    setPaused(paused) {
      document.body.classList.toggle('paused', paused);
    },
  };
}

export function staticStrings() {
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.title = t('app.title');
}
