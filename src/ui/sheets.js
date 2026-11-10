// Modal sheets: shop, collect (offline earnings), franchise, settings, debug.
import { t, money, moneyFull, duration } from '../core/i18n.js';
import { upgradeCost, derive, franchiseGain } from '../game/economy.js';

const $ = (id) => document.getElementById(id);
let refreshFn = null;
let openKind = null;
let lastSig = '';
let onDismiss = null;

export function isModalOpen() {
  return openKind !== null;
}

export function closeModal() {
  const hook = onDismiss;
  onDismiss = null;
  openKind = null;
  refreshFn = null;
  $('modal').classList.add('hidden');
  $('modalBody').innerHTML = '';
  if (hook) hook();
}

function openModal(kind, title, render) {
  openKind = kind;
  $('modalTitle').textContent = title;
  $('modal').classList.remove('hidden');
  const body = $('modalBody');
  body.innerHTML = '';
  lastSig = '';
  refreshFn = () => {
    body.innerHTML = '';
    render(body);
  };
  refreshFn();
}

// Re-renders the open sheet only when something it shows has changed. Rebuilding every frame
// would swallow taps that land between pointerdown and click.
export function refreshModal(sig) {
  if (refreshFn && openKind !== 'collect' && sig !== lastSig) {
    lastSig = sig;
    refreshFn();
  }
}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function button(label, onClick, { disabled = false, primary = false } = {}) {
  const b = el('button', 'btn' + (primary ? ' primary' : ''), label);
  b.disabled = disabled;
  b.addEventListener('click', onClick);
  return b;
}

// Next-level values for upgrade descriptions.
function upgradeVars(key, level, cfg) {
  const u = cfg.economy.upgrades[key];
  const next = level + 1;
  switch (key) {
    case 'oven': return { slots: u.ovenSlotsBase + u.ovenSlotsPerLevel * next };
    case 'counter': return { slots: u.maxQueueBase + u.maxQueuePerLevel * next };
    case 'cheese': return { pct: Math.round(u.cheeseMultPerLevel * next * 100) };
    case 'decor': return { pct: Math.round(u.trafficPerLevel * next * 100) };
    case 'neon': return { pct: Math.round(u.trafficPerLevel * 100) };
    default: return {};
  }
}

export function openShop(state, cfg, actions) {
  openModal('shop', t('shop.title'), (body) => {
    const d = derive(state, cfg);

    body.append(el('h3', '', t('shop.upgrades')));
    for (const key of Object.keys(cfg.economy.upgrades)) {
      const u = cfg.economy.upgrades[key];
      if (u.enabled === false) continue;
      const level = state.upgrades[key];
      const maxed = level >= u.maxLevel;
      const cost = maxed ? 0 : upgradeCost(u, level);
      const row = el('div', 'row');
      const info = el('div', 'info');
      info.append(
        el('b', '', t('upgrade.' + key + '.name')),
        el('small', '', maxed ? t('action.maxed') : t('upgrade.' + key + '.desc', upgradeVars(key, level, cfg))),
        el('small', 'lvl', `${level}/${u.maxLevel}`),
      );
      row.append(info, button(maxed ? t('action.maxed') : t('action.buy', { cost: moneyFull(cost) }), () => actions.buy(key), { disabled: maxed || state.cash < cost }));
      body.append(row);
    }

    body.append(el('h3', '', t('shop.locations')));
    for (const id of Object.keys(cfg.locations)) {
      const loc = cfg.locations[id];
      const unlocked = !!state.unlockedLocations[id];
      const here = state.location === id;
      const row = el('div', 'row');
      const info = el('div', 'info');
      info.append(el('b', '', t(loc.nameKey)), el('small', '', t(loc.descKey)));
      let label = t('action.move');
      let disabled = false;
      if (here) { label = t('location.current'); disabled = true; }
      else if (!unlocked) {
        label = t('action.locked');
        disabled = true;
        info.append(el('small', 'lvl', t('location.locked', { target: moneyFull(loc.unlock?.value ?? 0) })));
      }
      row.append(info, button(label, () => actions.move(id), { disabled, primary: !here && unlocked }));
      body.append(row);
    }

    body.append(el('h3', '', t('shop.staff')));
    for (const role of Object.keys(cfg.economy.staff)) {
      const def = cfg.economy.staff[role];
      const level = state.staff[role];
      const maxed = level >= def.maxLevel;
      const cost = maxed ? 0 : upgradeCost(def, level);
      const desc = role === 'cashier'
        ? t('staff.cashier.desc', { secs: d.cashierOrderSec.toFixed(1) })
        : t('staff.cook.desc', { speed: d.cookSpeed.toFixed(1) });
      const row = el('div', 'row');
      const info = el('div', 'info');
      info.append(
        el('b', '', t('staff.' + role + '.name')),
        el('small', '', desc),
        el('small', 'lvl', level === 0 ? t('staff.notHired') : t('staff.level', { level })),
      );
      const label = level === 0 ? t('action.hire', { cost: moneyFull(cost) }) : t('action.upgrade', { cost: moneyFull(cost) });
      row.append(info, button(maxed ? t('action.maxed') : label, () => actions.hire(role), { disabled: maxed || state.cash < cost, primary: level === 0 }));
      body.append(row);
    }

    body.append(el('h3', '', t('shop.franchise')));
    const fr = el('div', 'row');
    const frInfo = el('div', 'info');
    const eligible = state.lifetimeCash >= cfg.economy.prestige.milestoneLifetimeCash;
    frInfo.append(
      el('b', '', t('franchise.title')),
      el('small', '', eligible
        ? t('franchise.gain', { points: franchiseGain(state, cfg) })
        : t('franchise.locked', { target: moneyFull(cfg.economy.prestige.milestoneLifetimeCash) })),
      el('small', 'lvl', t('franchise.points', { points: state.franchise.points })),
    );
    fr.append(frInfo, button(t('action.franchise'), () => actions.franchise(), { disabled: !eligible }));
    body.append(fr);

    body.append(el('h3', '', t('shop.starterPack')));
    const sp = el('div', 'row');
    const spInfo = el('div', 'info');
    spInfo.append(el('b', '', t('shop.starterPack')), el('small', '', t('shop.starterPackDesc')));
    sp.append(spInfo, button(cfgPrice(cfg), () => actions.stub('starterPack')));
    body.append(sp);

    body.append(el('h3', '', t('shop.ovenSkins')));
    const sk = el('div', 'row');
    const skInfo = el('div', 'info');
    skInfo.append(el('b', '', t('shop.ovenSkins')), el('small', '', t('shop.ovenSkinsDesc')));
    sk.append(skInfo, button(t('action.soon'), () => actions.stub('ovenSkins')));
    body.append(sk);
  });
}

function cfgPrice(cfg) {
  return cfg.economy.monetizationStubs.starterPack.priceLabel;
}

// Offline earnings "Collect" screen. Ad is optional and player-initiated.
export function openCollect(report, cfg, actions) {
  let multiplier = 1;
  openModal('collect', t('collect.title'), (body) => {
    body.innerHTML = '';
    body.append(
      el('p', 'lead', t('collect.body', { duration: duration(report.elapsed) })),
    );
    const amt = el('div', 'big-amount', t('collect.earned', { amount: money(report.earned * multiplier) }));
    body.append(amt);
    if (report.capped) body.append(el('p', 'muted', t('collect.capped', { cap: duration(cfg.economy.time.offlineCapSeconds) })));
    if (multiplier > 1) body.append(el('p', 'muted', t('collect.boosted')));
    const row = el('div', 'stack');
    const collectBtn = button(multiplier > 1 ? `${t('action.collect')} x${multiplier}` : t('action.collect'), () => {
      onDismiss = null;
      closeModal();
      actions.collect(multiplier);
    }, { primary: true });
    row.append(collectBtn);
    if (multiplier === 1) {
      const ad = button(t('action.adDouble'), async () => {
        ad.disabled = true;
        const ok = await actions.watchAd();
        if (ok) multiplier = 2;
        refreshFn();
      });
      row.append(ad, el('small', 'muted', t('action.adDoubleHint')));
    }
    body.append(row);
  });
  // Closing the sheet any other way (X, backdrop) still collects, at the base amount.
  onDismiss = () => actions.collect(1);
}

export function openFranchise(state, cfg, actions) {
  openModal('franchise', t('franchise.title'), (body) => {
    const gain = franchiseGain(state, cfg);
    body.append(
      el('p', 'lead', t('franchise.explain', { bonus: Math.round(cfg.economy.prestige.bonusPerPoint * 100) })),
      el('p', '', t('franchise.gain', { points: gain })),
      el('p', 'muted', t('franchise.resets')),
      el('p', 'muted', t('franchise.keeps')),
      el('p', 'muted', t('franchise.points', { points: state.franchise.points })),
    );
    const row = el('div', 'stack');
    row.append(button(t('action.franchise'), () => { closeModal(); actions.confirmFranchise(); }, { primary: true }));
    row.append(button(t('action.cancel'), () => closeModal()));
    body.append(row);
  });
}

export function openSettings(state, actions) {
  openModal('settings', t('settings.title'), (body) => {
    body.append(
      toggleRow(t('settings.sound'), state.settings.sound, (v) => actions.setSound(v)),
      toggleRow(t('settings.notify'), state.settings.notify, (v) => actions.setNotify(v), t('settings.notifyDesc')),
    );
    const version = el('button', 'version-tap', `${t('app.version')}`);
    let taps = 0;
    version.addEventListener('click', () => {
      taps++;
      if (taps >= 5) { taps = 0; actions.openDebug(); }
    });
    body.append(version);
    body.append(el('p', 'keys-help', t('settings.keys')));
    const row = el('div', 'stack');
    row.append(button(t('action.reset'), () => {
      if (globalThis.confirm(t('action.confirmReset'))) actions.reset();
    }));
    body.append(row);
  });
}

function toggleRow(label, on, onChange, desc) {
  const row = el('div', 'row');
  const info = el('div', 'info');
  info.append(el('b', '', label));
  if (desc) info.append(el('small', '', desc));
  const sw = el('button', 'switch' + (on ? ' on' : ''));
  sw.setAttribute('role', 'switch');
  sw.setAttribute('aria-checked', String(on));
  sw.addEventListener('click', () => onChange(!sw.classList.contains('on')));
  row.append(info, sw);
  return row;
}

export function openDebug(actions) {
  openModal('debug', t('debug.title'), (body) => {
    const items = [
      ['debug.addCash', actions.addCash, 1000],
      ['debug.addCashBig', actions.addCash, 20000],
      ['debug.skip', actions.skipHour],
      ['debug.rain', actions.event, 'rainyDay'],
      ['debug.festival', actions.event, 'foodFestival'],
      ['debug.night', actions.toggleNight],
      ['debug.away', actions.simulateAway],
      ['debug.franchiseReady', actions.franchiseReady],
      ['debug.resetAll', actions.wipe],
    ];
    const grid = el('div', 'stack');
    for (const [key, fn, arg] of items) grid.append(button(t(key), () => fn(arg)));
    body.append(grid);
  });
}
