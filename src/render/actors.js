// Customers and pizzas as 3D views. Views read the state each frame and animate toward it.
// Views never own gameplay state; removing a state entry starts a short leave animation.
import * as THREE from 'three';
import { boxMesh, mat, uniqueMat, G } from './assets.js';

const SKIN = ['#f1c27d', '#c68642', '#8d5524', '#ffdbac'];
const SHIRT = ['#4ea8de', '#ef476f', '#ffd166', '#06d6a0', '#9b5de5', '#f78c6b'];
const TOPPING_COLOR = {
  pepperoni: '#c0392b',
  mushroom: '#c9b79c',
  olive: '#3d5a1e',
  basil: '#2e8b57',
  pepper: '#e67e22',
};
const CRUST_RAW = new THREE.Color('#f1d9a6');
const CRUST_BAKED = new THREE.Color('#c86b2a');
const CHEESE = new THREE.Color('#ffe08a');
const MANUAL_STAGES = new Set(['dough', 'topping', 'load', 'ready']);

export class Actors {
  constructor(env, loc, cfg) {
    this.camera = env.camera;
    this.loc = loc;
    this.cfg = cfg;
    this.customers = new Map();
    this.pizzas = new Map();
    this.root = new THREE.Group();
    env.scene.add(this.root);
    this.time = 0;
  }

  // Called when the stand moves. Views for customers and pizzas follow the state, not the location.
  setLocation(loc) {
    this.loc = loc;
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
    const shirt = SHIRT[c.id % SHIRT.length];
    const skin = SKIN[c.id % SKIN.length];
    const body = new THREE.Mesh(G.cylFine(), mat(shirt));
    body.scale.set(0.3, 0.75, 0.3);
    body.position.y = 0.75;
    body.castShadow = true;
    const head = new THREE.Mesh(G.sphere(), mat(skin));
    head.scale.set(0.24, 0.26, 0.24);
    head.position.y = 1.55;
    head.castShadow = true;
    group.add(body, head);

    // Order bubble: a crust disc with a dot of the wanted topping. No text in images.
    const bubble = new THREE.Group();
    bubble.position.set(0, 2.2, 0);
    const crust = new THREE.Mesh(G.cylFine(), uniqueMat('#f1d9a6'));
    crust.scale.set(0.2, 0.03, 0.2);
    crust.rotation.x = Math.PI / 2;
    const dot = new THREE.Mesh(G.cylFine(), uniqueMat(TOPPING_COLOR[c.topping] || '#ffffff'));
    dot.scale.set(0.12, 0.035, 0.12);
    dot.rotation.x = Math.PI / 2;
    dot.position.z = 0.01;
    bubble.add(crust, dot);
    group.add(bubble);

    // Patience bar.
    const bar = new THREE.Group();
    bar.position.set(0, 2.55, 0);
    const back = new THREE.Mesh(G.box(), mat('#2b2d42'));
    back.scale.set(0.6, 0.07, 0.02);
    const fill = new THREE.Mesh(G.box(), uniqueMat('#06d6a0', { emissive: new THREE.Color('#06d6a0'), emissiveIntensity: 0.3 }));
    fill.scale.set(0.56, 0.05, 0.03);
    fill.position.z = 0.01;
    bar.add(back, fill);
    group.add(bar);

    group.userData = { kind: 'customer', id: c.id };
    group.traverse((o) => { o.userData = { kind: 'customer', id: c.id }; });
    const start = this.queueSpot(0);
    group.position.set(start[0] + 3, 0, start[2]);
    this.root.add(group);
    return { group, bubble, fill, bar, body, x: start[0] + 3, z: start[2], id: c.id, data: c, leaving: false, leaveT: 0, phase: Math.random() * 6 };
  }

  makePizza(p) {
    const group = new THREE.Group();
    const crustMat = uniqueMat('#f1d9a6');
    const topMat = uniqueMat('#ffe08a');
    const crust = new THREE.Mesh(G.cylFine(), crustMat);
    crust.scale.set(0.42, 0.06, 0.42);
    const top = new THREE.Mesh(G.cylFine(), topMat);
    top.scale.set(0.34, 0.05, 0.34);
    top.position.y = 0.04;
    const ring = new THREE.Mesh(G.ring(), uniqueMat('#ffd60a', { emissive: new THREE.Color('#ffd60a'), emissiveIntensity: 0.8 }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.4;
    ring.scale.set(1.1, 1.1, 1.1);
    ring.visible = false;
    crust.castShadow = true;
    group.add(crust, top, ring);
    group.userData = { kind: 'pizza', id: p.id };
    group.traverse((o) => { o.userData = { kind: 'pizza', id: p.id }; });
    this.root.add(group);
    return { group, crustMat, topMat, ring, stage: p.stage, pop: 0, leaving: false, leaveT: 0, id: p.id, data: p, x: 0, y: 0, z: 0, inited: false };
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
    switch (stage) {
      case 'dough':
      case 'topping': return this.loc.stations.dough;
      case 'load': return this.loc.stations.load;
      case 'baking': return this.loc.stations.oven;
      default: return this.loc.stations.pass;
    }
  }

  update(dt, state) {
    this.time += dt;
    const k = 1 - Math.exp(-dt * 6);

    // Customers: queue order by id; ordered customers stand at the window.
    const waiting = state.customers.filter((c) => c.state === 'waiting').sort((a, b) => a.id - b.id);
    const slotOf = new Map(waiting.map((c, i) => [c.id, i]));
    for (const v of this.customers.values()) {
      if (v.leaving) {
        v.leaveT += dt;
        const dir = v.leaveHappy ? 1 : -1;
        v.x += dir * dt * 2.5;
        v.z -= dt * (v.leaveHappy ? 1.2 : 0);
        v.group.position.x = v.x;
        v.group.position.z = v.z;
        v.group.scale.setScalar(Math.max(0.001, 1 - v.leaveT * 1.5));
        if (!v.leaveHappy) v.group.rotation.z = Math.sin(v.leaveT * 30) * 0.2;
        if (v.leaveT > 0.9) this.removeView(this.customers, v.id);
        continue;
      }
      const slot = slotOf.get(v.id);
      let tx;
      let tz;
      if (slot !== undefined) {
        [tx, , tz] = this.queueSpot(slot);
      } else {
        [tx, , tz] = this.loc.window;
      }
      const walking = Math.abs(tx - v.x) + Math.abs(tz - v.z) > 0.05;
      v.x += (tx - v.x) * k;
      v.z += (tz - v.z) * k;
      v.group.position.set(v.x, walking ? Math.abs(Math.sin(this.time * 12 + v.phase)) * 0.08 : 0, v.z);
      v.group.rotation.z = walking ? Math.sin(this.time * 12 + v.phase) * 0.06 : 0;
      v.group.scale.setScalar(1);

      const frac = Math.max(0, v.data.patience / v.data.maxPatience);
      v.fill.scale.x = Math.max(0.001, 0.56 * frac);
      v.fill.position.x = -(0.56 - 0.56 * frac) / 2;
      v.fill.material.color.set(frac > 0.5 ? '#06d6a0' : frac > 0.25 ? '#ffd166' : '#ef476f');
      v.fill.material.emissive.copy(v.fill.material.color);
      v.bubble.visible = v.data.state === 'ordered' || slot !== undefined;
      v.bubble.rotation.y = Math.sin(this.time * 2 + v.phase) * 0.2;
      v.bar.lookAt(this.camera.position);
      v.bubble.lookAt(this.camera.position);
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
      list.forEach((v, i) => {
        const spread = (i - (list.length - 1) / 2) * 0.5;
        const tx = station[0] + spread;
        const ty = station[1] + 0.05;
        const tz = station[2];
        if (!v.inited) { v.x = tx; v.y = ty; v.z = tz; v.inited = true; }
        v.x += (tx - v.x) * k;
        v.y += (ty - v.y) * k;
        v.z += (tz - v.z) * k;
        v.group.position.set(v.x, v.y, v.z);
      });
    }
    for (const v of this.pizzas.values()) {
      if (v.leaving) {
        v.leaveT += dt;
        v.group.scale.setScalar(Math.max(0.001, 1 - v.leaveT * 3));
        v.group.position.y += dt * 1.5;
        if (v.leaveT > 0.4) this.removeView(this.pizzas, v.id);
        continue;
      }
      const p = v.data;
      // Colour follows the work done: raw dough, then cheese and topping, then golden crust.
      const bake = p.stage === 'baking' ? 1 - Math.max(0, p.bakeLeft) / 12 : p.stage === 'ready' ? 1 : 0;
      v.crustMat.color.copy(CRUST_RAW).lerp(CRUST_BAKED, Math.min(1, Math.max(0, bake)));
      const toppingColor = p.topping ? TOPPING_COLOR[p.topping] : null;
      if (p.q.top > 0 && toppingColor) v.topMat.color.set(toppingColor);
      else if (p.q.dough > 0) v.topMat.color.copy(CHEESE);
      else v.topMat.color.set('#e8d5a0');
      v.topMat.color.lerp(new THREE.Color('#e8d5a0'), p.q.dough > 0 ? 0 : 0.5);

      // Squash and stretch on stage change, then settle.
      v.pop = Math.max(0, v.pop - dt * 3.5);
      const squash = Math.sin(v.pop * Math.PI) * 0.25;
      v.group.scale.set(1 + squash, 1 - squash * 0.6, 1 + squash);
      const manual = MANUAL_STAGES.has(p.stage);
      v.ring.visible = manual;
      if (manual) {
        const pulse = 1 + Math.sin(this.time * 6) * 0.08;
        v.ring.scale.set(1.1 * pulse, 1.1 * pulse, 1.1 * pulse);
      }
    }
  }

  // Raycast helper: returns {kind, id} for the first customer or pizza hit.
  pick(raycaster) {
    const objs = [];
    for (const v of this.customers.values()) if (!v.leaving) objs.push(v.group);
    for (const v of this.pizzas.values()) if (!v.leaving) objs.push(v.group);
    const hits = raycaster.intersectObjects(objs, true);
    for (const h of hits) {
      const ud = h.object.userData;
      if (ud && ud.kind) return { kind: ud.kind, id: ud.id };
      if (h.object.parent?.userData?.kind) return { kind: h.object.parent.userData.kind, id: h.object.parent.userData.id };
    }
    return null;
  }

  // World position of a customer or pizza, for floating text and particles.
  positionOf(kind, id) {
    const map = kind === 'customer' ? this.customers : this.pizzas;
    const v = map.get(id);
    if (!v) return null;
    return [v.group.position.x, v.group.position.y + 1.0, v.group.position.z];
  }
}
