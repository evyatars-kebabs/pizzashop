# Placeholder asset list

Everything in the prototype is built from primitives and synthesized sound, so nothing here blocks play. This list is what the final art and audio need.

Naming: `category/name_variant.ext`. Every asset is referenced from a data file or a single constant, so swapping one is a one-line change.

## 3D models (low-poly, flat-shaded, shared materials)

Budget: under 3,000 triangles per prop, under 1,500 per character, one texture atlas per location, no more than 8 draw calls for the stand.

| Asset | Current stand-in | Notes |
|---|---|---|
| Pizza cart (body, awning, counter, wheels) | Boxes and cylinders in `src/render/stand.js` | Striped awning, wooden counter, red back panel. |
| Brick oven (body, dome, glowing mouth) | Box, half-sphere, emissive plane | Mouth glow intensity is driven by `setOvenGlow`. |
| Cash register | Box | |
| Neon sign (bar and ring) | Emissive box and torus | Level 1 = sign, level 2 = ring. Shape only: no text. |
| Pizza (dough, topping, ring marker) | Flattened cylinders | One base mesh with colour changes. Needs a stretch-pose variant. |
| Customer archetypes x3 (hungry, chatty, grumpy) | Capsule body, sphere head | Walk cycle (two-frame bob is fine). Each needs a wave or grumble pose for leaving. |
| Order bubble | Disc with topping dot | Icon style, no text. |
| Building x4 | Boxes with band strips | Two or three architectural styles. |
| Tree | Cylinder and icosahedron | Two variants. |
| Street lamp | Pole and emissive sphere | Warm bulb, lit at night. |
| Bench, bin | Boxes and cylinder | |
| Bunting (festival) | Cones | Strung between poles. |
| Rain | Line segments | Replace with a textured particle sprite if the look needs it. |

## Textures and materials

| Asset | Size | Notes |
|---|---|---|
| Ground (sand / sidewalk) | 512 x 512, tileable | |
| Road and dashed line | 512 x 128, tileable | |
| Awning stripe | 256 x 256 | Replaces the flat-colour stripes. |
| Dough and crust | 256 x 256 | Gradient from raw to golden. |
| Sky gradient | 1 x 256 | Day, dusk and night in one strip. |

## UI

| Asset | Current | Notes |
|---|---|---|
| Action icons (order, stretch, topping, oven, serve, shop) | Emoji | Replace with a consistent icon set. Must not be the only label (the text label stays). |
| Settings, close, debug icons | Emoji / symbols | Same. |
| App icon (1024, plus adaptive layers) | SVG favicon | Pizza slice on a red disc. |
| Splash screen | Loading text | Art plus logo. |
| Panel and button frames | CSS | Optional nine-slice art. |
| Topping chips | Coloured circles | Art per topping: pepperoni, mushroom, olive, basil, pepper. |

## Audio

All sound is original or commissioned. No licensed or copyrighted music or effects.

| Asset | Current | Notes |
|---|---|---|
| Cash register "ka-ching" | Two synthesized blips | Warm, short, a little satisfying. |
| UI tap | Synthesized square blip | Soft click. |
| Bell (staff, events, unlocks) | Synthesized sine | Real bell or glass chime sample. |
| Dough swipe / slap | None | Soft whoosh, plus a squish on the finish. |
| Topping plop | None | Short wet plop. |
| Oven load | Whoosh | Metal clang and sizzle. |
| Oven ding (bake done) | Bell | Short timer ding. |
| Angry customer | Synthesized sawtooth | Friendly "hmph", not harsh. |
| Event sting (rain, festival) | None | Under 3 seconds each. |
| Background music (day and night) | None | Original, royalty-free or commissioned. Two loops, cross-fade at dusk. |
| Ambient street (birds, traffic, chatter) | None | Looped, quiet. Volume follows the day/night cycle. |

## VFX

| Asset | Current | Notes |
|---|---|---|
| Cash puff | Pooled gold spheres | Sprite burst with a sparkle. |
| "+amount" float | DOM text | Styled text. Keep the number format from `Intl`. |
| Squash-and-stretch | Scale tween | Keep. Works without art. |
| Big-sale camera nudge | Random shake | Keep. |

## Text and localization

Every string is in `data/strings/en.json`. No text is baked into any image. Art that must carry a word (such as a menu board) should be drawn as a shape, with the word coming from the strings table.

## Store and marketing (later)

App store icon and screenshots (phone portrait), a 15-second preview clip, and a short description. Strings for store copy should go in their own table.
