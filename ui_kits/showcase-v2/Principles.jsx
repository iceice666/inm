// inm showcase v2 — Principles: the calm-design rules
function Principles() {
  const items = [
    { n: "P1", title: "Low chroma, always.", text: "Most tokens sit at 0.01\u20130.07 chroma in OKLCH. Color carries meaning, never noise." },
    { n: "P2", title: "Never pure black or white.", text: "Warm stone and plum are the emotional floor and ceiling. Pure #000 / #fff never appear." },
    { n: "P3", title: "Border over shadow.", text: "1px borders and tonal shifts build hierarchy. Elevation is reserved for panels and modals." },
    { n: "P4", title: "One action color.", text: "Clay is the only signal for intent. If everything is emphasized, nothing is." },
    { n: "P5", title: "Dense, but calm.", text: "Product UI prefers scannable rows to decorative cards. Never nest a card inside a card." },
    { n: "P6", title: "The palette is the decoration.", text: "Solid color blocks, not gradients or photography. The system shows itself off." },
  ];
  return (
    <section className="section alt" id="principles" aria-labelledby="principles-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">04 / Principles</span>
            <h2 id="principles-title">Quiet by construction.</h2>
          </div>
          <p>
            Six rules keep every surface restrained. They read like a design spec
            because that, more than anything, is what inm is.
          </p>
        </div>
        <div className="principle-grid">
          {items.map((it) => (
            <article className="principle" key={it.n}>
              <span className="p-num">{it.n}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Principles = Principles;
