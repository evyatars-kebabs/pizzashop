// Renderer, camera, lights, framing, camera focus transitions and day/night lighting.
import * as THREE from 'three';
import { daylightOf } from '../game/economy.js';

const v = new THREE.Vector3();

export function createScene(canvas, locData) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  let sky = locData.sky;
  let baseFov = locData.camera.fov;
  const skyColor = new THREE.Color(sky.day);
  scene.background = skyColor;
  scene.fog = new THREE.Fog(skyColor.clone(), 26, 70);

  const camera = new THREE.PerspectiveCamera(locData.camera.fov, 1, 0.1, 200);
  const hemi = new THREE.HemisphereLight(0xffffff, 0x886644, 0.8);
  const sun = new THREE.DirectionalLight(0xfff1d6, 1.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 });
  sun.shadow.bias = -0.0008;
  scene.add(hemi, sun, sun.target);

  const base = {
    pos: new THREE.Vector3(...locData.camera.position),
    target: new THREE.Vector3(...locData.camera.target),
  };
  const cur = { pos: base.pos.clone(), look: base.target.clone() };
  const goal = { pos: base.pos.clone(), look: base.target.clone() };
  const shake = { amount: 0, time: 0 };

  const env = { renderer, scene, camera, hemi, sun, sky, daylight: 0.8, glowMats: [] };

  function fit(w, h) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Portrait phones need the camera further back so the stand and queue both fit.
    const portrait = Math.max(0, 0.75 - camera.aspect);
    camera.fov = baseFov + portrait * 40;
    camera.updateProjectionMatrix();
    recomputeGoal();
  }

  function recomputeGoal() {
    const dist = 1 + Math.max(0, 0.75 - camera.aspect) * 1.2;
    const offsetBase = base.pos.clone().sub(base.target);
    goal.pos.copy(base.target).add(offsetBase.multiplyScalar(dist));
    goal.look.copy(base.target);
  }

  // Zoom toward a station for a mini-game; null returns to the default view.
  function focus(stationPos) {
    if (!stationPos) {
      recomputeGoal();
      return;
    }
    const s = new THREE.Vector3(...stationPos);
    goal.look.copy(s).add(new THREE.Vector3(0, 0.3, 0));
    goal.pos.copy(s).add(new THREE.Vector3(0, 1.6, 3.0));
  }

  // Switches the framing and sky to another location. Snaps the camera so it doesn't glide across.
  function setLocation(locData) {
    sky = locData.sky;
    baseFov = locData.camera.fov;
    base.pos.set(...locData.camera.position);
    base.target.set(...locData.camera.target);
    recomputeGoal();
    cur.pos.copy(goal.pos);
    cur.look.copy(goal.look);
    camera.fov = baseFov;
    camera.updateProjectionMatrix();
    resize();
  }

  function shakeCam(amount) {
    shake.amount = Math.max(shake.amount, amount);
    shake.time = 0.35;
  }

  function update(dt, dayClock) {
    const k = 1 - Math.exp(-dt * 4);
    cur.pos.lerp(goal.pos, k);
    cur.look.lerp(goal.look, k);
    camera.position.copy(cur.pos);
    if (shake.time > 0) {
      shake.time -= dt;
      const a = shake.amount * Math.max(0, shake.time / 0.35);
      camera.position.x += (Math.random() - 0.5) * a;
      camera.position.y += (Math.random() - 0.5) * a;
    } else {
      shake.amount = 0;
    }
    camera.lookAt(cur.look);

    // Day/night: sun arcs over the stand, sky and light fade with it.
    const daylight = daylightOf(dayClock);
    env.daylight = daylight;
    const angle = 2 * Math.PI * (dayClock - 0.25);
    sun.position.set(Math.cos(angle) * 9, Math.max(1.5, Math.sin(angle) * 10), 6);
    sun.target.position.set(0, 0, 0);
    sun.intensity = 0.15 + 1.1 * daylight;
    sun.color.setRGB(1, 0.92 + 0.06 * daylight, 0.8 + 0.2 * daylight);
    hemi.intensity = 0.35 + 0.5 * daylight;

    const night = new THREE.Color(sky.night);
    const day = new THREE.Color(sky.day);
    const dusk = new THREE.Color(sky.dusk);
    const tint = Math.max(0, 1 - Math.abs(daylight - 0.35) * 4);
    skyColor.copy(night).lerp(day, daylight).lerp(dusk, tint * 0.6);
    scene.fog.color.copy(skyColor);

    const glow = 0.15 + 0.9 * (1 - daylight);
    for (const m of env.glowMats) m.emissiveIntensity = glow;
  }

  function resize() {
    const w = canvas.clientWidth || globalThis.innerWidth;
    const h = canvas.clientHeight || globalThis.innerHeight;
    fit(w, h);
  }

  // Projects a world position to CSS pixels, for floating text.
  function toScreen(pos) {
    v.set(pos[0], pos[1], pos[2]).project(camera);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    return { x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h, front: v.z < 1 };
  }

  return { ...env, update, focus, shakeCam, resize, toScreen, recomputeGoal, setLocation };
}
