# inm

`inm` is a small static HTML/CSS demo for a warm editorial design system built around four anchor colors: clay, plum, sage, and bone.

The repo includes a responsive demo page, reusable color tokens, and a more detailed design reference in `DESIGN.md`.

## Overview

- Plain static site: no build step, no framework, no package install
- Responsive demo page in `index.html`
- Design tokens in `assets/css/theme.css`
- Demo-specific layout and components in `assets/css/demo.css`
- Full design guidance in `DESIGN.md`

Best suited for interfaces that should feel calm, tactile, and story-first, such as editorial products, hospitality sites, premium commerce, portfolios, and quiet dashboards.

## File Structure

```text
.
├── assets/
│   ├── css/
│   │   ├── demo.css
│   │   └── theme.css
│   └── icon.svg
├── DESIGN.md
└── index.html
```

## Run Locally

No setup is required.

1. Open `index.html` directly in a browser, or
2. Serve the folder with any static file server, for example:

```sh
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Theme Roles

- `plum`: primary text, headings, strong borders
- `clay`: primary actions, links, emphasis, focus states
- `sage`: support accents, tags, filters, metadata
- `bone`: page background, surfaces, layered warmth

`assets/css/theme.css` defines both the anchor palette and the semantic tokens used by the demo.

## Editing Guide

- Update color tokens in `assets/css/theme.css`
- Adjust layout and component styling in `assets/css/demo.css`
- Change demo content and section structure in `index.html`
- Use `DESIGN.md` as the source of truth for tone, spacing, type, shape, and component rules

## Notes

- The demo is intentionally restrained and editorial rather than bright or high-contrast in style
- Contrast targets and color usage guidance are documented in `DESIGN.md`
- The CSS is organized so the theme tokens can be reused separately from the demo page layout
