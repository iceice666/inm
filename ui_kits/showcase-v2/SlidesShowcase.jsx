// inm showcase v2 — Slides: deck template gallery with visual previews
// Light-mode slide palette (raw values so thumbnails are always light)
var SL = {
  bg:      "oklch(81% 0.017 64.6)",
  surf:    "oklch(86.8% 0.013 63.9)",
  raised:  "oklch(91.4% 0.011 63.4)",
  text:    "oklch(28.5% 0.02 322.5)",
  muted:   "oklch(47.9% 0.01 349.6)",
  border:  "oklch(73.6% 0.011 58.2)",
  accent:  "oklch(47.9% 0.065 27.6)",
  cool:    "oklch(60% 0.013 170)",
  onAcc:   "oklch(91.4% 0.011 63.4)",
  // Dark canvas
  plum:    "oklch(34% 0.023 323.2)",
  dkSurf:  "oklch(38% 0.025 323.4)",
  dkText:  "oklch(91.4% 0.011 63.4)",
  dkMuted: "oklch(75.9% 0.009 36.5)",
  dkBord:  "oklch(50.3% 0.02 331.9)",
  dkAcc:   "oklch(75.5% 0.068 31.5)",
  dkOnAcc: "oklch(34% 0.023 323.2)",
  // Anchor colors
  clay:    "oklch(60% 0.06 30)",
  stone:   "oklch(81% 0.017 64.6)",
};

function SlideFrame({ dark, children, style }) {
  return (
    <div className="sl-frame" style={Object.assign({ background: dark ? SL.plum : SL.bg }, style)}>
      {children}
    </div>
  );
}

function TitleThumb() {
  return (
    <SlideFrame>
      {/* Floating blocks (upper right) */}
      <div style={{ position: "absolute", right: "13%", top: "12%", width: "26%", height: "52%", background: SL.plum, border: "1px solid " + SL.border }}></div>
      <div style={{ position: "absolute", right: "26%", bottom: "12%", width: "14%", height: "27%", background: SL.clay, border: "1px solid " + SL.border }}></div>
      <div style={{ position: "absolute", right: "15%", top: "8%", width: "18%", height: "16%", background: SL.stone, border: "1px solid " + SL.border, opacity: 0.7 }}></div>
      {/* Copy */}
      <div style={{ position: "relative", zIndex: 1, padding: "10% 12%" }}>
        <div style={{ width: "32%", height: "5px", borderRadius: 999, background: SL.cool, marginBottom: "7%" }}></div>
        <div style={{ height: "7px", borderRadius: 3, background: SL.text, width: "50%", marginBottom: "3%" }}></div>
        <div style={{ height: "7px", borderRadius: 3, background: SL.text, width: "40%", marginBottom: "3%" }}></div>
        <div style={{ height: "7px", borderRadius: 3, background: SL.text, width: "44%", marginBottom: "6%" }}></div>
        <div style={{ height: "4px", borderRadius: 3, background: SL.muted, width: "55%", opacity: 0.5 }}></div>
        <div style={{ height: "4px", borderRadius: 3, background: SL.muted, width: "42%", opacity: 0.4, marginTop: "2%" }}></div>
      </div>
    </SlideFrame>
  );
}

function MetricsThumb() {
  var tiles = [SL.accent, SL.cool, SL.muted, SL.border];
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%" }}>
        <div style={{ width: "32%", height: "5px", borderRadius: 999, background: SL.cool, marginBottom: "4%" }}></div>
        <div style={{ height: "6px", borderRadius: 3, background: SL.text, width: "58%", marginBottom: "6%" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "3%" }}>
          {tiles.map(function(c, i) {
            return (
              <div key={i} style={{ background: SL.surf, border: "1px solid " + SL.border, borderRadius: "6px", padding: "8% 10%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10%" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: 999, background: c, flexShrink: 0 }}></div>
                  <div style={{ height: "4px", borderRadius: 2, background: SL.muted, flex: 1, opacity: 0.6 }}></div>
                </div>
                <div style={{ height: "16px", borderRadius: 2, background: SL.text, width: "60%", marginBottom: "8%" }}></div>
                <div style={{ height: "3px", borderRadius: 2, background: SL.cool, width: "80%", opacity: 0.5 }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideFrame>
  );
}

function ComparisonThumb() {
  function Panel({ dark }) {
    var bg = dark ? SL.plum : SL.surf;
    var surf = dark ? SL.dkSurf : SL.raised;
    var text = dark ? SL.dkText : SL.text;
    var muted = dark ? SL.dkMuted : SL.muted;
    var bord = dark ? SL.dkBord : SL.border;
    var acc = dark ? SL.dkAcc : SL.accent;
    return (
      <div style={{ flex: 1, background: bg, border: "1px solid " + bord, borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "6% 8%", borderBottom: "1px solid " + bord, display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            {[muted, dark ? SL.dkAcc : SL.cool, acc].map(function(c, i) { return <div key={i} style={{ width: "7px", height: "7px", borderRadius: 999, background: c }}></div>; })}
          </div>
          <div style={{ height: "4px", borderRadius: 2, background: muted, flex: 1, opacity: 0.4, marginLeft: "4%" }}></div>
        </div>
        <div style={{ padding: "6% 8%", display: "grid", gap: "5%" }}>
          {[1, 2, 3].map(function(i) {
            return (
              <div key={i} style={{ background: surf, border: "1px solid " + bord, borderRadius: "4px", padding: "6% 8%", display: "grid", gridTemplateColumns: "8px 1fr auto", alignItems: "center", gap: "6%" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: 999, background: i === 1 ? acc : dark ? SL.dkAcc : SL.cool }}></div>
                <div style={{ height: "4px", borderRadius: 2, background: text, opacity: 0.7 }}></div>
                <div style={{ height: "4px", borderRadius: 2, background: muted, width: "24px", opacity: 0.5 }}></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%" }}>
        <div style={{ height: "5px", borderRadius: 999, background: SL.cool, width: "32%", marginBottom: "4%" }}></div>
        <div style={{ height: "6px", borderRadius: 3, background: SL.text, width: "55%", marginBottom: "6%" }}></div>
        <div style={{ display: "flex", gap: "4%" }}>
          <Panel dark={false} />
          <Panel dark={true} />
        </div>
      </div>
    </SlideFrame>
  );
}

function ClosingThumb() {
  return (
    <SlideFrame dark={true}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "10% 12%", textAlign: "center" }}>
        <div style={{ height: "5px", borderRadius: 999, background: SL.cool, width: "28%", marginBottom: "6%" }}></div>
        <div style={{ height: "8px", borderRadius: 3, background: SL.dkText, width: "64%", marginBottom: "3%" }}></div>
        <div style={{ height: "8px", borderRadius: 3, background: SL.dkText, width: "52%", marginBottom: "3%" }}></div>
        <div style={{ height: "8px", borderRadius: 3, background: SL.dkAcc, width: "44%", marginBottom: "8%" }}></div>
        <div style={{ height: "30px", borderRadius: "6px", background: SL.dkAcc, width: "32%", minWidth: 0 }}></div>
      </div>
    </SlideFrame>
  );
}

function AgendaThumb() {
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%" }}>
        <div style={{ height: "5px", borderRadius: 999, background: SL.cool, width: "28%", marginBottom: "4%" }}></div>
        <div style={{ height: "6px", borderRadius: 3, background: SL.text, width: "52%", marginBottom: "6%" }}></div>
        <div style={{ display: "grid", gap: "0" }}>
          {[
            { num: "01", w: "58%", active: true },
            { num: "02", w: "46%", active: false },
            { num: "03", w: "52%", active: false },
          ].map(function(item) {
            return (
              <div key={item.num} style={{ display: "grid", gridTemplateColumns: "22% 1fr", alignItems: "center", gap: "4%", padding: "3.5% 0", borderTop: "1px solid " + SL.border, opacity: item.active ? 1 : 0.45 }}>
                <div style={{ height: "8px", borderRadius: 2, background: SL.accent, width: "60%" }}></div>
                <div style={{ height: "5px", borderRadius: 2, background: SL.text, width: item.w }}></div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid " + SL.border }}></div>
        </div>
      </div>
    </SlideFrame>
  );
}

function SectionThumb() {
  return (
    <SlideFrame>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "10% 12%", textAlign: "center" }}>
        <div style={{ height: "14px", borderRadius: 3, background: SL.accent, width: "16%", marginBottom: "6%" }}></div>
        <div style={{ height: "9px", borderRadius: 3, background: SL.text, width: "68%", marginBottom: "3%" }}></div>
        <div style={{ height: "9px", borderRadius: 3, background: SL.text, width: "54%", marginBottom: "6%" }}></div>
        <div style={{ height: "5px", borderRadius: 999, background: SL.accent, width: "14%" }}></div>
      </div>
    </SlideFrame>
  );
}

function TwoColThumb() {
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
        <div style={{ height: "5px", borderRadius: 999, background: SL.cool, width: "28%", marginBottom: "4%" }}></div>
        <div style={{ height: "6px", borderRadius: 3, background: SL.text, width: "54%", marginBottom: "6%" }}></div>
        <div style={{ display: "flex", gap: "6%", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4%" }}>
            {[3, 2, 4, 3].map(function(_, i) {
              return <div key={i} style={{ height: "4px", borderRadius: 2, background: SL.text, width: ["80%","68%","76%","60%"][i], opacity: 0.6 }}></div>;
            })}
          </div>
          <div style={{ flex: 1, display: "grid", gap: "5%" }}>
            {[1, 2, 3].map(function(i) {
              return (
                <div key={i} style={{ background: SL.surf, border: "1px solid " + SL.border, borderRadius: "5px", padding: "5% 7%", display: "flex", alignItems: "center", gap: "6%" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "3px", background: SL.accent, flexShrink: 0 }}></div>
                  <div>
                    <div style={{ height: "4px", borderRadius: 2, background: SL.text, width: "80%", marginBottom: "4px" }}></div>
                    <div style={{ height: "3px", borderRadius: 2, background: SL.muted, width: "64%", opacity: 0.6 }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

function SlidesShowcase() {
  var slides = [
    { name: "Title",        desc: "Logo lockup, floating anchor blocks",             Thumb: TitleThumb },
    { name: "Metrics",      desc: "Four stat tiles with APCA figures",               Thumb: MetricsThumb },
    { name: "Comparison",   desc: "Light vs dark framed panels side by side",        Thumb: ComparisonThumb },
    { name: "Two-column",   desc: "Lead copy alongside numbered point cards",        Thumb: TwoColThumb },
    { name: "Section",      desc: "Section divider with number and rule",            Thumb: SectionThumb },
    { name: "Closing",      desc: "Plum canvas, CTA, logo lockup",                  Thumb: ClosingThumb },
  ];

  return (
    <section className="section" id="slides" aria-labelledby="slides-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">07 / Slides</span>
            <h2 id="slides-title">Presentations, on-brand.</h2>
          </div>
          <p>
            Seventeen card templates built on the same foundations &mdash; warm stone canvas,
            semantic tokens, and Inter only. Keyboard-navigable via the <code>deck-stage</code> component.
          </p>
        </div>
        <div className="slide-gallery">
          {slides.map(function(s) {
            return (
              <div className="slide-card" key={s.name}>
                <s.Thumb />
                <div className="slide-meta">
                  <span className="slide-name">{s.name}</span>
                  <small className="slide-desc">{s.desc}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.SlidesShowcase = SlidesShowcase;
