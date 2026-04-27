# inm Design System

## Overview

inm is a warm editorial UI system built around four anchor colors:

- Clay: `#A1736B`
- Plum: `#3E343F`
- Sage: `#979F9B`
- Bone: `#C9BFB6`

The visual tone should feel calm, tactile, premium, and story-first.

Use this system for interfaces that should feel composed rather than energetic: editorial products, hospitality, premium commerce, quiet dashboards, portfolios, and collection pages.

Avoid bright startup styling, neon accents, cold grays, pure black, or stark white backgrounds.

## Design Principles

- Lead with typography and spacing before decoration.
- Keep the palette warm and restrained.
- Use contrast discipline: plum carries most text, clay carries action, sage carries support.
- Prefer soft layering and atmospheric depth over hard shadows or loud gradients.
- Pages should feel open, readable, and slightly tactile.

## Colors

### Core Anchors

- **Plum** `#3E343F`: primary text, headings, strong borders, dark anchors
- **Clay** `#A1736B`: main action color, links, emphasis, focus moments
- **Sage** `#979F9B`: support accents, filters, tags, metadata, quiet highlights
- **Bone** `#C9BFB6`: neutral base family for layered surfaces

### Token Palette

- `--plum-900`: `#3E343F`
- `--plum-700`: `#5D555E`
- `--plum-500`: `#7F787F`
- `--clay-700`: `#8E625A`
- `--clay-600`: `#A1736B`
- `--clay-100`: `#E8D2CE`
- `--sage-600`: `#808884`
- `--sage-500`: `#979F9B`
- `--sage-100`: `#D7E1DC`
- `--bone-500`: `#C9BFB6`
- `--bone-300`: `#DAD1C8`
- `--bone-200`: `#EDE4DD`
- `--bone-100`: `#F9F2EB`

### Semantic Colors

- **Background** `--color-bg`: `#F9F2EB`
- **Surface** `--color-surface`: `#EDE4DD`
- **Surface Strong** `--color-surface-strong`: `#DAD1C8`
- **Border** `--color-border`: `#B8AFA7`
- **Text** `--color-text`: `#3E343F`
- **Text Muted** `--color-text-muted`: `#5D555E`
- **Text Soft** `--color-text-soft`: `#7F787F`
- **Primary** `--color-primary`: `#A1736B`
- **Primary Hover** `--color-primary-hover`: `#8E625A`
- **Primary Soft** `--color-primary-soft`: `#E8D2CE`
- **On Primary** `--color-on-primary`: `#F9F2EB`
- **Secondary** `--color-secondary`: `#979F9B`
- **Secondary Hover** `--color-secondary-hover`: `#808884`
- **Secondary Soft** `--color-secondary-soft`: `#D7E1DC`
- **Focus Ring** `--color-focus-ring`: `#8E625A`
- **Selection** `--color-selection`: `#DDC8C5`

### Color Usage Rules

- Use **plum** for nearly all body copy and headings.
- Use **clay** for primary actions, emphasized links, and focus states.
- Use **sage** for supportive UI, not for the main filled CTA.
- Use **bone derivatives** for the page background and surfaces instead of flat white.
- Prefer warm neutrals everywhere. New colors should be rare.

### Contrast Notes

- Text on background: `92.95 APCA`
- Muted text on surface: `73.26 APCA`
- On primary: `60.58 APCA`

Maintain strong reading contrast. Do not reduce text contrast for style.

## Typography

### Font Families

- **Display / editorial headings**: `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif`
- **Body / UI**: `Inter, "Segoe UI", Helvetica, Arial, sans-serif`

### Typographic Roles

- **Hero H1**
  - Size: `clamp(3.2rem, 8vw, 6.25rem)`
  - Max width: about `10ch` to `11ch`
  - Weight: `600`
  - Letter spacing: `-0.03em`
  - Line height: about `0.98`

- **Section H2**
  - Size: `clamp(2.2rem, 5vw, 4rem)`
  - Weight: `600`
  - Letter spacing: `-0.03em`

- **Card / module H3**
  - Size: `2rem` desktop, `1.7rem` small screens
  - Weight: `600`
  - Line height: about `1.05`

- **Body copy**
  - Size: about `1rem` to `1.02rem`
  - Line height: `1.5`
  - Color: `--color-text-muted` by default

- **Eyebrows / kickers / labels**
  - Size: `0.76rem`
  - Weight: `700`
  - Uppercase
  - Letter spacing: `0.16em`
  - Color: `--color-text-soft`

### Typography Rules

- Use serif display type for branded or editorial emphasis only.
- Use sans-serif for UI controls, forms, navigation, and body text.
- Keep headings dense and elegant.
- Keep line lengths moderate and readable.
- Avoid oversized all-caps blocks outside of small labels.

## Spacing

### Base Rhythm

- Page padding: `clamp(1.25rem, 3vw, 2.5rem)`
- Main section gap: `clamp(4rem, 9vw, 7rem)`
- Standard grid gap: `1rem`
- Section heading gap: `0.55rem`
- Larger surface gaps: `1.5rem`

### Component Spacing

- Buttons and inputs minimum height: `3.1rem`
- Card padding: `1.5rem`
- Card padding on small screens: `1.2rem`
- Hero CTA gap: `0.85rem`
- Small chip/tag gap: `0.6rem`

Prefer generous breathing room. Do not compress layouts unless required by screen width.

## Shape

- Large radius: `28px`
- Medium radius: `20px`
- Small radius: `14px`
- Pills: `999px`

The system favors soft, rounded geometry. Avoid sharp corners unless there is a strong functional reason.

## Layout

### Page Structure

- Max site width: `1180px` plus responsive page padding
- Layout is centered with open margins
- Background can include subtle radial washes in clay and sage over the bone canvas

### Hero

- Two-column layout on desktop
- Left side: headline, supporting copy, CTA row, metrics
- Right side: expressive editorial panels showing color use in context
- Collapse to one column below `980px`

### Section Patterns

- Use structured editorial sections with clear headings
- Combine one featured block with smaller support blocks when possible
- Prefer asymmetry that still feels balanced
- Let cards stack vertically on smaller screens rather than forcing dense grids

## Surfaces and Elevation

- Use translucent or softly blended card backgrounds over the warm page canvas
- Border style: light warm border, usually around `rgb(62 52 63 / 0.08)`
- Shadow: `0 18px 50px -30px rgb(62 52 63 / 16%)`
- Blur can be used lightly for glass-like surfaces

Depth should feel atmospheric, not glossy or high-tech.

## Components

### Header and Navigation

- The inm mark is circular with a clay gradient and bone text
- Navigation items are pill-shaped
- Default nav text is muted plum
- Hover/focus state uses a faint plum background wash

### Buttons

- **Primary button**
  - Background: `--color-primary`
  - Text: `--color-on-primary`
  - Hover: `--color-primary-hover`
  - Shape: pill
  - Weight: bold

- **Secondary button**
  - Background: translucent white
  - Border: subtle plum border
  - Text: `--color-text`
  - Hover: shift toward `--color-surface`

Buttons can lift slightly on hover, but motion should stay subtle.

### Inputs

- Use pill-shaped inputs
- Background: soft translucent white
- Border: subtle warm plum tint
- Placeholder: `--color-text-soft`
- Focus ring: `2px solid --color-focus-ring` with `2px` offset

### Tags and Chips

- **Primary tag**: `--color-primary-soft` background with darker clay text
- **Secondary tag**: `--color-secondary-soft` background with plum text
- **Neutral tag**: surface background with muted plum text and a faint border

Use these for metadata, labels, and supportive filtering UI.

### Cards and Panels

- Cards use medium or large radius
- Backgrounds can be translucent white, surface tones, or restrained warm gradients
- Featured panel may use a clay gradient with bone text
- Support panels can use surface or sage-tinted backgrounds

### Quotes and Editorial Pullouts

- Use serif text
- Accent the block with a clay left border
- Keep quote areas spacious and calm

### Stats and Metrics

- Small stat cards can use serif numbers and muted supporting labels
- Keep them quiet and integrated with the rest of the page

## Motion and Interaction

- Use short transitions around `160ms`
- Buttons may translate upward by `1px` on hover/focus
- Use smooth scrolling for internal navigation
- Motion should support polish, not draw attention to itself

## Responsive Behavior

### Below 980px

- Header becomes simpler and stacks more naturally
- Hero becomes one column
- Spaces, component, palette callout, and art grids become one column
- Swatch grid becomes two columns
- Forms should stack vertically

### Below 640px

- Metric cards become one column
- Swatches become one column if necessary
- Button rows become one column
- Tag rows and metadata rows can stack vertically
- Reduce card padding slightly

The mobile layout should preserve calm spacing and hierarchy rather than shrinking everything tightly.

## Content Tone

- Calm
- Confident
- Editorial
- Tactile
- Premium without sounding precious

Write copy that feels composed and deliberate. Avoid hype-heavy marketing language.

## Do and Don't

### Do

- Use plum for text first
- Use clay selectively for action and emphasis
- Use sage for supportive accents and quiet states
- Use bone tones to create layered warmth
- Let typography and spacing carry most of the design

### Don't

- Do not use bright blue or neon accents
- Do not replace bone backgrounds with stark white
- Do not use pure black for text or surfaces
- Do not make sage the main filled CTA color
- Do not overfill screens with too many cards, dividers, or effects

## Implementation Notes for AI Agents

- Prefer semantic tokens over hardcoded colors when building new UI
- Reuse the current role mapping: plum = text, clay = primary action, sage = support, bone = surface family
- Preserve the editorial contrast between serif display type and sans-serif UI text
- Favor rounded pills, warm translucent cards, and balanced asymmetry
- If introducing a new component, make it look like it belongs beside the current hero, cards, tags, and buttons
