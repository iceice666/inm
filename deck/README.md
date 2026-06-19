# inm — open-slide conference deck

Conference-ready presentation for the inm OKLCH design system, authored with [open-slide](https://github.com/1weiho/open-slide). The deck lives at `slides/inm-design-system/index.tsx` and renders as React pages on a fixed **1920 × 1080** canvas.

## Getting started

```bash
npm install
npm run dev
```

Use `npm run build` to export the static deck into `dist/`. The production deck is published at <https://inm-slide.justaslime.dev/s/inm-design-system>.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload. |
| `npm run build` | Build a static bundle you can deploy. |
| `npm run preview` | Preview the built bundle locally. |
| `npm run deploy` | Build and deploy `dist/` to Cloudflare Pages project `inm-slide`. |

## Authoring a slide

```tsx
// slides/my-slide/index.tsx
import type { Page, SlideMeta } from '@open-slide/core';

const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%' }}>Hello</div>
);

export const meta: SlideMeta = { title: 'My slide' };
export default [Cover] satisfies Page[];
```

Every page renders into a fixed **1920 × 1080** canvas — design with absolute pixel values. Put images, videos, and fonts under `slides/<id>/assets/` and import them directly.

See [`CLAUDE.md`](./CLAUDE.md) for the full authoring guide.

## Navigation

- Arrow keys / PageUp / PageDown move between pages.
- `F` enters fullscreen play mode; Esc exits.
- In play mode: Space / → next, ← prev.

## Claude Code integration

This workspace ships with Claude Code skills preconfigured under `.claude/skills/` and `.agents/skills/`. Ask Claude Code to "make slides about X" and the `create-slide` skill takes over. Use `apply-comments` to iterate via inspector-style markers inside your source.

## Config

Optional `open-slide.config.ts` at the workspace root:

```ts
import type { OpenSlideConfig } from '@open-slide/core';

const openSlideConfig: OpenSlideConfig = {
  port: 5174,
};

export default openSlideConfig;
```

Supported fields: `slidesDir`, `port`.
