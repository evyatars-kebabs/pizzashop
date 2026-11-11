// Character builder shared by customers and staff. A person is one merged body mesh plus
// four limb meshes that swing, so a crowd stays cheap to draw.
import * as THREE from 'three';
import { Batch, VC, G, blobShadow } from './assets.js';

const limbGeoCache = new Map();

function legGeometry(pants, shoe) {
  const key = 'leg|' + pants + '|' + shoe;
  if (!limbGeoCache.has(key)) {
    const b = new Batch();
    b.add(G.capsule(0.085, 0.36), pants, [0, -0.27, 0]);
    b.box([0.15, 0.09, 0.26], shoe, [0, -0.58, 0.04]);
    limbGeoCache.set(key, b.geometry());
  }
  return limbGeoCache.get(key);
}

function armGeometry(sleeve, skin) {
  const key = 'arm|' + sleeve + '|' + skin;
  if (!limbGeoCache.has(key)) {
    const b = new Batch();
    b.add(G.capsule(0.065, 0.3), sleeve, [0, -0.2, 0]);
    b.sphere(0.072, skin, [0, -0.45, 0]);
    limbGeoCache.set(key, b.geometry());
  }
  return limbGeoCache.get(key);
}

// o: { shirt, pants, skin, hair, hairStyle: 'short'|'bun'|'long'|'bald', hat: 'none'|'cap'|'toque',
//      hatColor, apron (colour or null), shoe, scale }
export function makePerson(o) {
  const group = new THREE.Group();
  const b = new Batch();
  const skin = o.skin || '#e0ac7e';

  // Torso, neck, head.
  b.add(G.capsule(0.2, 0.4), o.shirt, [0, 0.98, 0], [0, 0, 0], [1.05, 1, 0.8]);
  b.cyl(0.07, 0.07, 0.1, skin, [0, 1.34, 0]);
  b.sphere(0.2, skin, [0, 1.6, 0], [1, 1.05, 0.98]);
  // Face: eyes and a small smile.
  b.sphere(0.027, '#2a1d14', [-0.075, 1.62, 0.178]);
  b.sphere(0.027, '#2a1d14', [0.075, 1.62, 0.178]);
  b.boxC([0.09, 0.016, 0.02], '#8a3b2a', [0, 1.525, 0.186]);
  // Ears.
  b.sphere(0.04, skin, [-0.2, 1.6, 0]);
  b.sphere(0.04, skin, [0.2, 1.6, 0]);

  const hair = o.hair || '#3b2a1e';
  const style = o.hairStyle || 'short';
  if (style !== 'bald') {
    b.dome(0.215, hair, [0, 1.63, -0.015], [1, 1.02, 1.02], [-0.25, 0, 0]);
    if (style === 'bun') b.sphere(0.1, hair, [0, 1.86, -0.08]);
    if (style === 'long') b.add(G.capsule(0.15, 0.22), hair, [0, 1.45, -0.12], [0, 0, 0], [1.25, 1, 0.6]);
  }

  if (o.hat === 'cap') {
    const hc = o.hatColor || '#d8402f';
    b.dome(0.21, hc, [0, 1.7, 0], [1, 0.75, 1]);
    b.boxC([0.26, 0.03, 0.2], hc, [0, 1.71, 0.2], [0.15, 0, 0]);
  } else if (o.hat === 'toque') {
    b.cyl(0.17, 0.165, 0.2, '#ffffff', [0, 1.74, 0]);
    b.sphere(0.21, '#ffffff', [0, 2.0, 0], [1, 0.72, 1]);
  }

  if (o.apron) {
    b.boxC([0.32, 0.5, 0.04], o.apron, [0, 0.9, 0.165]);
    b.boxC([0.34, 0.04, 0.05], o.apron, [0, 1.12, 0.165]);
  }

  // Hips.
  b.add(G.capsule(0.17, 0.08), o.pants || '#3d4a66', [0, 0.66, 0], [0, 0, Math.PI / 2], [1, 1, 0.85]);

  const body = b.mesh(VC);
  group.add(body);

  const limbMat = VC;
  const mk = (geometry, x, y) => {
    const pivot = new THREE.Group();
    pivot.position.set(x, y, 0);
    const m = new THREE.Mesh(geometry, limbMat);
    m.castShadow = true;
    pivot.add(m);
    group.add(pivot);
    return pivot;
  };
  const legG = legGeometry(o.pants || '#3d4a66', o.shoe || '#2b2b33');
  const armG = armGeometry(o.shirt, skin);
  const legL = mk(legG, -0.105, 0.62);
  const legR = mk(legG, 0.105, 0.62);
  const armL = mk(armG, -0.275, 1.27);
  const armR = mk(armG, 0.275, 1.27);
  armL.rotation.z = -0.12;
  armR.rotation.z = 0.12;

  group.add(blobShadow(0.36));
  if (o.scale) group.scale.setScalar(o.scale);
  return { group, body, armL, armR, legL, legR };
}

// Walk cycle: swing legs and arms. amount 0..1, phase in radians.
export function poseWalk(p, phase, amount) {
  const s = Math.sin(phase) * 0.65 * amount;
  p.legL.rotation.x = s;
  p.legR.rotation.x = -s;
  p.armL.rotation.x = -s * 0.8;
  p.armR.rotation.x = s * 0.8;
}

const SKIN = ['#f2c9a0', '#e0ac7e', '#c68a5c', '#8d5a3b', '#f7d9bd', '#a8704a'];
const HAIR = ['#2b1d14', '#5a3a22', '#8a5a2b', '#c9a15a', '#1c1c22', '#7a2f1e', '#d9d9d9'];
const SHIRT = ['#4ea8de', '#ef476f', '#ffd166', '#06d6a0', '#9b5de5', '#f78c6b', '#3d9a8b', '#f4f1de', '#e76f51', '#577590'];
const PANTS = ['#3d4a66', '#2f3e46', '#6b4f3a', '#4a4e69', '#1f2a44', '#7a8aa0'];
const STYLES = ['short', 'short', 'bun', 'long', 'short', 'bald', 'long'];

// A varied but deterministic customer look from an id.
export function customerLook(id) {
  const h = (n) => Math.abs(Math.sin(id * 12.9898 + n * 78.233) * 43758.5453) % 1;
  const pick = (arr, n) => arr[Math.floor(h(n) * arr.length)];
  const hatRoll = h(6);
  return {
    skin: pick(SKIN, 1),
    hair: pick(HAIR, 2),
    shirt: pick(SHIRT, 3),
    pants: pick(PANTS, 4),
    hairStyle: pick(STYLES, 5),
    hat: hatRoll > 0.84 ? 'cap' : 'none',
    hatColor: pick(SHIRT, 7),
    scale: 0.94 + h(8) * 0.12,
  };
}
