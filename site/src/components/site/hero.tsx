import { Button } from "@/components/ui/button"

const CELLS = [
  { cls: "plum",  name: "Plum Black", hex: "#3E343F", oklch: "34% .023 323" },
  { cls: "clay",  name: "Clay Rose",  hex: "#A1736B", oklch: "60% .06 30" },
  { cls: "mist",  name: "Mist Gray",  hex: "#979F9B", oklch: "69% .011 165" },
  { cls: "stone", name: "Warm Stone", hex: "#C9BFB6", oklch: "81% .017 65" },
]

const STATS = [
  { b: "4",   s: "anchor colors" },
  { b: "9",   s: "semantic tokens" },
  { b: "2",   s: "light + dark modes" },
  { b: "60+", s: "APCA Lc target" },
]

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">OKLCH palette for quiet interfaces</p>
          <h1 className="hero-title" id="hero-title">
            Warm stone, soft clay, <em>deep plum.</em>
          </h1>
          <p className="hero-lead">
            <strong>inm</strong> is a low-chroma color system for editorial tools,
            portfolios, dashboards, and creative product UI. Four anchors, tuned in
            OKLCH with APCA-informed contrast — calm, scannable, never loud.
          </p>
          <div className="hero-cta">
            <Button asChild size="lg">
              <a href="#tokens">Explore the tokens</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#anchors">Meet the anchors</a>
            </Button>
          </div>
          <div className="hero-stats" aria-label="At a glance">
            {STATS.map((s) => (
              <div className="stat" key={s.s}>
                <b>{s.b}</b>
                <span>{s.s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="palette-object" aria-label="The four anchors">
          {CELLS.map((c) => (
            <div className={`po-cell ${c.cls}`} key={c.name} tabIndex={0}>
              <div className="po-label">
                <b>{c.name}</b>
                <code>{c.hex}</code>
              </div>
              <span className="po-oklch">oklch({c.oklch})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
