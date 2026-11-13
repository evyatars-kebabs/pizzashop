// Entry point. Wires the pure game core to the 3D view, the HUD and the save system.
import * as THREE from 'three';
import { loadAllData } from './core/config.js';
import { setStrings, t, moneyFull } from './core/i18n.js';
import { readSave, writeSave, clearSave } from './core/save.js';
import { track, startSession, endSession } from './core/analytics.js';
import { sfx, setSoundEnabled } from './core/audio.js';
import { newGame } from './game/state.js';
import { tick } from './game/sim.js';
import { derive, nextGoal, franchiseGain, franchiseRequirement, runCash, tierIndex } from './game/economy.js';
import {
  takeOrder, applyManual, buyUpgrade, hireStaff, recruitStaff, openShop as openAnotherShop, franchise, canFranchise, findCustomer, moveLocation, bonusAvailable, completeBonus,
} from './game/actions.js';
import { offlineReport, applyOffline } from './game/offline.js';
import { startEvent } from './game/events.js';
import { createScene } from './render/scene.js';
import { buildLocation } from './render/props.js';
import { buildStand, layoutFor, setNeonLevel, setOvenGlow, updateStaff } from './render/stand.js';
import { Actors } from './render/actors.js';
import { FX } from './render/fx.js';
import { createHUD, staticStrings } from './ui/hud.js';
import { initMinigames, doughStep, toppingStep, ovenStep, happyHourStep, isMiniOpen, cancelMini } from './ui/minigames.js';
import * as sheets from './ui/sheets.js';
import { createSigns } from './ui/signs.js';

const STEP = 0.1;
const MAX_STEPS_PER_FRAME = 20;
const AWAY_MIN_SECONDS = 60;
const $ = (id) => document.getElementById(id);

let cfg;
let S;
let env;
let stand;
let sceneryGroup = null;
let layout = null;
let builtKey = '';
let signs = null;
let actors;
let fx;
let hud;
let pendingOffline = null;
let acc = 0;
let last = performance.now();
let saveTimer = 0;
let sigLast = '';
let lastTurnedAwayToast = -1e9;

const ACTION_KEY = { customers: 'customers', stretch: 'stretch', top: 'top', oven: 'oven', serve: 'serve', shop: 'shop' };

async function boot() {
  cfg = await loadAllData();
  setStrings(cfg.strings);
  staticStrings();

  const saved = readSave();
  const now = Date.now();
  S = saved || newGame(cfg, now);
  if (!cfg.locations[S.location]) S.location = 'corner';

  layout = computeLayout();
  env = createScene($('scene'), layout);
  actors = new Actors(env, layout, cfg);
  fx = new FX(env);
  hud = createHUD(onAction);
  signs = createSigns();
  buildScenery();

  initMinigames(cfg, {
    onOpen: (station) => env.focus(station ? layout.stations[station] : null),
    onClose: () => env.focus(null),
  });

  setSoundEnabled(S.settings.sound);
  env.setQuality(S.settings.graphics || 'auto');
  env.setLook(S.settings.look || '3d');
  startSession();
  track('session_start_state', { fresh: !saved });

  window.addEventListener('resize', () => env.resize());
  window.addEventListener('orientationchange', () => env.resize());
  env.resize();
  wireUI();
  wireCanvas();
  if (saved) checkReturn(now);
  $('loading').classList.add('hidden');
  requestAnimationFrame(frame);
  if (new URLSearchParams(location.search).has('debug')) $('btnDebug').classList.remove('hidden');
  // Handle for the console and for end-to-end tests. Read-only for the game itself.
  window.pizzaStand = { get state() { return S; }, get layout() { return layout; }, cfg, debug: debugActions(), env, actors };
}

// ---- Locations ----

function currentLoc() {
  return cfg.locations[S.location];
}

// Where everything stands for the current location and stand tier (cart, stand, shop).
function computeLayout() {
  const idx = tierIndex(S, cfg);
  const l = layoutFor(currentLoc(), cfg.economy.prestige.tiers[idx], idx);
  l.decorSteps = cfg.economy.upgrades.decor.steps;
  return l;
}

// The scenery is rebuilt whenever one of these changes.
function sceneKey() {
  return `${S.location}|${S.shops}|${tierIndex(S, cfg)}|${S.upgrades.decor}|${S.upgrades.marketing}|${S.upgrades.pizzaSchool}|${S.upgrades.megaOven}`;
}

// Builds the street and the stand. Replaces whatever was there.
// snap=false lets the camera glide to the new framing (used when the stand grows).
function buildScenery(snap = true) {
  layout = computeLayout();
  if (sceneryGroup) {
    env.scene.remove(sceneryGroup);
    sceneryGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }
  env.glowMats.length = 0;
  env.nightFades.length = 0;
  env.updaters.length = 0;
  env.signs = [];
  sceneryGroup = new THREE.Group();
  sceneryGroup.add(buildLocation(layout, env));
  stand = buildStand(layout, env, {
    decor: S.upgrades.decor,
    empire: { marketing: S.upgrades.marketing, pizzaSchool: S.upgrades.pizzaSchool, megaOven: S.upgrades.megaOven },
  });
  sceneryGroup.add(stand);
  env.styleNew(sceneryGroup);
  env.scene.add(sceneryGroup);
  env.setLocation(layout, snap);
  actors.setLocation(layout);
  signs.setSpecs(env.signs);
  builtKey = sceneKey();
}

function moveTo(id) {
  const r = moveLocation(S, id, cfg);
  if (!r.ok) return hud.toast(t('toast.noPizza'));
  buildScenery();
  sfx.whoosh();
  hud.toast(t('toast.locationMoved', { location: t(currentLoc().nameKey) }));
  track('location_move', { to: id });
  save();
}

// ---- Persistence and offline return ----

function save() {
  const now = Date.now();
  if (!pendingOffline) S.savedAt = now;
  writeSave(S);
}

function checkReturn(now = Date.now()) {
  const report = offlineReport(S, now, cfg);
  if (report.rawSeconds < AWAY_MIN_SECONDS) return;
  if (report.earned <= 0) {
    applyOffline(S, report, cfg, 1);
    S.savedAt = now;
    return;
  }
  pendingOffline = report;
  sheets.openCollect(report, cfg, {
    collect: (mult) => {
      if (!pendingOffline) return;
      applyOffline(S, report, cfg, mult);
      pendingOffline = null;
      S.savedAt = Date.now();
      track('offline_collect', { seconds: Math.round(report.elapsed), earned: Math.floor(report.earned * mult), multiplier: mult, capped: report.capped });
      save();
    },
    watchAd: () => adStub(cfg.economy.monetizationStubs.offlineBoostAd),
  });
}

// Placeholder rewarded-ad hook. Player-initiated only. Replace the body with the ad SDK later.
function adStub(stub) {
  track('ad_offline_boost_requested');
  return new Promise((resolve) => {
    setTimeout(() => {
      track('ad_offline_boost_completed');
      hud.toast(t('toast.adStub'));
      resolve(true);
    }, stub.placeholderSeconds * 1000);
  });
}

// ---- Game events from sim and actions ----

function handleEvent(e) {
  switch (e.type) {
    case 'arrived':
    case 'order_taken':
      sfx.pop();
      break;
    case 'stage':
      if (e.stage === 'ready') sfx.bell();
      break;
    case 'served': {
      sfx.cash();
      actors.leaveCustomer(e.customerId, true);
      actors.leavePizza(e.pizzaId);
      const reg = layout.register;
      const at = actors.positionOf('customer', e.customerId) || [reg[0], 1.6, reg[2]];
      const screen = env.toScreen([at[0], at[1] + 0.4, at[2]]);
      hud.float(screen, '+' + moneyFull(e.amount), 'gold');
      if (e.tip >= 0.5) {
        hud.float({ x: screen.x, y: screen.y - 26 }, t('toast.tip', { tip: moneyFull(e.tip) }), 'tip');
      }
      fx.puff([reg[0], 1.5, reg[2] + 0.2], 'gold', e.big ? 16 : 7);
      if (e.big) env.shakeCam(0.12);
      track('sale', { total: Math.floor(e.total), customerType: e.customerType, wrongTopping: e.wrongTopping, auto: !!e.auto });
      if (!S.flags.firstSale) {
        S.flags.firstSale = true;
        track('first_sale');
      }
      break;
    }
    case 'angry':
      sfx.angry();
      actors.leaveCustomer(e.customerId, false);
      hud.toast(t('toast.angry', { name: t('customer.name.' + e.nameIdx), penalty: moneyFull(e.penalty) }), 'bad');
      env.shakeCam(0.04);
      track('customer_angry', { customerType: e.customerType });
      break;
    case 'turned_away': {
      // With many franchises customers arrive very fast, so say this at most every few seconds.
      const nowMs = performance.now();
      if (nowMs - lastTurnedAwayToast > 8000) {
        lastTurnedAwayToast = nowMs;
        hud.toast(t('customer.turnedAway'), 'bad');
        track('customer_turned_away', { queueFull: true });
      }
      break;
    }
    case 'event_start':
      sfx.bell();
      hud.toast(t('toast.eventStart', { event: t('event.' + e.id + '.name') }));
      track('event_start', { id: e.id });
      break;
    case 'event_end':
      hud.toast(t('toast.eventEnd', { event: t('event.' + e.id + '.name') }));
      break;
    case 'style_unlocked':
      hud.toast(t('toast.unlocked', { style: t('style.' + e.style) }));
      break;
    case 'location_unlocked':
      sfx.bell();
      hud.toast(t('toast.locationUnlocked', { location: t(cfg.locations[e.location].nameKey) }));
      track('location_unlocked', { location: e.location });
      break;
    case 'bonus_ready':
      sfx.bell();
      hud.toast(t('toast.bonusReady'));
      break;
    case 'franchise_ready':
      sfx.bell();
      hud.toast(t('toast.franchiseReady'));
      track('franchise_ready', { count: S.franchise.count });
      break;
    case 'tutorial_step':
      track('tutorial_step', { step: e.step });
      break;
    case 'tutorial_done':
      hud.toast(t('tut.done'));
      track('tutorial_done');
      break;
    case 'idle_staff': {
      const role = t('staff.' + e.role + '.name');
      hud.toast(t('toast.staffIdle', { role }));
      notifyIfHidden(t('toast.staffIdle', { role }));
      break;
    }
    default:
      break;
  }
}

function notifyIfHidden(body) {
  if (!S.settings.notify || !document.hidden) return;
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  try { new Notification(t('app.title'), { body }); } catch (err) { /* notifications are optional */ }
}

// ---- Player actions ----

function firstWaiting() {
  return S.customers.filter((c) => c.state === 'waiting').sort((a, b) => a.id - b.id)[0];
}

function firstPizza(stage) {
  return S.pizzas.filter((p) => p.stage === stage).sort((a, b) => a.id - b.id)[0];
}

function onAction(name) {
  sfx.click();
  if (name === 'customers') return doTakeOrder();
  if (name === 'shop') return openShop();
  if (name === 'stretch') return doStage('dough');
  if (name === 'top') return doStage('topping');
  if (name === 'oven') return doStage('load');
  if (name === 'serve') return doStage('ready');
}

function doTakeOrder(customerId) {
  const c = customerId ? findCustomer(S, customerId) : firstWaiting();
  if (!c || c.state !== 'waiting') return hud.toast(t('toast.noPizza'));
  const r = takeOrder(S, c.id, cfg);
  if (r.ok) handleEvent({ ...r, type: 'order_taken' });
}

function doStage(stage, pizzaId) {
  const p = pizzaId ? S.pizzas.find((x) => x.id === pizzaId) : firstPizza(stage);
  if (!p || p.stage !== stage) return hud.toast(t('toast.noPizza'));
  if (stage === 'dough') {
    doughStep((res) => applyResult(applyManual(S, p.id, 'stretch', res, cfg)));
  } else if (stage === 'topping') {
    const c = findCustomer(S, p.customerId);
    toppingStep(c, cfg.economy.customers.toppings, (res) => applyResult(applyManual(S, p.id, 'topping', res, cfg)));
  } else if (stage === 'load') {
    if (S.pizzas.filter((x) => x.stage === 'baking').length >= derive(S, cfg).ovenSlots) {
      return hud.toast(t('toast.ovenFull'));
    }
    ovenStep((res) => applyResult(applyManual(S, p.id, 'load', res, cfg)));
  } else if (stage === 'ready') {
    applyResult(applyManual(S, p.id, 'serve', {}, cfg));
  }
}

function applyResult(r) {
  if (!r.ok) {
    hud.toast(r.reason === 'ovenFull' ? t('toast.ovenFull') : t('toast.noPizza'));
    return;
  }
  if (r.type === 'served') return handleEvent(r);
  if (r.type === 'stage') {
    const at = r.stage === 'baking' ? cfgStation('oven') : cfgStation(r.stage === 'load' ? 'load' : 'dough');
    fx.puff(at, 'green', 4);
    sfx.pop();
  }
}

function cfgStation(name) {
  return layout.stations[name];
}

function openShop() {
  sheets.openShop(S, cfg, {
    buy: (key) => {
      const r = buyUpgrade(S, key, cfg);
      if (!r.ok) return hud.toast(r.reason === 'cash' ? t('toast.notEnough') : t('toast.noPizza'));
      sfx.bell();
      if (key === 'decor') {
        const steps = cfg.economy.upgrades.decor.steps;
        hud.toast(t('toast.decorAdded', { item: t('decor.step.' + steps[Math.min(steps.length, S.upgrades.decor) - 1]) }));
      } else {
        hud.toast(t('toast.bought', { item: t('upgrade.' + key + '.name') }));
      }
      if (r.first) track('first_purchase', { item: key, cost: r.cost });
      save();
    },
    openShop: () => {
      const r = openAnotherShop(S, cfg);
      if (!r.ok) {
        const msg = r.reason === 'cash' ? t('toast.notEnough')
          : r.reason === 'needsFranchise' ? t('shop.shopsLocked', { n: r.need })
          : t('shop.allOpen');
        return hud.toast(msg);
      }
      sfx.bell();
      hud.toast(t('toast.shopOpened', { n: r.shops }));
      track('shop_opened', { shops: r.shops, cost: r.cost });
      save();
    },
    recruit: (role) => {
      const r = recruitStaff(S, role, cfg);
      if (!r.ok) {
        const msg = r.reason === 'cash' ? t('toast.notEnough')
          : r.reason === 'needsFranchise' ? t('shop.recruitLocked')
          : r.reason === 'needsHire' ? t('recruit.needHire', { role: t('staff.' + role + '.name') })
          : t('action.maxed');
        return hud.toast(msg);
      }
      sfx.bell();
      hud.toast(t('toast.recruited', { role: t('staff.' + role + '.name') }));
      save();
    },
    hire: (role) => {
      const r = hireStaff(S, role, cfg);
      if (!r.ok) return hud.toast(r.reason === 'cash' ? t('toast.notEnough') : t('toast.noPizza'));
      sfx.bell();
      hud.toast(t('toast.hired', { role: t('staff.' + role + '.name') }));
      if (r.first) track('first_purchase', { item: role, cost: r.cost });
      save();
    },
    franchise: () => sheets.openFranchise(S, cfg, { confirmFranchise }),
    move: (id) => moveTo(id),
    stub: (name) => {
      track('monetization_stub_tap', { name });
      hud.toast(t('toast.comingSoon'));
    },
  });
}

function confirmFranchise() {
  if (!canFranchise(S, cfg)) return hud.toast(t('franchise.locked', { target: moneyFull(franchiseRequirement(S, cfg)), have: moneyFull(runCash(S)) }));
  const gain = franchiseGain(S, cfg);
  const tierBefore = tierIndex(S, cfg);
  const res = franchise(S, cfg, newGame);
  S = res.state;
  const tierAfter = tierIndex(S, cfg);
  track('prestige', { points: S.franchise.points, gain, count: S.franchise.count, tier: cfg.economy.prestige.tiers[tierAfter].id, lifetimeCash: Math.floor(S.lifetimeCash) });
  sfx.bell();
  hud.toast(t('toast.franchised', { mult: (1 + cfg.economy.prestige.bonusPerPoint * S.franchise.points).toFixed(1) }));
  if (tierAfter !== tierBefore) hud.toast(t('toast.tierUp', { tier: t('tier.' + cfg.economy.prestige.tiers[tierAfter].id) }));
  save();
}

function settingsActions() {
  return {
    setSound: (v) => {
      S.settings.sound = v;
      setSoundEnabled(v);
      sheets.openSettings(S, settingsActions());
    },
    setNotify: async (v) => {
      if (!v) {
        S.settings.notify = false;
      } else if (typeof Notification !== 'undefined') {
        const p = await Notification.requestPermission();
        S.settings.notify = p === 'granted';
      }
      track('notify_opt_in', { on: S.settings.notify });
      sheets.openSettings(S, settingsActions());
    },
    setLook: (v) => {
      S.settings.look = v;
      env.setLook(v);
      track('art_style', { look: v });
      sheets.openSettings(S, settingsActions());
    },
    setGraphics: (v) => {
      S.settings.graphics = v;
      env.setQuality(v);
      track('graphics_quality', { quality: v });
      sheets.openSettings(S, settingsActions());
    },
    reset: () => wipe(),
    openDebug: () => sheets.openDebug(debugActions()),
  };
}

function wipe() {
  clearSave();
  pendingOffline = null;
  S = newGame(cfg);
  track('save_reset');
  sheets.closeModal();
  hud.toast(t('action.reset'));
}

// Debug panel helpers. Only reachable via ?debug=1, the debug button, or five taps on the version.
function debugActions() {
  return {
    addCash: (amount) => {
      S.cash += amount;
      S.lifetimeCash += amount;
      hud.toast(t('toast.cashDebug', { amount: moneyFull(amount) }));
    },
    skipHour: () => {
      for (let i = 0; i < 7200; i++) {
        const evs = tick(S, 0.5, cfg, []);
        for (const e of evs) {
          if (e.type === 'event_start' || e.type === 'event_end' || e.type === 'tutorial_done') handleEvent(e);
        }
      }
      hud.toast('+1h');
    },
    event: (id) => {
      startEvent(S, id, cfg);
      handleEvent({ type: 'event_start', id });
    },
    toggleNight: () => { S.dayClock = (S.dayClock + 0.5) % 1; },
    simulateAway: () => {
      sheets.closeModal();
      S.savedAt -= 8 * 3600 * 1000;
      checkReturn();
    },
    franchiseReady: () => { S.lifetimeCash = Math.max(S.lifetimeCash, (S.franchise.lifetimeAtLast || 0) + franchiseRequirement(S, cfg)); },
    wipe,
  };
}

// ---- UI wiring ----

const KEY_ACTIONS = { '1': 'customers', '2': 'stretch', '3': 'top', '4': 'oven', '5': 'serve', '6': 'shop' };

// Keyboard shortcuts for PC. Ignored while a window is open, except Esc.
function wireKeyboard() {
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'Escape') {
      if (isMiniOpen()) return cancelMini();
      if (sheets.isModalOpen()) return $('modalClose').click();
      return;
    }
    if (sheets.isModalOpen() || isMiniOpen() || pendingOffline) return;
    if (KEY_ACTIONS[e.key]) {
      e.preventDefault();
      return onAction(KEY_ACTIONS[e.key]);
    }
    if (e.key === 'm' || e.key === 'M') {
      S.settings.sound = !S.settings.sound;
      setSoundEnabled(S.settings.sound);
      hud.toast(t('settings.sound') + ': ' + (S.settings.sound ? 'on' : 'off'));
    }
  });
}

function openBonus() {
  if (sheets.isModalOpen() || isMiniOpen() || pendingOffline || !bonusAvailable(S, cfg)) return;
  sfx.click();
  happyHourStep((res) => {
    const r = completeBonus(S, res.hits, cfg);
    if (r.won) {
      sfx.bell();
      hud.toast(t('mini.happy.win'));
      track('happy_hour_won', { hits: r.hits });
    } else {
      hud.toast(t('mini.happy.miss'));
      track('happy_hour_missed', { hits: r.hits });
    }
    save();
  });
}

function wireUI() {
  wireKeyboard();
  $('btnBonus').addEventListener('click', openBonus);
  $('btnSettings').addEventListener('click', () => sheets.openSettings(S, settingsActions()));
  $('btnDebug').addEventListener('click', () => sheets.openDebug(debugActions()));
  $('modalClose').addEventListener('click', () => sheets.closeModal());
  $('modal').addEventListener('pointerdown', (e) => { if (e.target.id === 'modal') sheets.closeModal(); });
}

function wireCanvas() {
  const canvas = $('scene');
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let down = null;
  canvas.addEventListener('pointerdown', (e) => {
    down = { x: e.clientX, y: e.clientY, t: performance.now() };
  });
  canvas.addEventListener('pointerup', (e) => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const quick = performance.now() - down.t < 450;
    down = null;
    if (moved > 12 || !quick || sheets.isModalOpen()) return;
    const rect = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    ray.setFromCamera(ndc, env.camera);
    const hit = actors.pick(ray);
    if (!hit) return;
    if (hit.kind === 'customer') {
      const c = findCustomer(S, hit.id);
      if (c && c.state === 'waiting') return doTakeOrder(c.id);
      return;
    }
    if (hit.kind === 'pizza') {
      const p = S.pizzas.find((x) => x.id === hit.id);
      if (!p) return;
      if (['dough', 'topping', 'load', 'ready'].includes(p.stage)) doStage(p.stage, p.id);
    }
  });
  canvas.addEventListener('pointercancel', () => { down = null; });
  // Mouse users get a hand cursor over anything they can click.
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || sheets.isModalOpen()) {
      canvas.style.cursor = '';
      return;
    }
    const rect = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    ray.setFromCamera(ndc, env.camera);
    canvas.style.cursor = actors.pick(ray) ? 'pointer' : 'default';
  });
  // Keep the page from scrolling or zooming on the canvas.
  canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
}

// ---- Loop ----

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;

  if (!pendingOffline) {
    acc += dt;
    let steps = 0;
    while (acc >= STEP && steps < MAX_STEPS_PER_FRAME) {
      const evs = tick(S, STEP, cfg, []);
      for (const e of evs) handleEvent(e);
      acc -= STEP;
      steps++;
    }
    if (steps === MAX_STEPS_PER_FRAME) acc = 0;
  }

  // The stand grew, moved, or got a new decoration: rebuild the scenery.
  if (builtKey !== sceneKey()) buildScenery(false);

  const baking = S.pizzas.some((p) => p.stage === 'baking');
  actors.sync(S);
  actors.update(dt, S);
  fx.setSmoke(env.smokeAt, baking ? 1 : 0.2);
  fx.setSteam(actors.steamPoints());
  fx.update(dt);
  fx.setEvents(S.events.active);
  env.update(dt, S.dayClock);
  setNeonLevel(env, S.upgrades.neon);
  setOvenGlow(env, baking, env.time);
  signs.update(env, S, cfg);
  updateStaff(env, S, performance.now() / 1000, cfg);

  saveTimer += dt;
  if (saveTimer >= cfg.economy.time.autosaveSeconds) {
    saveTimer = 0;
    save();
  }

  if (!pendingOffline) updateHUD();
  env.renderer.render(env.scene, env.camera);
}

let hudTimer = 0;
function updateHUD() {
  hudTimer -= 1;
  if (hudTimer > 0) return;
  hudTimer = 4;
  const d = derive(S, cfg);
  hud.tickCash(S.cash);
  hud.setRate(d.idleRate);
  hud.setGoal(nextGoal(S, cfg));
  hud.setBadges({
    customers: S.customers.filter((c) => c.state === 'waiting').length,
    stretch: S.pizzas.filter((p) => p.stage === 'dough').length,
    top: S.pizzas.filter((p) => p.stage === 'topping').length,
    oven: S.pizzas.filter((p) => p.stage === 'load').length,
    serve: S.pizzas.filter((p) => p.stage === 'ready').length,
  });
  const step = cfg.economy.tutorial[S.tutorialStep];
  if (!S.tutorialDone && step) {
    hud.setHint(t(step.textKey));
    hud.setHighlight(step.highlight);
  } else {
    hud.setHint(null);
    hud.setHighlight(null);
  }
  hud.setEvents(S.events.active.map((a) => ({ id: a.id, left: a.endsAt - S.gameTime })));
  $('btnBonus').classList.toggle('hidden', !bonusAvailable(S, cfg));
  const sig = `${S.location}|${JSON.stringify(S.unlockedLocations)}|${Math.floor(S.cash)}|${JSON.stringify(S.upgrades)}|${JSON.stringify(S.staff)}|${JSON.stringify(S.staffing)}|${S.franchise.points}|${S.franchise.count}|${canFranchise(S, cfg)}|${Math.floor(runCash(S) / 500)}`;
  if (sig !== sigLast) {
    sigLast = sig;
    sheets.refreshModal(sig);
  }
}

// ---- Pause and resume on app switch ----

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    hud.setPaused(true);
    if (!S.tutorialDone) track('churn_point', { where: 'tutorial_step_' + S.tutorialStep });
    endSession({ gameTime: Math.round(S.gameTime) });
    save();
  } else {
    hud.setPaused(false);
    last = performance.now();
    startSession();
    checkReturn();
  }
});
window.addEventListener('pagehide', () => save());

boot().catch((err) => {
  console.error(err);
  const why = err && err.message ? err.message : String(err);
  if (window.__pizzaFail) window.__pizzaFail(why);
  else $('loading').textContent = 'The game could not start: ' + why;
});
