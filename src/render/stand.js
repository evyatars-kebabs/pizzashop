// The player's pizza cart. Built from primitives; stations come from the location data.
import * as THREE from 'three';
import { boxMesh, mat, uniqueMat, G } from './assets.js';

export function buildStand(loc, env) {
  const g = new THREE.Group();
  g.name = 'stand';
  const st = loc.stations;

  // Cart body, back panel, and wheels.
  g.add(boxMesh([4.2, 0.45, 2.6], '#c98a4b', [0.2, 0.2, 0.2]));
  g.add(boxMesh([4.2, 2.3, 0.2], '#e5533d', [0.2, 0.65, -1.05]));
  for (const x of [-1.7, 2.1]) {
    const wheel = new THREE.Mesh(G.cylFine(), mat('#2d2a32'));
    wheel.rotation.z = Math.PI / 2;
    wheel.scale.set(0.42, 0.18, 0.42);
    wheel.position.set(x, 0.42, 1.6);
    wheel.castShadow = true;
    g.add(wheel);
  }

  // Striped awning: alternating boxes, tilted toward the customers.
  const awning = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const c = i % 2 === 0 ? '#e5533d' : '#fff4e0';
    const slice = boxMesh([0.6, 0.12, 2.5], c, [-1.9 + i * 0.6, 2.85, 0.4]);
    awning.add(slice);
  }
  awning.rotation.x = -0.2;
  g.add(awning);

  // Counter, front and top.
  g.add(boxMesh([3.6, 0.95, 0.75], '#f3e2c1', [0.2, 0.2, 1.7]));
  g.add(boxMesh([3.75, 0.08, 1.0], '#b87a44', [0.2, 1.12, 1.6]));

  // Prep table where dough is stretched and toppings are added.
  g.add(boxMesh([1.1, 0.08, 0.9], '#d9b38c', [st.dough[0], st.dough[1] - 0.12, st.dough[2]]));
  // Holding rack for pizzas waiting to go in.
  g.add(boxMesh([0.9, 0.08, 0.8], '#d9b38c', [st.load[0], st.load[1] - 0.12, st.load[2]]));

  // Oven: brick body, dome, glowing mouth.
  const ox = st.oven[0];
  const oz = st.oven[2];
  g.add(boxMesh([1.6, 1.3, 1.3], '#8a4a3a', [ox, 0.2, oz]));
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.85, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat('#8a4a3a'));
  dome.position.set(ox, 1.5, oz);
  dome.scale.set(1, 0.6, 1);
  dome.castShadow = true;
  g.add(dome);
  const mouthMat = uniqueMat('#2b1b14', { emissive: new THREE.Color('#ff7a2a'), emissiveIntensity: 0.1 });
  env.ovenMouthMat = mouthMat;
  const mouth = new THREE.Mesh(G.box(), mouthMat);
  mouth.scale.set(1.1, 0.6, 0.05);
  mouth.position.set(ox, 0.85, oz + 0.68);
  g.add(mouth);

  // Cash register on the counter.
  g.add(boxMesh([0.5, 0.35, 0.4], '#5d6d7e', [0.9, 1.16, 1.5]));

  // Neon sign above the awning. Hidden until bought; brightens at night.
  const neonMat = uniqueMat('#ff5fa2', { emissive: new THREE.Color('#ff5fa2'), emissiveIntensity: 0.4 });
  env.glowMats.push(neonMat);
  const sign = new THREE.Mesh(G.box(), neonMat);
  sign.scale.set(2.2, 0.55, 0.08);
  sign.position.set(0.2, 3.7, -0.9);
  sign.visible = false;
  g.add(sign);
  const neonRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 6, 14), neonMat);
  neonRing.position.set(-1.6, 3.7, -0.85);
  neonRing.visible = false;
  g.add(neonRing);
  env.neon = { sign, ring: neonRing };

  // Little pole that holds the sign.
  const pole = new THREE.Mesh(G.cyl(), mat('#3c4043'));
  pole.scale.set(0.08, 1.8, 0.08);
  pole.position.set(2.2, 2.8, -0.9);
  g.add(pole);

  return g;
}

export function setNeonLevel(env, level) {
  if (env.neon) {
    env.neon.sign.visible = level >= 1;
    env.neon.ring.visible = level >= 2;
  }
}

export function setOvenGlow(env, baking) {
  if (env.ovenMouthMat) {
    env.ovenMouthMat.emissiveIntensity = baking ? 1.2 : 0.1;
  }
}
