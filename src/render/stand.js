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

  addDetails(g, env, st);

  // The cashier stands behind the counter, next to the register. Hidden until one is hired.
  const cashier = buildCashier();
  g.add(cashier);
  env.cashier = cashier;

  // The cook works at the prep table, behind it inside the cart. Hidden until a cook is hired.
  const chef = buildChef(st.dough);
  g.add(chef);
  env.chef = chef;

  return g;
}

// Small touches that make the cart read as a real stand. Shapes only, no text.
function addDetails(g, env, st) {
  env.signs?.push({ id: 'menu', pos: [0.2, 2.0, -0.85], kind: 'menu' });
  env.signs?.push({ id: 'neon', pos: [0.2, 3.7, -0.85], kind: 'neon' });

  // Menu board on the back panel, with a row of topping-coloured dots instead of words.
  g.add(boxMesh([1.8, 0.7, 0.05], '#2b2d42', [0.2, 1.95, -0.95]));
  g.add(boxMesh([1.6, 0.55, 0.02], '#f7f1e1', [0.2, 2.02, -0.92]));
  ['#c0392b', '#2e8b57', '#e67e22', '#3d5a1e', '#c9b79c'].forEach((c, i) => {
    const dot = new THREE.Mesh(G.cylFine(), mat(c));
    dot.scale.set(0.09, 0.02, 0.09);
    dot.rotation.x = Math.PI / 2;
    dot.position.set(-0.5 + i * 0.3, 2.24, -0.9);
    g.add(dot);
  });

  // Potted basil at both ends of the counter.
  for (const x of [-1.75, 2.05]) {
    g.add(boxMesh([0.36, 0.3, 0.36], '#b5562c', [x, 1.2, 2.1]));
    const leaves = new THREE.Mesh(G.sphere(), mat('#4f9d4a'));
    leaves.scale.set(0.3, 0.3, 0.3);
    leaves.position.set(x, 1.85, 2.1);
    leaves.castShadow = true;
    g.add(leaves);
  }

  // A stack of pizza boxes on the left end of the counter.
  [0, 1, 2].forEach((i) => g.add(boxMesh([0.8, 0.12, 0.8], '#f2d7a7', [-1.2, 1.2 + i * 0.12, 1.5])));
  g.add(boxMesh([0.8, 0.03, 0.8], '#e5533d', [-1.2, 1.2 + 3 * 0.12, 1.5]));

  // Tip jar on the counter, near the register.
  const jar = new THREE.Mesh(G.cylFine(), mat('#ffe9a8', { transparent: true, opacity: 0.85 }));
  jar.scale.set(0.12, 0.2, 0.12);
  jar.position.set(1.35, 1.3, 1.95);
  g.add(jar);

  // String lights under the awning. They glow at night like the lamps.
  const bulbMat = uniqueMat('#ffe9a8', { emissive: new THREE.Color('#ffd27a'), emissiveIntensity: 0.2 });
  env.glowMats.push(bulbMat);
  for (let i = 0; i < 10; i++) {
    const b = new THREE.Mesh(G.sphere(), bulbMat);
    b.scale.set(0.07, 0.07, 0.07);
    b.position.set(-1.85 + i * 0.45, 2.7, 1.05);
    g.add(b);
  }
}

// A simple low-poly cashier: apron, red cap, and an arm that moves while they work.
function buildCashier() {
  const g = new THREE.Group();
  g.name = 'cashier';
  g.position.set(0.55, 0.65, 0.35);
  g.visible = false;
  const shirt = uniqueMat('#ef476f');
  const body = new THREE.Mesh(G.cylFine(), shirt);
  body.scale.set(0.34, 0.9, 0.34);
  body.position.y = 0.45;
  body.castShadow = true;
  const apron = boxMesh([0.34, 0.52, 0.05], '#fff7ea', [0, 0.14, 0.2]);
  const head = new THREE.Mesh(G.sphere(), mat('#c68642'));
  head.scale.set(0.23, 0.25, 0.23);
  head.position.y = 1.3;
  head.castShadow = true;
  const cap = new THREE.Mesh(G.cylFine(), mat('#ffd166'));
  cap.scale.set(0.27, 0.1, 0.27);
  cap.position.y = 1.5;
  const arm = new THREE.Group();
  arm.position.set(0.24, 0.95, 0.05);
  const armMesh = new THREE.Mesh(G.cylFine(), shirt);
  armMesh.scale.set(0.08, 0.5, 0.08);
  armMesh.position.y = -0.25;
  arm.add(armMesh);
  g.add(body, apron, head, cap, arm);
  g.userData.arm = arm;
  return g;
}

// A low-poly cook in a white jacket and tall white hat, with an arm that works the dough.
function buildChef(station) {
  const g = new THREE.Group();
  g.name = 'chef';
  g.position.set(station[0], 0.65, station[2] - 0.75);
  g.visible = false;
  const jacket = uniqueMat('#fdfdfd');
  const body = new THREE.Mesh(G.cylFine(), jacket);
  body.scale.set(0.34, 0.9, 0.34);
  body.position.y = 0.45;
  body.castShadow = true;
  const head = new THREE.Mesh(G.sphere(), mat('#8d5524'));
  head.scale.set(0.23, 0.25, 0.23);
  head.position.y = 1.3;
  head.castShadow = true;
  const hat = new THREE.Mesh(G.cylFine(), mat('#ffffff'));
  hat.scale.set(0.2, 0.42, 0.2);
  hat.position.y = 1.7;
  hat.castShadow = true;
  const arm = new THREE.Group();
  arm.position.set(0.24, 0.95, 0.05);
  const armMesh = new THREE.Mesh(G.cylFine(), jacket);
  armMesh.scale.set(0.08, 0.5, 0.08);
  armMesh.position.y = -0.25;
  arm.add(armMesh);
  g.add(body, head, hat, arm);
  g.userData.arm = arm;
  return g;
}

// Called every frame: shows the cashier and cook when hired, and animates them while busy.
export function updateStaff(env, state, time) {
  const c = env.cashier;
  if (c) {
    c.visible = state.staff.cashier > 0;
    if (c.visible) {
      const busy = state.customers.some((x) => x.state === 'waiting');
      c.userData.arm.rotation.x = busy ? -0.9 + Math.sin(time * 9) * 0.5 : -0.2 + Math.sin(time * 2) * 0.05;
      c.position.y = 0.65 + (busy ? Math.abs(Math.sin(time * 9)) * 0.02 : 0);
    }
  }
  const k = env.chef;
  if (k) {
    k.visible = state.staff.cook > 0;
    if (k.visible) {
      const working = state.pizzas.some((p) => p.stage === 'dough' || p.stage === 'topping');
      k.userData.arm.rotation.x = working ? -0.7 + Math.sin(time * 10) * 0.6 : -0.2 + Math.sin(time * 2) * 0.05;
    }
  }
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
