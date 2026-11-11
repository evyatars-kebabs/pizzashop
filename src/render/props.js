// Builds a street from its location data file. Adding a location = adding a JSON file.
// Static geometry is merged into a few meshes (solid, foliage, windows, lamp glow).
import * as THREE from 'three';
import { Batch, VC, VC_FLAT, glowMat, texMat, lightPool, G } from './assets.js';

const TRIM = '#f3ede0';
const _col = new THREE.Color();
function shade(hex, dl, ds = 0) {
  _col.set(hex).offsetHSL(0, ds, dl);
  return '#' + _col.getHexString();
}

// Deterministic 0..1 random numbers from any seed (negative seeds included).
function rng(seed) {
  let s = (Math.abs(Math.round(seed)) * 9301 + 49297) % 4294967296;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export function buildLocation(loc, env) {
  const group = new THREE.Group();
  group.name = 'location:' + loc.id;

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), texMat('pavers', 90, 90));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  const ctx = {
    env,
    group,
    solid: new Batch(),
    flat: new Batch(),
    glassDark: new Batch(),
    glassLit: new Batch(),
    lampGlow: new Batch(),
    lights: 0,
  };

  for (const p of loc.props) {
    const fn = PROPS[p.type];
    if (fn) fn(p, ctx);
    else console.warn('[props] unknown prop type', p.type);
  }

  if (!ctx.solid.empty) group.add(ctx.solid.mesh(VC));
  if (!ctx.flat.empty) group.add(ctx.flat.mesh(VC_FLAT));
  if (!ctx.glassDark.empty) {
    group.add(ctx.glassDark.mesh(VC, { cast: false }));
  }
  if (!ctx.glassLit.empty) {
    const m = glowMat(env, '#ffffff', '#ffb45e', 0.5, { vertexColors: true, roughness: 0.3 });
    group.add(ctx.glassLit.mesh(m, { cast: false }));
  }
  if (!ctx.lampGlow.empty) {
    const m = glowMat(env, '#fff3d0', '#ffc56b', 2.2);
    group.add(ctx.lampGlow.mesh(m, { cast: false, receive: false }));
  }
  return group;
}

const PROPS = {
  road(p, { group, solid, env }) {
    const z = p.z;
    const w = p.width;
    const r = new THREE.Mesh(new THREE.PlaneGeometry(200, w), texMat('asphalt', 60, 3));
    r.rotation.x = -Math.PI / 2;
    r.position.set(0, 0.012, z);
    r.receiveShadow = true;
    group.add(r);
    for (let x = -96; x <= 96; x += 4.5) solid.box([1.9, 0.012, 0.14], '#f2e3a6', [x, 0.014, z]);
    for (const side of [-1, 1]) {
      solid.box([200, 0.16, 0.34], '#cfc8bc', [0, 0, z + side * (w / 2 + 0.17)]);
      solid.box([200, 0.012, 0.1], '#e9e4d8', [0, 0.014, z + side * (w / 2 - 0.35)]);
    }
    // Zebra crossing.
    for (let i = 0; i < 6; i++) solid.box([0.55, 0.012, w - 1.2], '#ecebe4', [9.5 + i * 1.05, 0.015, z]);
    // Manhole cover.
    solid.cyl(0.45, 0.45, 0.012, '#3a3c42', [-3.5, 0.016, z + 1.2], [0, 0, 0], 16);
    traffic(p, group, env);
  },

  building(p, { solid, glassDark, glassLit }) {
    const [w, h, d] = p.size;
    const [x, , z] = p.pos;
    const col = p.color;
    const r = rng(Math.round(x * 7 + h * 13 + 5));
    const fz = z + d / 2;
    const groundH = 3.3;

    solid.box([w, h, d], col, [x, 0, z]);
    solid.box([w + 0.08, groundH, d + 0.08], shade(col, -0.13, -0.05), [x, 0, z]);
    solid.box([w + 0.3, 0.18, d + 0.3], TRIM, [x, groundH, z]);
    solid.box([w + 0.5, 0.26, d + 0.5], TRIM, [x, h, z]);
    solid.box([w + 0.16, 0.55, d + 0.16], shade(col, -0.08), [x, h + 0.26, z]);
    solid.box([w - 0.4, 0.1, d - 0.4], '#6b6f76', [x, h + 0.3, z]);

    // Shop front: display window, door, awning.
    const awn = p.awning || ['#d8402f', '#2f7d6a', '#e9a23b', '#4a6fa5'][Math.floor(r() * 4)];
    const sw = w * 0.5;
    const sx = x - w * 0.16;
    solid.box([sw + 0.24, 2.15, 0.1], TRIM, [sx, 0.45, fz + 0.02]);
    (r() < 0.7 ? glassLit : glassDark).box([sw, 1.9, 0.08], '#9fc3d6', [sx, 0.58, fz + 0.06]);
    solid.box([sw + 0.3, 0.45, 0.2], shade(col, -0.22), [sx, 0, fz + 0.06]);
    solid.box([1.15, 2.4, 0.1], TRIM, [x + w * 0.33, 0, fz + 0.02]);
    solid.box([0.95, 2.25, 0.1], shade(awn, -0.18), [x + w * 0.33, 0, fz + 0.06]);
    glassDark.box([0.6, 0.8, 0.06], '#9fc3d6', [x + w * 0.33, 1.2, fz + 0.1]);
    solid.boxC([sw + 0.6, 0.07, 1.25], awn, [sx, 2.82, fz + 0.58], [0.34, 0, 0]);
    solid.box([sw + 0.6, 0.22, 0.05], shade(awn, 0.1), [sx, 2.48, fz + 1.16]);

    // Upper floors.
    const rows = Math.max(1, Math.floor((h - groundH - 0.9) / 2.25));
    const cols = Math.max(1, Math.floor((w - 0.7) / 1.75));
    const shutter = ['#2f6b5a', '#8a3b2a', '#3d5a80', '#5b4636'][Math.floor(r() * 4)];
    const hasShutters = r() < 0.6;
    for (let row = 0; row < rows; row++) {
      for (let c = 0; c < cols; c++) {
        const wx = x - ((cols - 1) * 1.75) / 2 + c * 1.75;
        const wy = groundH + 0.75 + row * 2.25;
        solid.box([1.06, 1.46, 0.08], TRIM, [wx, wy - 0.08, fz + 0.01]);
        (r() < 0.42 ? glassLit : glassDark).box([0.88, 1.3, 0.06], '#8fb4cc', [wx, wy, fz + 0.05]);
        solid.box([0.05, 1.3, 0.04], TRIM, [wx, wy, fz + 0.09]);
        solid.box([1.2, 0.09, 0.2], TRIM, [wx, wy - 0.12, fz + 0.06]);
        if (hasShutters) {
          solid.box([0.22, 1.32, 0.05], shutter, [wx - 0.58, wy, fz + 0.05]);
          solid.box([0.22, 1.32, 0.05], shutter, [wx + 0.58, wy, fz + 0.05]);
        } else if (r() < 0.3) {
          // Small balcony.
          solid.box([1.4, 0.08, 0.5], '#4a4e57', [wx, wy - 0.2, fz + 0.28]);
          solid.box([1.4, 0.5, 0.04], '#4a4e57', [wx, wy - 0.12, fz + 0.52]);
        }
      }
    }
    // Side windows (seen in landscape).
    const sideCols = Math.max(1, Math.floor((d - 0.8) / 2.1));
    for (const side of [-1, 1]) {
      for (let row = 0; row < rows; row++) {
        for (let c = 0; c < sideCols; c++) {
          const wz = z - ((sideCols - 1) * 2.1) / 2 + c * 2.1;
          const wy = groundH + 0.75 + row * 2.25;
          (r() < 0.35 ? glassLit : glassDark).box([0.06, 1.3, 0.88], '#8fb4cc', [x + side * (w / 2 + 0.02), wy, wz]);
        }
      }
    }
    // Roof clutter.
    if (r() < 0.7) solid.box([1.1, 0.7, 0.9], '#9aa0a8', [x - w * 0.22, h + 0.4, z - d * 0.1]);
    if (r() < 0.6) {
      solid.cyl(0.6, 0.6, 1.2, '#7b5a3c', [x + w * 0.2, h + 0.9, z + d * 0.1]);
      solid.cone(0.68, 0.45, '#5b4636', [x + w * 0.2, h + 2.1, z + d * 0.1]);
      solid.cyl(0.05, 0.05, 0.5, '#4a4e57', [x + w * 0.2 - 0.4, h + 0.4, z + d * 0.1]);
      solid.cyl(0.05, 0.05, 0.5, '#4a4e57', [x + w * 0.2 + 0.4, h + 0.4, z + d * 0.1]);
    }
    if (r() < 0.5) solid.box([0.5, 1.3, 0.5], shade(col, -0.2), [x + w * 0.36, h + 0.3, z - d * 0.25]);
  },

  tree(p, { solid, flat }) {
    const [x, , z] = p.pos;
    const s = p.scale || 1;
    const r = rng(Math.round(x * 31 + z * 17));
    const greens = ['#5fa052', '#6fb35f', '#4f8f47', '#7dbb62'];
    solid.cyl(0.92, 0.92, 0.03, '#5a5148', [x, 0.012, z], [0, 0, 0], 16);
    solid.cyl(0.13 * s, 0.2 * s, 1.9 * s, '#7b5236', [x, 0, z]);
    const blobs = [[0, 2.7, 0, 1.3], [0.75, 2.25, 0.25, 0.95], [-0.7, 2.3, -0.2, 0.9], [0.1, 3.5, 0.05, 0.85], [-0.15, 2.3, 0.7, 0.8]];
    for (const [bx, by, bz, br] of blobs) {
      flat.ico(br * s, greens[Math.floor(r() * greens.length)], [x + bx * s, by * s, z + bz * s], [1, 0.92, 1], [r() * 3, r() * 3, 0]);
    }
  },

  bush(p, { flat }) {
    const [x, , z] = p.pos;
    flat.ico(0.55, '#5fa052', [x, 0.4, z], [1.2, 0.8, 1]);
    flat.ico(0.42, '#6fb35f', [x + 0.5, 0.33, z + 0.15], [1, 0.8, 1], [1, 2, 0]);
    flat.ico(0.4, '#4f8f47', [x - 0.45, 0.3, z - 0.1], [1, 0.8, 1], [2, 1, 0]);
  },

  lamp(p, { solid, lampGlow, group, env }) {
    const [x, , z] = p.pos;
    const dark = '#2f3238';
    solid.cyl(0.12, 0.2, 0.35, dark, [x, 0, z]);
    solid.cyl(0.06, 0.07, 3.5, dark, [x, 0.3, z]);
    solid.boxC([0.7, 0.06, 0.06], dark, [x + 0.3, 3.75, z]);
    solid.cyl(0.2, 0.12, 0.1, dark, [x + 0.62, 3.6, z]);
    solid.cone(0.22, 0.16, dark, [x + 0.62, 3.7, z]);
    lampGlow.sphere(0.16, '#fff3d0', [x + 0.62, 3.5, z], [1, 1.15, 1], [10, 8]);
    const pool = lightPool(env, p.light ? 4.2 : 3.2);
    pool.position.set(x + 0.62, 0.03, z);
    group.add(pool);
  },

  bench(p, { solid }) {
    const [x, , z] = p.pos;
    const wood = '#a8703f';
    for (let i = 0; i < 3; i++) solid.box([1.7, 0.05, 0.13], wood, [x, 0.46, z - 0.16 + i * 0.16]);
    for (let i = 0; i < 2; i++) solid.box([1.7, 0.13, 0.05], wood, [x, 0.62 + i * 0.2, z - 0.28]);
    for (const sx of [-0.7, 0.7]) {
      solid.box([0.07, 0.46, 0.45], '#2f3238', [x + sx, 0, z]);
      solid.box([0.07, 0.55, 0.07], '#2f3238', [x + sx, 0.46, z - 0.28]);
    }
  },

  bin(p, { solid }) {
    const [x, , z] = p.pos;
    solid.cyl(0.3, 0.26, 0.85, '#3f6d7c', [x, 0, z], [0, 0, 0], 12);
    solid.cyl(0.33, 0.33, 0.08, '#2c4e59', [x, 0.85, z], [0, 0, 0], 12);
    solid.cyl(0.2, 0.2, 0.02, '#14242a', [x, 0.93, z], [0, 0, 0], 12);
  },

  hydrant(p, { solid }) {
    const [x, , z] = p.pos;
    solid.cyl(0.13, 0.16, 0.55, '#d8402f', [x, 0, z]);
    solid.dome(0.14, '#d8402f', [x, 0.55, z]);
    solid.cylC(0.06, 0.42, '#b53324', [x, 0.36, z], [0, 0, Math.PI / 2]);
    solid.cyl(0.19, 0.19, 0.05, '#b53324', [x, 0, z]);
  },

  planter(p, { solid, flat }) {
    const [x, , z] = p.pos;
    solid.box([1.3, 0.5, 0.55], '#8d5a3b', [x, 0, z]);
    solid.box([1.36, 0.07, 0.61], '#a8703f', [x, 0.5, z]);
    flat.ico(0.3, '#4f8f47', [x - 0.3, 0.68, z], [1.3, 0.7, 1]);
    flat.ico(0.3, '#5fa052', [x + 0.3, 0.68, z], [1.3, 0.7, 1], [1, 1, 0]);
    const colors = ['#ef476f', '#ffd166', '#f78c6b', '#c77dff', '#ffffff'];
    for (let i = 0; i < 6; i++) {
      flat.ico(0.11, colors[i % colors.length], [x - 0.5 + i * 0.2, 0.86 + (i % 2) * 0.09, z + ((i % 3) - 1) * 0.12]);
    }
  },

  // A-frame sidewalk sign. Its wording is an HTML label (src/ui/signs.js), not part of the image.
  sandwichBoard(p, { solid, env }) {
    const [x, , z] = p.pos;
    for (const side of [-1, 1]) {
      solid.boxC([0.8, 1.1, 0.05], '#3a2a1d', [x, 0.55, z + side * 0.17], [side * 0.3, 0, 0]);
      solid.boxC([0.68, 0.8, 0.02], '#fff3c4', [x, 0.6, z + side * 0.215], [side * 0.3, 0, 0]);
    }
    env.signs.push({ id: 'sandwich', pos: [x, 1.35, z], kind: 'street' });
  },

  car(p, { group }) {
    const m = carMesh(p.color || '#d8402f');
    m.position.set(p.pos[0], 0, p.pos[2]);
    m.rotation.y = p.rot || 0;
    group.add(m);
  },
};

// Low-poly car: one mesh. Faces +x.
function carMesh(color) {
  const b = new Batch();
  const glass = '#2d3f52';
  b.box([3.7, 0.5, 1.62], color, [0, 0.32, 0]);
  b.box([3.5, 0.12, 1.5], shade(color, -0.12), [0, 0.22, 0]);
  b.box([2.0, 0.52, 1.46], color, [-0.2, 0.82, 0]);
  b.box([2.06, 0.36, 1.5], glass, [-0.2, 0.86, 0]);
  b.box([1.6, 0.04, 1.3], shade(color, 0.06), [-0.2, 1.34, 0]);
  for (const sx of [-1.15, 1.15]) {
    for (const sz of [-0.8, 0.8]) {
      b.cylC(0.34, 0.24, '#1d1f24', [sx, 0.34, sz], [Math.PI / 2, 0, 0], 14);
      b.cylC(0.17, 0.26, '#b9bec6', [sx, 0.34, sz], [Math.PI / 2, 0, 0], 10);
    }
  }
  b.box([0.08, 0.14, 0.34], '#fff3c4', [1.84, 0.52, 0.5]);
  b.box([0.08, 0.14, 0.34], '#fff3c4', [1.84, 0.52, -0.5]);
  b.box([0.08, 0.14, 0.34], '#c0392b', [-1.84, 0.52, 0.5]);
  b.box([0.08, 0.14, 0.34], '#c0392b', [-1.84, 0.52, -0.5]);
  b.box([0.14, 0.14, 1.66], '#8f949c', [1.82, 0.28, 0]);
  b.box([0.14, 0.14, 1.66], '#8f949c', [-1.82, 0.28, 0]);
  return b.mesh(VC);
}

// A little moving traffic so the street feels alive. Headlights come on at night.
function traffic(p, group, env) {
  const colors = ['#e9c46a', '#4a6fa5', '#f4f1de', '#2f7d6a'];
  const lanes = [{ z: p.z + p.width * 0.24, dir: 1 }, { z: p.z - p.width * 0.24, dir: -1 }];
  const beam = glowMat(env, '#fff8d8', '#fff0b0', 2.5);
  const cars = [];
  lanes.forEach((lane, i) => {
    for (let k = 0; k < 2; k++) {
      const m = carMesh(colors[(i * 2 + k) % colors.length]);
      m.rotation.y = lane.dir > 0 ? 0 : Math.PI;
      m.position.set(-70 + Math.random() * 140, 0, lane.z);
      for (const sz of [-0.5, 0.5]) {
        const h = new THREE.Mesh(G.sphere(8, 6), beam);
        h.scale.set(0.06, 0.1, 0.16);
        h.position.set(1.9, 0.59, sz);
        m.add(h);
      }
      group.add(m);
      cars.push({ m, dir: lane.dir, speed: 5 + Math.random() * 3 });
    }
  });
  env.updaters.push((dt) => {
    for (const c of cars) {
      c.m.position.x += c.dir * c.speed * dt;
      if (c.m.position.x > 80) c.m.position.x = -80;
      if (c.m.position.x < -80) c.m.position.x = 80;
    }
  });
}
