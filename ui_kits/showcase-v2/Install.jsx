// inm showcase v2 — Install (Tailwind code + handoff files) and Footer
function Install() {
  const [copied, setCopied] = React.useState(false);
  const importLine = '@import "./assets/tailwind-theme.css";';
  const copy = async () => {
    try { await navigator.clipboard.writeText(importLine); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
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
              <button className="copy-button" type="button" onClick={copy}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {copied ? "Copied" : "Copy import"}
              </button>
            </div>
            <pre><code><span className="tok-d">@import</span> <span className="tok-c">"./assets/tailwind-theme.css"</span>;{"\n\n"}&lt;<span className="tok-c">main</span> class=<span className="tok-c">"bg-bg text-text font-sans"</span>&gt;{"\n"}  &lt;<span className="tok-c">section</span> class=<span className="tok-c">"bg-surface border border-border rounded-control"</span>&gt;{"\n"}    &lt;<span className="tok-c">button</span> class=<span className="tok-c">"bg-accent text-on-accent rounded-control"</span>&gt;{"\n"}      Apply palette{"\n"}    &lt;/<span className="tok-c">button</span>&gt;{"\n"}  &lt;/<span className="tok-c">section</span>&gt;{"\n"}&lt;/<span className="tok-c">main</span>&gt;</code></pre>
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
              <li><a href="#install"><span>DESIGN.md</span><span>spec</span></a></li>
              <li><a href="#install"><span>tailwind-theme.css</span><span>v4</span></a></li>
              <li><a href="#install"><span>tailwind.config.js</span><span>v3</span></a></li>
              <li><a href="#install"><span>icon.svg</span><span>logo</span></a></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
  );
}

window.Install = Install;
window.Footer = Footer;
