// Shared rendering building blocks: cached materials, procedural textures, and a geometry
// batcher. The batcher merges many coloured primitives into ONE mesh, which is how the scene
// can be detailed and still cheap to draw on a phone.
import * as THREE from 'three';

// ---------- Materials ----------

// Everything uses Lambert shading: it is far cheaper per pixel than physically based
// materials, which matters on phones, and it suits the flat, stylised look.
const matCache = new Map();

// Drops options that only physically based materials understand.
function lambertOpts(opts) {
  const { roughness, metalness, ...rest } = opts;
  return rest;
}

export function mat(color, opts = {}) {
  const key = color + '|' + JSON.stringify(opts);
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshLambertMaterial({ color, ...lambertOpts(opts) }));
  }
  return matCache.get(key);
}

// For objects whose colour changes per instance (pizzas, patience bars).
export function uniqueMat(color, opts = {}) {
  return new THREE.MeshLambertMaterial({ color, ...lambertOpts(opts) });
}

// Emissive material that brightens at night. env.glowMats is driven by scene.update().
export function glowMat(env, color, emissive, strength = 1, opts = {}) {
  const m = new THREE.MeshLambertMaterial({
    color, emissive: new THREE.Color(emissive), emissiveIntensity: 0.2, ...lambertOpts(opts),
  });
  m.userData.glow = strength;
  env.glowMats.push(m);
  return m;
}

// Vertex-coloured materials used by batches.
export const VC = new THREE.MeshLambertMaterial({ vertexColors: true });
export const VC_FLAT = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
// Metal bits get a cheap highlight from Phong.
export const VC_SHINY = new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 60, specular: new THREE.Color('#555555') });

// ---------- Geometry cache ----------

const geoCache = new Map();
export function geo(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}

export const G = {
  box: () => geo('box', () => new THREE.BoxGeometry(1, 1, 1)),
  cyl: (seg = 14) => geo('cyl' + seg, () => new THREE.CylinderGeometry(1, 1, 1, seg)),
  cone: (seg = 14) => geo('cone' + seg, () => new THREE.ConeGeometry(1, 1, seg)),
  sphere: (w = 16, h = 12) => geo(`sph${w}_${h}`, () => new THREE.SphereGeometry(1, w, h)),
  dome: (w = 16, h = 8) => geo(`dome${w}_${h}`, () => new THREE.SphereGeometry(1, w, h, 0, Math.PI * 2, 0, Math.PI / 2)),
  ico: (d = 0) => geo('ico' + d, () => new THREE.IcosahedronGeometry(1, d)),
  torus: (tube = 0.2, seg = 20) => geo(`tor${tube}_${seg}`, () => new THREE.TorusGeometry(1, tube, 8, seg)),
  capsule: (r, len) => geo(`cap${r}_${len}`, () => new THREE.CapsuleGeometry(r, len, 5, 12)),
  ring: () => geo('ring', () => new THREE.RingGeometry(0.5, 0.56, 32)),
  circle: () => geo('circle', () => new THREE.CircleGeometry(1, 24)),
};

// ---------- Batcher ----------

const nonIndexed = new WeakMap();
function flatGeo(g) {
  if (!g.index) return g;
  if (!nonIndexed.has(g)) nonIndexed.set(g, g.toNonIndexed());
  return nonIndexed.get(g);
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _v = new THREE.Vector3();
const _n = new THREE.Vector3();
const _nm = new THREE.Matrix3();
const _c = new THREE.Color();

export class Batch {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.col = [];
  }

  // Generic: geometry placed by centre position, euler rotation and scale.
  add(geometry, color, pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) {
    const g = flatGeo(geometry);
    _e.set(rot[0], rot[1], rot[2]);
    _q.setFromEuler(_e);
    _p.set(pos[0], pos[1], pos[2]);
    _s.set(scale[0], scale[1], scale[2]);
    _m.compose(_p, _q, _s);
    _nm.getNormalMatrix(_m);
    _c.set(color);
    const P = g.attributes.position;
    const N = g.attributes.normal;
    for (let i = 0; i < P.count; i++) {
      _v.fromBufferAttribute(P, i).applyMatrix4(_m);
      _n.fromBufferAttribute(N, i).applyMatrix3(_nm).normalize();
      this.pos.push(_v.x, _v.y, _v.z);
      this.nor.push(_n.x, _n.y, _n.z);
      this.col.push(_c.r, _c.g, _c.b);
    }
    return this;
  }

  // Convenience shapes. "pos" is the BOTTOM centre for box/cyl/cone (things stand on it),
  // and the centre for sphere/torus/...C variants.
  box(size, color, pos, rot = [0, 0, 0]) {
    return this.add(G.box(), color, [pos[0], pos[1] + size[1] / 2, pos[2]], rot, size);
  }

  boxC(size, color, pos, rot = [0, 0, 0]) {
    return this.add(G.box(), color, pos, rot, size);
  }

  cyl(rTop, rBottom, h, color, pos, rot = [0, 0, 0], seg = 14) {
    const g = rTop === rBottom
      ? G.cyl(seg)
      : geo(`cylT${(rTop / rBottom).toFixed(3)}_${seg}`, () => new THREE.CylinderGeometry(rTop / rBottom, 1, 1, seg));
    return this.add(g, color, [pos[0], pos[1] + h / 2, pos[2]], rot, [rBottom, h, rBottom]);
  }

  cylC(r, h, color, pos, rot = [0, 0, 0], seg = 12) {
    return this.add(G.cyl(seg), color, pos, rot, [r, h, r]);
  }

  cone(r, h, color, pos, rot = [0, 0, 0], seg = 14) {
    return this.add(G.cone(seg), color, [pos[0], pos[1] + h / 2, pos[2]], rot, [r, h, r]);
  }

  sphere(r, color, pos, scale = [1, 1, 1], seg = [16, 12]) {
    return this.add(G.sphere(seg[0], seg[1]), color, pos, [0, 0, 0], [r * scale[0], r * scale[1], r * scale[2]]);
  }

  dome(r, color, pos, scale = [1, 1, 1], rot = [0, 0, 0]) {
    return this.add(G.dome(), color, pos, rot, [r * scale[0], r * scale[1], r * scale[2]]);
  }

  ico(r, color, pos, scale = [1, 1, 1], rot = [0, 0, 0]) {
    return this.add(G.ico(1), color, pos, rot, [r * scale[0], r * scale[1], r * scale[2]]);
  }

  torus(R, tube, color, pos, rot = [0, 0, 0], seg = 20) {
    const g = G.torus(Number((tube / R).toFixed(3)), seg);
    return this.add(g, color, pos, rot, [R, R, R]);
  }

  get empty() {
    return this.pos.length === 0;
  }

  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeBoundingSphere();
    return g;
  }

  mesh(material = VC, { cast = true, receive = true } = {}) {
    const m = new THREE.Mesh(this.geometry(), material);
    m.castShadow = cast;
    m.receiveShadow = receive;
    return m;
  }
}

// ---------- Procedural textures (drawn once on a canvas; no image files, no text) ----------

const texCache = new Map();

function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  draw(ctx, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 2;
  return t;
}

// Deterministic noise so textures look the same every run.
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function speckle(ctx, size, r, count, alpha, light = true) {
  for (let i = 0; i < count; i++) {
    const a = r() * alpha;
    ctx.fillStyle = light ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
    ctx.fillRect(r() * size, r() * size, 1 + r() * 2, 1 + r() * 2);
  }
}

const DRAW = {
  pavers(ctx, s) {
    const r = rng(7);
    ctx.fillStyle = '#b89a78';
    ctx.fillRect(0, 0, s, s);
    const n = 4;
    const w = s / n;
    for (let y = 0; y < n * 2; y++) {
      for (let x = -1; x < n; x++) {
        const off = (y % 2) * (w / 2);
        const shade = 196 + Math.floor(r() * 34);
        ctx.fillStyle = `rgb(${shade + 22},${shade - 6},${shade - 44})`;
        ctx.fillRect(x * w + off + 2, y * (w / 2) + 2, w - 4, w / 2 - 4);
      }
    }
    speckle(ctx, s, r, 900, 0.07, false);
    speckle(ctx, s, r, 500, 0.06, true);
  },
  asphalt(ctx, s) {
    const r = rng(11);
    ctx.fillStyle = '#4b4e55';
    ctx.fillRect(0, 0, s, s);
    speckle(ctx, s, r, 2600, 0.09, true);
    speckle(ctx, s, r, 2600, 0.14, false);
  },
  brick(ctx, s) {
    const r = rng(3);
    ctx.fillStyle = '#d9c7b0';
    ctx.fillRect(0, 0, s, s);
    const rows = 8;
    const h = s / rows;
    const w = s / 4;
    for (let y = 0; y < rows; y++) {
      for (let x = -1; x < 4; x++) {
        const off = (y % 2) * (w / 2);
        const k = r();
        ctx.fillStyle = `rgb(${150 + k * 40},${66 + k * 26},${48 + k * 18})`;
        ctx.fillRect(x * w + off + 2, y * h + 2, w - 4, h - 4);
      }
    }
    speckle(ctx, s, r, 700, 0.08, false);
  },
  wood(ctx, s) {
    const r = rng(5);
    const planks = 4;
    const w = s / planks;
    for (let i = 0; i < planks; i++) {
      const k = r();
      ctx.fillStyle = `rgb(${176 + k * 26},${118 + k * 22},${66 + k * 16})`;
      ctx.fillRect(i * w, 0, w, s);
      ctx.fillStyle = 'rgba(70,40,15,0.5)';
      ctx.fillRect(i * w, 0, 2, s);
      for (let j = 0; j < 14; j++) {
        ctx.fillStyle = `rgba(90,55,25,${0.05 + r() * 0.1})`;
        ctx.fillRect(i * w + r() * w, 0, 1 + r() * 2, s);
      }
    }
  },
  plaster(ctx, s) {
    const r = rng(9);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, s, s);
    speckle(ctx, s, r, 2200, 0.05, false);
    for (let i = 0; i < 14; i++) {
      ctx.fillStyle = `rgba(0,0,0,${0.015 + r() * 0.02})`;
      ctx.fillRect(r() * s, r() * s, 30 + r() * 80, 8 + r() * 30);
    }
  },
  tiles(ctx, s) {
    ctx.fillStyle = '#d7d2c8';
    ctx.fillRect(0, 0, s, s);
    const n = 4;
    const w = s / n;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        ctx.fillStyle = (x + y) % 2 ? '#fbf7ee' : '#f1ebde';
        ctx.fillRect(x * w + 2, y * w + 2, w - 4, w - 4);
      }
    }
  },
  checker(ctx, s) {
    const n = 4;
    const w = s / n;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        ctx.fillStyle = (x + y) % 2 ? '#f4ead8' : '#b5483a';
        ctx.fillRect(x * w, y * w, w, w);
      }
    }
  },
  stripes(ctx, s) {
    ctx.fillStyle = '#fff6e6';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#d8402f';
    ctx.fillRect(0, 0, s / 2, s);
    const r = rng(2);
    speckle(ctx, s, r, 500, 0.04, false);
  },
  rooftiles(ctx, s) {
    const r = rng(13);
    ctx.fillStyle = '#8f3f2a';
    ctx.fillRect(0, 0, s, s);
    const rows = 6;
    const h = s / rows;
    const w = s / 6;
    for (let y = 0; y < rows; y++) {
      for (let x = -1; x < 6; x++) {
        const off = (y % 2) * (w / 2);
        const k = r();
        ctx.fillStyle = `rgb(${186 + k * 30},${92 + k * 24},${58 + k * 16})`;
        ctx.beginPath();
        ctx.ellipse(x * w + off + w / 2, y * h + h * 0.35, w / 2 - 1.5, h * 0.62, 0, 0, Math.PI);
        ctx.fill();
      }
    }
  },
};

export function texture(name, rx = 1, ry = 1) {
  if (!texCache.has(name)) texCache.set(name, canvasTex(256, DRAW[name]));
  const key = `${name}|${rx}|${ry}`;
  if (!texCache.has(key)) {
    const t = texCache.get(name).clone();
    t.repeat.set(rx, ry);
    t.needsUpdate = true;
    texCache.set(key, t);
  }
  return texCache.get(key);
}

const texMatCache = new Map();
export function texMat(name, rx = 1, ry = 1, opts = {}) {
  const key = `${name}|${rx}|${ry}|${JSON.stringify(opts)}`;
  if (!texMatCache.has(key)) {
    texMatCache.set(key, new THREE.MeshLambertMaterial({ map: texture(name, rx, ry), ...lambertOpts(opts) }));
  }
  return texMatCache.get(key);
}

// A textured box standing on pos (bottom centre).
export function texBox(size, name, pos, repeat = [1, 1], opts = {}, rot = [0, 0, 0]) {
  const m = new THREE.Mesh(G.box(), texMat(name, repeat[0], repeat[1], opts));
  m.scale.set(size[0], size[1], size[2]);
  m.position.set(pos[0], pos[1] + size[1] / 2, pos[2]);
  m.rotation.set(rot[0], rot[1], rot[2]);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// Soft round shadow blob for characters and small props (cheap ambient occlusion).
const blobMat = new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.2, depthWrite: false });
export function blobShadow(radius = 0.34) {
  const m = new THREE.Mesh(G.circle(), blobMat);
  m.rotation.x = -Math.PI / 2;
  m.scale.setScalar(radius);
  m.position.y = 0.02;
  m.renderOrder = 1;
  return m;
}

// A soft pool of light on the ground under a lamp. Much cheaper than a real light:
// it is one transparent quad whose opacity follows the night (see scene.update).
let poolTex = null;
export function lightPool(env, radius, color = '#ffc56b', strength = 0.55) {
  if (!poolTex) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.35)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    poolTex = new THREE.CanvasTexture(c);
    poolTex.colorSpace = THREE.SRGBColorSpace;
  }
  const m = new THREE.MeshBasicMaterial({ map: poolTex, color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false });
  m.userData.base = strength;
  env.nightFades.push(m);
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), m);
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = 2;
  return mesh;
}
