# Slice Street: pizza stand idle prototype

A mobile-first 3D idle tycoon prototype. Build a pizza stand on one street corner. It keeps earning while you're away, capped at 8 hours.

Built with **Three.js** (vendored, no build step) and plain ES modules. The brief allows Three.js with a mobile wrapper.

## Run it

**To play:** open `index.html` in a browser. Double-clicking the file works; no server, Python or Node is needed. The whole game (code, Three.js and data) is in `game.bundle.js`.

If the game cannot start it now says why on the loading screen. A hard reload (Ctrl+Shift+R) clears a stale cached copy.

**To develop:** the source is in `src/` and `data/`. After changing either, rebuild the single file:

```bash
npm install
```

```bash
npm run build
```

`npm run build` writes `game.bundle.js` and stamps its hash into `index.html`, so browsers never mix an old cached copy with a new one. Commit both files.

For quick iteration without rebuilding, serve the folder and open `dev.html`, which loads the source modules and data files directly (this one does need a server, because of `fetch()`):

```bash
npm start
```

Then open <http://localhost:8080/dev.html?debug=1>.

Run the logic tests:

```bash
npm test
```

## Controls

**PC (mouse and keyboard)**
- Click a customer to take their order. Click a pizza to work on its next step.
- `1` Order, `2` Stretch, `3` Topping, `4` Oven, `5` Serve, `6` Shop.
- `M` toggles sound. `Esc` closes the open window or cancels a mini-step.
- **Stretch:** scroll the mouse wheel over the dough, or tap the left and right arrow keys.
- **Topping:** click the topping the customer wants (or press `1` to `3`), then click the pizza or press Space. Dragging a topping onto the pizza also works.
- **Oven:** click or press Space while the marker is in the green.

**Phone (touch)** uses swipes for the dough, drags for toppings and taps for the oven. The bottom bar is the main control.

On a wide window the action bar sits centred at the bottom, and dialogs open in the middle of the screen.

## Project layout

```
index.html               The game page. Loads game.bundle.js. Works when opened as a file.
dev.html                 Development page: loads src/ modules and data/ directly (needs a server)
game.bundle.js           Built single-file game (npm run build). Do not edit by hand.
scripts/build.mjs        Build script
styles.css               Mobile-first styles. Colours are tokens on :root.
data/
  economy.json           ALL tunable values: costs, rates, timers, multipliers, events, tutorial, goals
  strings/en.json        ALL player-facing text. Keys only in code.
  locations/index.json   Which location files to load
  locations/corner.json  Location layout: ground, props, stations, camera, queue, economy
  locations/sideStreet.json  Second street: unlock, traffic and demand multipliers, layout
docs/
  GDD.md                 Game design document: loop, economy formulas, progression, milestones
  ASSETS.md              Placeholder art and audio list
src/
  main.js                Boot, game loop, event routing, input, offline return, autosave
  core/                  No game rules here
    config.js            Loads data files
    i18n.js              t(), number and duration formatting
    save.js              Versioned save, migrations, safe read/write
    analytics.js         Event buffer and sink stub
    audio.js             Synthesized sound effects
    rng.js               Seeded RNG (saved, so runs are reproducible)
  game/                  Pure logic: no DOM, no Three.js (unit tested)
    state.js             Save template and new-game state
    economy.js           Formulas: costs, payment, tips, idle rate, goals, unlocks
    sim.js               The tick: spawning, patience, cashier, cook, bake, tutorial
    actions.js           Player and staff actions: order, manual steps, buy, hire, franchise
    events.js            Timed event scheduler and modifier combination
    offline.js           Capped offline earnings
  render/                Three.js only
    assets.js            Materials, procedural textures, and the geometry batcher
    people.js            Character builder for customers and staff
    scene.js             Renderer, sky, day/night, camera, graphics quality
    props.js             Builds a street from its JSON: buildings, trees, lamps, traffic
    stand.js             Cart / stand / shop tiers, decorations, neon sign, staff, layout
    actors.js            Customer and pizza views; picking
    fx.js                Coins, sparkles, smoke, steam, rain, bunting
  ui/                    DOM only
    hud.js               Top bar, action bar, hints, toasts, floating numbers
    minigames.js         Dough swipe, topping drag, oven timing
    sheets.js            Shop, Collect, Franchise, Settings, Debug
tests/
  game.test.mjs          Pure-logic tests (node --test)
vendor/three.module.js   Three.js r160, MIT licence
```

## Tuning without code

Change `data/economy.json`, then reload. Some useful knobs:

- `customers.spawnBaseSeconds`: how busy the street is.
- `upgrades.*.baseCost` and `growth`: the cost curve.
- `staff.*.baseCost`: when staff unlock.
- `time.offlineCapSeconds` and `time.offlineBaseEfficiency`: the away-time reward.
- `prestige.milestoneLifetimeCash` and `prestige.requirementGrowth`: what a stand must earn before each franchise, and how fast that grows.
- `prestige.tiers`: how the place grows per franchise (size, visible staff, capacity bonuses, camera zoom).
- `upgrades.decor.steps`: which decoration each decor level adds.
- `events.*`: event length, multipliers and style demand.
- `goals`, `tutorial`: what the HUD asks for and when the tutorial advances.

## Adding content

- **A pizza style:** add it under `styles` in `economy.json` with an `unlock` condition, then add `style.<id>` to `strings/en.json`. Set `enabled: true`.
- **An upgrade:** add it under `upgrades`, then add `upgrade.<id>.name` and `.desc` strings. Give the effect a line in `src/game/economy.js` (`derive`) and a case in `upgradeVars` (`src/ui/sheets.js`) for its description.
- **An event:** add it under `events`, then add `event.<id>.name` and `.desc`. Modifiers (`spawnMult`, `patienceDrainMult`, `cashMult`, `styleDemand`) apply automatically. Add visuals in `src/render/fx.js` if it needs them.
- **A decoration:** add an id to `upgrades.decor.steps`, a `decor.step.<id>` string, and a builder with that id in `DECOR` (`src/render/stand.js`).
- **A location:** copy `data/locations/corner.json` to `data/locations/<id>.json` with a new `id`, change the props, stations and `economy` (`trafficMult`, `styleDemand`), set its `unlock`, add the id to `data/locations/index.json`, and add `location.<id>.name` and `.desc` strings. It appears in the Shop's Locations list automatically.
- **A save-format change:** bump `SAVE_VERSION` in `src/core/save.js`, add a migration for the old version, and add any new field to `DEFAULT_STATE_PARTIAL` in `src/game/state.js`.

## Analytics and monetization hooks

- Analytics: call `setSink((evt) => ...)` from `src/core/analytics.js` to forward events to your backend. Events are buffered in local storage either way.
- Rewarded ad: `adStub` in `src/main.js` is a timed placeholder. Replace its body with the ad SDK call. Keep it player-initiated.
- Starter pack and oven skins: placeholder buttons in the Shop. Logic goes in `src/main.js` (`stub`).

## Notes

- Tested headless in Chromium with software WebGL (about 8 fps on High and 13 on Low at 390 x 844; that is not a device measurement). Not yet tested on real phones. Settings has a Graphics option (Auto / High / Low).
- Frame budget: target steady 60 fps on mid-range phones. Draw calls are kept low with shared materials and a single shadow light. Measure on a device before release.
- For app-store builds, wrap this folder with a mobile shell (for example Capacitor). Lock orientation to portrait there.
