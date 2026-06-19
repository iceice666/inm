# inm — showcase site

The canonical live landing page for the [inm](https://inm.justaslime.dev) color system — deployed at **inm.justaslime.dev** via Cloudflare Pages.

Built with Vite 8 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix UI primitives) · lucide-react.

## Getting started

```bash
npm install
npm run dev       # local dev server → http://localhost:5173
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve the built dist/ locally
npm run lint      # eslint
```

## Deploy

Deployment is driven from the repo root, not this directory. The repo-root `npm run build` compiles this site into `site/dist`, builds the open-slide deck, and copies it into `site/dist/slide`. The repo-root `wrangler.toml` declares the Cloudflare Pages project (`name = "inm"`, `pages_build_output_dir = "site/dist"`).

Cloudflare Pages configuration (set in the dashboard):
- **Root directory:** `/` (repo root)
- **Build command:** `npm run build`
- **Build output directory:** `site/dist`

The deck is served under `/slide` (e.g. <https://inm.justaslime.dev/slide/s/inm-design-system>) via the root `_redirects` rule.

## Structure

```
src/
  App.tsx                     ← root: dark mode state, section order
  index.css                   ← inm token bridge (shadcn CSS vars + @theme inline)
  site.css                    ← section layout & component styles
  components/
    site/                     ← page sections (hero, anchors, tokens, modes, app-preview, …)
    ui/                       ← shadcn primitives (button, badge, card, tabs, …)
```

Dark mode honors the OS preference on first visit and persists to `localStorage` via the `inm-theme` key. A pre-paint inline script in `index.html` prevents any flash of unstyled content.

## Relation to the repo root

The repo root holds the **token product** (the actual deliverable): `assets/tailwind-theme.css`, `assets/tailwind.config.js`, `colors_and_type.css`, `DESIGN.md`, `preview/`, `deck/`, and `fonts/`. This `site/` directory is the showcase site only — a separate concern.
