// Juice: cash puffs, rain and bunting for events, and camera nudges. Pooled, so no allocation per frame.
import * as THREE from 'three';
import { mat, G } from './assets.js';

const POOL = 60;

export class FX {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    scene.add(this.root);
    this.particles = [];
    const goldMat = new THREE.MeshBasicMaterial({ color: '#ffd166' });
    const greenMat = new THREE.MeshBasicMaterial({ color: '#7bd389' });
    this.mats = { gold: goldMat, green: greenMat, red: new THREE.MeshBasicMaterial({ color: '#ef476f' }) };
    for (let i = 0; i < POOL; i++) {
      const m = new THREE.Mesh(G.sphere(), goldMat);
      m.scale.setScalar(0.0001);
      m.visible = false;
      this.root.add(m);
      this.particles.push({ m, life: 0, vx: 0, vy: 0, vz: 0 });
    }

    this.rain = this.buildRain();
    this.bunting = this.buildBunting();
    this.shakeAmt = 0;
  }

  puff(pos, kind = 'gold', count = 6) {
    let spawned = 0;
    for (const p of this.particles) {
      if (p.life > 0) continue;
      p.m.material = this.mats[kind];
      p.m.position.set(pos[0] + (Math.random() - 0.5) * 0.3, pos[1], pos[2] + (Math.random() - 0.5) * 0.3);
      p.m.visible = true;
      p.life = 0.7 + Math.random() * 0.4;
      p.vx = (Math.random() - 0.5) * 1.5;
      p.vy = 2 + Math.random() * 2;
      p.vz = (Math.random() - 0.5) * 1.5;
      if (++spawned >= count) break;
    }
  }

  buildRain() {
    const n = 220;
    const pos = new Float32Array(n * 6);
    for (let i = 0; i < n; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = Math.random() * 10;
      const z = (Math.random() - 0.5) * 16;
      pos.set([x, y, z, x, y + 0.5, z], i * 6);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const line = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#bfe3ff', transparent: true, opacity: 0.55 }));
    line.visible = false;
    line.frustumCulled = false;
    this.root.add(line);
    return line;
  }

  buildBunting() {
    const g = new THREE.Group();
    const colors = ['#ef476f', '#ffd166', '#06d6a0', '#4ea8de', '#9b5de5'];
    for (let i = 0; i < 14; i++) {
      const t = i / 13;
      const flag = new THREE.Mesh(G.cone(), mat(colors[i % colors.length]));
      flag.scale.set(0.35, 0.5, 0.05);
      flag.rotation.z = Math.PI;
      flag.position.set(-6 + t * 12, 4.6 - Math.sin(t * Math.PI) * 0.4, -0.6);
      g.add(flag);
    }
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
    for (const p of this.particles) {
      if (p.life <= 0) continue;
      p.life -= dt;
      p.vy -= 6 * dt;
      p.m.position.x += p.vx * dt;
      p.m.position.y += p.vy * dt;
      p.m.position.z += p.vz * dt;
      const s = Math.max(0.0001, Math.min(1, p.life * 2.2)) * 0.12;
      p.m.scale.setScalar(s);
      if (p.life <= 0) p.m.visible = false;
    }
    if (this.rain.visible) {
      const arr = this.rain.geometry.attributes.position.array;
      for (let i = 0; i < arr.length; i += 6) {
        arr[i + 1] -= dt * 14;
        arr[i + 4] -= dt * 14;
        if (arr[i + 1] < 0) {
          arr[i + 1] += 10;
          arr[i + 4] += 10;
        }
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
    if (this.bunting.visible) this.bunting.rotation.y = Math.sin(performance.now() / 900) * 0.02;
  }
}
