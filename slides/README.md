# inm — Slide deck kit

A presentation template built on the inm foundations: warm-stone light slides, plum dark slides, big bold Inter, the four-blob logo, and the floating anchor-block motif from the brand's hero. Sized **1280×720 (16:9)**.

## Run
Open `index.html` — it's a navigable deck (powered by `deck-stage.js`):
- **←/→**, PgUp/PgDn, Space, Home/End, or number keys to navigate
- Thumbnail rail: click to jump, drag to reorder, right-click to skip/move/delete
- **Print → Save as PDF** gives one clean page per slide

## Slide types
Each is also saved as a standalone 1280×720 file (`card-*.html`) so it can be previewed on its own in the Design System tab.

| Type | File | Scope | Use for |
| --- | --- | --- | --- |
| Title | `card-title.html` | light | Opening — eyebrow, big display headline, logo, floating anchor blocks |
| Agenda / TOC | `card-agenda.html` | light | Numbered contents with active + dimmed states |
| Section divider | `card-section.html` | dark (plum) | Chapter breaks — numbered label + statement + accent rule |
| Two-column content | `card-content.html` | light | Lead paragraph beside numbered point cards |
| Feature / icon grid | `card-features.html` | light | 3- or 2-col feature tiles with geometric block glyphs (no emoji) |
| Comparison | `card-comparison.html` | light | Light-vs-dark (or A/B) framed panels side by side |
| Code / mono showcase | `card-code.html` | light/dark | Window-chrome code block with tonal syntax tokens |
| Metrics | `card-metrics.html` | light | A row of metric tiles (APCA figures, counts) |
| Data table | `card-table.html` | dark (plum) | Multi-column table with header row + status tags |
| Spec sheet | `card-spec.html` | light | Key / description / value rows (mono value badges) |
| Timeline | `card-timeline.html` | light | Horizontal multi-step rollout / roadmap |
| Process / steps | `card-process.html` | light/dark | Vertical numbered rail; `is-future` for upcoming steps |
| Team grid | `card-team.html` | light | Member cards with drop-in photo slots |
| Image + text 50/50 | `card-split.html` | light/dark | Full-bleed media beside a copy panel (`.split-slide`) |
| Full-bleed image | `card-fullbleed.html` | image | Drop-in photo with warm protection gradient + overlay text |
| Statement | `card-quote.html` | light | One big idea or pull-quote, centered |
| Closing | `card-closing.html` | dark (plum) | Wrap-up — logo, CTA capsule, link |

### Images
The **Team grid**, **Full-bleed**, and **Image + text** slides use `<image-slot>` placeholders — drag a photo onto one to fill it. Persistence requires the HTML to sit at the project root; inside `slides/` the slots work as in-session placeholders (ideal for a template). Pair imagery with warm, low-chroma photos to match the palette — never cool, saturated, or high-glare.

## Authoring
- Slides are **static HTML** inside `<deck-stage>` — click any heading in edit mode and retype it directly.
- Backgrounds are set per-slide with `.slide.light` / `.slide.dark` scopes (self-contained OKLCH tokens), so a single deck can mix moods. Add `light`/`dark` to a `<section class="slide …">`.
- Shared atoms live in `slides.css`: `.eyebrow`, `.lockup`, `.s-display`, `.s-h2`, `.s-lead`, `.s-foot`, `.chip`, plus per-type blocks.
- Don't set position/size on the `<section>` elements — `deck-stage` positions them.

## Files
- `index.html` — the deck (all sections + `deck-stage`)
- `explore.html` — pan/zoom canvas comparing the newer slide types and their variations
- `slides.css` — canvas, light/dark scopes, and every slide-type style
- `deck-stage.js` — deck shell (scaling, nav, thumbnails, print)
- `card-*.html` — standalone single-slide files for the Design System tab
