// Renderer, sky, lighting, camera framing and the day/night cycle.
import * as THREE from 'three';
import { daylightOf } from '../game/economy.js';
import { Batch, G } from './assets.js';
import { styleTree, unstyleTree } from './style.js';

const v = new THREE.Vector3();
const C = (hex) => new THREE.Color(hex);

const SKY = {
  dayTop: C('#2f86d9'), dayHorizon: C('#c9ebfb'),
  duskTop: C('#3d4f9a'), duskHorizon: C('#ffab6b'),
  nightTop: C('#060a1c'), nightHorizon: C('#1b2a52'),
};

const SKY_VERT = `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const SKY_FRAG = `
uniform vec3 top;
uniform vec3 horizon;
uniform vec3 sunDir;
uniform vec3 sunColor;
uniform float sunPower;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y * 1.5 + 0.06, 0.0, 1.0);
  vec3 c = mix(horizon, top, pow(h, 0.55));
  float s = max(dot(d, normalize(sunDir)), 0.0);
  c += sunColor * (pow(s, 900.0) * 4.0 + pow(s, 24.0) * 0.35 + pow(s, 4.0) * 0.12) * sunPower;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;

export function createScene(canvas, layout) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const maxRatio = Math.min(globalThis.devicePixelRatio || 1, 2);
  let ratio = maxRatio;
  let quality = 'auto';
  renderer.setPixelRatio(ratio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  // The shadow map is refreshed every second frame (see update): the scenery is static and
  // characters also have blob shadows, so this halves the shadow cost with no visible change.
  renderer.shadowMap.autoUpdate = false;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const fogRef = new THREE.Fog(SKY.dayHorizon.clone(), 45, 150);
  scene.fog = fogRef;

  const camera = new THREE.PerspectiveCamera(layout.camera.fov, 1, 0.2, 400);

  // --- Lights ---
  const hemi = new THREE.HemisphereLight(0xffffff, 0xb08968, 1.0);
  const sun = new THREE.DirectionalLight(0xfff3dc, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1536, 1536);
  Object.assign(sun.shadow.camera, { left: -15, right: 15, top: 15, bottom: -15, near: 1, far: 90 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = 2.5;
  // Warm light under the awning so the stand glows at night.
  const standLight = new THREE.PointLight(0xffb469, 0, 16, 1.6);
  standLight.position.set(0.2, 2.6, 1.6);
  scene.add(hemi, sun, sun.target, standLight);

  // --- Sky dome, stars, moon ---
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      top: { value: SKY.dayTop.clone() },
      horizon: { value: SKY.dayHorizon.clone() },
      sunDir: { value: new THREE.Vector3(0, 1, 0) },
      sunColor: { value: C('#fff1c4') },
      sunPower: { value: 1 },
    },
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    toneMapped: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(300, 24, 16), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);

  const starPos = [];
  for (let i = 0; i < 420; i++) {
    const a = Math.random() * Math.PI * 2;
    const y = 0.08 + Math.random() * 0.92;
    const r = Math.sqrt(1 - y * y);
    starPos.push(Math.cos(a) * r * 280, y * 280, Math.sin(a) * r * 280);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  const stars = new THREE.Points(starGeo, starMat);
  stars.frustumCulled = false;
  scene.add(stars);
  const skyParts = { sky, stars, moon: null, clouds: [] };

  const moon = new THREE.Mesh(G.sphere(), new THREE.MeshBasicMaterial({ color: '#f4f1de', fog: false }));
  moon.scale.setScalar(9);
  scene.add(moon);
  skyParts.moon = moon;

  // --- Clouds: soft clumps drifting behind the skyline ---
  const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, fog: false });
  const clouds = [];
  for (let i = 0; i < 9; i++) {
    const b = new Batch();
    const n = 4 + Math.floor(Math.random() * 3);
    for (let k = 0; k < n; k++) {
      b.sphere(2.2 + Math.random() * 2.2, '#ffffff', [(k - n / 2) * 2.6 + Math.random(), Math.random() * 1.2, Math.random() * 2], [1.25, 0.62, 1], [10, 8]);
    }
    const m = new THREE.Mesh(b.geometry(), cloudMat);
    m.position.set(-110 + Math.random() * 220, 26 + Math.random() * 26, -60 - Math.random() * 90);
    m.scale.setScalar(1 + Math.random() * 1.4);
    m.userData.speed = 0.35 + Math.random() * 0.5;
    scene.add(m);
    clouds.push(m);
    skyParts.clouds.push(m);
  }

  const base = { pos: new THREE.Vector3(), target: new THREE.Vector3(), fov: 46, zoom: 1 };
  const cur = { pos: new THREE.Vector3(), look: new THREE.Vector3() };
  const goal = { pos: new THREE.Vector3(), look: new THREE.Vector3() };
  const shake = { amount: 0, time: 0 };

  const env = {
    renderer, scene, camera, hemi, sun,
    daylight: 0.8, time: 0,
    look: '3d',        // '3d' or '2d' (flat storybook look)
    lastLayout: null,
    glowMats: [],      // emissive materials that brighten at night
    nightFades: [],    // materials whose opacity follows the night (userData.base = full opacity)
    updaters: [],      // per-frame callbacks registered by scenery: fn(dt, time, daylight)
    signs: [],
  };

  function fit(w, h) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Portrait phones need a wider view so the stand and queue both fit.
    const portrait = Math.max(0, 0.75 - camera.aspect);
    camera.fov = base.fov + portrait * (env.look === '2d' ? 6 : 40);
    camera.updateProjectionMatrix();
    recomputeGoal();
  }

  function recomputeGoal() {
    const dist = (1 + Math.max(0, 0.75 - camera.aspect) * 1.2) * base.zoom;
    const offset = base.pos.clone().sub(base.target);
    goal.pos.copy(base.target).add(offset.multiplyScalar(dist));
    goal.look.copy(base.target);
  }

  // Zoom toward a station for a mini-game; null returns to the default view.
  function focus(stationPos) {
    if (!stationPos) return recomputeGoal();
    const s = new THREE.Vector3(...stationPos);
    goal.look.copy(s).add(new THREE.Vector3(0, 0.25, 0));
    if (env.look === '2d') goal.pos.copy(s).add(new THREE.Vector3(0, 0.8, 24));
    else goal.pos.copy(s).add(new THREE.Vector3(0, 2.2, 4.2));
  }

  // Switches framing to a layout (location + stand tier). snap=false glides there instead.
  function setLocation(l, snap = true) {
    env.lastLayout = l;
    base.zoom = l.camera.zoom || 1;
    base.target.set(...l.camera.target);
    if (env.look === '2d') {
      // Near-orthographic and straight on: a long lens from far away.
      base.fov = 13;
      base.pos.copy(base.target).add(new THREE.Vector3(0, 1.6, 40));
    } else {
      base.fov = l.camera.fov;
      base.pos.set(...l.camera.position);
    }
    standLight.position.set(l.cx ?? 0.2, 2.7, 1.4);
    recomputeGoal();
    if (snap) {
      cur.pos.copy(goal.pos);
      cur.look.copy(goal.look);
    }
    resize();
  }

  function shakeCam(amount) {
    shake.amount = Math.max(shake.amount, amount);
    shake.time = 0.35;
  }

  const sunDir = new THREE.Vector3();
  const cTop = new THREE.Color();
  const cHor = new THREE.Color();
  const cTmp = new THREE.Color();
  const cloudDay = C('#ffffff');
  const cloudNight = C('#2c3558');
  const cloudDusk = C('#ffc0a0');
  const sunHigh = C('#fff3dc');
  const sunLow = C('#ff9a55');
  const moonLight = C('#9db8ff');
  const groundDay = C('#b08968');
  const groundNight = C('#3a4468');
  const ambDay = C('#ffffff');
  const ambNight = C('#8ea2dc');

  function update(dt, dayClock) {
    env.time += dt;
    const k = 1 - Math.exp(-dt * 4);
    cur.pos.lerp(goal.pos, k);
    cur.look.lerp(goal.look, k);
    camera.position.copy(cur.pos);
    camera.position.x += Math.sin(env.time * 0.22) * 0.12;
    if (shake.time > 0) {
      shake.time -= dt;
      const a = shake.amount * Math.max(0, shake.time / 0.35);
      camera.position.x += (Math.random() - 0.5) * a;
      camera.position.y += (Math.random() - 0.5) * a;
    } else {
      shake.amount = 0;
    }
    camera.lookAt(cur.look);

    // --- Day/night ---
    const d = daylightOf(dayClock);
    const night = 1 - d;
    env.daylight = d;
    const angle = 2 * Math.PI * (dayClock - 0.25);
    sunDir.set(Math.cos(angle) * 0.6, Math.sin(angle), 0.55).normalize();
    const dusk = Math.max(0, 1 - Math.abs(d - 0.3) * 3.2);

    cTop.copy(SKY.nightTop).lerp(SKY.dayTop, d).lerp(SKY.duskTop, dusk * 0.6);
    cHor.copy(SKY.nightHorizon).lerp(SKY.dayHorizon, d).lerp(SKY.duskHorizon, dusk * 0.85);
    skyMat.uniforms.top.value.copy(cTop);
    skyMat.uniforms.horizon.value.copy(cHor);
    skyMat.uniforms.sunDir.value.copy(sunDir);
    skyMat.uniforms.sunPower.value = Math.min(1, d * 1.6 + dusk * 0.6);
    skyMat.uniforms.sunColor.value.copy(sunHigh).lerp(sunLow, dusk);
    if (scene.fog) scene.fog.color.copy(cHor);
    if (env.look === '2d' && scene.background) scene.background.copy(cHor);

    // One shadow-casting light: the sun by day, the moon at night.
    const sunUp = sunDir.y > -0.02;
    if (sunUp) {
      v.copy(sunDir);
      // Keep the light fairly high so shadows stay short and the street stays readable.
      v.y = Math.max(0.62, v.y);
    } else {
      // Moonlight comes from the front so the stand's face is never in the dark.
      v.set(-0.45, 0.8, 0.6);
    }
    sun.position.copy(v.normalize()).multiplyScalar(40);
    sun.target.position.set(0, 0, 0);
    if (sunUp) {
      sun.color.copy(sunLow).lerp(sunHigh, Math.min(1, d * 1.4));
      sun.intensity = 0.3 + 2.3 * d;
    } else {
      sun.color.copy(moonLight);
      sun.intensity = 1.0;
    }
    hemi.color.copy(ambNight).lerp(ambDay, d);
    hemi.groundColor.copy(groundNight).lerp(groundDay, d);
    hemi.intensity = 1.2 + 0.55 * d;
    renderer.toneMappingExposure = 1.02 + night * 0.2;

    moon.position.copy(sunDir).multiplyScalar(-250);
    moon.visible = sunDir.y < 0.25;
    starMat.opacity = Math.pow(night, 2.2);
    cTmp.copy(cloudNight).lerp(cloudDay, d).lerp(cloudDusk, dusk * 0.55);
    cloudMat.color.copy(cTmp);
    for (const c of clouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 130) c.position.x = -130;
    }

    const glow = 0.08 + 1.7 * night;
    for (const m of env.glowMats) m.emissiveIntensity = glow * (m.userData.glow ?? 1);
    standLight.intensity = 38 * night;
    for (const m of env.nightFades) m.opacity = (m.userData.base || 0.5) * night;
    for (const fn of env.updaters) fn(dt, env.time, d);
    frameNo++;
    if (frameNo % 2 === 0) renderer.shadowMap.needsUpdate = true;
    if (quality === 'auto') govern(dt);
  }

  let frameNo = 0;

  function setShadows(on) {
    if (renderer.shadowMap.enabled === on) return;
    renderer.shadowMap.enabled = on;
    sun.castShadow = on;
    scene.traverse((o) => {
      if (!o.material) return;
      (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; });
    });
  }

  // Graphics quality: 'high' = full resolution and shadows, 'low' = fewer pixels and no
  // real-time shadows, 'auto' = start high and step down if the frame rate is low.
  function setQuality(q) {
    quality = q;
    gov.frames = 0;
    gov.time = 0;
    gov.warmup = 3;
    ratio = q === 'low' ? 1 : maxRatio;
    renderer.setPixelRatio(ratio);
    standLight.visible = q !== 'low';
    setShadows(q !== 'low');
    resize();
  }

  // Resolution governor: if the frame rate stays low, render fewer pixels. It only steps
  // down (never back up) so it cannot oscillate; a resize or reload starts at full again.
  const gov = { frames: 0, time: 0, warmup: 3 };
  function govern(dt) {
    if (gov.warmup > 0) { gov.warmup -= dt; return; }
    gov.frames++;
    gov.time += dt;
    if (gov.time < 2) return;
    const fps = gov.frames / gov.time;
    gov.frames = 0;
    gov.time = 0;
    if (fps < 45 && ratio > 1) {
      ratio = Math.max(1, ratio - 0.25);
      renderer.setPixelRatio(ratio);
      resize();
      env.pixelRatio = ratio;
    } else if (fps < 30 && renderer.shadowMap.enabled && ratio <= 1) {
      // Last resort on very slow devices: drop real-time shadows.
      setShadows(false);
    }
  }

  function resize() {
    const w = canvas.clientWidth || globalThis.innerWidth;
    const h = canvas.clientHeight || globalThis.innerHeight;
    fit(w, h);
  }

  // Projects a world position to CSS pixels, for floating text and sign labels.
  function toScreen(pos) {
    v.set(pos[0], pos[1], pos[2]).project(camera);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h, front: v.z < 1, w, h };
  }

  // Switches the art style. '2d' hides the sky and clouds, drops shadows and fog, and
  // replaces every lit material with a flat twin (src/render/style.js).
  function setLook(mode) {
    const flat = mode === '2d';
    env.look = flat ? '2d' : '3d';
    if (flat) styleTree(scene);
    else unstyleTree(scene);
    skyParts.sky.visible = !flat;
    skyParts.stars.visible = !flat;
    if (skyParts.moon) skyParts.moon.visible = !flat;
    for (const c of skyParts.clouds) c.visible = !flat;
    scene.fog = flat ? null : fogRef;
    scene.background = flat ? new THREE.Color('#bfe6fb') : null;
    setShadows(!flat && quality !== 'low');
    if (env.lastLayout) setLocation(env.lastLayout, true);
  }

  // Anything built later (street, customers, pizzas) must follow the current look.
  function styleNew(obj) {
    if (env.look === '2d') styleTree(obj);
  }

  Object.assign(env, { update, focus, shakeCam, resize, toScreen, recomputeGoal, setLocation, setQuality, setLook, styleNew });
  setLocation(layout);
  return env;
}
