// inm showcase — Hero with floating anchor blocks and token chips
function Hero() {
  const chips = [
    { name: "Plum Black", color: "#3e343f" },
    { name: "Clay Rose", color: "#a1736b" },
    { name: "Mist Gray", color: "#979f9b" },
    { name: "Warm Stone", color: "#c9bfb6" },
  ];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-block plum" aria-hidden="true"></div>
      <div className="hero-block clay" aria-hidden="true"></div>
      <div className="hero-block mist" aria-hidden="true"></div>
      <div className="hero-block stone" aria-hidden="true"></div>
      <div className="hero-grid">
        <p className="eyebrow">OKLCH palette for quiet interfaces</p>
        <h1 id="hero-title">Warm stone,<br />soft clay,<br />deep plum.</h1>
        <p className="hero-text">
          <strong>inm</strong> is a low-chroma color system for editorial tools,
          portfolios, dashboards, and creative product UI. It ships with semantic
          tokens, light and dark modes, and APCA-informed contrast guidance.
        </p>
        <div className="hero-note" aria-label="Core tokens">
          {chips.map((c) => (
            <span className="token-chip" key={c.name}>
              <span className="token-dot" style={{ background: c.color }}></span>
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
