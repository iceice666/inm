import type { CSSProperties, ReactNode } from "react"
import { Button } from "@/components/ui/button"

// Light-mode palette constants — thumbnails always render light so they're legible
const SL = {
  bg:      "oklch(81% 0.017 64.6)",
  surf:    "oklch(86.8% 0.013 63.9)",
  raised:  "oklch(91.4% 0.011 63.4)",
  text:    "oklch(28.5% 0.02 322.5)",
  muted:   "oklch(47.9% 0.01 349.6)",
  border:  "oklch(73.6% 0.011 58.2)",
  accent:  "oklch(47.9% 0.065 27.6)",
  cool:    "oklch(60% 0.013 170)",
  onAcc:   "oklch(91.4% 0.011 63.4)",
  plum:    "oklch(34% 0.023 323.2)",
  dkSurf:  "oklch(38% 0.025 323.4)",
  dkText:  "oklch(91.4% 0.011 63.4)",
  dkMuted: "oklch(75.9% 0.009 36.5)",
  dkBord:  "oklch(50.3% 0.02 331.9)",
  dkAcc:   "oklch(75.5% 0.068 31.5)",
  dkOnAcc: "oklch(34% 0.023 323.2)",
  clay:    "oklch(60% 0.06 30)",
  stone:   "oklch(81% 0.017 64.6)",
}

function SlideFrame({ dark = false, children, style }: { dark?: boolean; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="sl-frame" style={{ background: dark ? SL.plum : SL.bg, ...style }}>
      {children}
    </div>
  )
}

function Bar({ w, bg, opacity = 1, mb = 0 }: { w: string; bg: string; opacity?: number; mb?: string | number }) {
  return (
    <div style={{ height: "5px", borderRadius: 999, background: bg, width: w, marginBottom: mb, opacity }} />
  )
}

function TextLine({ w, bg = SL.text, h = "6px", opacity = 1, mb = 0 }: { w: string; bg?: string; h?: string; opacity?: number; mb?: string | number }) {
  return (
    <div style={{ height: h, borderRadius: 3, background: bg, width: w, opacity, marginBottom: mb }} />
  )
}

function TitleThumb() {
  return (
    <SlideFrame>
      <div style={{ position: "absolute", right: "13%", top: "12%", width: "26%", height: "52%", background: SL.plum, border: `1px solid ${SL.border}` }} />
      <div style={{ position: "absolute", right: "26%", bottom: "12%", width: "14%", height: "27%", background: SL.clay, border: `1px solid ${SL.border}` }} />
      <div style={{ position: "absolute", right: "15%", top: "8%", width: "18%", height: "16%", background: SL.stone, border: `1px solid ${SL.border}`, opacity: 0.7 }} />
      <div style={{ position: "relative", zIndex: 1, padding: "10% 12%" }}>
        <Bar w="32%" bg={SL.cool} mb="7%" />
        <TextLine w="50%" mb="3%" />
        <TextLine w="40%" mb="3%" />
        <TextLine w="44%" mb="6%" />
        <TextLine w="55%" bg={SL.muted} opacity={0.5} mb="2%" />
        <TextLine w="42%" bg={SL.muted} opacity={0.4} />
      </div>
    </SlideFrame>
  )
}

function MetricsThumb() {
  const dots = [SL.accent, SL.cool, SL.muted, SL.border]
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%" }}>
        <Bar w="32%" bg={SL.cool} mb="4%" />
        <TextLine w="58%" mb="6%" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "3%" }}>
          {dots.map((c, i) => (
            <div key={i} style={{ background: SL.surf, border: `1px solid ${SL.border}`, borderRadius: 6, padding: "8% 10%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "10%" }}>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: c, flexShrink: 0 }} />
                <div style={{ height: 4, borderRadius: 2, background: SL.muted, flex: 1, opacity: 0.6 }} />
              </div>
              <div style={{ height: 16, borderRadius: 2, background: SL.text, width: "60%", marginBottom: "8%" }} />
              <div style={{ height: 3, borderRadius: 2, background: SL.cool, width: "80%", opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}

function ComparisonPanel({ dark }: { dark: boolean }) {
  const bg    = dark ? SL.plum   : SL.surf
  const surf  = dark ? SL.dkSurf : SL.raised
  const text  = dark ? SL.dkText : SL.text
  const muted = dark ? SL.dkMuted: SL.muted
  const bord  = dark ? SL.dkBord : SL.border
  const acc   = dark ? SL.dkAcc  : SL.accent
  return (
    <div style={{ flex: 1, background: bg, border: `1px solid ${bord}`, borderRadius: 6, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "6% 8%", borderBottom: `1px solid ${bord}`, display: "flex", alignItems: "center", gap: 5 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {[muted, dark ? SL.dkAcc : SL.cool, acc].map((c, i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: 999, background: c }} />
          ))}
        </div>
        <div style={{ height: 4, borderRadius: 2, background: muted, flex: 1, opacity: 0.4, marginLeft: "4%" }} />
      </div>
      <div style={{ padding: "6% 8%", display: "grid", gap: "5%" }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ background: surf, border: `1px solid ${bord}`, borderRadius: 4, padding: "6% 8%", display: "grid", gridTemplateColumns: "8px 1fr auto", alignItems: "center", gap: "6%" }}>
            <div style={{ width: 8, height: 8, borderRadius: 999, background: i === 1 ? acc : dark ? SL.dkAcc : SL.cool }} />
            <div style={{ height: 4, borderRadius: 2, background: text, opacity: 0.7 }} />
            <div style={{ height: 4, borderRadius: 2, background: muted, width: 24, opacity: 0.5 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ComparisonThumb() {
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%" }}>
        <Bar w="32%" bg={SL.cool} mb="4%" />
        <TextLine w="55%" mb="6%" />
        <div style={{ display: "flex", gap: "4%" }}>
          <ComparisonPanel dark={false} />
          <ComparisonPanel dark={true} />
        </div>
      </div>
    </SlideFrame>
  )
}

function ClosingThumb() {
  return (
    <SlideFrame dark>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "10% 12%", textAlign: "center" }}>
        <Bar w="28%" bg={SL.cool} mb="6%" />
        <TextLine w="64%" bg={SL.dkText} h="8px" mb="3%" />
        <TextLine w="52%" bg={SL.dkText} h="8px" mb="3%" />
        <TextLine w="44%" bg={SL.dkAcc}  h="8px" mb="8%" />
        <div style={{ height: 30, borderRadius: 6, background: SL.dkAcc, width: "32%" }} />
      </div>
    </SlideFrame>
  )
}

function AgendaThumb() {
  const items = [
    { w: "58%", active: true },
    { w: "46%", active: false },
    { w: "52%", active: false },
  ]
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%" }}>
        <Bar w="28%" bg={SL.cool} mb="4%" />
        <TextLine w="52%" mb="6%" />
        <div>
          {items.map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "22% 1fr", alignItems: "center", gap: "4%", padding: "3.5% 0", borderTop: `1px solid ${SL.border}`, opacity: item.active ? 1 : 0.45 }}>
              <div style={{ height: 8, borderRadius: 2, background: SL.accent, width: "60%" }} />
              <div style={{ height: 5, borderRadius: 2, background: SL.text, width: item.w }} />
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${SL.border}` }} />
        </div>
      </div>
    </SlideFrame>
  )
}

function SectionThumb() {
  return (
    <SlideFrame>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "10% 12%", textAlign: "center" }}>
        <div style={{ height: 14, borderRadius: 3, background: SL.accent, width: "16%", marginBottom: "6%" }} />
        <TextLine w="68%" h="9px" mb="3%" />
        <TextLine w="54%" h="9px" mb="6%" />
        <Bar w="14%" bg={SL.accent} />
      </div>
    </SlideFrame>
  )
}

function TwoColThumb() {
  const widths = ["80%", "68%", "76%", "60%"]
  return (
    <SlideFrame>
      <div style={{ padding: "8% 10%", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
        <Bar w="28%" bg={SL.cool} mb="4%" />
        <TextLine w="54%" mb="6%" />
        <div style={{ display: "flex", gap: "6%", flex: 1, alignItems: "stretch" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4%" }}>
            {widths.map((w, i) => (
              <div key={i} style={{ height: 4, borderRadius: 2, background: SL.text, width: w, opacity: 0.6 }} />
            ))}
          </div>
          <div style={{ flex: 1, display: "grid", gap: "5%" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ background: SL.surf, border: `1px solid ${SL.border}`, borderRadius: 5, padding: "5% 7%", display: "flex", alignItems: "center", gap: "6%" }}>
                <div style={{ width: 14, height: 14, borderRadius: 3, background: SL.accent, flexShrink: 0 }} />
                <div>
                  <div style={{ height: 4, borderRadius: 2, background: SL.text, width: "80%", marginBottom: 4 }} />
                  <div style={{ height: 3, borderRadius: 2, background: SL.muted, width: "64%", opacity: 0.6 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}

const SLIDES = [
  { name: "Cover",      desc: "Conference title with anchor blocks",       Thumb: TitleThumb },
  { name: "Thesis",     desc: "Why palettes must survive product UI",      Thumb: TwoColThumb },
  { name: "Anchors",    desc: "Plum, clay, mist, and stone roles",          Thumb: AgendaThumb },
  { name: "Modes",      desc: "Light and dark share one component map",     Thumb: ComparisonThumb },
  { name: "Contrast",   desc: "APCA targets across both canvases",          Thumb: MetricsThumb },
  { name: "Handoff",    desc: "Tokens shipped through open-slide",          Thumb: SectionThumb },
  { name: "Closing",    desc: "Plum canvas, CTA, logo lockup",              Thumb: ClosingThumb },
]

export function SlidesShowcase() {
  return (
    <section className="section" id="slides" aria-labelledby="slides-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">07 / Slides</span>
            <h2 id="slides-title">Conference-ready deck, on-brand.</h2>
          </div>
          <p>
            A 13-page open-slide talk built as React pages on a fixed 1920×1080 canvas &mdash;
            warm stone, plum dark mode, semantic tokens, APCA contrast, and speaker notes.
          </p>
        </div>

        <div className="slide-gallery">
          {SLIDES.map(({ name, desc, Thumb }) => (
            <div className="slide-card" key={name}>
              <Thumb />
              <div className="slide-meta">
                <span className="slide-name">{name}</span>
                <small className="slide-desc">{desc}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-handoff">
          <div className="slide-instructions">
            <h3>View the live open-slide deck</h3>
            <ol>
              <li>Open <a href="https://inm.justaslime.dev/slide/s/inm-design-system" target="_blank" rel="noopener noreferrer">inm.justaslime.dev/slide</a> for the hosted presentation.</li>
              <li>Use arrow keys or present mode for conference playback.</li>
              <li>Edit <code>deck/slides/inm-design-system/index.tsx</code> to adjust copy or layout.</li>
              <li>Run <code>npm run build</code> at the repo root (or push to deploy) to publish slide updates.</li>
            </ol>
          </div>
          <Button asChild>
            <a href="https://inm.justaslime.dev/slide/s/inm-design-system" target="_blank" rel="noopener noreferrer">
              Open live deck
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
