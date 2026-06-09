// inm showcase — Palette grid (four anchor swatches)
function Palette() {
  const swatches = [
    { name: "Plum Black", desc: "Deep structure, dark canvas, and high-trust framing.", color: "#3e343f", hex: "hex-3E343F.svg", alt: "#3E343F" },
    { name: "Clay Rose", desc: "Brand accent, active controls, and gentle emphasis.", color: "#a1736b", hex: "hex-A1736B.svg", alt: "#A1736B" },
    { name: "Mist Gray", desc: "Cool support tone for statuses, metadata, and balance.", color: "#979f9b", hex: "hex-979F9B.svg", alt: "#979F9B" },
    { name: "Warm Stone", desc: "The light canvas: calm, tactile, and easy to scan.", color: "#c9bfb6", hex: "hex-C9BFB6.svg", alt: "#C9BFB6" },
  ];
  return (
    <section className="section" id="palette" aria-labelledby="palette-title">
      <div className="section-inner">
        <div className="section-heading">
          <h2 id="palette-title">Four anchors, tuned into UI tokens.</h2>
          <p>
            The original anchors stay visible, while semantic tokens do the
            day-to-day work: canvas, surface, raised layers, text, borders,
            accent actions, and cool support states.
          </p>
        </div>
        <div className="palette-grid">
          {swatches.map((s) => (
            <article className="swatch-card" key={s.name}>
              <div className="swatch-fill" style={{ background: s.color }}></div>
              <div className="swatch-body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="hex"><img src={"../../assets/" + s.hex} alt={s.alt} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Palette = Palette;
