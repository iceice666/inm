const ANCHORS = [
  {
    name: "Plum Black",
    color: "#3e343f",
    hex: "#3E343F",
    oklch: "34% .023 323",
    role: "Deep structure and the dark-mode canvas. High-trust framing without the glare of pure black.",
  },
  {
    name: "Clay Rose",
    color: "#a1736b",
    hex: "#A1736B",
    oklch: "60% .06 30",
    role: "The single action signal — brand accent, active controls, and gentle emphasis.",
  },
  {
    name: "Mist Gray",
    color: "#979f9b",
    hex: "#979F9B",
    oklch: "69% .011 165",
    role: "A cool support tone that balances the warmth. Statuses, metadata, and quiet signals.",
  },
  {
    name: "Warm Stone",
    color: "#c9bfb6",
    hex: "#C9BFB6",
    oklch: "81% .017 65",
    role: "The light-mode canvas. Calm, tactile, and easy to scan across long sessions.",
  },
]

export function Anchors() {
  return (
    <section className="section" id="anchors" aria-labelledby="anchors-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">01 / Anchors</span>
            <h2 id="anchors-title">Four anchors, tuned into UI tokens.</h2>
          </div>
          <p>
            The originals stay visible while semantic tokens do the day-to-day work.
            Every value is defined in OKLCH at 0.01&ndash;0.07 chroma — never pure black, never pure white.
          </p>
        </div>

        <div className="anchor-grid">
          {ANCHORS.map((a) => (
            <article className="anchor-card" key={a.name}>
              <div className="anchor-fill" style={{ background: a.color }}>
                <span>{a.hex}</span>
              </div>
              <div className="anchor-body">
                <div className="anchor-name">{a.name}</div>
                <p className="anchor-role">{a.role}</p>
                <div className="anchor-meta">
                  <span><i>hex</i> {a.hex}</span>
                  <span><i>oklch</i> {a.oklch}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
