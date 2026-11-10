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
