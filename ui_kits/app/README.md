# inm — App (console) UI kit

A product **dashboard** that demonstrates the inm palette in dense, calm product UI — the use case the palette was designed for (*"editorial tools, portfolios, dashboards, creative product UI"*). It is grounded in the DESIGN.md component specs (buttons, inputs, segmented controls, list rows, badges, metrics, elevation) and the light/dark preview mockups shipped in the source site.

## Run
Open `index.html`. It is interactive:
- **Sidebar** navigation highlights the active section.
- **Segmented filter** (All / Active / Review / Ready) filters the workspace list live.
- **New workspace** prepends a row.
- **Theme toggle** flips light/dark across the whole shell.
- **⌘K search** field and notification button are present as visual affordances.

## Files
- `index.html` — app shell, seed data, and state (theme, active nav, rows)
- `app.css` — kit styles; consumes the canonical tokens from `../../colors_and_type.css`
- `Primitives.jsx` — `Icon` (Lucide-style line glyph set), `Badge`, `Segmented`, `IconButton`
- `Sidebar.jsx` — `Sidebar` — brand, grouped nav, user footer
- `TopBar.jsx` — `TopBar` — title, search, bell, theme toggle, primary action
- `Overview.jsx` — `Overview` + `Metrics` + `WorkspaceRow` — the main dense view

## Design rules honored
- Dense scannable **rows**, not nested cards. Cards used only for metrics and the framed list panel.
- 8px radii; 999px pills only on compact badges.
- One **accent** action color (clay); **cool** mist for quiet status; everything else tonal.
- Hover lifts 1px and warms the border; sparing elevation; border + tone carry hierarchy.
- Icons are single-weight 2px outline on a 24-grid (Lucide-style) — see ICONOGRAPHY in the root README.
