// Shared geometry and material cache. Keeping draw calls low: reuse everything possible.
import * as THREE from 'three';

const matCache = new Map();
const geoCache = new Map();

export function mat(color, opts = {}) {
  const key = color + '|' + JSON.stringify(opts);
  if (!matCache.has(key)) {
    const m = new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, metalness: 0, ...opts });
    matCache.set(key, m);
  }
  return matCache.get(key);
}

// Materials that must be unique per object (they change colour per object) are created with this.
export function uniqueMat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, ...opts });
}

export function geo(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}

export const G = {
  box: () => geo('box', () => new THREE.BoxGeometry(1, 1, 1)),
  cyl: () => geo('cyl', () => new THREE.CylinderGeometry(1, 1, 1, 8)),
  cylFine: () => geo('cylFine', () => new THREE.CylinderGeometry(1, 1, 1, 16)),
  sphere: () => geo('sphere', () => new THREE.SphereGeometry(1, 8, 6)),
  ico: () => geo('ico', () => new THREE.IcosahedronGeometry(1, 0)),
  cone: () => geo('cone', () => new THREE.ConeGeometry(1, 1, 3)),
  ring: () => geo('ring', () => new THREE.RingGeometry(0.5, 0.62, 24)),
};

// Helper that builds a mesh with a shared geometry and cached material, scaled to size.
export function boxMesh(size, color, pos = [0, 0, 0], opts = {}) {
  const m = new THREE.Mesh(G.box(), mat(color, opts));
  m.scale.set(size[0], size[1], size[2]);
  m.position.set(pos[0], pos[1] + size[1] / 2, pos[2]);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}
