<h1>
  <img src="./assets/icon.svg" alt="inm icon" width="40" align="absmiddle" /> inm
</h1>

`inm` is a warm, low-chroma color palette built from four anchor colors:

- `#3E343F` plum black
- `#A1736B` clay rose
- `#979F9B` mist gray
- `#C9BFB6` warm stone

The system uses OKLCH for perceptual color tuning and APCA-informed contrast targets for readable light and dark modes.

## Files

- [index.html](index.html): static demo site with light/dark mode and UI examples.
- [DESIGN.md](DESIGN.md): portable design-system documentation for AI-assisted UI work.
- [tailwind-theme.css](assets/tailwind-theme.css): Tailwind CSS v4 `@theme` tokens.
- [tailwind.config.js](assets/tailwind.config.js): Tailwind CSS v3-compatible theme extension.

## Palette Intent

Light mode uses warm stone as the canvas. Dark mode uses plum black as the canvas. Clay carries action and brand emphasis, while mist adds a cool support tone for statuses, metadata, and secondary visuals.

## Quick Use

For Tailwind CSS v4, import the theme file:

```css
@import "./tailwind-theme.css";
```

Then use semantic utilities:

```html
<main class="bg-bg text-text font-sans">
  <section class="bg-surface border border-border rounded-control shadow-panel">
    <button class="bg-accent text-on-accent rounded-control">
      Apply Palette
    </button>
  </section>
</main>
```

For Tailwind CSS v3, use `tailwind.config.js` and define the matching CSS custom properties in your app root.

## Core Tokens

```css
--color-bg: oklch(81.0% 0.017 64.6);
--color-surface: oklch(86.8% 0.013 63.9);
--color-raised: oklch(91.4% 0.011 63.4);
--color-text: oklch(28.5% 0.020 322.5);
--color-muted: oklch(47.9% 0.010 349.6);
--color-border: oklch(73.6% 0.011 58.2);
--color-accent: oklch(47.9% 0.065 27.6);
--color-accent-soft: oklch(60.0% 0.060 30.0);
--color-cool: oklch(60.0% 0.013 170.0);
--color-on-accent: oklch(91.4% 0.011 63.4);
```

Dark mode overrides are included in `tailwind-theme.css` and documented in `DESIGN.md`.

## Contrast Notes

- Use `--color-text` for body text.
- Use `--color-muted` for secondary text.
- Use `--color-accent` for buttons, links, and active states.
- Avoid using the original `#A1736B` as small body text on `#C9BFB6`.
- Treat `#979F9B` as a support color rather than a primary text color.
