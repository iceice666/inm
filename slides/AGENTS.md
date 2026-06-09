# inm — Markdown / Slidev → slide deck conversion guide (for agents)

You are converting a **Markdown file, a Slidev deck, or a plain outline** into a presentation that
matches the **inm slide kit**. Your output is hand-written static HTML built from the kit's
vocabulary — *not* a generic slide framework, *not* Marp/Reveal/Slidev, *not* your own CSS.

Read this whole file before you start. Then read `README.md` (slide-type catalog) and skim
`slides.css` (the only stylesheet you may rely on). Everything you emit must validate against the
non-negotiables in §1.

---

## 1. Non-negotiables

These are hard constraints. Breaking any one of them means the output is wrong, even if it "looks
fine."

1. **Canvas is 1280×720 (16:9).** Never another size. Slides overflow silently (`overflow:hidden`) —
   if content doesn't fit, you split it across more slides or cut it. You do **not** shrink type.
2. **Use only the kit's CSS.** Link `slides.css`. Do not write new component CSS, do not pull in
   Tailwind/Bootstrap/Reveal/Slidev, do not invent class names. Use the semantic atoms and slide-type
   blocks defined in `slides.css` and catalogued in §5. Per-slide nudges via inline `style=""` (margins,
   `max-width`) are fine and are used throughout the kit; new visual systems are not.
3. **Inter only.** It's loaded by `slides.css` via `@font-face`. No other typefaces.
4. **Colors come from tokens, never raw hex.** Every slide carries a `light` or `dark` scope class
   that defines `--s-*` tokens. Reference `var(--s-accent)`, `var(--s-muted)`, etc. The only literal
   colors allowed are the anchor vars (`--plum-900`, `--clay-500`, `--mist-500`, `--stone-300`) on the
   title slide's floating blocks, which are already in the skeleton.
5. **No emoji. No icons from icon fonts. No hand-drawn SVG scenes.** Visual texture comes from the
   geometric block glyphs (`.glyph`), the anchor blocks, dots, and rules already in the kit. For real
   photography use `<image-slot>` placeholders (§5: split / fullbleed / team).
6. **Voice: calm, precise, sentence case.** No hype, no exclamation marks, no marketing fluff. `inm`
   is always lowercase. Quantify where the source does (e.g. APCA Lc). See §7.
7. **Every section is a direct child of `<deck-stage>`** (deck mode) or the lone `.card-frame`
   (single-card mode). Never set `position`/`width`/`height`/`top`/`left` on a `.slide` `<section>` —
   `deck-stage` and `.card-frame` own layout.
8. **Asset paths are relative to `slides/`.** The logo is `../assets/icon.svg`. The scripts are
   `deck-stage.js` and `image-slot.js` (same folder). If you emit the deck somewhere else, fix the
   relative paths so they still resolve.
9. **No speaker notes** unless the user explicitly asks for them.

---

## 2. Pick an output mode

Decide which of two artifacts to produce. If the user told you which, obey. Otherwise infer:

| Produce… | When | Shell |
| --- | --- | --- |
| **A navigable deck** — `index.html` with all slides | The input is a full presentation / talk / multi-section doc, or the user says "deck", "presentation", "slides". **This is the default.** | `<deck-stage>` (§3) |
| **Standalone cards** — one `card-*.html` per slide | The user wants individual slides, a single slide, or files to register in the Design System tab. | `.card-frame` (§4) |

You may do both: build the deck, then split notable slides into cards. When in doubt, build the deck.

---

## 3. Deck shell (`index.html`)

Each converted slide is a `<section class="slide …">` placed in document order as a **direct child**
of `<deck-stage>`. The shell handles scaling, keyboard nav (←/→, PgUp/PgDn, Space, Home/End, number
keys), the thumbnail rail, and Print → Save-as-PDF (one clean page per slide).

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>inm — <!-- deck title --></title>
  <link rel="stylesheet" href="slides.css" />
  <style>
    html, body { margin: 0; background: #1c171d; }
    deck-stage:not(:defined) { visibility: hidden; }
  </style>
</head>
<body>
  <deck-stage width="1280" height="720">

    <!-- SLIDE: title -->
    <section class="slide light title-slide" data-label="Title"> … </section>

    <!-- SLIDE: … one <section> per slide, in order … -->

  </deck-stage>
  <!-- include only if any slide uses <image-slot> (split / fullbleed / team) -->
  <script src="image-slot.js"></script>
  <script src="deck-stage.js"></script>
</body>
</html>
```

Rules:
- `width="1280" height="720"` on `<deck-stage>` is mandatory (the component defaults to 1920×1080).
- Give every `<section>` a short human `data-label` (shows in the thumbnail rail / comment context).
- Keep the `<!-- SLIDE: type -->` comment above each section — it makes the deck legible and editable.
- Only load `image-slot.js` if a slide actually uses `<image-slot>`. Always load `deck-stage.js` last.

---

## 4. Single-card shell (`card-*.html`)

For one slide on its own (Design System tab, preview, screenshot). The `.card-frame` replaces
`deck-stage` and fixes the 1280×720 box. Add the `@dsCard` comment as line 2 if it should appear in
the Design System tab.

```html
<!doctype html>
<!-- @dsCard group="Slides" name="Slide — <Type>" subtitle="<one line>" viewport="1280x720" -->
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="slides.css" />
<style>
  html, body { margin: 0; background: #1c171d; }
  .card-frame { width: 1280px; height: 720px; overflow: hidden; position: relative; }
</style>
</head>
<body>
  <div class="card-frame">
    <section class="slide light" data-label="<Type>"> … </section>
  </div>
  <!-- include only if the slide uses <image-slot> -->
  <script src="image-slot.js"></script>
</body>
</html>
```

The inner `<section>` markup is identical between deck mode and card mode — only the shell differs.

---

## 5. Slide-type catalog (heuristic mapping + skeletons)

There are 18 slide types. **You choose the type per slide by judgment** — match the *shape and intent*
of the source content to the "Reach for it when" cue, not by rigid keyword rules. Most decks use 6–8
types; don't feel obliged to use all of them. Each entry gives the scope, the cue, fill limits, and a
copy-paste skeleton (the inner `<section>` only — wrap it per §3 or §4).

Two scopes set the mood: **`light`** (warm stone canvas, the default) and **`dark`** (plum canvas).
Use dark deliberately for section dividers, closings, and the occasional data/quote slide to create
rhythm — aim for roughly one dark beat every 3–5 slides, not a random checkerboard.

---

### 5.1 Title — `light` · `.title-slide`
**Reach for it when:** the opening slide / H1 of the source; deck cover; anything that's the "name of
the talk." Use exactly one, first.
**Fill:** an eyebrow (kicker / subtitle line), a 2–4 line display headline (use `<br/>` to break it),
one lead sentence, and a footer (left descriptor · right `source · year`). The floating anchor blocks
are decoration — keep them as-is.

```html
<section class="slide light title-slide" data-label="Title">
  <div class="title-blocks" aria-hidden="true">
    <i class="tb-stone"></i><i class="tb-plum"></i><i class="tb-clay"></i>
  </div>
  <div class="lockup"><img src="../assets/icon.svg" alt="" />inm</div>
  <div class="spacer"></div>
  <p class="eyebrow">Eyebrow / kicker line</p>
  <h1 class="s-display" style="margin-top:18px;max-width:840px;">Headline line one,<br />line two,<br />line three.</h1>
  <p class="s-lead" style="margin-top:26px;">One calm sentence framing the talk.</p>
  <div class="spacer"></div>
  <div class="s-foot"><span>Left descriptor</span><span class="pg">source · 2026</span></div>
</section>
```

### 5.2 Agenda / TOC — `light`
**Reach for it when:** the source has an explicit contents / agenda / "what we'll cover" list, or a
top-level outline you want to preview. Numbered rows.
**Fill:** 3–6 rows. `is-active` marks the current/first chapter; `is-dim` greys out later ones. `.am`
is an optional one-line gloss.

```html
<section class="slide light" data-label="Agenda">
  <p class="eyebrow">What we'll cover</p>
  <h2 class="s-h2" style="margin-top:16px;">Agenda</h2>
  <div class="agenda-list">
    <div class="agenda-item is-active"><span class="an">01</span><span class="at">First chapter</span><span class="am">Short gloss</span></div>
    <div class="agenda-item"><span class="an">02</span><span class="at">Second chapter</span><span class="am">Short gloss</span></div>
    <div class="agenda-item"><span class="an">03</span><span class="at">Third chapter</span><span class="am">Short gloss</span></div>
    <div class="agenda-item is-dim"><span class="an">04</span><span class="at">Fourth chapter</span><span class="am">Short gloss</span></div>
  </div>
  <div class="s-foot" style="margin-top:auto;"><span>inm — agenda</span><span class="pg">02</span></div>
</section>
```

### 5.3 Section divider — `dark` · `.section-slide`
**Reach for it when:** a top-level heading opens a new part of the talk (in Slidev, often a slide with
`layout: section` or just an H1 between content runs). Use these to chunk the deck.
**Fill:** a mono section label (`NN — Name`), one statement headline, the accent rule. Nothing else.

```html
<section class="slide dark section-slide" data-label="Section">
  <div class="section-num">01 — Section name</div>
  <h2 class="s-display">A single-sentence statement for this part.</h2>
  <div class="section-rule"></div>
</section>
```

### 5.4 Two-column content — `light` · `.two-col`
**Reach for it when:** a heading + a short lead paragraph + 2–4 supporting points. The workhorse for
"here's an idea and its facets." This is the default home for a heading followed by a bullet list.
**Fill:** lead paragraph on the left; 2–4 numbered point cards on the right. Keep point bodies to one
line. If you have 5+ points, switch to a feature grid (§5.5) or split across two slides.

```html
<section class="slide light" data-label="Principles">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin-top:16px;">A clear heading for the idea.</h2>
  <div class="two-col">
    <p class="s-lead">A lead paragraph that frames the idea in two or three calm sentences.</p>
    <div class="col-points">
      <div class="point"><span class="n">1</span><div><h4>Point title</h4><p>One-line explanation.</p></div></div>
      <div class="point"><span class="n">2</span><div><h4>Point title</h4><p>One-line explanation.</p></div></div>
      <div class="point"><span class="n">3</span><div><h4>Point title</h4><p>One-line explanation.</p></div></div>
    </div>
  </div>
  <div class="s-foot"><span>inm — foundations</span><span class="pg">04</span></div>
</section>
```

### 5.5 Feature / icon grid — `light` · `.feat-grid`
**Reach for it when:** 4–6 peer items, each a title + one-line description ("what you get",
"capabilities", feature lists). Use `.feat-grid.cols-2` for 4 items, default 3-col for 6.
**Fill:** each tile gets a geometric block glyph (pick any composition below), a title, one line.
Glyph compositions: `gl-stack`, `gl-bars`, `gl-split`, `gl-frame`, `gl-rows`, `gl-tri`. Color the
sub-shapes with `g-accent` (clay), `g-cool` (mist), `g-stone` (raised), or leave bare for outline.

```html
<section class="slide light" data-label="Feature grid">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 28px;">A short framing heading.</h2>
  <div class="feat-grid">
    <div class="feat"><span class="glyph gl-stack"><i class="g-accent"></i><i class="g-stone"></i></span><h4>Feature</h4><p>One-line description.</p></div>
    <div class="feat"><span class="glyph gl-split"><i class="g-stone"></i><i class="g-accent"></i></span><h4>Feature</h4><p>One-line description.</p></div>
    <div class="feat"><span class="glyph gl-bars"><i class="g-cool"></i><i class="g-accent"></i><i class="g-cool"></i></span><h4>Feature</h4><p>One-line description.</p></div>
    <div class="feat"><span class="glyph gl-frame"><i></i><i class="g-accent"></i></span><h4>Feature</h4><p>One-line description.</p></div>
    <div class="feat"><span class="glyph gl-rows"><i class="g-stone"></i><i class="g-accent"></i><i class="g-stone"></i></span><h4>Feature</h4><p>One-line description.</p></div>
    <div class="feat"><span class="glyph gl-tri"><i class="g-accent"></i><i class="g-cool"></i><i class="g-stone"></i></span><h4>Feature</h4><p>One-line description.</p></div>
  </div>
  <div class="s-foot"><span>inm — features</span><span class="pg">05</span></div>
</section>
```

### 5.6 Comparison — `light` shell, two framed panels
**Reach for it when:** A-vs-B, before/after, two options, light-vs-dark — anything that reads as two
parallel columns. Each panel is its own `light`/`dark` scope, so you can contrast moods.
**Fill:** a bar label + 3 rows + a button per panel. Row `.ct` is the item, `.ca` is a small status
badge. First row's dot is accent; rest are cool.

```html
<section class="slide light" data-label="Comparison">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 28px;">A heading naming the comparison.</h2>
  <div class="cmp">
    <div class="cmp-panel light">
      <div class="cmp-bar"><span>Option A</span><div class="cmp-dots"><span></span><span></span><span></span></div></div>
      <div class="cmp-body">
        <div class="cmp-row"><span class="cd"></span><span class="ct">Row item</span><span class="ca">Status</span></div>
        <div class="cmp-row"><span class="cd"></span><span class="ct">Row item</span><span class="ca">Status</span></div>
        <div class="cmp-row"><span class="cd"></span><span class="ct">Row item</span><span class="ca">Status</span></div>
        <span class="cmp-btn">Action label</span>
      </div>
    </div>
    <div class="cmp-panel dark">
      <div class="cmp-bar"><span>Option B</span><div class="cmp-dots"><span></span><span></span><span></span></div></div>
      <div class="cmp-body">
        <div class="cmp-row"><span class="cd"></span><span class="ct">Row item</span><span class="ca">Status</span></div>
        <div class="cmp-row"><span class="cd"></span><span class="ct">Row item</span><span class="ca">Status</span></div>
        <div class="cmp-row"><span class="cd"></span><span class="ct">Row item</span><span class="ca">Status</span></div>
        <span class="cmp-btn">Action label</span>
      </div>
    </div>
  </div>
</section>
```

### 5.7 Code / mono showcase — `light` or `dark` · `.code-win`
**Reach for it when:** the source has a fenced code block, config, CLI snippet, or token list to show.
**Fill:** filename in the window bar; one `.ln` line-number per code line (separated by `<br/>`); the
code inside `<code>` with `white-space:pre`. Tokenize by hand with the spans below — keep it to ~7–12
lines so it fits. Don't paste huge files; show the meaningful excerpt.

Token spans: `tok-com` (comment, italic), `tok-key` (keyword/property, accent), `tok-str` (string,
cool), `tok-fn` (function/name, bold), `tok-num` (number, soft-accent), `tok-punc` (punctuation).

```html
<section class="slide light" data-label="Code">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 24px;">A short heading.</h2>
  <div class="code-win">
    <div class="code-bar"><div class="dots"><span></span><span></span><span></span></div><span class="fname">filename.ext</span></div>
    <div class="code-body">
      <div class="ln">1<br/>2<br/>3<br/>4<br/>5</div>
      <code><span class="tok-com">// a comment line</span>
<span class="tok-key">const</span> <span class="tok-fn">value</span> <span class="tok-punc">=</span> <span class="tok-fn">compute</span>(<span class="tok-num">42</span>)<span class="tok-punc">;</span>
<span class="tok-key">return</span> <span class="tok-str">"result"</span><span class="tok-punc">;</span></code>
    </div>
  </div>
  <div class="s-foot" style="margin-top:auto;"><span>inm — implementation</span><span class="pg">15</span></div>
</section>
```

### 5.8 Metrics — `light` · `.metric-grid`
**Reach for it when:** a row of headline numbers / KPIs / stats (3–4 of them). One big figure each.
**Fill:** exactly 4 tiles read best (3 also works — they'll stretch). Key + dot, big value, small
descriptor. Only include numbers the source actually provides — never invent stats.

```html
<section class="slide light" data-label="Metrics">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin-top:16px;">A heading framing the numbers.</h2>
  <div class="metric-grid">
    <div class="m-tile"><span class="mk"><span class="dot" style="background:var(--s-accent)"></span>Label</span><span class="mv">65</span><span class="md">unit / context</span></div>
    <div class="m-tile"><span class="mk"><span class="dot" style="background:var(--s-accent-soft)"></span>Label</span><span class="mv">47</span><span class="md">unit / context</span></div>
    <div class="m-tile"><span class="mk"><span class="dot" style="background:var(--s-cool)"></span>Label</span><span class="mv">-82</span><span class="md">unit / context</span></div>
    <div class="m-tile"><span class="mk"><span class="dot" style="background:var(--s-muted)"></span>Label</span><span class="mv">Low</span><span class="md">unit / context</span></div>
  </div>
  <div class="s-foot"><span>inm — metrics</span><span class="pg">06</span></div>
</section>
```

### 5.9 Data table — `dark` · `.data-table`
**Reach for it when:** the source has a Markdown table, or tabular data with a header row + several
data rows. Reads strongest on the plum (`dark`) canvas.
**Fill:** one `.dt-head` row, then `.dt-body` rows. Column template is `2fr 1.5fr 1fr auto` (name /
sub / number / tag). Status tag uses `is-accent` for the positive state. Cap at ~5–6 body rows; split
if longer.

```html
<section class="slide dark" data-label="Data table">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 24px;">A heading for the table.</h2>
  <div class="data-table">
    <div class="dt-row dt-head"><span>Column</span><span>Column</span><span>Column</span><span>Status</span></div>
    <div class="dt-body">
      <div class="dt-row"><span class="c-name">Row name</span><span class="c-sub">Description</span><span class="c-num">-82</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
      <div class="dt-row"><span class="c-name">Row name</span><span class="c-sub">Description</span><span class="c-num">-58</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
      <div class="dt-row"><span class="c-name">Row name</span><span class="c-sub">Description</span><span class="c-num">-14</span><span class="dt-tag"><span class="d"></span>Review</span></div>
    </div>
  </div>
  <div class="s-foot" style="margin-top:auto;"><span>inm — table</span><span class="pg">10</span></div>
</section>
```

### 5.10 Spec sheet — `light` · `.spec-list`
**Reach for it when:** key → description → value rows (definition lists, settings, properties,
glossaries). Like a table but key/value-shaped, not grid-shaped.
**Fill:** 4–6 rows. `.sk` key, `.sd` description, `.sv` mono value badge (`is-accent` to highlight one).

```html
<section class="slide light" data-label="Spec sheet">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin-top:16px;">A heading for the spec.</h2>
  <div class="spec-list">
    <div class="spec-row"><span class="sk">Key</span><span class="sd">Description of the key</span><span class="sv">value</span></div>
    <div class="spec-row"><span class="sk">Key</span><span class="sd">Description of the key</span><span class="sv is-accent">value</span></div>
    <div class="spec-row"><span class="sk">Key</span><span class="sd">Description of the key</span><span class="sv">value</span></div>
    <div class="spec-row"><span class="sk">Key</span><span class="sd">Description of the key</span><span class="sv">value</span></div>
  </div>
  <div class="s-foot" style="margin-top:auto;"><span>inm — specification</span><span class="pg">09</span></div>
</section>
```

### 5.11 Timeline (horizontal) — `light` · `.timeline`
**Reach for it when:** a roadmap / rollout / dated sequence of ~4 steps that reads left-to-right.
**Fill:** 4 steps. Add `is-future` to upcoming steps (their node goes cool instead of accent). `.tl-when`
is mono (date/week label).

```html
<section class="slide light" data-label="Timeline">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 4px;">A heading for the rollout.</h2>
  <div class="timeline">
    <div class="tl-step"><div class="tl-node"><span class="tl-dot"></span></div><span class="tl-when">Week 1</span><span class="tl-title">Step title</span><span class="tl-desc">One-line description.</span></div>
    <div class="tl-step"><div class="tl-node"><span class="tl-dot"></span></div><span class="tl-when">Week 2</span><span class="tl-title">Step title</span><span class="tl-desc">One-line description.</span></div>
    <div class="tl-step is-future"><div class="tl-node"><span class="tl-dot"></span></div><span class="tl-when">Week 3</span><span class="tl-title">Step title</span><span class="tl-desc">One-line description.</span></div>
    <div class="tl-step is-future"><div class="tl-node"><span class="tl-dot"></span></div><span class="tl-when">Week 4</span><span class="tl-title">Step title</span><span class="tl-desc">One-line description.</span></div>
  </div>
  <div class="s-foot"><span>inm — rollout</span><span class="pg">07</span></div>
</section>
```

### 5.12 Process / vertical steps — `light` or `dark` · `.vsteps`
**Reach for it when:** an ordered procedure where each step needs a sentence of explanation (a
numbered how-to). Vertical, more room per step than the timeline.
**Fill:** 3–4 steps. `is-future` greys upcoming steps. `.vt` title, `.vd` one or two lines.

```html
<section class="slide light" data-label="Process">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 28px;">A heading for the process.</h2>
  <div class="vsteps">
    <div class="vstep"><span class="vn">1</span><div class="vc"><div class="vt">Step title</div><div class="vd">A sentence explaining the step in calm, concrete terms.</div></div></div>
    <div class="vstep"><span class="vn">2</span><div class="vc"><div class="vt">Step title</div><div class="vd">A sentence explaining the step in calm, concrete terms.</div></div></div>
    <div class="vstep is-future"><span class="vn">3</span><div class="vc"><div class="vt">Step title</div><div class="vd">A sentence explaining the step in calm, concrete terms.</div></div></div>
    <div class="vstep is-future"><span class="vn">4</span><div class="vc"><div class="vt">Step title</div><div class="vd">A sentence explaining the step in calm, concrete terms.</div></div></div>
  </div>
  <div class="s-foot"><span>inm — process</span><span class="pg">11</span></div>
</section>
```

### 5.13 Statement / quote — `light` · `.quote-slide`
**Reach for it when:** the source has a blockquote, a pull-quote, or one big idea that deserves a
slide to itself. Centered, large.
**Fill:** the quote mark is decorative; `.quote-text` is the line; `.quote-by` is attribution (drop it
if there's no source).

```html
<section class="slide light quote-slide" data-label="Statement">
  <div class="quote-mark" aria-hidden="true">&ldquo;</div>
  <p class="quote-text">One memorable sentence, set large and balanced.</p>
  <div class="quote-by">— Attribution</div>
</section>
```

### 5.14 Image + text 50/50 — `light` or `dark` · `.split-slide`
**Reach for it when:** a point benefits from a supporting photo beside copy (in Slidev, often
`layout: image-left` / `image-right`). Needs `image-slot.js`.
**Fill:** `<image-slot>` on one side, copy on the other. Give each slot a unique `id`. Use `.split-list`
for 2–4 supporting lines. To put the image on the right, move `.split-media` after `.split-copy` (the
grid is two equal columns either way).

```html
<section class="slide light split-slide" data-label="Image + text">
  <div class="split">
    <div class="split-media"><image-slot id="split-1" shape="rect" placeholder="Drop an image"></image-slot></div>
    <div class="split-copy">
      <p class="eyebrow">Section eyebrow</p>
      <h2 class="s-h2">A heading beside the image.</h2>
      <div class="split-list">
        <div class="sli"><span class="b"></span><span>Supporting line one</span></div>
        <div class="sli"><span class="b"></span><span>Supporting line two</span></div>
        <div class="sli"><span class="b"></span><span>Supporting line three</span></div>
      </div>
      <div class="s-foot split-foot"><span>inm — in product</span><span class="pg">17</span></div>
    </div>
  </div>
</section>
```

### 5.15 Full-bleed image — `.slide bleed`
**Reach for it when:** a chapter opener or impact slide carried by one photo with a few words over it.
Needs `image-slot.js`.
**Fill:** the slot fills the frame; the warm gradient protects the overlay text at the bottom. Eyebrow
+ headline + optional caption. Pair with warm, low-chroma imagery only.

```html
<section class="slide bleed" data-label="Full-bleed image">
  <image-slot id="bleed-1" class="bleed-img" shape="rect" placeholder="Drop a full-bleed image"></image-slot>
  <div class="bleed-overlay"></div>
  <div class="bleed-text">
    <p class="eyebrow">Section eyebrow</p>
    <h2>A short overlay headline.</h2>
    <p class="cap">An optional caption line under the headline.</p>
  </div>
</section>
```

### 5.16 Team grid — `light` · `.team-grid`
**Reach for it when:** introducing people — maintainers, a team, contributors (4 cards). Needs
`image-slot.js`.
**Fill:** 4 members. Photo slot (unique `id`), name, role (accent), one-line bio.

```html
<section class="slide light" data-label="Team">
  <p class="eyebrow">Section eyebrow</p>
  <h2 class="s-h2" style="margin:16px 0 28px;">A heading for the team.</h2>
  <div class="team-grid">
    <div class="member"><image-slot id="team-1" class="ph" shape="rounded" radius="12" placeholder="Drop a photo"></image-slot><span class="nm">Name</span><span class="rl">Role</span><span class="bio">One-line bio.</span></div>
    <div class="member"><image-slot id="team-2" class="ph" shape="rounded" radius="12" placeholder="Drop a photo"></image-slot><span class="nm">Name</span><span class="rl">Role</span><span class="bio">One-line bio.</span></div>
    <div class="member"><image-slot id="team-3" class="ph" shape="rounded" radius="12" placeholder="Drop a photo"></image-slot><span class="nm">Name</span><span class="rl">Role</span><span class="bio">One-line bio.</span></div>
    <div class="member"><image-slot id="team-4" class="ph" shape="rounded" radius="12" placeholder="Drop a photo"></image-slot><span class="nm">Name</span><span class="rl">Role</span><span class="bio">One-line bio.</span></div>
  </div>
  <div class="s-foot"><span>inm — team</span><span class="pg">08</span></div>
</section>
```

### 5.17 Closing — `dark` · `.closing-slide`
**Reach for it when:** the final slide — wrap-up, call to action, contact/link. Use exactly one, last.
**Fill:** logo lockup, a display statement, one lead sentence, a CTA capsule (link or action).

```html
<section class="slide dark closing-slide" data-label="Closing">
  <div class="lockup"><img src="../assets/icon.svg" alt="" />inm</div>
  <h2 class="s-display">A closing statement.</h2>
  <p class="s-lead">One sentence of wrap-up or next step.</p>
  <span class="closing-cta">link or call to action</span>
</section>
```

### 5.18 Shared atoms (used inside every type)
- `.eyebrow` — small uppercase kicker with a pill dot before it. The standard top line of a content slide.
- `.lockup` — the inm logo + wordmark (`<img src="../assets/icon.svg" alt="" />inm`).
- `.s-display` (92px) — biggest headline (title, section, closing).
- `.s-h2` (60px) — standard slide heading.
- `.s-lead` (24px, muted) — lead/intro paragraph, capped ~760px wide.
- `.s-foot` — bottom row: left descriptor + right `.pg` page number (mono). Add `style="margin-top:auto;"` to pin it to the bottom when the slide's body doesn't already fill the height.
- `.spacer` — `flex:1` strut to push content apart (used on the title slide).
- `.chip-row` / `.chip` — pill row for tags/metadata if you need them.

---

## 6. Conversion procedure

Follow this loop. Think in terms of *slides*, not *paragraphs* — the source rarely maps 1:1.

1. **Parse the input into a slide sequence.**
   - **Slidev:** split on lines that are exactly `---` (slide separators). The first block may be deck
     frontmatter (theme, title) — read it for the deck title, then drop it. Per-slide frontmatter
     (`layout:`, `class:`, etc.) sits right after a separator — use it as a *hint* (`layout: section`
     → §5.3 divider; `layout: image-left`/`image-right` → §5.14 split; `layout: cover` → §5.1 title;
     `layout: center` → §5.13 statement) but always let content shape the final choice. Slidev `::slot::`
     markers and `<v-clicks>` / click directives: ignore the animation, keep the content. Inline HTML
     and `<style>` in a Slidev slide: drop framework-specific styling, keep the meaning.
   - **Plain Markdown:** segment by headings. A top-level `#` usually starts the deck (title) or a
     section divider; `##` blocks become content slides. A run of bullets under a heading → two-column
     or feature grid. A Markdown table → data table. A fenced code block → code slide. A blockquote →
     statement. An image → split or full-bleed.
   - **Outline:** treat each top node as a slide; nest its children as the points/rows.
2. **Assign a type to each slide** using §5 cues and your judgment. Note the scope (light/dark).
3. **Plan the rhythm.** First slide = title (§5.1); last = closing (§5.17). Insert section dividers
   (§5.3, dark) at part boundaries. Scatter dark beats (section/table/closing) so light and dark
   alternate gently — never two dark slides back to back unless they're a deliberate pair.
4. **Fit content to the frame.** Respect the per-type fill limits (e.g. ≤6 agenda rows, ≤6 feature
   tiles, ≤6 table rows, code ≤~12 lines). If a source slide overflows, **split it into two slides**
   with the same heading (add " (cont.)" or a `02 / 02` cue) — never shrink type or cram. If it's thin,
   merge or promote it to a statement.
5. **Rewrite copy to the inm voice** (§7). Tighten bullets to one line. Sentence case. Strip emoji and
   hype. Keep numbers the source gives; invent nothing.
6. **Fill the skeletons,** set `data-label` per slide, number pages in `.s-foot .pg` (`01`, `02`, …;
   skip numbering on title/section/quote/closing where the kit omits it).
7. **Assemble** into the chosen shell (§3 deck or §4 cards). Include `image-slot.js` only if needed;
   `deck-stage.js` last.
8. **Verify** against §8.

---

## 7. Voice & copy

- Calm, precise, craft-forward. **Sentence case** everywhere (headlines included).
- No hype, no exclamation marks, no emoji, no marketing adjectives ("revolutionary", "seamless").
- Imperative/impersonal for instructions ("Drop in the tokens", not "You should drop in…").
- `inm` is always lowercase, even at the start of a line.
- Quantify when the source does (APCA Lc, counts, dates). Never fabricate metrics, logos, or quotes.
- Tighten ruthlessly: a point card body is one line; a lead is two or three sentences max.
- Prefer the source's own words, compressed — don't editorialize or add claims that aren't in the input.

---

## 8. Verification checklist

Before declaring done, confirm:

- [ ] `<deck-stage width="1280" height="720">` (deck) or `.card-frame` 1280×720 (card). No other size.
- [ ] Every `<section>` has a `light` or `dark` scope class and a `data-label`.
- [ ] No `position`/size styles on any `.slide` section.
- [ ] Only `slides.css` is linked; no new component CSS, no other framework.
- [ ] No raw hex in content (only `var(--s-*)` / anchor vars from the skeletons).
- [ ] No emoji, no icon fonts, no hand-drawn SVG scenes.
- [ ] Logo path `../assets/icon.svg`; scripts resolve (`image-slot.js` only if used; `deck-stage.js` last).
- [ ] Nothing overflows the frame — open it and check each slide; split anything that clips.
- [ ] First slide is a title, last is a closing; dark beats are spaced, not clustered.
- [ ] Page numbers run in order; voice is sentence-case and emoji-free.
- [ ] Speaker notes only if the user asked.

---

## 9. Worked example — Slidev in, inm out

### Input (`talk.md`, Slidev)

```markdown
---
theme: default
title: Shipping a color system
---

# Shipping a color system
How we took inm from four swatches to a production palette

---

## What we'll cover

- Foundations — the four anchors
- In product — dense, scannable UI
- Handoff — Tailwind v4 and v3

---
layout: section
---

# 01 · Foundations

---

## Quiet by default, clear on intent

Hierarchy comes from tone and border, not color noise.

- Warm canvas — stone in light, plum in dark
- Clay is the signal — one action color
- Mist for state — quiet status and metadata

---

## By the numbers

| Token        | Use                  | APCA Lc |
|--------------|----------------------|---------|
| text.body    | Primary reading text | -82     |
| accent.clay  | Actions, links       | -61     |
| border.hair  | Surface divisions    | -14     |

---

> Use elevation sparingly. Prefer border and tonal change for hierarchy.

---

# Thanks

github.com/iceice666/inm
```

### Plan

| # | Source block | inm type | Scope |
| --- | --- | --- | --- |
| 1 | `# Shipping…` + tagline | Title (§5.1) | light |
| 2 | "What we'll cover" list | Agenda (§5.2) | light |
| 3 | `layout: section` "01 · Foundations" | Section divider (§5.3) | dark |
| 4 | Heading + lead + 3 bullets | Two-column content (§5.4) | light |
| 5 | Markdown table | Data table (§5.9) | dark |
| 6 | Blockquote | Statement (§5.13) | light |
| 7 | `# Thanks` + link | Closing (§5.17) | dark |

### Output (`index.html`)

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>inm — Shipping a color system</title>
  <link rel="stylesheet" href="slides.css" />
  <style>
    html, body { margin: 0; background: #1c171d; }
    deck-stage:not(:defined) { visibility: hidden; }
  </style>
</head>
<body>
  <deck-stage width="1280" height="720">

    <!-- SLIDE: title -->
    <section class="slide light title-slide" data-label="Title">
      <div class="title-blocks" aria-hidden="true">
        <i class="tb-stone"></i><i class="tb-plum"></i><i class="tb-clay"></i>
      </div>
      <div class="lockup"><img src="../assets/icon.svg" alt="" />inm</div>
      <div class="spacer"></div>
      <p class="eyebrow">A production color system</p>
      <h1 class="s-display" style="margin-top:18px;max-width:840px;">Shipping a<br />color system.</h1>
      <p class="s-lead" style="margin-top:26px;">How we took inm from four swatches to a production palette.</p>
      <div class="spacer"></div>
      <div class="s-foot"><span>Engineering talk</span><span class="pg">inm · 2026</span></div>
    </section>

    <!-- SLIDE: agenda -->
    <section class="slide light" data-label="Agenda">
      <p class="eyebrow">What we'll cover</p>
      <h2 class="s-h2" style="margin-top:16px;">Agenda</h2>
      <div class="agenda-list">
        <div class="agenda-item is-active"><span class="an">01</span><span class="at">Foundations</span><span class="am">The four anchors</span></div>
        <div class="agenda-item"><span class="an">02</span><span class="at">In product</span><span class="am">Dense, scannable UI</span></div>
        <div class="agenda-item is-dim"><span class="an">03</span><span class="at">Handoff</span><span class="am">Tailwind v4 &amp; v3</span></div>
      </div>
      <div class="s-foot" style="margin-top:auto;"><span>inm — agenda</span><span class="pg">02</span></div>
    </section>

    <!-- SLIDE: section -->
    <section class="slide dark section-slide" data-label="Foundations">
      <div class="section-num">01 — Foundations</div>
      <h2 class="s-display">The four anchors, tuned into tokens.</h2>
      <div class="section-rule"></div>
    </section>

    <!-- SLIDE: content -->
    <section class="slide light" data-label="Principles">
      <p class="eyebrow">How the palette works</p>
      <h2 class="s-h2" style="margin-top:16px;">Quiet by default, clear on intent.</h2>
      <div class="two-col">
        <p class="s-lead">Hierarchy comes from tone and border, not from color noise or heavy shadow.</p>
        <div class="col-points">
          <div class="point"><span class="n">1</span><div><h4>Warm canvas</h4><p>Stone in light, plum in dark — never pure black or white.</p></div></div>
          <div class="point"><span class="n">2</span><div><h4>Clay is the signal</h4><p>One action color for links, actions, and active state.</p></div></div>
          <div class="point"><span class="n">3</span><div><h4>Mist for state</h4><p>A cool support tone for quiet status and metadata.</p></div></div>
        </div>
      </div>
      <div class="s-foot"><span>inm — foundations</span><span class="pg">04</span></div>
    </section>

    <!-- SLIDE: data table -->
    <section class="slide dark" data-label="Token table">
      <p class="eyebrow">Role by role</p>
      <h2 class="s-h2" style="margin:16px 0 24px;">Semantic tokens at a glance.</h2>
      <div class="data-table">
        <div class="dt-row dt-head"><span>Token</span><span>Use</span><span>APCA Lc</span><span>Status</span></div>
        <div class="dt-body">
          <div class="dt-row"><span class="c-name">text.body</span><span class="c-sub">Primary reading text</span><span class="c-num">-82</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
          <div class="dt-row"><span class="c-name">accent.clay</span><span class="c-sub">Actions, links</span><span class="c-num">-61</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
          <div class="dt-row"><span class="c-name">border.hair</span><span class="c-sub">Surface divisions</span><span class="c-num">-14</span><span class="dt-tag"><span class="d"></span>Review</span></div>
        </div>
      </div>
      <div class="s-foot" style="margin-top:auto;"><span>inm — token table</span><span class="pg">05</span></div>
    </section>

    <!-- SLIDE: quote -->
    <section class="slide light quote-slide" data-label="Statement">
      <div class="quote-mark" aria-hidden="true">&ldquo;</div>
      <p class="quote-text">Use elevation sparingly. Prefer border and tonal change for hierarchy.</p>
      <div class="quote-by">— inm design principles</div>
    </section>

    <!-- SLIDE: closing -->
    <section class="slide dark closing-slide" data-label="Closing">
      <div class="lockup"><img src="../assets/icon.svg" alt="" />inm</div>
      <h2 class="s-display">Calm, scannable, warm.</h2>
      <p class="s-lead">Four anchors, two modes, and a portable Tailwind handoff.</p>
      <span class="closing-cta">github.com/iceice666/inm</span>
    </section>

  </deck-stage>
  <script src="deck-stage.js"></script>
</body>
</html>
```

Note how the conversion **re-shaped** the source: the table moved to a dark canvas for rhythm, the
section divider got a statement headline the source only implied, bullets were tightened to one line
each, and `image-slot.js` was omitted because no slide needed a photo. That judgment — mapping intent
to the right type, then fitting the frame — is the whole job.
