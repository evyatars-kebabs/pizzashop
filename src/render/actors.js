// Customers and pizzas as 3D views. Views read the state each frame and animate toward it.
// Views never own gameplay state; removing a state entry starts a short leave animation.
import * as THREE from 'three';
import { Batch, uniqueMat, mat, G, geo } from './assets.js';
import { makePerson, poseWalk, customerLook } from './people.js';

const TOPPING_COLOR = {
  pepperoni: '#b83227',
  mushroom: '#d8c7a8',
  olive: '#2f3d1c',
  basil: '#2e9a57',
  pepper: '#f0902a',
};
const CRUST_RAW = new THREE.Color('#f3e2bd');
const CRUST_BAKED = new THREE.Color('#d2893a');
const CHEESE_RAW = new THREE.Color('#fff0b8');
const CHEESE_BAKED = new THREE.Color('#ffc94d');
const MANUAL_STAGES = new Set(['dough', 'topping', 'load', 'ready']);

// Unlit, so order bubbles and patience bars stay readable at night.
const UNLIT = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
const BAR_BACK = new THREE.MeshBasicMaterial({ color: '#2b2d42', toneMapped: false });
const SAUCE = mat('#c23b22', { roughness: 0.6 });

function bubbleGeometry(topping) {
  return geo('bubble|' + topping, () => {
    const b = new Batch();
    const face = [Math.PI / 2, 0, 0];
    b.cylC(0.3, 0.02, '#2b2d42', [0, 0, -0.012], face, 22);
    b.cylC(0.27, 0.02, '#ffffff', [0, 0, 0], face, 22);
    b.add(G.cone(3), '#ffffff', [0, -0.3, 0], [Math.PI, 0, 0], [0.1, 0.14, 0.01]);
    b.cylC(0.19, 0.02, '#d9993f', [0, 0, 0.012], face, 20);
    b.cylC(0.155, 0.02, '#ffd76a', [0, 0, 0.02], face, 20);
    const c = TOPPING_COLOR[topping] || '#ffffff';
    [[0, 0.07], [-0.07, -0.04], [0.07, -0.04]].forEach(([x, y]) => b.cylC(0.045, 0.02, c, [x, y, 0.03], face, 10));
    return b.geometry();
  });
}

const pizzaGeo = {
  base: () => geo('pz-base', () => {
    const b = new Batch();
    b.cylC(0.39, 0.035, '#ffffff', [0, 0, 0], [0, 0, 0], 22);
    b.torus(0.37, 0.058, '#e9dcc4', [0, 0.02, 0], [Math.PI / 2, 0, 0], 22);
    return b.geometry();
  }),
  ball: () => geo('pz-ball', () => new Batch().sphere(0.24, '#ffffff', [0, 0, 0], [1, 1, 1], [14, 10]).geometry()),
  disc: () => geo('pz-disc', () => new THREE.CylinderGeometry(1, 1, 1, 22)),
  toppings: () => geo('pz-top', () => {
    const b = new Batch();
    b.cylC(0.058, 0.03, '#ffffff', [0, 0, 0], [0, 0, 0], 8);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.3;
      b.cylC(0.055, 0.03, '#ffffff', [Math.cos(a) * 0.2, 0, Math.sin(a) * 0.2], [0, a, 0], 8);
    }
    return b.geometry();
  }),
};

export class Actors {
  constructor(env, layout, cfg) {
    this.camera = env.camera;
    this.loc = layout;
    this.cfg = cfg;
    this.customers = new Map();
    this.pizzas = new Map();
    this.root = new THREE.Group();
    env.scene.add(this.root);
    this.time = 0;
  }

  // Called when the stand moves or changes size.
  setLocation(layout) {
    this.loc = layout;
  }

  // Creates/removes views to match state. Called once per frame.
  sync(state) {
    const liveC = new Set(state.customers.map((c) => c.id));
    for (const [id, v] of this.customers) {
      if (!liveC.has(id) && !v.leaving) this.removeView(this.customers, id);
    }
    for (const c of state.customers) {
      if (!this.customers.has(c.id)) this.customers.set(c.id, this.makeCustomer(c));
      this.customers.get(c.id).data = c;
    }

    const livePz = new Set(state.pizzas.map((p) => p.id));
    for (const [id, v] of this.pizzas) {
      if (!livePz.has(id) && !v.leaving) this.removeView(this.pizzas, id);
    }
    for (const p of state.pizzas) {
      if (!this.pizzas.has(p.id)) this.pizzas.set(p.id, this.makePizza(p));
      const v = this.pizzas.get(p.id);
      if (v.stage !== p.stage) {
        v.pop = 1;
        v.stage = p.stage;
      }
      v.data = p;
    }
  }

  // Called when an event says a customer is leaving (served or angry).
  leaveCustomer(id, happy) {
    const v = this.customers.get(id);
    if (!v) return;
    v.leaving = true;
    v.leaveHappy = happy;
    v.leaveT = 0;
    v.overhead.visible = false;
  }

  leavePizza(id) {
    const v = this.pizzas.get(id);
    if (!v) return;
    v.leaving = true;
    v.leaveT = 0;
  }

  removeView(map, id) {
    const v = map.get(id);
    if (v) {
      this.root.remove(v.group);
      map.delete(id);
    }
  }

  makeCustomer(c) {
    const group = new THREE.Group();
    const person = makePerson(customerLook(c.id));
    group.add(person.group);

    // Order bubble and patience bar float above the head and always face the camera.
    const overhead = new THREE.Group();
    overhead.position.y = 2.35;
    const bubble = new THREE.Mesh(bubbleGeometry(c.topping), UNLIT);
    const bar = new THREE.Group();
    bar.position.y = 0.46;
    const back = new THREE.Mesh(G.box(), BAR_BACK);
    back.scale.set(0.66, 0.11, 0.02);
    const fill = new THREE.Mesh(G.box(), new THREE.MeshBasicMaterial({ color: '#06d6a0', toneMapped: false }));
    fill.scale.set(0.6, 0.065, 0.03);
    fill.position.z = 0.012;
    bar.add(back, fill);
    overhead.add(bubble, bar);
    group.add(overhead);

    // Generous invisible hit area for taps.
    const hit = new THREE.Mesh(G.cyl(8), BAR_BACK);
    hit.scale.set(0.5, 2.9, 0.5);
    hit.position.y = 1.45;
    hit.visible = false;
    hit.userData = { kind: 'customer', id: c.id };
    group.add(hit);

    const start = this.queueSpot(0);
    const x = start[0] + 5 + (c.id % 3);
    const z = start[2] + 3.5;
    group.position.set(x, 0, z);
    this.root.add(group);
    return {
      group, person, overhead, bubble, fill, hit,
      x, z, heading: Math.PI, id: c.id, data: c, leaving: false, leaveT: 0,
      phase: (c.id * 1.7) % 6.28, turn: ((c.id * 37) % 100) / 100 - 0.5,
    };
  }

  makePizza(p) {
    const group = new THREE.Group();
    const crustMat = uniqueMat('#f3e2bd', { vertexColors: true });
    const cheeseMat = uniqueMat('#fff0b8', { roughness: 0.55 });
    const topMat = uniqueMat('#ffffff', { vertexColors: true, roughness: 0.6 });
    const ball = new THREE.Mesh(pizzaGeo.ball(), crustMat);
    ball.scale.set(1, 0.6, 1);
    ball.position.y = 0.1;
    const base = new THREE.Mesh(pizzaGeo.base(), crustMat);
    const sauce = new THREE.Mesh(pizzaGeo.disc(), SAUCE);
    sauce.scale.set(0.325, 0.03, 0.325);
    sauce.position.y = 0.012;
    const cheese = new THREE.Mesh(pizzaGeo.disc(), cheeseMat);
    cheese.scale.set(0.3, 0.03, 0.3);
    cheese.position.y = 0.02;
    const toppings = new THREE.Mesh(pizzaGeo.toppings(), topMat);
    toppings.position.y = 0.036;
    const ring = new THREE.Mesh(G.ring(), new THREE.MeshBasicMaterial({ color: '#ffd60a', toneMapped: false, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.5;
    ring.visible = false;
    for (const m of [ball, base]) m.castShadow = true;
    group.add(ball, base, sauce, cheese, toppings, ring);

    const hit = new THREE.Mesh(G.cyl(8), BAR_BACK);
    hit.scale.set(0.5, 0.7, 0.5);
    hit.position.y = 0.2;
    hit.visible = false;
    hit.userData = { kind: 'pizza', id: p.id };
    group.add(hit);

    this.root.add(group);
    return {
      group, crustMat, cheeseMat, topMat, ball, base, sauce, cheese, toppings, ring, hit,
      stage: p.stage, pop: 0, leaving: false, leaveT: 0, id: p.id, data: p, x: 0, y: 0, z: 0, s: 1, inited: false,
    };
  }

  queueSpot(index) {
    const cols = this.loc.queueRowLength;
    const col = index % cols;
    const row = Math.floor(index / cols);
    const s = this.loc.queueStart;
    const st = this.loc.queueStep;
    return [s[0] + st[0] * col, 0, s[2] + st[2] * row];
  }

  stationFor(stage) {
    const st = this.loc.stations;
    switch (stage) {
      case 'dough':
      case 'topping': return st.dough;
      case 'load': return st.load;
      case 'baking': return st.oven;
      default: return st.pass;
    }
  }

  update(dt, state) {
    this.time += dt;
    const k = 1 - Math.exp(-dt * 6);

    // Customers: queue order by id; ordered customers wait near the window.
    const waiting = state.customers.filter((c) => c.state === 'waiting').sort((a, b) => a.id - b.id);
    const ordered = state.customers.filter((c) => c.state === 'ordered').sort((a, b) => a.id - b.id);
    const slotOf = new Map(waiting.map((c, i) => [c.id, i]));
    const orderedIdx = new Map(ordered.map((c, i) => [c.id, i]));
    for (const v of this.customers.values()) {
      if (v.leaving) {
        v.leaveT += dt;
        const dir = v.leaveHappy ? 1 : -1;
        v.x += dir * dt * 2.6;
        v.z += dt * 1.1;
        v.group.position.set(v.x, 0, v.z);
        v.person.group.rotation.y = dir * 1.1;
        poseWalk(v.person, this.time * 11 + v.phase, 1);
        if (!v.leaveHappy) v.person.group.rotation.z = Math.sin(v.leaveT * 26) * 0.08;
        v.group.scale.setScalar(Math.max(0.001, 1 - Math.max(0, v.leaveT - 1.1) * 3));
        if (v.leaveT > 1.4) this.removeView(this.customers, v.id);
        continue;
      }
      const slot = slotOf.get(v.id);
      let tx;
      let tz;
      if (slot !== undefined) {
        [tx, , tz] = this.queueSpot(slot);
      } else {
        // Ordered customers stand to the right of the window so the queue can move up.
        const oi = orderedIdx.get(v.id) || 0;
        tx = this.loc.window[0] + 0.5 + (oi % 4) * 0.72;
        tz = this.loc.window[2] + Math.floor(oi / 4) * 0.7;
      }
      const dx = tx - v.x;
      const dz = tz - v.z;
      const dist = Math.hypot(dx, dz);
      const walking = dist > 0.06;
      const speed = Math.min(dist, dt * 2.4);
      if (walking) {
        v.x += (dx / dist) * speed;
        v.z += (dz / dist) * speed;
      }
      v.group.position.set(v.x, 0, v.z);
      // Face the walking direction; when standing, face the counter with a little variety.
      const target = walking ? Math.atan2(dx, dz) : Math.PI + v.turn * 1.1 + Math.sin(this.time * 0.6 + v.phase) * 0.15;
      let diff = target - v.heading;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      v.heading += diff * Math.min(1, dt * 8);
      v.person.group.rotation.y = v.heading;
      poseWalk(v.person, this.time * 10 + v.phase, walking ? 1 : 0);
      v.person.group.position.y = walking ? Math.abs(Math.sin(this.time * 10 + v.phase)) * 0.035 : Math.sin(this.time * 1.5 + v.phase) * 0.006;
      v.group.scale.setScalar(1);

      const frac = Math.max(0, v.data.patience / v.data.maxPatience);
      v.fill.scale.x = Math.max(0.001, 0.6 * frac);
      v.fill.position.x = -(0.6 - 0.6 * frac) / 2;
      v.fill.material.color.set(frac > 0.5 ? '#06d6a0' : frac > 0.25 ? '#ffd166' : '#ef476f');
      v.overhead.quaternion.copy(this.camera.quaternion);
      v.bubble.position.y = Math.sin(this.time * 2.2 + v.phase) * 0.03;
      // Impatient customers' bubbles shake a little.
      v.bubble.rotation.z = frac < 0.25 ? Math.sin(this.time * 18) * 0.12 : 0;
    }

    // Pizzas: positioned per station, grouped by station and spread out.
    const byStation = new Map();
    for (const v of this.pizzas.values()) {
      if (v.leaving) continue;
      const s = this.stationFor(v.data.stage);
      if (!byStation.has(s)) byStation.set(s, []);
      byStation.get(s).push(v);
    }
    for (const [station, list] of byStation) {
      list.sort((a, b) => a.id - b.id);
      const inOven = station === this.loc.stations.oven;
      const gap = inOven ? 0.3 : 0.56;
      list.forEach((v, i) => {
        const spread = (i - (list.length - 1) / 2) * gap;
        const tx = station[0] + spread;
        const ty = station[1] + (inOven ? (i % 2) * 0.012 : 0);
        const tz = station[2] + (inOven ? 0 : (i % 2) * 0.12 - 0.06);
        const ts = inOven ? 0.6 : 1;
        if (!v.inited) { v.x = tx; v.y = ty; v.z = tz; v.s = ts; v.inited = true; }
        v.x += (tx - v.x) * k;
        v.y += (ty - v.y) * k;
        v.z += (tz - v.z) * k;
        v.s += (ts - v.s) * k;
        v.group.position.set(v.x, v.y, v.z);
      });
    }
    for (const v of this.pizzas.values()) {
      if (v.leaving) {
        v.leaveT += dt;
        v.group.scale.setScalar(Math.max(0.001, v.s * (1 - v.leaveT * 3)));
        v.group.position.y += dt * 1.5;
        if (v.leaveT > 0.34) this.removeView(this.pizzas, v.id);
        continue;
      }
      const p = v.data;
      const stretched = p.q.dough > 0;
      const topped = p.q.top > 0;
      v.ball.visible = !stretched;
      v.base.visible = stretched;
      v.sauce.visible = stretched;
      v.cheese.visible = stretched;
      v.toppings.visible = topped && !!p.topping;

      // Colour follows the bake: pale dough and cheese, then golden.
      const style = this.cfg.economy.styles[p.style];
      const total = p.bakeTotal || (style ? style.bakeSeconds : 10);
      const bake = p.stage === 'baking' ? 1 - Math.max(0, p.bakeLeft) / total : p.stage === 'ready' ? 1 : 0;
      const b = Math.min(1, Math.max(0, bake));
      v.crustMat.color.copy(CRUST_RAW).lerp(CRUST_BAKED, b);
      v.cheeseMat.color.copy(CHEESE_RAW).lerp(CHEESE_BAKED, b);
      if (p.topping) v.topMat.color.set(TOPPING_COLOR[p.topping] || '#ffffff');

      // Squash and stretch on stage change, then settle.
      v.pop = Math.max(0, v.pop - dt * 3.5);
      const squash = Math.sin(v.pop * Math.PI) * 0.25;
      v.group.scale.set(v.s * (1 + squash), v.s * (1 - squash * 0.6), v.s * (1 + squash));
      const manual = MANUAL_STAGES.has(p.stage);
      v.ring.visible = manual;
      if (manual) {
        const pulse = 1 + Math.sin(this.time * 6) * 0.08;
        v.ring.scale.setScalar(0.95 * pulse);
        v.ring.position.y = 0.3 + Math.sin(this.time * 3) * 0.03;
      }
    }
  }

  // Raycast helper: returns {kind, id} for the first customer or pizza hit.
  pick(raycaster) {
    const objs = [];
    for (const v of this.pizzas.values()) if (!v.leaving) objs.push(v.hit);
    for (const v of this.customers.values()) if (!v.leaving) objs.push(v.hit);
    const hits = raycaster.intersectObjects(objs, false);
    // Prefer pizzas when both are under the pointer: they are the smaller target.
    const pizza = hits.find((h) => h.object.userData.kind === 'pizza');
    const first = pizza || hits[0];
    return first ? { kind: first.object.userData.kind, id: first.object.userData.id } : null;
  }

  // World position of a customer or pizza, for floating text and particles.
  positionOf(kind, id) {
    const map = kind === 'customer' ? this.customers : this.pizzas;
    const v = map.get(id);
    if (!v) return null;
    return [v.group.position.x, v.group.position.y + (kind === 'customer' ? 1.9 : 0.3), v.group.position.z];
  }

  // Where steam should rise from (pizzas waiting on the counter).
  steamPoints() {
    const out = [];
    for (const v of this.pizzas.values()) {
      if (!v.leaving && v.data.stage === 'ready') out.push([v.x, v.y + 0.12, v.z]);
    }
    return out;
  }
}
