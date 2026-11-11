# Slice Street: Game Design Document (prototype v0.1)

A cozy, mobile-first, 3D idle tycoon. The player starts with one wobbly pizza cart on a sunny corner and grows it into a busy pizzeria. The stand keeps earning while the app is closed, capped at 8 hours.

This document describes the prototype build that ships in this repository, what it deliberately leaves out, and the numbers behind it. Every number quoted here comes from `data/economy.json` and can be tuned there without touching code.

---

## 1. Pillars

1. **Cozy, not stressful.** Failure costs a few coins and a grumble. Nothing is lost permanently.
2. **Hands matter, but briefly.** Each pizza has three quick hands-on steps. Each step is a few seconds long and forgiving.
3. **Away time is a reward.** Coming back to a stand that worked without you should feel good, not like a chore.
4. **Everything is data.** If a number matters, it lives in a JSON file.

---

## 2. Core loop

```
Customer arrives -> joins queue -> player (or cashier) takes the order
  -> dough stretched (swipe)  -> topping added (drag)  -> slid into oven (timing tap)
  -> baking (automatic timer) -> handed over (tap, or cashier) -> paid + tip
  -> cash -> upgrades / staff -> more capacity -> more customers
```

**Manual actions**

| Step | Input | Quality rule |
|---|---|---|
| Take order | Tap a customer | Instant. Starts the pizza at "dough". |
| Stretch dough | PC: scroll the wheel or tap the arrow keys. Touch: swipe back and forth. Needs 1200 px of input. | Finished in time: 0.6 to 1.0, scaled by time left. Timer runs out: 0.5 (rushed, not failed). |
| Add topping | PC: click a topping, then click the pizza (or keys 1 to 3, then Space). Touch: drag onto the pizza. One of three matches the customer's wish. | Right topping: 1.0. Wrong topping: 0.55 and a smaller tip. Dropping outside the target just returns the chip. |
| Slide into oven | Click (or Space on PC, tap on touch) while a marker sweeps across a bar. The green zone is 18% of the bar. | In the zone: 1.0. Outside: falls to a floor of 0.6. A perfect bake (>= 0.9) bakes 15% faster. |
| Hand over | Tap a finished pizza | Triggers payment. |

**Idle automation**

| Role | Hire cost | What it does | Speed per level |
|---|---|---|---|
| Cashier | 150, growth 1.8, max level 5 | Takes orders from waiting customers and hands out finished pizzas after 1 s. | Order time 3 s / (1 + 0.5 x level) |
| Cook | 250, growth 1.9, max level 5 | Stretches dough and adds toppings, one pizza at a time, then loads the oven. | Work speed 1 + 0.4 x level |

With no staff the player does everything by hand. With both staff the stand runs with no input. Staff raise the offline efficiency (section 5).

---

## 3. Economy

All values are in `data/economy.json`. Formulas below use these names.

**Upgrade and staff cost.** To go from level L to L+1, pay `ceil(baseCost x growth^L)`.

| Item | Base cost | Growth | Max | Effect |
|---|---|---|---|---|
| Bigger oven | 40 | 1.7 | 5 | Oven slots = 1 + L. Pizzas bake in parallel. |
| Wider counter | 60 | 1.8 | 5 | Queue size = 3 + 2L. Arrivals past that leave (no penalty, but it's lost income). |
| Better cheese | 80 | 1.9 | 10 | Payment x (1 + 0.1 L). |
| Pretty decor | 120 | 2.0 | 10 | Foot traffic +5% per level. |
| Neon sign | 300 | 2.5 | 2 | Level 1: sign, +20% traffic. Level 2: ring, +20% more. |
| Delivery scooter | 500 | 2.2 | 5 | **Disabled in the prototype.** Placeholder for the delivery kid. |

**Customer spawning.**
- Base interval: 24 s.
- Interval = 24 / (1 + traffic) x (1 +/- 0.3 jitter), where traffic = 0.05 x decor + 0.2 x neon (+0.2 per neon level).
- Spawn rate is multiplied by an event multiplier and by a day/night factor: `0.6 + 0.4 x daylight` (night is 60% of day).

**Customer types.** Each type has a patience timer (seconds) and a tip multiplier.

| Type | Weight | Patience | Tip x |
|---|---|---|---|
| Hungry | 3 | 90 s | 1.0 |
| Chatty | 2 | 120 s | 1.3 |
| Grumpy | 1 | 45 s | 0.7 |

Each customer also wants one topping from five (pepperoni, mushroom, olive, basil, pepper). Patience drains in real time, and drains faster during a rainy day (x1.25).

**Payment for a served pizza.**

```
q         = (dough + topping + bake) / 3                    // pizza quality, 0..1
payment   = basePrice x (0.6 + 0.6 x q) x cheeseMult x prestigeMult x eventCashMult
            x (0.9 if topping is wrong)
tip       = payment x 0.3 x (patience left / patience max) x typeTipMult
            x (0.4 if topping is wrong)
```

Base prices: Margherita 8, Pepperoni 11, Veggie 10 (disabled), Seasonal 14 (disabled).

**Angry customers.** If patience runs out, the customer leaves and the stand pays a penalty of 3, never taking cash below zero. The pizza is wasted.

**Idle rate (the number on the HUD).**

```
pizzasPerSec = min(1 / spawnBase, ovenSlots / 10)
idleRate     = pizzasPerSec x avgPrice(unlocked styles, q=0.8) x cheeseMult x prestigeMult x 1.1
```

At the start this is about 0.40 cash per second.

---

## 4. Progression

**Early game (first 10 minutes).** A seven-step guided tutorial, one step at a time:

1. Tap a customer to take their order.
2. Swipe the dough to stretch it.
3. Drag the wanted topping onto the pizza.
4. Slide the pizza into the oven and tap in the green.
5. Tap the finished pizza to hand it over.
6. Buy any upgrade in the Shop.
7. Hire a cashier.

The tutorial advances on counters in `state.stats`. Each step highlights the button it needs. Quitting mid-tutorial is recorded as a `churn_point` event.

**Goals (top bar, "Next:").** Shown in order: hire a cashier, unlock pepperoni (600 lifetime cash), hire a cook, buy a neon sign, reach the franchise milestone (20,000 lifetime cash).

**Mid game (designed, partly stubbed).**
- **Second street location (built).** Side street unlocks at 3,000 lifetime cash. It has 35% more foot traffic and doubles pepperoni demand. The stand moves from the Shop's Locations list. Moving clears the queue and cooking pizzas. Upgrades and staff come along. Franchising sends the stand back to the corner, and unlocked streets stay unlocked.
- New pizza styles: Margherita (start), Pepperoni (600 lifetime), Veggie (2,500, disabled), Seasonal (8,000, disabled). Styles unlock automatically when their condition is met. Veggie and Seasonal are data-only, so they can be turned on without code.

**Late game (designed, not in prototype).** Themed district and collectible recipes. The `styles` save field is already designed to carry over, so recipes can be collected across franchises.

---

## 5. Offline earnings

When the app is reopened (or brought back from the background) after more than 60 seconds away:

```
elapsed      = min(seconds away, 28800)                        // 8 hour cap
efficiency   = 0.5 + 0.25 x (number of staff roles hired)       // 0.5 .. 1.0
earned       = floor(elapsed x idleRate x efficiency)
```

A "Welcome back" sheet shows the amount with a **Collect** button. An optional **Watch ad: 2x** button doubles it. The ad is always player-initiated, and in the prototype it is a timed placeholder.

Offline simulation is an estimate, not a replay. The queue goes home and nothing is in the oven when the player returns. This keeps the save small and the catch-up instant.

Example at the starting setup: about 5.7k from 8 hours away. With both staff: about 11.4k.

---

## 6. Franchise (prestige)

**Every franchise has to be earned.** The current stand must earn a set amount before it can franchise, counted from the last franchise (or from the start):

```
requirement = milestoneLifetimeCash x requirementGrowth^(franchises so far)   // 20,000, 32,000, 51,200, ...
earned here = lifetimeCash - lifetimeCash at the last franchise
```

Right after a franchise the amount earned here is zero, so it cannot be repeated for free. The Shop shows the target and the progress.

Franchising resets the current stand and starts again. The Franchise sheet spells out what happens, including what the next one will need:

- **Resets:** cash, upgrades, staff, queue, pizzas, and the stand goes back to the corner.
- **Keeps:** franchise points, unlocked pizza styles (recipes), unlocked locations, the tutorial, settings, and lifetime stats.

Gain: `max(1, floor(earned here / 20000))` franchise points. Each point is a permanent +10% to payment. Only cash earned at the current stand counts, so lifetime totals are never counted twice.

Saves from before this rule are migrated (save version 2): a save that had already franchised starts its next run from zero.

**The place grows with each franchise** (`prestige.tiers`), so prestige is visible, not just a number:

| Franchises | Place | Staff seen working (per role) | Oven slots | Queue |
|---|---|---|---|---|
| 0 | Pizza cart | 1 | +0 | +0 |
| 1 | Big pizza stand: tiled roof, name sign, franchise plaque | 2 | +1 | +2 |
| 2+ | Pizza shop: two-storey building, awning, rooftop sign | 3 | +2 | +4 |

Hiring is unchanged (levels 1 to 5), but each hired level up to the tier's limit adds another visible employee: extra cashiers at the counter, a waiter outside the shop, extra cooks at the oven and prep line.

### Decorations

The decor upgrade has 10 levels. Each level still adds +5% foot traffic, and now also adds one clearly visible decoration (`upgrades.decor.steps`), named in the Shop and in a toast:

1. flower boxes and hanging baskets, 2. festoon lights on poles, 3. bunting, 4. a bistro table with an umbrella, 5. floor lanterns, 6. a red carpet with brass posts for the queue, 7. a second table and olive trees, 8. balloons, 9. rooftop flags, 10. a turning golden pizza on the roof.

## 7. Events

Random events fire every 5 to 10 minutes, each lasting 150 seconds. Only one runs at a time. The debug panel can trigger any event.

| Event | Effect |
|---|---|
| **Rainy day** | Spawn rate x1.5. Patience drains x1.25 ("slower delivery" feel). Rain particles fall on the street. |
| **Food festival** | Spawn rate x1.2. Pepperoni demand weighted x3. Payment x1.1. Bunting across the street. |

The **health inspector** from the brief is not in the prototype. It fits the same modifier system: a short task the player must complete, and a data entry under `events`.

---

## 8. Presentation

- **Camera:** fixed third-person framing of the stand and queue. It widens on tall, narrow phones and pulls back as the stand grows. Taps on a station zoom the camera toward it and back.
- **Art:** stylised low-poly built in code, no image files. Characters have faces, hair, hats and walk cycles. Pizzas show dough, sauce, cheese and toppings and brown as they bake. Buildings have window grids, shutters, shopfronts and roof clutter. Procedural canvas textures cover pavement, asphalt, brick, wood, plaster, tiles and the striped awning.
- **Sky and light:** a shader sky dome with a sun, moon, stars and drifting clouds. One shadow-casting light (sun by day, moon at night), a hemisphere fill, and one warm point light under the awning. Lamps and windows glow at night, and lamps drop pools of light on the pavement.
- **Life:** traffic on the road with headlights at night, chimney smoke that thickens while baking, steam from finished pizzas, swaying balloons and flags.
- **Juice:** squash and stretch on pizzas, spinning coins and sparkles on a sale, floating "+amount" numbers, a camera nudge on big sales, and a pulsing ring over pizzas that need the player.
- **Performance design:** static geometry is merged into a few vertex-coloured meshes (about 40 draw calls for the empty cart scene, about 150 for the fully decorated shop with a queue), all materials use cheap Lambert shading, the shadow map refreshes every second frame, and there is a Graphics setting (Auto / High / Low). Auto lowers pixel density, then turns off shadows, if the frame rate stays low.
- **Sound:** synthesized in code (cash, click, bell, pop, angry buzz). No licensed or copyrighted music.

## 9. Mobile UX

- Portrait phones are the target. Checked at 390 x 844. Narrower and wider screens are not yet verified.
- All critical actions are in a bottom bar of six buttons, each at least 60 px tall. Everything also has a 48 px minimum tap target.
- The top bar shows cash, the idle rate, and the next goal. It is readable at a glance.
- No hover-dependent UI. Mini-games use pointer events, so they work with a finger.
- Pause and resume on app switch: state is saved on hide. On return the offline check runs and the Collect sheet appears if needed.
- Safe-area insets are respected for notched phones.
- Notifications are **opt-in** (Settings, off by default). The prototype only sends in-app toasts and a notification when a staff member goes idle while the tab is hidden. Offline push notifications need a push service and are not in the prototype.

---

## 10. Monetization (stubs only, no pay-to-win)

| Hook | Where | Prototype behavior |
|---|---|---|
| 2x offline earnings boost | Collect sheet | Player-initiated. Placeholder waits 1.5 s, then doubles the payout. Replace `adStub` in `src/main.js` with the ad SDK. |
| Starter pack | Shop | Placeholder button. Logs `monetization_stub_tap`. Price label is data. |
| Oven skins | Shop | Placeholder list in `data/economy.json`. Cosmetic only. Saved as `cosmetics.ovenSkin`. |

Nothing in the design gives paying players a stronger stand. Prestige and offline boosts are fair to everyone, and the ad is never shown without a tap.

---

## 11. Analytics events

Sent through `src/core/analytics.js`. Events are buffered in local storage and forwarded to `setSink(fn)` when a sink is set.

| Event | When | Key properties |
|---|---|---|
| `session_start` / `session_end` | App opened / hidden | `durationSeconds`, `gameTime` |
| `first_purchase` | First upgrade or hire | `item`, `cost` |
| `prestige` | Franchise confirmed | `points`, `gain`, `lifetimeCash` |
| `churn_point` | App hidden before the tutorial is done | `where` (tutorial step) |
| `customer_turned_away` | Queue full | |
| `customer_angry` | Patience ran out | `customerType` |
| `sale` | Pizza served | `total`, `customerType`, `wrongTopping`, `auto` |
| `tutorial_step` / `tutorial_done` | Tutorial progress | `step` |
| `event_start` | Random or debug event | `id` |
| `offline_collect` | Collect sheet confirmed | `seconds`, `earned`, `multiplier`, `capped` |
| `ad_offline_boost_requested` / `_completed` | Ad stub | |
| `notify_opt_in` | Notifications toggled | `on` |

The "churn points" the brief asks for are the places sessions end: tutorial step, turned-away customers, and angry customers, plus the session length.

---

## 12. Save data

- Stored in local storage under `pizzastand.save`. Every save carries `schemaVersion`.
- `src/core/save.js` runs ordered migrations (`MIGRATIONS[v]`) up to `SAVE_VERSION`, then fills any missing fields from the template in `src/game/state.js`. Adding a field is a one-line change. Changing a field's meaning needs a migration.
- A save written by a newer version is ignored, not overwritten.
- Writes and reads are wrapped in try/catch. If storage is blocked, the game still plays.

---

## 13. Localization

- Every player-facing string lives in `data/strings/en.json`. Code uses `t(key, vars)` and never a literal.
- No text is baked into images. The neon sign is a plain shape, and toppings are shown with colored chips and labels from the table.
- Numbers use `Intl` formatting and compact notation, so `1.2K` and similar follow the device locale.
- Layouts use flexible widths and avoid fixed text boxes. Longer translations wrap.

---

## 14. Debug panel

Open with `?debug=1` (a bug button appears), or tap the version number in Settings five times.

- Add 1,000 or 20,000 cash (also counts toward lifetime, so franchise testing works).
- Skip one hour of play (7,200 ticks; event and tutorial changes still fire).
- Trigger rain or the food festival.
- Toggle time of day.
- Simulate 8 hours away (exercises the offline path).
- Make the stand franchise-ready.
- Wipe the save.

---

## 15. Milestones (prototype)

| Milestone | Target |
|---|---|
| M1 Playable loop | Order, stretch, top, oven, serve, cash, top bar. |
| M2 Automation | Cashier and cook, with idle detection. |
| M3 Persistence | Versioned save, autosave, pause and resume. |
| M4 Offline | Capped offline earnings, Collect sheet, optional 2x ad stub. |
| M5 Economy | Upgrades, staff, styles, goals, tutorial. |
| M6 Events | Random scheduler, rain, festival, debug trigger. |
| M7 Prestige | Franchise with an explanation sheet. |
| M8 Polish | Day and night, juice, audio, mobile layout, analytics stubs. |

---

## 16. Known gaps and next steps

- **Engine.** The prototype is Three.js, which the brief allows. For store release, wrap it with a mobile shell such as Capacitor. The brief's Unity option is not used.
- **Testing.** Logic has 18 Node unit tests. The UI was checked in headless Chromium with software WebGL. The richer graphics run much slower there than the first prototype did (about 8 fps on High and 13 on Low at 390 x 844, against 27 before). Software rendering exaggerates per-pixel cost and is not a device measurement, but it is a warning: the 60 fps target on mid-range phones is unverified and needs a real-device pass, along with touch feel and audio latency.
- **Locations, styles and events** are data-driven. The side street is built, but a third location, the health inspector event, the delivery kid and the collectible recipes are not.
- **Balance** is a first pass. Use the debug panel and analytics to tune the spawn interval, upgrade growth rates and offline efficiency.
- **Offline push notifications** need a push service.
- **Accessibility.** Motion can be reduced with a setting. Colour-blind safe topping colours need review.
