// Juice: spinning coins, sparkles, chimney smoke, steam, rain and festival bunting.
// Everything is pooled, so nothing is allocated per frame.
import * as THREE from 'three';
import { Batch, VC_FLAT, G } from './assets.js';

const COINS = 36;
const SPARKS = 30;
const PUFFS = 34;

export class FX {
  constructor(env) {
    this.env = env;
    this.root = new THREE.Group();
    env.scene.add(this.root);

    const coinMat = new THREE.MeshLambertMaterial({ color: '#ffd24a', emissive: new THREE.Color('#8a5a00'), emissiveIntensity: 0.7 });
    this.coins = [];
    for (let i = 0; i < COINS; i++) {
      const m = new THREE.Mesh(G.cyl(12), coinMat);
      m.visible = false;
      this.root.add(m);
      this.coins.push({ m, life: 0, vx: 0, vy: 0, vz: 0, spin: 0 });
    }

    this.sparkMats = {
      green: new THREE.MeshBasicMaterial({ color: '#8fe3a0', toneMapped: false }),
      red: new THREE.MeshBasicMaterial({ color: '#ff6b81', toneMapped: false }),
      gold: new THREE.MeshBasicMaterial({ color: '#ffe08a', toneMapped: false }),
    };
    this.sparks = [];
    for (let i = 0; i < SPARKS; i++) {
      const m = new THREE.Mesh(G.ico(0), this.sparkMats.green);
      m.visible = false;
      this.root.add(m);
      this.sparks.push({ m, life: 0, vx: 0, vy: 0, vz: 0 });
    }

    // Soft puffs for smoke and steam. Each has its own material so it can fade.
    this.puffs = [];
    for (let i = 0; i < PUFFS; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, depthWrite: false });
      const m = new THREE.Mesh(G.sphere(8, 6), mat);
      m.visible = false;
      this.root.add(m);
      this.puffs.push({ m, mat, life: 0, max: 1, vx: 0, vy: 0, vz: 0, size: 0.2, grow: 1 });
    }
    this.smoke = { pos: null, strength: 0, timer: 0 };
    this.steam = { points: [], timer: 0 };

    this.rain = this.buildRain();
    this.bunting = this.buildBunting();
  }

  // kind: 'gold' = coins (sales), 'green'/'red' = sparkles.
  puff(pos, kind = 'gold', count = 6) {
    if (kind === 'gold') {
      let n = 0;
      for (const c of this.coins) {
        if (c.life > 0) continue;
        c.m.position.set(pos[0] + (Math.random() - 0.5) * 0.3, pos[1], pos[2] + (Math.random() - 0.5) * 0.3);
        c.m.scale.set(0.085, 0.02, 0.085);
        c.m.visible = true;
        c.life = 0.9 + Math.random() * 0.4;
        c.vx = (Math.random() - 0.5) * 2.2;
        c.vy = 3 + Math.random() * 2.2;
        c.vz = (Math.random() - 0.2) * 1.8;
        c.spin = 8 + Math.random() * 10;
        if (++n >= count) break;
      }
    }
    let n = 0;
    for (const s of this.sparks) {
      if (s.life > 0) continue;
      s.m.material = this.sparkMats[kind] || this.sparkMats.green;
      s.m.position.set(pos[0] + (Math.random() - 0.5) * 0.4, pos[1] + 0.1, pos[2] + (Math.random() - 0.5) * 0.4);
      s.m.visible = true;
      s.life = 0.5 + Math.random() * 0.3;
      s.vx = (Math.random() - 0.5) * 2.4;
      s.vy = 1.4 + Math.random() * 2;
      s.vz = (Math.random() - 0.5) * 2.4;
      if (++n >= Math.ceil(count / 2) + 2) break;
    }
  }

  emitPuff(pos, color, size, life, vy, grow, opacity) {
    for (const p of this.puffs) {
      if (p.life > 0) continue;
      p.m.position.set(pos[0] + (Math.random() - 0.5) * 0.1, pos[1], pos[2] + (Math.random() - 0.5) * 0.1);
      p.mat.color.set(color);
      p.size = size;
      p.grow = grow;
      p.life = life;
      p.max = life;
      p.opacity = opacity;
      p.vx = 0.18 + Math.random() * 0.2;
      p.vy = vy * (0.8 + Math.random() * 0.4);
      p.vz = (Math.random() - 0.5) * 0.15;
      p.m.visible = true;
      return;
    }
  }

  // Chimney smoke: a wisp normally, thicker while pizzas bake.
  setSmoke(pos, strength) {
    this.smoke.pos = pos;
    this.smoke.strength = strength;
  }

  setSteam(points) {
    this.steam.points = points;
  }

  buildRain() {
    const n = 420;
    const pos = new Float32Array(n * 6);
    for (let i = 0; i < n; i++) {
      const x = (Math.random() - 0.5) * 34;
      const y = Math.random() * 14;
      const z = -8 + Math.random() * 24;
      pos.set([x, y, z, x - 0.06, y + 0.6, z], i * 6);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const line = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#cfe6ff', transparent: true, opacity: 0.5 }));
    line.visible = false;
    line.frustumCulled = false;
    this.root.add(line);
    return line;
  }

  // Festival bunting strung high across the street.
  buildBunting() {
    const g = new THREE.Group();
    const b = new Batch();
    const colors = ['#ef476f', '#ffd166', '#06d6a0', '#4ea8de', '#9b5de5'];
    for (const z of [-3.2, 7.5]) {
      for (let i = 0; i < 26; i++) {
        const t = i / 25;
        const x = -11 + t * 22.4;
        const y = 6.6 - Math.sin(t * Math.PI) * 1.1;
        b.add(G.cone(3), colors[i % colors.length], [x, y, z], [Math.PI, 0, 0], [0.26, 0.5, 0.03]);
      }
    }
    g.add(b.mesh(VC_FLAT, { cast: false }));
    g.visible = false;
    this.root.add(g);
    return g;
  }

  setEvents(active) {
    const ids = new Set(active.map((a) => a.id));
    this.rain.visible = ids.has('rainyDay');
    this.bunting.visible = ids.has('foodFestival');
  }

  update(dt) {
    for (const c of this.coins) {
      if (c.life <= 0) continue;
      c.life -= dt;
      c.vy -= 9 * dt;
      c.m.position.x += c.vx * dt;
      c.m.position.y += c.vy * dt;
      c.m.position.z += c.vz * dt;
      c.m.rotation.x += c.spin * dt;
      c.m.rotation.z += c.spin * 0.6 * dt;
      const s = Math.min(1, c.life * 3);
      c.m.scale.set(0.085 * s, 0.02 * s, 0.085 * s);
      if (c.life <= 0) c.m.visible = false;
    }
    for (const s of this.sparks) {
      if (s.life <= 0) continue;
      s.life -= dt;
      s.vy -= 5 * dt;
      s.m.position.x += s.vx * dt;
      s.m.position.y += s.vy * dt;
      s.m.position.z += s.vz * dt;
      s.m.scale.setScalar(Math.max(0.0001, Math.min(1, s.life * 2.4)) * 0.07);
      if (s.life <= 0) s.m.visible = false;
    }

    // Smoke and steam emitters.
    const sm = this.smoke;
    if (sm.pos) {
      sm.timer -= dt;
      if (sm.timer <= 0) {
        sm.timer = sm.strength > 0.5 ? 0.14 : 0.5;
        const night = 1 - (this.env.daylight ?? 1);
        const shadeV = Math.round(215 - night * 120);
        this.emitPuff(sm.pos, `rgb(${shadeV},${shadeV},${shadeV + 6})`, 0.2, 2.6, 0.95, 2.4, sm.strength > 0.5 ? 0.5 : 0.3);
      }
    }
    const st = this.steam;
    st.timer -= dt;
    if (st.timer <= 0 && st.points.length) {
      st.timer = 0.28;
      const p = st.points[Math.floor(Math.random() * st.points.length)];
      this.emitPuff(p, '#ffffff', 0.07, 0.9, 0.55, 1.6, 0.4);
    }
    for (const p of this.puffs) {
      if (p.life <= 0) continue;
      p.life -= dt;
      const t = 1 - p.life / p.max;
      p.m.position.x += p.vx * dt;
      p.m.position.y += p.vy * dt;
      p.m.position.z += p.vz * dt;
      p.m.scale.setScalar(p.size * (1 + t * p.grow));
      p.mat.opacity = p.opacity * Math.sin(Math.min(1, t * 6) * Math.PI / 2) * (1 - t);
      if (p.life <= 0) p.m.visible = false;
    }

    if (this.rain.visible) {
      const arr = this.rain.geometry.attributes.position.array;
      for (let i = 0; i < arr.length; i += 6) {
        arr[i + 1] -= dt * 16;
        arr[i + 4] -= dt * 16;
        if (arr[i + 1] < 0) {
          arr[i + 1] += 14;
          arr[i + 4] += 14;
        }
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
    if (this.bunting.visible) this.bunting.rotation.x = Math.sin(this.env.time * 1.2) * 0.015;
  }
}
