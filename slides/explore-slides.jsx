// inm — new slide-type explorations. Each entry is verbatim slide HTML
// (1280×720) rendered inside a DCArtboard via dangerouslySetInnerHTML.
// Strictly on-system: warm-stone light / plum dark, one clay accent,
// border + tone hierarchy, mono for data, geometric block glyphs.

window.INM_SLIDES = {

  /* ============ 1 · DATA TABLE / SPEC SHEET ============ */

  specSheet: `
    <section class="slide light" data-label="Spec sheet">
      <p class="eyebrow">At a glance</p>
      <h2 class="s-h2" style="margin-top:16px;">Token specification.</h2>
      <div class="spec-list">
        <div class="spec-row"><span class="sk">Canvas</span><span class="sd">Base surface — warm, never pure white</span><span class="sv">81% · 0.017 · 64.6</span></div>
        <div class="spec-row"><span class="sk">Accent</span><span class="sd">Clay — the single action signal</span><span class="sv is-accent">47.9% · 0.065 · 27.6</span></div>
        <div class="spec-row"><span class="sk">Muted</span><span class="sd">Secondary text and metadata</span><span class="sv">47.9% · 0.01 · 349.6</span></div>
        <div class="spec-row"><span class="sk">Border</span><span class="sd">Hairline divisions between surfaces</span><span class="sv">73.6% · 0.011 · 58.2</span></div>
        <div class="spec-row"><span class="sk">Cool</span><span class="sd">Mist — quiet status and support</span><span class="sv">60% · 0.013 · 170</span></div>
      </div>
      <div class="s-foot" style="margin-top:auto;"><span>inm — specification</span><span class="pg">09</span></div>
    </section>`,

  dataTable: `
    <section class="slide dark" data-label="Data table">
      <p class="eyebrow">Role by role</p>
      <h2 class="s-h2" style="margin:16px 0 24px;">Semantic tokens at a glance.</h2>
      <div class="data-table">
        <div class="dt-row dt-head"><span>Token</span><span>Use</span><span>APCA Lc</span><span>Status</span></div>
        <div class="dt-body">
          <div class="dt-row"><span class="c-name">text.body</span><span class="c-sub">Primary reading text</span><span class="c-num">-82</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
          <div class="dt-row"><span class="c-name">text.muted</span><span class="c-sub">Metadata, captions</span><span class="c-num">-58</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
          <div class="dt-row"><span class="c-name">accent.clay</span><span class="c-sub">Actions, links, active</span><span class="c-num">-61</span><span class="dt-tag is-accent"><span class="d"></span>Ship</span></div>
          <div class="dt-row"><span class="c-name">border.hair</span><span class="c-sub">Surface divisions</span><span class="c-num">-14</span><span class="dt-tag"><span class="d"></span>Review</span></div>
          <div class="dt-row"><span class="c-name">cool.mist</span><span class="c-sub">Quiet status tone</span><span class="c-num">-44</span><span class="dt-tag"><span class="d"></span>Review</span></div>
        </div>
      </div>
      <div class="s-foot" style="margin-top:auto;"><span>inm — token table</span><span class="pg">10</span></div>
    </section>`,

  /* ============ 2 · VERTICAL PROCESS / STEPS ============ */

  vstepsLight: `
    <section class="slide light" data-label="Process">
      <p class="eyebrow">How adoption works</p>
      <h2 class="s-h2" style="margin:16px 0 28px;">Four steps to a shipped palette.</h2>
      <div class="vsteps">
        <div class="vstep"><span class="vn">1</span><div class="vc"><div class="vt">Drop in the tokens</div><div class="vd">Add the OKLCH variables and wire the light and dark roots — no build step required.</div></div></div>
        <div class="vstep"><span class="vn">2</span><div class="vc"><div class="vt">Build on the scale</div><div class="vd">Compose buttons, inputs, rows, and badges from the shared semantic tokens.</div></div></div>
        <div class="vstep is-future"><span class="vn">3</span><div class="vc"><div class="vt">Tune the contrast</div><div class="vd">Check APCA across every surface; nudge muted and accent until both modes read clean.</div></div></div>
        <div class="vstep is-future"><span class="vn">4</span><div class="vc"><div class="vt">Hand it off</div><div class="vd">Export the Tailwind config and document the system in a portable DESIGN.md.</div></div></div>
      </div>
      <div class="s-foot"><span>inm — process</span><span class="pg">11</span></div>
    </section>`,

  vstepsDark: `
    <section class="slide dark" data-label="Process (dark)">
      <p class="eyebrow">The review loop</p>
      <h2 class="s-h2" style="margin:16px 0 28px;">Every change earns its place.</h2>
      <div class="vsteps">
        <div class="vstep"><span class="vn">A</span><div class="vc"><div class="vt">Propose against a token</div><div class="vd">New color requests map to an existing semantic role before anything is added.</div></div></div>
        <div class="vstep"><span class="vn">B</span><div class="vc"><div class="vt">Measure both modes</div><div class="vd">Light and dark are checked together — a value ships only if it reads in both.</div></div></div>
        <div class="vstep is-future"><span class="vn">C</span><div class="vc"><div class="vt">Document the intent</div><div class="vd">Record what the token is for, so future use stays calm and on-system.</div></div></div>
      </div>
      <div class="s-foot"><span>inm — review loop</span><span class="pg">12</span></div>
    </section>`,

  /* ============ 3 · FEATURE / ICON GRID ============ */

  featGrid3: `
    <section class="slide light" data-label="Feature grid">
      <p class="eyebrow">What you get</p>
      <h2 class="s-h2" style="margin:16px 0 28px;">A system, not a swatch file.</h2>
      <div class="feat-grid">
        <div class="feat"><span class="glyph gl-stack"><i class="g-accent"></i><i class="g-stone"></i></span><h4>Four anchors</h4><p>Plum, clay, mist, and stone tuned into a full token scale.</p></div>
        <div class="feat"><span class="glyph gl-split"><i class="g-stone"></i><i class="g-accent"></i></span><h4>Light &amp; dark</h4><p>One semantic map drives both modes with identical behavior.</p></div>
        <div class="feat"><span class="glyph gl-bars"><i class="g-cool"></i><i class="g-accent"></i><i class="g-cool"></i></span><h4>APCA-tuned</h4><p>Contrast measured per surface, not guessed from hex math.</p></div>
        <div class="feat"><span class="glyph gl-frame"><i></i><i class="g-accent"></i></span><h4>Quiet elevation</h4><p>Hierarchy from border and tone — shadows used sparingly.</p></div>
        <div class="feat"><span class="glyph gl-rows"><i class="g-stone"></i><i class="g-accent"></i><i class="g-stone"></i></span><h4>Dense-ready</h4><p>Built for tables, dashboards, and editorial tools.</p></div>
        <div class="feat"><span class="glyph gl-tri"><i class="g-accent"></i><i class="g-cool"></i><i class="g-stone"></i></span><h4>Portable handoff</h4><p>Exports cleanly to Tailwind v4 and v3 configs.</p></div>
      </div>
      <div class="s-foot"><span>inm — features</span><span class="pg">13</span></div>
    </section>`,

  featGrid2: `
    <section class="slide light" data-label="Feature grid (2-col)">
      <p class="eyebrow">Two ideas hold it together</p>
      <h2 class="s-h2" style="margin:16px 0 28px;">Restraint, then one clear signal.</h2>
      <div class="feat-grid cols-2">
        <div class="feat" style="padding:34px 32px;gap:18px;"><span class="glyph gl-split" style="width:56px;height:56px;"><i class="g-stone"></i><i class="g-cool"></i></span><h4 style="font-size:28px;">Quiet by default</h4><p style="font-size:18px;">Warm canvas, low chroma, hairline borders. Nothing competes for attention until it has earned it.</p></div>
        <div class="feat" style="padding:34px 32px;gap:18px;"><span class="glyph gl-stack" style="width:56px;height:56px;"><i class="g-accent"></i><i class="g-stone"></i></span><h4 style="font-size:28px;">Clear on intent</h4><p style="font-size:18px;">A single clay accent carries every action, link, and active state — so intent is never ambiguous.</p></div>
      </div>
      <div class="s-foot"><span>inm — principles</span><span class="pg">14</span></div>
    </section>`,

  /* ============ 4 · CODE / MONO SHOWCASE ============ */

  codeLight: `
    <section class="slide light" data-label="Code">
      <p class="eyebrow">Drop-in tokens</p>
      <h2 class="s-h2" style="margin:16px 0 24px;">No build step. Just variables.</h2>
      <div class="code-win">
        <div class="code-bar"><div class="dots"><span></span><span></span><span></span></div><span class="fname">inm.css</span></div>
        <div class="code-body">
          <div class="ln">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7</div>
          <code><span class="tok-com">/* light scope — warm stone canvas */</span>
<span class="tok-punc">:root</span> {
  <span class="tok-key">--bg</span><span class="tok-punc">:</span>     <span class="tok-fn">oklch</span>(<span class="tok-num">81%</span> <span class="tok-num">.017</span> <span class="tok-num">64.6</span>)<span class="tok-punc">;</span>
  <span class="tok-key">--text</span><span class="tok-punc">:</span>   <span class="tok-fn">oklch</span>(<span class="tok-num">28%</span> <span class="tok-num">.020</span> <span class="tok-num">322</span>)<span class="tok-punc">;</span>
  <span class="tok-key">--accent</span><span class="tok-punc">:</span> <span class="tok-fn">oklch</span>(<span class="tok-num">48%</span> <span class="tok-num">.065</span> <span class="tok-num">28</span>)<span class="tok-punc">;</span>
  <span class="tok-key">--border</span><span class="tok-punc">:</span> <span class="tok-fn">oklch</span>(<span class="tok-num">74%</span> <span class="tok-num">.011</span> <span class="tok-num">58</span>)<span class="tok-punc">;</span>
}</code>
        </div>
      </div>
      <div class="s-foot" style="margin-top:auto;"><span>inm — implementation</span><span class="pg">15</span></div>
    </section>`,

  codeDark: `
    <section class="slide dark" data-label="Code (dark)">
      <p class="eyebrow">Same tokens, dark scope</p>
      <h2 class="s-h2" style="margin:16px 0 24px;">One map drives both modes.</h2>
      <div class="code-win">
        <div class="code-bar"><div class="dots"><span></span><span></span><span></span></div><span class="fname">Button.tsx</span></div>
        <div class="code-body">
          <div class="ln">1<br/>2<br/>3<br/>4<br/>5<br/>6</div>
          <code><span class="tok-key">export</span> <span class="tok-key">const</span> <span class="tok-fn">Button</span> <span class="tok-punc">=</span> () <span class="tok-punc">=&gt;</span> (
  <span class="tok-punc">&lt;</span><span class="tok-fn">button</span> <span class="tok-key">className</span><span class="tok-punc">=</span><span class="tok-str">"inm-btn"</span><span class="tok-punc">&gt;</span>
    <span class="tok-com">// bg: accent · text: on-accent</span>
    <span class="tok-str">"Apply palette"</span>
  <span class="tok-punc">&lt;/</span><span class="tok-fn">button</span><span class="tok-punc">&gt;</span>
)<span class="tok-punc">;</span></code>
        </div>
      </div>
      <div class="s-foot" style="margin-top:auto;"><span>inm — component</span><span class="pg">16</span></div>
    </section>`,

  /* ============ 5 · IMAGE + TEXT 50/50 SPLIT ============ */

  splitLeft: `
    <section class="slide light split-slide" data-label="Image + text">
      <div class="split">
        <div class="split-media"><image-slot id="exp-split-1" shape="rect" placeholder="Drop an image"></image-slot></div>
        <div class="split-copy">
          <p class="eyebrow">Calm at the edges</p>
          <h2 class="s-h2">Built for real product surfaces.</h2>
          <div class="split-list">
            <div class="sli"><span class="b"></span><span>Editorial workspaces and long-form tools</span></div>
            <div class="sli"><span class="b"></span><span>Dense dashboards that stay scannable</span></div>
            <div class="sli"><span class="b"></span><span>Creative consoles in light and dark</span></div>
          </div>
          <div class="s-foot split-foot"><span>inm — in product</span><span class="pg">17</span></div>
        </div>
      </div>
    </section>`,

  splitRight: `
    <section class="slide dark split-slide" data-label="Image + text (right)">
      <div class="split">
        <div class="split-copy">
          <p class="eyebrow">Pair it with warm imagery</p>
          <h2 class="s-h2">The palette likes soft light.</h2>
          <p class="s-lead" style="margin-top:22px;">Use low-chroma, warm photography — never cool, saturated, or high-glare. The system stays quiet when the imagery does too.</p>
          <div class="s-foot split-foot"><span>inm — art direction</span><span class="pg">18</span></div>
        </div>
        <div class="split-media"><image-slot id="exp-split-2" shape="rect" placeholder="Drop an image"></image-slot></div>
      </div>
    </section>`,
};
