// Builds a location from its data file. Adding a location = adding a JSON file, not code.
import * as THREE from 'three';
import { boxMesh, mat, uniqueMat, G } from './assets.js';

export function buildLocation(loc, env) {
  const group = new THREE.Group();
  group.name = 'location:' + loc.id;

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), mat(loc.ground.color));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  for (const p of loc.props) {
    const obj = makeProp(p, env);
    if (obj) group.add(obj);
  }
  return group;
}

function makeProp(p, env) {
  switch (p.type) {
    case 'road': return road(p);
    case 'building': return building(p);
    case 'tree': return tree(p);
    case 'lamp': return lamp(p, env);
    case 'bench': return bench(p);
    case 'bin': return bin(p);
    case 'planter': return planter(p);
    case 'sandwichBoard': return sandwichBoard(p, env);
    case 'menuBoard': return menuBoard(p, env);
    default:
      console.warn('[props] unknown prop type', p.type);
      return null;
  }
}

function road(p) {
  const g = new THREE.Group();
  const r = new THREE.Mesh(new THREE.PlaneGeometry(p.size[0], p.size[1]), mat('#5f6368'));
  r.rotation.x = -Math.PI / 2;
  r.position.set(p.pos[0], 0.01, p.pos[2]);
  r.receiveShadow = true;
  g.add(r);
  for (let x = -28; x <= 28; x += 4) {
    const dash = boxMesh([1.6, 0.02, 0.12], '#f5e6b8', [x, 0.02, p.pos[2]]);
    g.add(dash);
  }
  return g;
}

function building(p) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], p.pos[1], p.pos[2]);
  g.add(boxMesh(p.size, p.color, [0, 0, 0]));
  g.add(boxMesh([p.size[0] + 0.3, 0.3, p.size[2] + 0.3], '#5d4037', [0, p.size[1], 0]));
  // Simple window bands so the facade reads at a distance.
  const bands = Math.floor(p.size[1] / 2.2);
  for (let i = 1; i < bands; i++) {
    g.add(boxMesh([p.size[0] + 0.05, 0.25, p.size[2] + 0.05], '#fbe7b5', [0, i * 2.2, 0]));
  }
  return g;
}

function tree(p) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], 0, p.pos[2]);
  const trunk = new THREE.Mesh(G.cyl(), mat('#7b4f2e'));
  trunk.scale.set(0.18, 1.2, 0.18);
  trunk.position.y = 0.6;
  trunk.castShadow = true;
  const leaves = new THREE.Mesh(G.ico(), mat('#6fae5c'));
  leaves.scale.set(1.1, 1.3, 1.1);
  leaves.position.y = 2.2;
  leaves.castShadow = true;
  g.add(trunk, leaves);
  return g;
}

function lamp(p, env) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], 0, p.pos[2]);
  const pole = new THREE.Mesh(G.cyl(), mat('#3c4043'));
  pole.scale.set(0.07, 2.8, 0.07);
  pole.position.y = 1.4;
  const bulbMat = uniqueMat('#fff4c2', { emissive: new THREE.Color('#ffd27a'), emissiveIntensity: 0.2 });
  env.glowMats.push(bulbMat);
  const bulb = new THREE.Mesh(G.sphere(), bulbMat);
  bulb.scale.set(0.24, 0.24, 0.24);
  bulb.position.y = 2.95;
  g.add(pole, bulb);
  return g;
}

function bench(p) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], 0, p.pos[2]);
  g.add(boxMesh([1.4, 0.12, 0.45], '#a06a3c', [0, 0.45, 0]));
  g.add(boxMesh([1.4, 0.5, 0.1], '#a06a3c', [0, 0.5, -0.2]));
  g.add(boxMesh([0.1, 0.45, 0.4], '#3c4043', [-0.6, 0, 0]));
  g.add(boxMesh([0.1, 0.45, 0.4], '#3c4043', [0.6, 0, 0]));
  return g;
}

function bin(p) {
  const m = new THREE.Mesh(G.cyl(), mat('#4f7d8c'));
  m.scale.set(0.35, 0.9, 0.35);
  m.position.set(p.pos[0], 0.45, p.pos[2]);
  m.castShadow = true;
  return m;
}

function planter(p) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], 0, p.pos[2]);
  g.add(boxMesh([1.2, 0.5, 0.5], '#8d5a3b', [0, 0, 0]));
  const colors = ['#ef476f', '#ffd166', '#f78c6b', '#9b5de5'];
  for (let i = 0; i < 4; i++) {
    const bloom = new THREE.Mesh(G.ico(), mat(colors[i]));
    bloom.scale.set(0.2, 0.2, 0.2);
    bloom.position.set(-0.4 + i * 0.27, 0.7 + (i % 2) * 0.1, 0);
    bloom.castShadow = true;
    g.add(bloom);
  }
  return g;
}

// A-frame sidewalk sign with a coloured board. No text.
function sandwichBoard(p, env) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], 0, p.pos[2]);
  // The text is drawn as an HTML label over the board (see src/ui/signs.js), not in the image.
  if (env?.signs) env.signs.push({ id: 'sandwich', pos: [p.pos[0], 1.1, p.pos[2]], kind: 'street' });
  const leg = (x, rz) => {
    const m = boxMesh([0.06, 1.1, 0.06], '#3c4043', [x, 0, 0]);
    m.rotation.z = rz;
    m.position.y = 0.5;
    return m;
  };
  g.add(leg(-0.3, 0.2), leg(0.3, -0.2));
  g.add(boxMesh([0.8, 0.6, 0.05], '#fff7ea', [-0.4, 0.9, 0]));
  g.add(boxMesh([0.6, 0.4, 0.06], '#e5533d', [-0.4, 1.0, 0.01]));
  return g;
}

// Standing menu board on the sidewalk, away from the cart. Its text is an HTML label (src/ui/signs.js).
function menuBoard(p, env) {
  const g = new THREE.Group();
  g.position.set(p.pos[0], 0, p.pos[2]);
  for (const x of [-0.45, 0.45]) g.add(boxMesh([0.08, 1.1, 0.08], '#3c4043', [x, 0, 0]));
  g.add(boxMesh([1.3, 0.9, 0.08], '#2b2d42', [0, 1.0, 0]));
  g.add(boxMesh([1.16, 0.76, 0.02], '#f7f1e1', [0, 1.07, 0.05]));
  ['#c0392b', '#2e8b57', '#e67e22', '#3d5a1e', '#c9b79c'].forEach((c, i) => {
    const dot = new THREE.Mesh(G.cylFine(), mat(c));
    dot.scale.set(0.08, 0.02, 0.08);
    dot.rotation.x = Math.PI / 2;
    dot.position.set(-0.4 + i * 0.2, 0.68, 0.06);
    g.add(dot);
  });
  if (env?.signs) env.signs.push({ id: 'menu', pos: [p.pos[0], 2.2, p.pos[2]], kind: 'menu' });
  return g;
}
