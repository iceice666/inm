# Contributing to inm

## What's in this repo

This repo has two distinct layers:

| Layer | Purpose | Location |
|---|---|---|
| **Token product** | The deliverable: CSS tokens, Tailwind theme files, DESIGN.md, preview cards, slide deck | repo root |
| **Showcase site** | The live landing page at inm.justaslime.dev | `ui/` |

## Dev setup

### Token product

No build step needed. The token files are plain CSS and JS:
- Edit `assets/tailwind-theme.css` (Tailwind v4) or `assets/tailwind.config.js` (v3).
- Edit `colors_and_type.css` / `styles.css` for the framework-free versions.
- Open any `preview/*.html` directly in a browser to see reference cards.
- Run the conference deck from `deck/` with `npm install` (first time only), `npm run dev`, and `npm run build` before publishing deck changes.

Run `npx oxlint` from the repo root to lint for import-discipline violations.

### Showcase site

```bash
cd ui
npm install
npm run dev       # http://localhost:5173
npm run build     # → ui/dist/
npm run preview   # serve ui/dist/ locally
npm run lint      # eslint
```

Page sections live in `ui/src/components/site/`. Tokens come from `ui/src/index.css` (shadcn CSS variable bridge + `@theme inline`). Site layout styles are in `ui/src/site.css`.

## Linters

There are **two separate linters** — keep both clean:

| Linter | Where to run | What it checks |
|---|---|---|
| `npx oxlint` | repo root | Token discipline: bans raw hex/px values, enforces Inter-only font family |
| `npm run lint` | inside `ui/` | ESLint (React hooks, refresh, TypeScript) for the showcase site |

## Deploy

The showcase site deploys to Cloudflare Pages on push. Build config (set in the Cloudflare dashboard):
- **Root directory:** `ui`
- **Build command:** `npm run build`
- **Build output directory:** `dist`

The slide deck deploys separately to Cloudflare Pages at <https://inm-slide.justaslime.dev/s/inm-design-system>:
- **Root directory:** `deck`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- Manual deploy: `cd deck && npm run deploy`

Token product files (root `assets/`, `fonts/`, `preview/`, `deck/`, etc.) are repo-only except for the built deck served from `deck/dist`.
