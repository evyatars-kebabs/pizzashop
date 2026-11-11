// Sign text as HTML labels placed over the 3D signs. Wording comes from the strings table,
// so no text is baked into any image.
import { t, moneyFull } from '../core/i18n.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function createSigns() {
  const layer = document.getElementById('signs');
  let items = [];

  // Rebuilt whenever the location changes. specs come from env.signs.
  function setSpecs(specs) {
    layer.innerHTML = '';
    items = specs.map((spec) => {
      const el = document.createElement('div');
      el.className = 'sign-label ' + spec.kind;
      layer.appendChild(el);
      return { spec, el, html: '' };
    });
  }

  // The text for each sign, which depends on game state.
  function textFor(spec, state, cfg) {
    if (spec.kind === 'menu') {
      const lines = Object.entries(cfg.economy.styles)
        .filter(([k, def]) => def.enabled && state.styles[k])
        .slice(0, 3)
        .map(([k, def]) => `<div class="line"><span>${esc(t('style.' + k))}</span><b>${moneyFull(def.basePrice)}</b></div>`);
      return `<div class="title">${esc(t('sign.menu.title'))}</div>${lines.join('')}`;
    }
    if (spec.kind === 'neon') return esc(t('sign.neon'));
    if (spec.kind === 'shopname') return esc(t('app.title'));
    if (spec.kind === 'franchise') return esc(t('sign.franchise', { count: state.franchise.count }));
    return esc(t('sign.sandwich'));
  }

  function update(env, state, cfg) {
    const hasNeon = state.upgrades.neon >= 1;
    for (const it of items) {
      const visible = it.spec.kind !== 'neon' || hasNeon;
      if (!visible) {
        it.el.style.display = 'none';
        continue;
      }
      const html = textFor(it.spec, state, cfg);
      if (html !== it.html) {
        it.el.innerHTML = html;
        it.html = html;
      }
      const p = env.toScreen(it.spec.pos);
      it.el.style.display = p.front ? '' : 'none';
      // Keep labels on screen: clamp so a sign near the edge is still readable.
      const half = (it.el.offsetWidth || 100) / 2 + 6;
      it.el.style.left = Math.min(p.w - half, Math.max(half, p.x)) + 'px';
      it.el.style.top = p.y + 'px';
    }
  }

  return { setSpecs, update };
}
