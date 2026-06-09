# inm — Showcase UI kit

A faithful recreation of the **inm palette showcase site** (`iceice666/inm/index.html`). This is the brand's flagship marketing/documentation page: a sticky translucent header, a big editorial hero with floating anchor blocks, the four-swatch palette grid, side-by-side light/dark product previews, and a Tailwind usage/handoff section.

## Run
Open `index.html`. The page is interactive:
- **Theme toggle** (header sun/moon) flips `data-theme` on `<html>` between light and dark.
- **Copy import** button in the usage section copies the Tailwind v4 import line.

## Files
- `index.html` — wires the app together and owns theme state
- `showcase.css` — all styles, lifted verbatim from the source site (the visual source of truth)
- `Header.jsx` — `Header` — brand lockup, nav links, theme toggle
- `Hero.jsx` — `Hero` — eyebrow, display headline, body, token chips, floating anchor blocks
- `Palette.jsx` — `Palette` — four anchor swatch cards
- `ModePreview.jsx` — `PreviewWindow` (reusable) + `ModePreview` — light/dark product mockups
- `Usage.jsx` — `Usage` (code panel + copy + handoff file list) and `Footer`

## Notes
- Assets resolve to the project's shared `assets/` folder (`../../assets/icon.svg`, `hex-*.svg`).
- Components export to `window` so each `<script type="text/babel">` can share them.
- `PreviewWindow` is the most reusable piece — a titled window-chrome panel with metric row, status-dot list rows, and a command footer. It powers the dashboard previews and can be lifted into the app kit.
