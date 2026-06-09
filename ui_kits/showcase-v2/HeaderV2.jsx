// inm showcase v2 — Header: brand lockup, nav, theme toggle
function HeaderV2({ theme, onToggle }) {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="inm home">
          <BrandMark size={36} />
          <span>inm</span>
          <small>v1.0</small>
        </a>
        <div className="nav-links" aria-label="Sections">
          <a className="nav-link" href="#anchors">Anchors</a>
          <a className="nav-link" href="#tokens">Tokens</a>
          <a className="nav-link" href="#modes">Modes</a>
          <a className="nav-link" href="#principles">Principles</a>
          <a className="nav-link" href="#install">Install</a>
          <a className="nav-link" href="#kit">UI Kit</a>
          <a className="nav-link" href="#slides">Slides</a>
        </div>
        <div className="nav-tail">
          <a className="button secondary" href="#install" style={{ minHeight: "42px" }}>Get the tokens</a>
          <button className="icon-button" type="button" title="Toggle color mode" aria-label="Toggle color mode" onClick={onToggle}>
            <svg className="icon sun-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg className="icon moon-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.99 12.43A8.5 8.5 0 1 1 11.57 3a6.5 6.5 0 0 0 9.42 9.43Z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

window.HeaderV2 = HeaderV2;
