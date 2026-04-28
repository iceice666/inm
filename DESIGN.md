# Palette Design System

Format reference: [What is DESIGN.md?](https://designmd.ai/what-is-design-md)

## Overview

This color palette is a warm, low-chroma interface system built from four anchors:

- **Plum Black** (`#3E343F`): primary dark background and structural color.
- **Clay Rose** (`#A1736B`): brand accent family.
- **Mist Gray** (`#979F9B`): cool support color.
- **Warm Stone** (`#C9BFB6`): primary light background.

The palette uses OKLCH for predictable perceptual tuning and APCA contrast targets for practical readability. Use it for editorial tools, portfolio systems, dashboards, product UI, and calm creative interfaces.

## Colors

### Anchor Palette

- **Plum 900** (`#3E343F`, `oklch(34.0% 0.023 323.2)`): dark mode background, deep UI structure, dark on-accent text.
- **Clay 500** (`#A1736B`, `oklch(60.0% 0.060 30.0)`): original clay anchor, suitable for soft accents and decorative use.
- **Mist 500** (`#979F9B`, `oklch(69.5% 0.011 164.7)`): original cool gray-green anchor, suitable for support visuals.
- **Stone 300** (`#C9BFB6`, `oklch(81.0% 0.017 64.6)`): light mode background and warm neutral foundation.

### Light Mode Tokens

- **Background** (`#C9BFB6`, `oklch(81.0% 0.017 64.6)`): page canvas.
- **Surface** (`#DAD2CB`, `oklch(86.8% 0.013 63.9)`): panels, controls, and repeated item cards.
- **Raised** (`#E8E1DB`, `oklch(91.4% 0.011 63.4)`): higher emphasis surfaces, inputs, secondary buttons.
- **Text** (`#2F2730`, `oklch(28.5% 0.020 322.5)`): primary text; APCA Lc about `65` on background.
- **Text Muted** (`#625B5E`, `oklch(47.9% 0.010 349.6)`): secondary text; APCA Lc about `47` on background.
- **Border** (`#AFA8A3`, `oklch(73.6% 0.011 58.2)`): dividers, control outlines, quiet containment.
- **Accent** (`#7E4F49`, `oklch(47.9% 0.065 27.6)`): primary buttons, links, active controls; APCA Lc about `47` on background.
- **Accent Soft** (`#A1736B`, `oklch(60.0% 0.060 30.0)`): secondary accent, hover borders, decorative fills.
- **Cool** (`#79837F`, `oklch(60.0% 0.013 170.0)`): support badges, secondary data, calm status marks.
- **On Accent** (`#E8E1DB`, `oklch(91.4% 0.011 63.4)`): text/icons on light-mode accent buttons.

### Dark Mode Tokens

- **Background** (`#3E343F`, `oklch(34.0% 0.023 323.2)`): page canvas.
- **Surface** (`#493E4A`, `oklch(38.0% 0.025 323.4)`): panels, controls, and repeated item cards.
- **Raised** (`#584B59`, `oklch(43.1% 0.028 323.8)`): higher emphasis surfaces and secondary buttons.
- **Text** (`#E8E1DB`, `oklch(91.4% 0.011 63.4)`): primary text; APCA Lc about `-82` on background.
- **Text Muted** (`#B6AFAD`, `oklch(75.9% 0.009 36.5)`): secondary text; APCA Lc about `-53` on background.
- **Border** (`#6B6069`, `oklch(50.3% 0.020 331.9)`): dividers and outlines.
- **Accent** (`#D7A095`, `oklch(75.5% 0.068 31.5)`): primary buttons, links, active controls; APCA Lc about `-51` on background.
- **Accent Soft** (`#C58E82`, `oklch(69.7% 0.070 32.7)`): secondary accent and hover states.
- **Cool** (`#AAB4B0`, `oklch(76.1% 0.013 170.1)`): support badges, secondary data, calm status marks.
- **On Accent** (`#3E343F`, `oklch(34.0% 0.023 323.2)`): text/icons on dark-mode accent buttons.

### Contrast Guidance

- Use APCA Lc `60+` or `-60` for normal body text.
- Use APCA Lc `45+` or `-45` for secondary text and interactive labels.
- Use APCA Lc `30+` or `-30` only for large display text or non-critical labels.
- Do not use original `#A1736B` as small body text on `#C9BFB6`; it is too low for body copy.
- Do not use original `#979F9B` as meaningful text on `#C9BFB6`; treat it as a support or visual color.

## Typography

- **Font Family**: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.
- **Display**: 64-118px, 800-900 weight, 0 letter spacing, line-height `0.9-1.0`.
- **Heading 1**: 48-72px, 800 weight, line-height `1.0`.
- **Heading 2**: 28-48px, 760-820 weight, line-height `1.05`.
- **Heading 3**: 17-22px, 720-780 weight, line-height `1.2`.
- **Body**: 16-18px, 400-520 weight, line-height `1.5-1.65`.
- **Small / Meta**: 12-14px, 620-760 weight, line-height `1.35`.

Keep letter spacing at `0` for most text. Use uppercase only for short labels and keep them at `12-13px` with strong weight.

## Spacing

- **Base Unit**: 4px.
- **Scale**: 4, 8, 10, 12, 16, 18, 24, 32, 44, 54, 64, 72.
- **Page Gutters**: 16px mobile, 32px desktop.
- **Section Padding**: 44-64px vertical for compact sites; 64-96px for fuller pages.
- **Control Gap**: 8-12px.
- **Content Max Width**: 1160px.

## Radius

- **Controls**: 8px.
- **Repeated Cards**: 8px.
- **Small Inner Elements**: 6-7px.
- **Pills**: 999px only for compact status badges.

Avoid large rounded cards. Do not nest cards inside cards.

## Components

### Buttons

- **Primary Button**: accent background, on-accent text, transparent border, 8px radius, 42px minimum height, 16px horizontal padding.
- **Secondary Button**: surface or raised background, text color, border color, 8px radius.
- **Icon Button**: 42px square, surface background, border, centered icon.
- **Hover State**: translate up by 1px and shift border toward accent-soft.
- **Focus State**: use a 3px translucent accent focus ring.

### Inputs

- Use raised background with border color.
- Minimum height is 42px.
- Use 8px radius and 12px horizontal padding.
- Labels are small uppercase text-muted labels.

### Segmented Controls

- Outer container uses raised background, border, 8px radius, and 3px internal padding.
- Active item uses accent background and on-accent text.
- Inactive items use transparent background and text-muted.

### Cards and List Rows

- Use cards only for repeated items, metrics, modals, or genuinely framed tools.
- Background should be surface.
- Border should use the border token.
- Radius should be 8px or less.
- Prefer dense, scannable rows for product UI and dashboards.

### Badges

- Use cool color for quiet statuses.
- Use 999px radius only when the badge is compact.
- Keep text short and strong.

## Elevation

- **Light Shadow**: `0 20px 50px oklch(28.5% 0.020 322.5 / 0.15)`.
- **Dark Shadow**: `0 20px 50px oklch(18% 0.020 323.2 / 0.38)`.
- **Item Shadow**: `0 10px 24px oklch(20% 0.02 320 / 0.12)`.

Use elevation sparingly. Prefer border and tonal changes for most hierarchy.

## Layout Guidance

- Make the product, tool, or palette visible in the first viewport.
- Use full-width sections or unframed layouts for page structure.
- Keep app UIs dense but calm: clear hierarchy, restrained surfaces, scannable rows.
- Avoid decorative gradient blobs, oversized marketing-card compositions, and one-note monochrome treatments.
- Use the warm stone and plum canvases as the emotional foundation; clay is the action signal, mist is the balancing temperature.

## Tailwind Usage

Use the companion token files:

- `tailwind-theme.css` for Tailwind CSS v4 `@theme` tokens.
- `tailwind.config.js` for Tailwind CSS v3-compatible theme extension.

Prefer semantic classes such as `bg-bg`, `bg-surface`, `text-text`, `text-muted`, `bg-accent`, `text-on-accent`, and `border-border`.
