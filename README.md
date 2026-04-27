# inm

A warm editorial color palette and UI theme built around four anchor colors: **Clay**, **Plum**, **Sage**, and **Bone**.

The visual tone is calm, tactile, and story-first — suited for editorial products, hospitality interfaces, premium commerce, quiet dashboards, and portfolios.


## Anchor Colors

| Name  | Hex       | Role                                          |
|-------|-----------|-----------------------------------------------|
| Plum  | `#3E343F` | Primary text, headings, strong borders        |
| Clay  | `#A1736B` | Calls to action, links, focus states          |
| Sage  | `#979F9B` | Support accents, chips, filters, metadata     |
| Bone  | `#C9BFB6` | Surface depth, cards, subtle layering         |


## Token Palette

<details>
<summary>Show all tokens</summary>

### Plum

| Token        | Value     |
|--------------|-----------|
| `--plum-900` | `#3E343F` |
| `--plum-700` | `#5D555E` |
| `--plum-500` | `#7F787F` |

### Clay

| Token        | Value     |
|--------------|-----------|
| `--clay-700` | `#8E625A` |
| `--clay-600` | `#A1736B` |
| `--clay-100` | `#E8D2CE` |

### Sage

| Token        | Value     |
|--------------|-----------|
| `--sage-600` | `#808884` |
| `--sage-500` | `#979F9B` |
| `--sage-100` | `#D7E1DC` |

### Bone

| Token        | Value     |
|--------------|-----------|
| `--bone-500` | `#C9BFB6` |
| `--bone-300` | `#DAD1C8` |
| `--bone-200` | `#EDE4DD` |
| `--bone-100` | `#F9F2EB` |

</details>


## Semantic Tokens

| Token                    | Value         | Description                              |
|--------------------------|---------------|------------------------------------------|
| `--color-bg`             | `--bone-100`  | Page background                          |
| `--color-surface`        | `--bone-200`  | Card and panel surfaces                  |
| `--color-surface-strong` | `--bone-300`  | Elevated or bordered surfaces            |
| `--color-border`         | `#B8AFA7`     | Default border                           |
| `--color-text`           | `--plum-900`  | Body copy and headings                   |
| `--color-text-muted`     | `--plum-700`  | Secondary text                           |
| `--color-text-soft`      | `--plum-500`  | Metadata, labels, placeholders           |
| `--color-primary`        | `--clay-600`  | Primary action color                     |
| `--color-primary-hover`  | `--clay-700`  | Primary hover state                      |
| `--color-primary-soft`   | `--clay-100`  | Soft primary fill (tags, highlights)     |
| `--color-on-primary`     | `--bone-100`  | Text on primary-filled surfaces          |
| `--color-secondary`      | `--sage-500`  | Accent color for chips and filters       |
| `--color-secondary-hover`| `--sage-600`  | Secondary hover state                    |
| `--color-secondary-soft` | `--sage-100`  | Soft secondary fill                      |
| `--color-focus-ring`     | `--clay-700`  | Keyboard focus ring                      |
| `--color-selection`      | `#DDC8C5`     | Text selection highlight                 |


## Contrast

| Pairing                  | APCA   |
|--------------------------|--------|
| Text on background       | 92.95  |
| Muted text on surface    | 73.26  |
| On primary               | 60.58  |


## Usage

Copy `assets/css/theme.css` into your project and reference the semantic tokens in your stylesheets. Prefer semantic tokens over hardcoded hex values so changes stay consistent across the system.

```html
<link rel="stylesheet" href="theme.css" />
```

```css
body {
  background: var(--color-bg);
  color: var(--color-text);
}

.button-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.button-primary:hover {
  background: var(--color-primary-hover);
}
```

Open `index.html` in a browser to see the full live demo, including the hero, palette swatches, and component examples.

## License
MIT
