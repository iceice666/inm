import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BrandMark } from "./brand-mark"

const IMPORT_LINE = '@import "./assets/tailwind-theme.css";'

const REPO = "https://github.com/iceice666/inm"

const FILES = [
  { name: "DESIGN.md",            tag: "spec",  href: `${REPO}/blob/main/DESIGN.md` },
  { name: "tailwind-theme.css",   tag: "v4",    href: `${REPO}/blob/main/assets/tailwind-theme.css` },
  { name: "tailwind.config.js",   tag: "v3",    href: `${REPO}/blob/main/assets/tailwind.config.js` },
  { name: "icon.svg",             tag: "logo",  href: `${REPO}/blob/main/assets/icon.svg` },
]

export function Install() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try { await navigator.clipboard.writeText(IMPORT_LINE) } catch { /* noop */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <section className="section" id="install" aria-labelledby="install-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">05 / Install</span>
            <h2 id="install-title">Drop the tokens into Tailwind.</h2>
          </div>
          <p>
            Import the theme file, then use semantic classes in product code. The
            palette files own the exact OKLCH values, mode overrides, radius, font, and shadows.
          </p>
        </div>

        <div className="install-grid">
          <div className="code-panel">
            <div className="code-toolbar">
              <span>Tailwind CSS v4</span>
              <Button size="sm" onClick={copy}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 15, height: 15 }}>
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {copied ? "Copied" : "Copy import"}
              </Button>
            </div>
            <pre>
              <code>
                <span className="tok-d">@import</span>{" "}
                <span className="tok-c">&quot;./assets/tailwind-theme.css&quot;</span>;{"\n\n"}
                &lt;<span className="tok-c">main</span> class=<span className="tok-c">&quot;bg-bg text-text font-sans&quot;</span>&gt;{"\n"}
                {"  "}&lt;<span className="tok-c">section</span> class=<span className="tok-c">&quot;bg-surface border border-border rounded-control&quot;</span>&gt;{"\n"}
                {"    "}&lt;<span className="tok-c">button</span> class=<span className="tok-c">&quot;bg-accent text-on-accent rounded-control&quot;</span>&gt;{"\n"}
                {"      "}Apply palette{"\n"}
                {"    "}&lt;/<span className="tok-c">button</span>&gt;{"\n"}
                {"  "}&lt;/<span className="tok-c">section</span>&gt;{"\n"}
                &lt;/<span className="tok-c">main</span>&gt;
              </code>
            </pre>
          </div>

          <aside className="handoff">
            <div>
              <h3>Built for portable handoff.</h3>
              <p>
                The package ships human-readable guidance, Tailwind v4 tokens, and a
                v3-compatible config — no Figma file required.
              </p>
            </div>
            <ul className="file-list">
              {FILES.map((f) => (
                <li key={f.name}>
                  <a href={f.href} target="_blank" rel="noopener noreferrer">
                    <span>{f.name}</span>
                    <span>{f.tag}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">
          <BrandMark size={24} />
          inm palette
        </span>
        <span>OKLCH tokens for calm, scannable UI.</span>
      </div>
    </footer>
  )
}
