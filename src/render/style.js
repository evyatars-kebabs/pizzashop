// The 2D look: every surface is drawn unlit with its own colours and textures, so the game
// reads as flat, storybook art. The replacement materials SHARE the colour and texture objects
// of the originals, so colour changes made during play (pizza browning, patience bars) still show.
import * as THREE from 'three';

const flatCache = new Map();

function flatMaterialFor(src) {
  if (!flatCache.has(src.uuid)) {
    const m = new THREE.MeshBasicMaterial({
      transparent: src.transparent,
      opacity: src.opacity,
      side: src.side,
      depthWrite: src.depthWrite,
      toneMapped: false,
    });
    m.color = src.color;            // shared on purpose: see the note above
    m.map = src.map || null;
    m.vertexColors = !!src.vertexColors;
    flatCache.set(src.uuid, m);
  }
  return flatCache.get(src.uuid);
}

// Swaps every lit mesh under obj for its flat twin. Remembers the original so it can be undone.
export function styleTree(obj) {
  obj.traverse((o) => {
    if (!o.isMesh || !o.material || Array.isArray(o.material) || o.material.isShaderMaterial) return;
    if (o.userData.origMat) return;
    o.userData.origMat = o.material;
    o.material = flatMaterialFor(o.material);
  });
}

export function unstyleTree(obj) {
  obj.traverse((o) => {
    if (o.userData.origMat) {
      o.material = o.userData.origMat;
      delete o.userData.origMat;
    }
  });
}
