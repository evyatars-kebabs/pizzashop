// The player's place, in three sizes that grow with franchises: cart, big stand, pizza shop.
// Also builds the decorations (one visible addition per decor level), the neon sign and the staff.
import * as THREE from 'three';
import { Batch, VC, VC_FLAT, VC_SHINY, glowMat, uniqueMat, texBox, texMat, lightPool, G } from './assets.js';
import { makePerson } from './people.js';

const CX = 0.2;       // x centre of the stand
const FRONT = 1.5;    // z of the body's front edge; the counter sits just in front of it
const RED = '#c8392b';
const CREAM = '#fff3dc';
const GREEN = '#2f6b5a';
const WOOD = '#a8703f';
const DARKWOOD = '#6b4428';
const STONE = '#b9aea0';
const IRON = '#2f3238';
const TRIM = '#f3ede0';
const TOPPING_COLORS = ['#c0392b', '#2e8b57', '#e67e22', '#3d5a1e', '#c9b79c'];

// Where things are for a given location and stand tier. Everything that needs a position
// (actors, mini-game camera, effects) reads it from here.
export function layoutFor(loc, tier, tierIdx) {
  const W = tier.width;
  const cart = tier.id === 'cart';
  const floorY = cart ? 0.42 : tier.id === 'stand' ? 0.3 : 0.15;
  const ovenX = cart ? CX + W / 2 + 0.45 : CX + W / 2 - 1.05;
  const stations = {
    dough: [CX - W * 0.29, 1.15, 0.7],
    load: [CX + W * 0.19, 1.15, 0.7],
    oven: [ovenX, 0.86, 0.72],
    pass: [CX, 1.25, 1.55],
  };
  const cam = loc.camera;
  return {
    ...loc,
    tier, tierIdx, cx: CX, W, D: tier.depth, back: FRONT - tier.depth, floorY, ovenX, stations,
    window: [CX - 0.4, 0, 2.9],
    register: [CX + 0.8, 1.2, 1.55],
    camera: {
      ...cam,
      zoom: tier.cameraZoom,
      target: [cam.target[0], cam.target[1] + tierIdx * 0.6, cam.target[2]],
    },
  };
}

export function buildStand(L, env, opts = {}) {
  const g = new THREE.Group();
  g.name = 'stand:' + L.tier.id;
  const ctx = {
    g, env, L,
    S: new Batch(),       // solid colours
    F: new Batch(),       // flat-shaded (foliage, cloth)
    M: new Batch(),       // metal
    warm: new Batch(),    // warm glowing bits: bulbs, lanterns
    win: new Batch(),     // lit windows (gentler glow)
    cw: L.W - 0.6,        // counter width
  };

  SHELL[L.tier.id](ctx);
  workLine(ctx);
  menuBoard(ctx);
  neonSign(ctx);
  decorate(ctx, opts.decor || 0);
  empireExtras(ctx, opts.empire || {});

  g.add(ctx.S.mesh(VC));
  if (!ctx.F.empty) g.add(ctx.F.mesh(VC_FLAT));
  if (!ctx.M.empty) g.add(ctx.M.mesh(VC_SHINY));
  if (!ctx.warm.empty) {
    g.add(ctx.warm.mesh(glowMat(env, '#ffffff', '#ffc978', 2.2, { vertexColors: true }), { cast: false, receive: false }));
  }
  if (!ctx.win.empty) {
    g.add(ctx.win.mesh(glowMat(env, '#ffffff', '#ffb45e', 0.55, { vertexColors: true, roughness: 0.3 }), { cast: false }));
  }
  const pool = lightPool(env, 5.5, '#ffb469', 0.45);
  pool.position.set(CX, 0.03, 3.4);
  g.add(pool);
  staff(ctx);
  return g;
}

// ---------- Shared pieces ----------

function scallops(ctx, x0, x1, y, z) {
  const n = Math.round((x1 - x0) / 0.36);
  const step = (x1 - x0) / n;
  ctx.S.box([x1 - x0, 0.1, 0.04], RED, [(x0 + x1) / 2, y + 0.06, z]);
  for (let i = 0; i < n; i++) {
    ctx.S.cylC(step / 2, 0.035, i % 2 ? CREAM : '#d8402f', [x0 + step * (i + 0.5), y + 0.06, z], [Math.PI / 2, 0, 0], 12);
  }
}

function awning(ctx, size, center, tilt) {
  const m = new THREE.Mesh(G.box(), texMat('stripes', size[0] / 0.8, 1));
  m.scale.set(size[0], size[1], size[2]);
  m.position.set(center[0], center[1], center[2]);
  m.rotation.x = tilt;
  m.castShadow = true;
  m.receiveShadow = true;
  ctx.g.add(m);
  const half = size[2] / 2;
  return { y: center[1] - Math.sin(tilt) * half, z: center[2] + Math.cos(tilt) * half };
}

function shelfWithJars(ctx, x0, x1, y, z) {
  const { S } = ctx;
  S.box([x1 - x0, 0.05, 0.3], DARKWOOD, [(x0 + x1) / 2, y, z]);
  const colors = ['#c0392b', '#e9c46a', '#2e8b57', '#f4f1de', '#e67e22', '#7a4a2b', '#b8d8a8'];
  let i = 0;
  for (let x = x0 + 0.25; x < x1 - 0.15; x += 0.34) {
    const h = 0.2 + ((i * 7) % 3) * 0.06;
    if (i % 4 === 3) {
      S.cyl(0.05, 0.07, h + 0.12, '#3b6b4a', [x, y + 0.05, z]);
      S.cyl(0.025, 0.03, 0.1, '#3b6b4a', [x, y + 0.17 + h, z]);
    } else {
      S.cyl(0.09, 0.09, h, colors[i % colors.length], [x, y + 0.05, z]);
      S.cyl(0.095, 0.095, 0.04, '#d9cbb2', [x, y + 0.05 + h, z]);
    }
    i++;
  }
}

function wheel(ctx, x, y, z, r) {
  const { S, M } = ctx;
  M.torus(r, 0.06, IRON, [x, y, z]);
  S.cylC(0.11, 0.16, DARKWOOD, [x, y, z], [Math.PI / 2, 0, 0]);
  for (let i = 0; i < 4; i++) S.boxC([r * 1.9, 0.07, 0.06], WOOD, [x, y, z], [0, 0, (i * Math.PI) / 4]);
}

// ---------- The three shells ----------

const SHELL = {
  cart(ctx) {
    const { S, M, L, g } = ctx;
    const { W } = L;
    const x0 = CX - W / 2;
    const x1 = CX + W / 2;
    const back = -1.1;
    g.add(texBox([W, 0.22, 2.6], 'wood', [CX, 0.2, 0.2], [W / 1.3, 2]));
    S.box([W - 0.5, 0.12, 0.16], DARKWOOD, [CX, 0.1, -0.5]);
    for (const x of [CX - 1.35, CX + 1.35]) {
      wheel(ctx, x, 0.56, 2.13, 0.52);
      wheel(ctx, x, 0.56, back - 0.06, 0.52);
    }
    // Push handle on the left.
    M.cylC(0.035, 1.5, IRON, [x0 - 0.42, 1.25, 0.2], [Math.PI / 2, 0, 0]);
    for (const z of [-0.5, 0.9]) M.cylC(0.03, 0.5, IRON, [x0 - 0.2, 1.2, z], [0, 0, Math.PI / 2.4]);

    // Back panel with trim and a shelf of ingredients.
    S.box([W, 2.55, 0.12], RED, [CX, L.floorY, back]);
    S.box([W + 0.06, 0.16, 0.16], CREAM, [CX, L.floorY + 2.5, back]);
    S.box([W + 0.04, 0.5, 0.14], CREAM, [CX, L.floorY, back + 0.01]);
    shelfWithJars(ctx, x0 + 0.3, x1 - 0.3, 2.05, back + 0.2);
    for (const x of [x0 + 0.05, x1 - 0.05]) S.box([0.1, 0.8, 2.45], RED, [x, L.floorY, 0.2]);

    // Canopy on four posts.
    for (const x of [x0 + 0.08, x1 - 0.08]) {
      for (const z of [FRONT - 0.08, back + 0.1]) M.cyl(0.045, 0.045, 3.15, IRON, [x, L.floorY, z]);
    }
    const eave = awning(ctx, [W + 0.7, 0.07, 3.1], [CX, 3.5, 0.3], 0.1);
    scallops(ctx, x0 - 0.35, x1 + 0.35, eave.y - 0.2, eave.z);
    Object.assign(ctx, {
      eave: { y: eave.y - 0.2, z: eave.z, x0: x0 - 0.3, x1: x1 + 0.3 },
      neonPos: [CX, 4.0, -0.7],
      flagBase: { y: 3.6, z: back, n: 4 },
      statuePos: [x0 + 0.45, 4.05, -0.7],
      chimneyTop: 3.2,
      counterBase: 0.2,
    });
    // Posts for the roof sign.
    for (const x of [CX - 0.9, CX + 0.9]) M.cyl(0.035, 0.035, 0.5, IRON, [x, 3.62, -0.7]);
  },

  stand(ctx) {
    const { S, L, g } = ctx;
    const { W, D, back } = L;
    const x0 = CX - W / 2;
    const x1 = CX + W / 2;
    const mid = (FRONT + back) / 2;
    g.add(texBox([W + 0.5, 0.3, D + 0.7], 'wood', [CX, 0, mid + 0.1], [W / 1.3, 3]));
    S.box([W + 0.6, 0.08, D + 0.8], DARKWOOD, [CX, 0, mid + 0.1]);

    // Back wall: red boards over cream wainscot, with two shelves.
    S.box([W, 3.5, 0.14], RED, [CX, L.floorY, back + 0.07]);
    S.box([W + 0.02, 1.0, 0.16], CREAM, [CX, L.floorY, back + 0.08]);
    S.box([W + 0.04, 0.08, 0.2], GREEN, [CX, L.floorY + 1.0, back + 0.09]);
    shelfWithJars(ctx, x0 + 0.4, x1 - 1.9, 1.95, back + 0.3);
    shelfWithJars(ctx, x0 + 0.4, x1 - 1.9, 2.55, back + 0.3);

    // Half walls and stout corner posts.
    for (const x of [x0 + 0.07, x1 - 0.07]) {
      S.box([0.14, 1.15, D - 0.1], RED, [x, L.floorY, mid]);
      S.box([0.2, 0.08, D], CREAM, [x, L.floorY + 1.15, mid]);
      for (const z of [FRONT - 0.1, back + 0.1]) S.box([0.18, 3.6, 0.18], DARKWOOD, [x, L.floorY, z]);
    }

    // Tiled roof with a fascia and a gable sign board.
    const roof = new THREE.Mesh(G.box(), texMat('rooftiles', (W + 1) / 1.2, 3));
    roof.scale.set(W + 1.0, 0.16, D + 0.9);
    roof.position.set(CX, 4.05, mid + 0.15);
    roof.rotation.x = 0.07;
    roof.castShadow = true;
    roof.receiveShadow = true;
    g.add(roof);
    const ez = mid + 0.15 + (D + 0.9) / 2;
    const ey = 4.05 - ((D + 0.9) / 2) * 0.07;
    S.box([W + 1.0, 0.2, 0.08], CREAM, [CX, ey - 0.24, ez - 0.02]);
    scallops(ctx, x0 - 0.5, x1 + 0.5, ey - 0.44, ez);
    S.box([3.7, 0.95, 0.14], RED, [CX, 4.2, FRONT + 0.1]);
    S.box([3.45, 0.7, 0.16], CREAM, [CX, 4.32, FRONT + 0.12]);
    for (const x of [CX - 1.6, CX + 1.6]) S.box([0.12, 0.5, 0.12], DARKWOOD, [x, 3.85, FRONT + 0.1]);
    ctx.env.signs.push({ id: 'name', pos: [CX, 4.68, FRONT + 0.25], kind: 'shopname' });
    ctx.env.signs.push({ id: 'franchise', pos: [x1 - 0.12, 2.55, FRONT + 0.05], size: [0.64, 0.44], kind: 'franchise' });
    S.box([0.7, 0.5, 0.05], '#d4af37', [x1 - 0.12, 2.3, FRONT + 0.02]);

    Object.assign(ctx, {
      eave: { y: ey - 0.44, z: ez, x0: x0 - 0.45, x1: x1 + 0.45 },
      neonPos: [CX, 5.65, FRONT + 0.1],
      flagBase: { y: 4.15, z: back + 0.2, n: 5 },
      statuePos: [x0 + 0.6, 4.75, mid],
      chimneyTop: 5.0,
      counterBase: 0,
    });
  },

  shop(ctx) {
    const { S, F, M, L, g, warm, win } = ctx;
    const { W, D, back } = L;
    const x0 = CX - W / 2;
    const x1 = CX + W / 2;
    const mid = (FRONT + back) / 2;
    const WALL = '#f1d9a8';
    const top1 = 3.6;         // top of the ground floor
    const top2 = 6.1;         // top of the upper floor

    S.box([W + 0.8, 0.15, D + 1.3], STONE, [CX, 0, mid + 0.35]);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.4, D - 0.3), texMat('checker', W / 1.6, D / 1.6));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(CX, 0.16, mid);
    floor.receiveShadow = true;
    g.add(floor);

    // Ground floor: tiled back wall, plaster side walls, open front with pillars and a beam.
    g.add(texBox([W, top1 - 0.15, 0.2], 'tiles', [CX, 0.15, back + 0.1], [W / 1.2, 3]));
    for (const x of [x0 + 0.12, x1 - 0.12]) {
      g.add(texBox([0.24, top1 - 0.15, D], 'plaster', [x, 0.15, mid], [4, 3], { color: WALL }));
    }
    for (const x of [x0 + 0.27, x1 - 0.27]) {
      S.box([0.54, top1 - 0.15, 0.54], '#e6c990', [x, 0.15, FRONT - 0.05]);
      S.box([0.62, 0.3, 0.62], STONE, [x, 0.15, FRONT - 0.05]);
      // Wall lamps on the pillars.
      M.box([0.06, 0.3, 0.16], IRON, [x, 2.35, FRONT + 0.26]);
      warm.box([0.2, 0.28, 0.2], '#fff0c8', [x, 2.3, FRONT + 0.42]);
      M.cone(0.2, 0.14, IRON, [x, 2.58, FRONT + 0.42], [0, 0, 0], 4);
    }
    S.box([W, 0.5, 0.44], '#e6c990', [CX, top1 - 0.5, FRONT - 0.08]);
    shelfWithJars(ctx, x0 + 0.5, x1 - 2.2, 1.95, back + 0.36);
    shelfWithJars(ctx, x0 + 0.5, x1 - 2.2, 2.6, back + 0.36);
    // Hanging pans along the back wall.
    for (let i = 0; i < 4; i++) {
      M.cylC(0.19, 0.03, '#8a8d93', [x0 + 1.2 + i * 0.62, 3.05, back + 0.26], [Math.PI / 2, 0, 0], 14);
      M.box([0.04, 0.26, 0.03], '#5a5d63', [x0 + 1.2 + i * 0.62, 3.18, back + 0.26]);
    }

    // Upper floor: plaster with three shuttered windows and flower boxes.
    g.add(texBox([W + 0.1, top2 - top1, D + 0.1], 'plaster', [CX, top1, mid], [5, 2], { color: '#f6e3b4' }));
    S.box([W + 0.4, 0.16, D + 0.4], TRIM, [CX, top1 - 0.02, mid]);
    const fz = FRONT + 0.06;
    for (const dx of [-2.45, 0, 2.45]) {
      const wx = CX + dx;
      S.box([1.36, 1.66, 0.08], TRIM, [wx, 4.2, fz]);
      win.box([1.14, 1.46, 0.06], '#bcd3e0', [wx, 4.3, fz + 0.04]);
      S.box([0.06, 1.46, 0.04], TRIM, [wx, 4.3, fz + 0.08]);
      S.box([1.14, 0.06, 0.04], TRIM, [wx, 5.0, fz + 0.08]);
      for (const s of [-1, 1]) S.box([0.3, 1.5, 0.06], GREEN, [wx + s * 0.76, 4.28, fz + 0.04]);
      S.box([1.5, 0.2, 0.3], '#8d5a3b', [wx, 3.98, fz + 0.2]);
      ['#ef476f', '#ffd166', '#ffffff', '#f78c6b', '#ef476f'].forEach((c, i) => {
        F.ico(0.12, c, [wx - 0.52 + i * 0.26, 4.28 + (i % 2) * 0.06, fz + 0.24]);
      });
      F.ico(0.2, '#4f8f47', [wx, 4.2, fz + 0.22], [3.2, 0.6, 0.8]);
    }
    S.box([W + 0.7, 0.26, D + 0.7], TRIM, [CX, top2, mid]);
    S.box([W + 0.3, 0.5, D + 0.3], '#e6c990', [CX, top2 + 0.26, mid]);
    S.box([W - 0.2, 0.1, D - 0.2], '#8d7b68', [CX, top2 + 0.3, mid]);

    // Rooftop sign board on a frame.
    for (const x of [CX - 2.1, CX + 2.1]) M.cyl(0.05, 0.05, 1.0, IRON, [x, top2 + 0.7, FRONT - 0.5]);
    S.box([4.9, 1.05, 0.16], RED, [CX, top2 + 0.8, FRONT - 0.5]);
    S.box([4.6, 0.8, 0.18], CREAM, [CX, top2 + 0.93, FRONT - 0.49]);
    ctx.env.signs.push({ id: 'name', pos: [CX, top2 + 1.33, FRONT - 0.35], kind: 'shopname' });

    // Franchise plaque on the right pillar.
    S.box([0.64, 0.48, 0.05], '#d4af37', [x1 - 0.3, 1.5, FRONT + 0.24]);
    ctx.env.signs.push({ id: 'franchise', pos: [x1 - 0.3, 1.74, FRONT + 0.27], size: [0.58, 0.42], kind: 'franchise' });

    const eave = awning(ctx, [W + 0.5, 0.08, 1.5], [CX, top1 + 0.12, FRONT + 0.72], 0.2);
    scallops(ctx, x0 - 0.25, x1 + 0.25, eave.y - 0.2, eave.z);
    Object.assign(ctx, {
      eave: { y: eave.y - 0.2, z: eave.z, x0: x0 - 0.2, x1: x1 + 0.2 },
      neonPos: [CX, top2 + 2.3, FRONT - 0.5],
      flagBase: { y: top2 + 0.76, z: back + 0.3, n: 6 },
      statuePos: [x0 + 0.9, top2 + 1.25, mid + 0.6],
      chimneyTop: top2 + 1.5,
      counterBase: 0,
    });
  },
};

// ---------- Counter, stations, oven, register ----------

function workLine(ctx) {
  const { S, M, F, L, g, env, cw, warm } = ctx;
  const { stations, floorY } = L;
  const cb = ctx.counterBase;

  // Counter: panelled front, wooden top.
  S.box([cw, 1.12 - cb, 0.75], '#f6ead2', [CX, cb, 1.7]);
  S.box([cw + 0.04, 0.14, 0.78], DARKWOOD, [CX, cb, 1.7]);
  S.box([cw + 0.02, 0.1, 0.02], RED, [CX, 0.93, 2.08]);
  const panels = Math.max(3, Math.round(cw / 0.95));
  for (let i = 0; i < panels; i++) {
    const px = CX - cw / 2 + (cw / panels) * (i + 0.5);
    S.box([cw / panels - 0.18, 0.5, 0.03], '#ead9b8', [px, Math.max(cb + 0.2, 0.34), 2.075]);
  }
  g.add(texBox([cw + 0.16, 0.08, 1.0], 'wood', [CX, 1.12, 1.6], [cw / 1.3, 1]));

  // Prep table: flour, rolling pin, sauce and cheese.
  const [dx, , dz] = stations.dough;
  g.add(texBox([1.2, 0.07, 0.98], 'wood', [dx, 1.03, dz], [1, 1]));
  for (const sx of [-0.52, 0.52]) {
    for (const sz of [-0.4, 0.4]) S.box([0.07, 1.03 - floorY, 0.07], DARKWOOD, [dx + sx, floorY, dz + sz]);
  }
  S.box([0.3, 0.34, 0.2], '#efe6d2', [dx - 0.4, 1.1, dz - 0.36]);
  S.box([0.3, 0.05, 0.2], '#d9cbb2', [dx - 0.4, 1.4, dz - 0.36], [0, 0, 0.2]);
  S.cylC(0.045, 0.5, WOOD, [dx + 0.05, 1.15, dz - 0.38], [0, 0, Math.PI / 2]);
  M.cyl(0.13, 0.09, 0.1, '#c9ccd2', [dx + 0.42, 1.1, dz - 0.36]);
  S.cyl(0.115, 0.115, 0.02, '#c0392b', [dx + 0.42, 1.18, dz - 0.36]);
  S.sphere(0.09, '#f1dfb8', [dx - 0.08, 1.17, dz - 0.36], [1, 0.7, 1]);

  // Holding rack and a pizza peel.
  const [lx, , lz] = stations.load;
  M.box([1.0, 0.05, 0.9], '#b9bec6', [lx, 1.05, lz]);
  M.box([1.0, 0.04, 0.9], '#b9bec6', [lx, 0.6, lz]);
  for (const sx of [-0.46, 0.46]) {
    for (const sz of [-0.41, 0.41]) M.box([0.05, 1.05 - floorY, 0.05], '#8a8d93', [lx + sx, floorY, lz + sz]);
  }
  S.cylC(0.025, 1.3, WOOD, [lx + 0.42, 1.55, lz - 0.5], [0.25, 0, 0.12]);
  S.cyl(0.27, 0.27, 0.025, '#caa26a', [lx + 0.5, 2.15, lz - 0.66], [0.25 + Math.PI / 2, 0, 0.12], 16);

  // Brick oven with an arched mouth, a stone ledge and a chimney.
  const ox = L.ovenX;
  const oz = -0.1;
  S.box([1.84, 0.56, 1.5], STONE, [ox, 0, oz]);
  g.add(texBox([1.74, 1.0, 1.42], 'brick', [ox, 0.56, oz], [1.6, 1.2]));
  const dome = new THREE.Mesh(G.dome(18, 10), texMat('brick', 3, 1.4));
  dome.scale.set(0.87, 0.72, 0.71);
  dome.position.set(ox, 1.56, oz);
  dome.castShadow = true;
  g.add(dome);
  S.box([1.0, 0.6, 0.06], '#140d0a', [ox, 0.82, oz + 0.7]);
  S.box([1.2, 0.14, 0.14], '#cfc3b2', [ox, 1.42, oz + 0.72]);
  for (const s of [-1, 1]) S.box([0.14, 0.62, 0.14], '#cfc3b2', [ox + s * 0.57, 0.8, oz + 0.72]);
  S.box([1.4, 0.07, 0.42], '#cfc3b2', [ox, 0.76, oz + 0.9]);
  const fire = uniqueMat('#3a1a0c', { emissive: new THREE.Color('#ff7a1f'), emissiveIntensity: 0.5 });
  env.ovenMouthMat = fire;
  const mouth = new THREE.Mesh(G.box(), fire);
  mouth.scale.set(0.9, 0.5, 0.03);
  mouth.position.set(ox, 1.1, oz + 0.74);
  g.add(mouth);
  // Firewood under the ledge.
  for (let i = 0; i < 3; i++) S.cylC(0.07, 0.5, '#7b5236', [ox - 0.3 + i * 0.16, 0.64, oz + 0.95], [Math.PI / 2, 0, 0], 8);
  const chX = ox + 0.4;
  const chZ = oz - 0.35;
  S.cyl(0.17, 0.21, ctx.chimneyTop - 1.9, '#6e4a3a', [chX, 1.9, chZ]);
  S.cyl(0.24, 0.24, 0.1, '#4e342a', [chX, ctx.chimneyTop, chZ]);
  env.smokeAt = [chX, ctx.chimneyTop + 0.2, chZ];

  // Cash register.
  const [rx, , rz] = L.register;
  M.box([0.52, 0.2, 0.44], '#4a5563', [rx, 1.2, rz]);
  M.boxC([0.44, 0.26, 0.05], '#2f3640', [rx, 1.52, rz - 0.1], [-0.35, 0, 0]);
  S.boxC([0.36, 0.18, 0.02], '#9fe3c0', [rx, 1.52, rz - 0.07], [-0.35, 0, 0]);
  S.box([0.4, 0.03, 0.2], '#d9dde3', [rx, 1.4, rz + 0.08]);
  // Tip jar, napkins, pizza boxes, basil pots.
  M.cyl(0.11, 0.1, 0.22, '#f6e7b0', [rx + 0.5, 1.2, 1.95]);
  S.cyl(0.08, 0.08, 0.06, '#e9c46a', [rx + 0.5, 1.2, 1.95]);
  S.box([0.2, 0.16, 0.14], '#ffffff', [CX - 0.55, 1.2, 1.95]);
  const bxX = CX - cw / 2 + 0.55;
  [0, 1, 2].forEach((i) => S.box([0.72, 0.1, 0.72], '#f2d7a7', [bxX, 1.2 + i * 0.1, 1.62], [0, i * 0.1, 0]));
  S.box([0.5, 0.012, 0.5], RED, [bxX, 1.5, 1.62], [0, 0.2, 0]);
  for (const x of [CX - cw / 2 + 0.1, CX + cw / 2 - 0.1]) {
    S.cyl(0.17, 0.13, 0.26, '#b5562c', [x, 1.2, 2.0]);
    F.ico(0.24, '#4f9d4a', [x, 1.62, 2.0], [1, 0.95, 1]);
    F.ico(0.16, '#62b35a', [x + 0.1, 1.78, 2.02]);
  }

  // String lights under the eave (always there; decor adds more).
  const e = ctx.eave;
  const n = Math.round((e.x1 - e.x0) / 0.48);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    warm.sphere(0.06, '#fff0c8', [e.x0 + (e.x1 - e.x0) * t, e.y - 0.1 - Math.sin(t * Math.PI * n) * 0.0, e.z - 0.06], [1, 1.2, 1], [8, 6]);
  }
}

// Standing menu board beside the stand. Its text is an HTML label (src/ui/signs.js), sized to the
// cream panel. Scaled up so the words are readable from the camera.
function menuBoard(ctx) {
  const { S, L, env } = ctx;
  const k = 1.5;
  const x = CX - L.W / 2 - 0.75;
  const z = 3.5;
  const bottom = 1.0 * k;
  const h = 1.0 * k;
  const cy = bottom + h / 2;
  for (const sx of [-0.5, 0.5]) S.box([0.08 * k, bottom + 0.2, 0.08 * k], IRON, [x + sx * k, 0, z]);
  S.box([1.36 * k, h, 0.08], '#2b2d42', [x, bottom, z]);
  S.box([1.2 * k, 0.84 * k, 0.03], '#f7f1e1', [x, cy - 0.42 * k, z + 0.045]);
  env.signs.push({ id: 'menu', pos: [x, cy, z + 0.06], size: [1.6, 1.16], kind: 'menu' });
}

// Neon sign. Level 1 = pink sign, level 2 adds a cyan ring and stars.
function neonSign(ctx) {
  const { g, env } = ctx;
  const [x, y, z] = ctx.neonPos;
  const l1 = new THREE.Group();
  const l2 = new THREE.Group();
  const back = new Batch();
  back.boxC([2.5, 0.78, 0.08], '#1d1a26', [x, y, z]);
  l1.add(back.mesh(VC));
  const pink = new Batch();
  pink.boxC([2.3, 0.05, 0.05], '#ff7ab5', [x, y + 0.31, z + 0.06]);
  pink.boxC([2.3, 0.05, 0.05], '#ff7ab5', [x, y - 0.31, z + 0.06]);
  pink.boxC([0.05, 0.62, 0.05], '#ff7ab5', [x - 1.15, y, z + 0.06]);
  pink.boxC([0.05, 0.62, 0.05], '#ff7ab5', [x + 1.15, y, z + 0.06]);
  pink.torus(0.2, 0.035, '#ff7ab5', [x - 0.85, y, z + 0.07]);
  l1.add(pink.mesh(glowMat(env, '#ff7ab5', '#ff3d94', 3.2), { cast: false }));
  const cyan = new Batch();
  cyan.torus(0.62, 0.04, '#7ff6ff', [x + 1.75, y, z + 0.05]);
  cyan.torus(0.62, 0.04, '#7ff6ff', [x - 1.75, y, z + 0.05]);
  for (const s of [-1, 1]) {
    cyan.boxC([0.5, 0.06, 0.05], '#7ff6ff', [x + s * 1.75, y, z + 0.06], [0, 0, 0.6]);
    cyan.boxC([0.5, 0.06, 0.05], '#7ff6ff', [x + s * 1.75, y, z + 0.06], [0, 0, -0.6]);
    cyan.boxC([0.06, 0.5, 0.05], '#7ff6ff', [x + s * 1.75, y, z + 0.06]);
  }
  l2.add(cyan.mesh(glowMat(env, '#7ff6ff', '#2fe6ff', 3.2), { cast: false }));
  l1.visible = false;
  l2.visible = false;
  g.add(l1, l2);
  env.neon = { l1, l2 };
  env.signs.push({ id: 'neon', pos: [x + 0.2, y, z + 0.1], kind: 'neon' });
}

// ---------- Decorations: one clearly visible addition per decor level ----------

function bistroSet(ctx, x, z) {
  const { S, M, F } = ctx;
  M.cyl(0.24, 0.26, 0.04, IRON, [x, 0, z]);
  M.cyl(0.035, 0.035, 2.5, IRON, [x, 0, z]);
  S.cyl(0.46, 0.46, 0.05, '#f6ead2', [x, 0.74, z], [0, 0, 0], 18);
  F.add(G.cone(8), RED, [x, 2.42, z], [0, 0, 0], [0.92, 0.4, 0.92]);
  F.add(G.cone(8), CREAM, [x, 2.36, z], [0, Math.PI / 8, 0], [0.95, 0.28, 0.95]);
  S.cyl(0.16, 0.16, 0.02, '#e9b45a', [x - 0.1, 0.79, z + 0.05], [0, 0, 0], 12);
  S.cyl(0.04, 0.035, 0.1, '#ffffff', [x + 0.22, 0.79, z - 0.1]);
  for (const s of [-1, 1]) {
    const cx = x + s * 0.72;
    S.cyl(0.2, 0.2, 0.05, RED, [cx, 0.46, z + 0.1], [0, 0, 0], 12);
    for (const [ax, az] of [[-0.14, -0.14], [0.14, -0.14], [-0.14, 0.14], [0.14, 0.14]]) M.cyl(0.02, 0.02, 0.46, IRON, [cx + ax, 0, z + 0.1 + az]);
    M.box([0.04, 0.42, 0.34], IRON, [cx + s * 0.17, 0.5, z + 0.1]);
  }
}

function oliveTree(ctx, x, z) {
  const { S, F } = ctx;
  S.cyl(0.3, 0.22, 0.42, '#b5562c', [x, 0, z]);
  S.cyl(0.32, 0.32, 0.05, '#9c4826', [x, 0.42, z]);
  S.cyl(0.05, 0.07, 0.95, '#6b5a45', [x, 0.42, z]);
  F.ico(0.42, '#7d9460', [x, 1.6, z]);
  F.ico(0.3, '#8fa873', [x + 0.25, 1.4, z + 0.1], [1, 1, 1], [1, 1, 0]);
  F.ico(0.28, '#6f8754', [x - 0.24, 1.42, z - 0.08], [1, 1, 1], [2, 0, 1]);
}

const DECOR = {
  // 1) Flower boxes along the counter and hanging baskets at the eave.
  flowers(ctx) {
    const { S, F, M, cw, eave } = ctx;
    const n = Math.max(2, Math.round(cw / 1.25));
    const colors = ['#ef476f', '#ffd166', '#ffffff', '#f78c6b', '#c77dff'];
    for (let i = 0; i < n; i++) {
      const x = CX - cw / 2 + (cw / n) * (i + 0.5);
      S.box([0.92, 0.2, 0.24], '#8d5a3b', [x, 0.56, 2.2]);
      F.ico(0.16, '#4f8f47', [x, 0.8, 2.2], [2.7, 0.7, 0.8]);
      for (let k = 0; k < 5; k++) F.ico(0.1, colors[(i + k) % colors.length], [x - 0.34 + k * 0.17, 0.9 + (k % 2) * 0.06, 2.24]);
    }
    for (const x of [eave.x0 + 0.35, eave.x1 - 0.35]) {
      M.cylC(0.012, 0.5, IRON, [x, eave.y - 0.35, eave.z - 0.25]);
      S.dome(0.2, '#7b5236', [x, eave.y - 0.62, eave.z - 0.25], [1, 1, 1], [Math.PI, 0, 0]);
      F.ico(0.24, '#4f8f47', [x, eave.y - 0.52, eave.z - 0.25], [1, 0.7, 1]);
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * Math.PI * 2;
        F.ico(0.09, colors[k % colors.length], [x + Math.cos(a) * 0.17, eave.y - 0.46, eave.z - 0.25 + Math.sin(a) * 0.17]);
      }
    }
  },

  // 2) Festoon lights strung between two tall poles in front.
  festoon(ctx) {
    const { M, warm, L, eave } = ctx;
    const xa = CX - L.W / 2 - 0.5;
    const xb = CX + L.W / 2 + 0.5;
    const z = 2.7;
    const top = Math.max(4.1, eave.y + 0.9);
    for (const x of [xa, xb]) {
      M.cyl(0.05, 0.07, top, IRON, [x, 0, z]);
      M.sphere(0.09, '#d4af37', [x, top + 0.05, z]);
    }
    const n = 16;
    for (let i = 1; i < n; i++) {
      const t = i / n;
      const y = top - 0.02 - Math.sin(t * Math.PI) * 0.55;
      warm.sphere(0.085, '#fff0c8', [xa + (xb - xa) * t, y, z], [1, 1.25, 1], [8, 6]);
      M.cylC(0.01, (xb - xa) / n, IRON, [xa + (xb - xa) * (t - 0.5 / n), y + 0.1, z], [0, 0, Math.PI / 2], 4);
    }
  },

  // 3) Colourful bunting under the eave.
  bunting(ctx) {
    const { F, eave } = ctx;
    const colors = ['#ef476f', '#ffd166', '#06d6a0', '#4ea8de', '#9b5de5'];
    const n = Math.round((eave.x1 - eave.x0) / 0.34);
    for (let i = 0; i < n; i++) {
      const x = eave.x0 + ((eave.x1 - eave.x0) / n) * (i + 0.5);
      F.add(G.cone(3), colors[i % colors.length], [x, eave.y - 0.36, eave.z + 0.04], [Math.PI, 0, 0], [0.15, 0.3, 0.02]);
    }
  },

  // 4) A bistro table with an umbrella and two chairs.
  table(ctx) {
    bistroSet(ctx, CX + 3.0, 4.2);
  },

  // 5) Floor lanterns at the corners of the counter.
  lanterns(ctx) {
    const { M, warm, cw } = ctx;
    for (const x of [CX - cw / 2 - 0.32, CX + cw / 2 + 0.32]) {
      M.box([0.3, 0.06, 0.3], IRON, [x, 0, 2.5]);
      for (const [ax, az] of [[-0.12, -0.12], [0.12, -0.12], [-0.12, 0.12], [0.12, 0.12]]) M.box([0.03, 0.56, 0.03], IRON, [x + ax, 0.06, 2.5 + az]);
      warm.box([0.2, 0.46, 0.2], '#ffe9b0', [x, 0.1, 2.5]);
      M.cone(0.24, 0.16, IRON, [x, 0.62, 2.5], [0, Math.PI / 4, 0], 4);
      M.torus(0.07, 0.012, IRON, [x, 0.84, 2.5]);
    }
  },

  // 6) A red carpet for the queue, with brass posts and ropes.
  carpet(ctx) {
    const { S, M, L } = ctx;
    const qx = L.queueStart[0] + L.queueStep[0] * (L.queueRowLength - 1) / 2;
    const z0 = 3.3;
    const z1 = L.queueStart[2] + L.queueStep[2] * 3.3;
    const w = Math.abs(L.queueStep[0]) * L.queueRowLength + 0.5;
    S.box([w, 0.012, z1 - z0], '#a82a2a', [qx, 0.014, (z0 + z1) / 2]);
    for (const s of [-1, 1]) S.box([0.1, 0.014, z1 - z0], '#d4af37', [qx + s * (w / 2 - 0.12), 0.016, (z0 + z1) / 2]);
    for (const s of [-1, 1]) {
      const x = qx + s * (w / 2 + 0.18);
      const zs = [z0 + 0.6, (z0 + z1) / 2 + 0.2, z1 - 0.2];
      zs.forEach((z, i) => {
        M.cyl(0.16, 0.18, 0.04, '#d4af37', [x, 0, z]);
        M.cyl(0.03, 0.03, 0.95, '#d4af37', [x, 0, z]);
        M.sphere(0.07, '#d4af37', [x, 1.0, z]);
        if (i > 0) ctx.S.cylC(0.03, z - zs[i - 1], '#8a1f2b', [x, 0.82, (z + zs[i - 1]) / 2], [Math.PI / 2, 0, 0], 6);
      });
    }
  },

  // 7) A second table, and olive trees flanking the stand.
  secondTable(ctx) {
    const { L } = ctx;
    bistroSet(ctx, CX + 3.5, 6.3);
    oliveTree(ctx, CX + L.W / 2 + 0.75, 2.0);
    oliveTree(ctx, CX - L.W / 2 - 0.75, 2.2);
  },

  // 8) A bunch of balloons that sways.
  balloons(ctx) {
    const { g, env, cw } = ctx;
    const b = new Batch();
    const colors = ['#ef476f', '#ffd166', '#06d6a0', '#4ea8de', '#9b5de5', '#f78c6b'];
    const spots = [[0, 2.2, 0], [0.32, 2.0, 0.1], [-0.3, 1.95, -0.05], [0.12, 2.6, -0.1], [-0.16, 2.48, 0.14], [0.36, 2.45, -0.12]];
    spots.forEach(([x, y, z], i) => {
      b.sphere(0.24, colors[i], [x, y, z], [1, 1.2, 1]);
      b.cone(0.05, 0.07, colors[i], [x, y - 0.33, z]);
      b.cylC(0.006, y - 0.3, '#eeeeee', [x / 2, (y - 0.3) / 2, z / 2], [-(z / y) * 0.9, 0, (x / y) * 0.9], 4);
    });
    const m = b.mesh(VC_SHINY);
    m.position.set(CX + cw / 2 + 0.05, 1.2, 2.1);
    g.add(m);
    env.updaters.push((dt, time) => {
      m.rotation.z = Math.sin(time * 1.3) * 0.07;
      m.rotation.x = Math.sin(time * 0.9 + 1) * 0.05;
    });
  },

  // 9) A row of flags along the roof.
  flags(ctx) {
    const { M, g, env, L } = ctx;
    const fb = ctx.flagBase;
    const cloth = [];
    for (let i = 0; i < fb.n; i++) {
      const x = CX - L.W / 2 + 0.4 + ((L.W - 0.8) / (fb.n - 1)) * i;
      M.cyl(0.03, 0.035, 1.5, '#d9dde3', [x, fb.y, fb.z]);
      M.sphere(0.055, '#d4af37', [x, fb.y + 1.53, fb.z]);
      const b = new Batch();
      ['#2e8b57', '#ffffff', '#d8402f'].forEach((c, k) => b.boxC([0.22, 0.42, 0.02], c, [0.13 + k * 0.22, 0, 0]));
      const m = b.mesh(VC_FLAT);
      m.position.set(x + 0.03, fb.y + 1.26, fb.z);
      g.add(m);
      cloth.push(m);
    }
    env.updaters.push((dt, time) => {
      cloth.forEach((m, i) => { m.rotation.y = Math.sin(time * 2.2 + i * 0.9) * 0.35; });
    });
  },

  // 10) A golden pizza that turns on the roof.
  statue(ctx) {
    const { M, g, env } = ctx;
    const [x, y, z] = ctx.statuePos;
    M.cyl(0.06, 0.09, 0.9, '#d9dde3', [x, y - 0.9, z]);
    M.cyl(0.26, 0.3, 0.1, '#d4af37', [x, y - 0.05, z]);
    const b = new Batch();
    const gold = '#f2c230';
    b.cylC(0.62, 0.1, gold, [0, 0.72, 0], [Math.PI / 2, 0, 0], 24);
    b.torus(0.62, 0.075, '#e0a81e', [0, 0.72, 0]);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      for (const s of [-1, 1]) b.cylC(0.11, 0.05, '#e0a81e', [Math.cos(a) * 0.34, 0.72 + Math.sin(a) * 0.34, s * 0.06], [Math.PI / 2, 0, 0], 10);
    }
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      b.boxC([0.06, 0.26, 0.04], gold, [Math.cos(a) * 0.86, 0.72 + Math.sin(a) * 0.86, 0], [0, 0, a - Math.PI / 2]);
    }
    const m = b.mesh(new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 90, specular: new THREE.Color('#fff2b0'), emissive: new THREE.Color('#6b4a00'), emissiveIntensity: 0.6 }));
    m.position.set(x, y, z);
    g.add(m);
    env.updaters.push((dt) => { m.rotation.y += dt * 0.9; });
  },
};

// Visible Empire upgrades. Each one adds one visible piece per level, so the stand shows
// how far the player has pushed it. (The numbers come from the upgrades in economy.json.)
const OVEN_Z = -0.1;
function empireExtras(ctx, lv) {
  const { S, M, F, warm, L, g } = ctx;
  const { marketing = 0, pizzaSchool = 0, megaOven = 0 } = lv;

  // Marketing: a coloured ad banner per level, hanging from the eave on the right.
  const banners = ['#ef476f', '#ffd166', '#06d6a0', '#4ea8de', '#9b5de5'];
  const ex = CX + L.W / 2 + 0.25;
  for (let i = 0; i < marketing; i++) {
    const x = ex + i * 0.42 - (marketing - 1) * 0.21 + 0.6;
    const y = (ctx.eave ? ctx.eave.y : 3.2) - 0.7;
    M.cylC(0.012, 0.9, IRON, [x, y + 0.45, ctx.eave ? ctx.eave.z : 0.4]);
    S.box([0.36, 1.2, 0.03], banners[i % banners.length], [x, y - 0.6, (ctx.eave ? ctx.eave.z : 0.4) + 0.02]);
    S.box([0.3, 0.06, 0.04], '#ffffff', [x, y - 0.36, (ctx.eave ? ctx.eave.z : 0.4) + 0.04]);
  }

  // Pizza school: gold-framed certificates on the back wall, one per level.
  for (let i = 0; i < pizzaSchool; i++) {
    const x = CX - 0.8 + i * 0.42;
    const z = L.back + 0.16;
    S.box([0.4, 0.5, 0.05], '#d4af37', [x, 1.45 + 0.25, z]);
    S.box([0.32, 0.4, 0.04], '#fff8e7', [x, 1.45 + 0.25, z + 0.02]);
    S.box([0.2, 0.04, 0.04], '#b5372a', [x, 1.45 + 0.34, z + 0.03]);
    S.box([0.2, 0.03, 0.04], '#6b4428', [x, 1.45 + 0.2, z + 0.03]);
  }

  // Industrial ovens: extra brick ovens in a row to the right of the main oven.
  for (let i = 0; i < megaOven; i++) {
    const ox = L.ovenX + 1.35 + i * 1.35;
    const oz = OVEN_Z;
    S.box([1.1, 0.5, 1.0], STONE, [ox, 0, oz]);
    g.add(texBox([1.05, 0.9, 0.95], 'brick', [ox, 0.5, oz], [1.2, 1]));
    const dome = new THREE.Mesh(G.dome(14, 8), texMat('brick', 2, 1));
    dome.scale.set(0.58, 0.5, 0.52);
    dome.position.set(ox, 1.4, oz);
    dome.castShadow = true;
    g.add(dome);
    S.box([0.72, 0.44, 0.05], '#140d0a', [ox, 0.66, oz + 0.52]);
    warm.box([0.62, 0.3, 0.03], '#ffb35a', [ox, 0.72, oz + 0.55]);
    M.cylC(0.04, 0.5, IRON, [ox + 0.36, 1.9, oz - 0.3]);
  }
}

function decorate(ctx, level) {
  const steps = ctx.L.decorSteps || Object.keys(DECOR);
  steps.slice(0, level).forEach((id) => {
    if (DECOR[id]) DECOR[id](ctx);
  });
}

// ---------- Staff ----------

function staff(ctx) {
  const { g, env, L } = ctx;
  const cap = L.tier.staffVisible;
  const y = L.floorY;
  const [dx] = L.stations.dough;
  const [lx] = L.stations.load;
  const cashierSlots = [[CX + 0.45, y, 0.42, 0], [CX - 0.7, y, 0.38, 0], [CX + 1.75, 0, 2.75, -0.3]];
  const cookSlots = [[dx + 0.05, y, -0.08, 0], [lx, y, -0.12, 0], [dx - 1.05, y, 0.3, 0.3]];
  const cashierLooks = [
    { shirt: '#ef476f', hat: 'cap', hatColor: '#ffd166', hair: '#3b2a1e', skin: '#c68a5c', hairStyle: 'short' },
    { shirt: '#4ea8de', hat: 'cap', hatColor: '#d8402f', hair: '#5a3a22', skin: '#f2c9a0', hairStyle: 'long' },
    { shirt: '#2f6b5a', hat: 'none', hair: '#1c1c22', skin: '#e0ac7e', hairStyle: 'bun' },
  ];
  const cookLooks = [
    { skin: '#8d5a3b', hair: '#1c1c22' },
    { skin: '#f2c9a0', hair: '#7a2f1e' },
    { skin: '#e0ac7e', hair: '#2b1d14' },
  ];
  const place = (p, slot) => {
    p.group.position.set(slot[0], slot[1], slot[2]);
    p.group.rotation.y = slot[3];
    p.group.visible = false;
    p.baseY = slot[1];
    g.add(p.group);
    return p;
  };
  const cashiers = [];
  const cooks = [];
  for (let i = 0; i < cap; i++) {
    cashiers.push(place(makePerson({ ...cashierLooks[i], pants: '#2f3e46', apron: CREAM }), cashierSlots[i]));
    cooks.push(place(makePerson({ ...cookLooks[i], shirt: '#fdfdfd', pants: '#3d4a66', hat: 'toque', apron: '#e9e2d2', hairStyle: 'short' }), cookSlots[i]));
  }
  env.staff = { cashiers, cooks };
}

// Called every frame: shows as many employees as are hired (up to what this place can hold)
// and animates them while there is work.
export function updateStaff(env, state, time) {
  const st = env.staff;
  if (!st) return;
  const waiting = state.customers.some((x) => x.state === 'waiting');
  const ready = state.pizzas.some((p) => p.stage === 'ready');
  const prep = state.pizzas.some((p) => p.stage === 'dough' || p.stage === 'topping');
  const ovenWork = state.pizzas.some((p) => p.stage === 'load' || p.stage === 'baking');
  st.cashiers.forEach((p, i) => {
    p.group.visible = state.staff.cashier > i;
    if (!p.group.visible) return;
    const busy = i === 0 ? waiting : i === 1 ? ready || waiting : true;
    const ph = time * 8 + i * 1.7;
    p.armR.rotation.x = busy ? -1.0 + Math.sin(ph) * 0.45 : -0.1 + Math.sin(time * 1.6 + i) * 0.04;
    p.armL.rotation.x = busy ? -0.5 + Math.cos(ph) * 0.25 : -0.1;
    p.group.position.y = p.baseY + (busy ? Math.abs(Math.sin(ph * 0.5)) * 0.02 : Math.sin(time * 1.4 + i) * 0.006);
  });
  st.cooks.forEach((p, i) => {
    p.group.visible = state.staff.cook > i;
    if (!p.group.visible) return;
    const busy = i === 1 ? ovenWork : prep;
    const ph = time * 9 + i * 2.1;
    p.armR.rotation.x = busy ? -0.95 + Math.sin(ph) * 0.5 : -0.1;
    p.armL.rotation.x = busy ? -0.95 + Math.sin(ph + Math.PI) * 0.5 : -0.1;
    p.group.position.y = p.baseY + Math.sin(time * 1.5 + i * 2) * 0.006;
  });
}

export function setNeonLevel(env, level) {
  if (!env.neon) return;
  env.neon.l1.visible = level >= 1;
  env.neon.l2.visible = level >= 2;
}

export function setOvenGlow(env, baking, time = 0) {
  const flicker = 0.85 + Math.sin(time * 11) * 0.1 + Math.sin(time * 23) * 0.05;
  if (env.ovenMouthMat) env.ovenMouthMat.emissiveIntensity = (baking ? 3.2 : 0.7) * flicker;
}
