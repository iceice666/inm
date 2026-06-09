// inm showcase — Usage section (code panel + handoff file list) and Footer
function Usage() {
  const [copied, setCopied] = React.useState(false);
  const importLine = '@import "./assets/tailwind-theme.css";';
  const copy = async () => {
    try { await navigator.clipboard.writeText(importLine); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <section className="section" id="usage" aria-labelledby="usage-title">
      <div className="section-inner">
        <div className="section-heading">
          <h2 id="usage-title">Drop the tokens into Tailwind.</h2>
          <p>
            Use semantic classes in product code and let the palette files handle
            the exact OKLCH values, mode overrides, radius, font, and shadows.
          </p>
        </div>
        <div className="usage-grid">
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
            <pre><code>{`@import "./assets/tailwind-theme.css";

<main class="bg-bg text-text font-sans">
  <section class="bg-surface border border-border rounded-control">
    <button class="bg-accent text-on-accent rounded-control">
      Apply Palette
    </button>
  </section>
</main>`}</code></pre>
          </div>
          <aside className="copy-panel">
            <div>
              <h3>Built for portable handoff.</h3>
              <p>
                The package includes human-readable guidance, Tailwind v4 tokens,
                and a Tailwind v3 config for implementation handoff.
              </p>
            </div>
            <ul className="file-list">
              <li><a href="#usage"><span>DESIGN.md</span><span>spec</span></a></li>
              <li><a href="#usage"><span>tailwind-theme.css</span><span>v4</span></a></li>
              <li><a href="#usage"><span>tailwind.config.js</span><span>v3</span></a></li>
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
        <span>inm palette</span>
        <span>OKLCH tokens for calm, scannable UI.</span>
      </div>
    </footer>
  );
}

window.Usage = Usage;
window.Footer = Footer;
