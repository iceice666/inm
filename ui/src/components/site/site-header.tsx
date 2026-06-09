import { Sun, Moon } from "lucide-react"
import { BrandMark } from "./brand-mark"

interface SiteHeaderProps {
  dark: boolean
  onToggle: () => void
}

export function SiteHeader({ dark, onToggle }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="inm home">
          <BrandMark size={36} />
          <span>inm</span>
          <small>v1.0</small>
        </a>

        <div className="nav-links" aria-label="Sections">
          {["#anchors", "#tokens", "#modes", "#principles", "#install", "#kit", "#slides"].map(
            (href) => (
              <a key={href} className="nav-link" href={href}>
                {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
              </a>
            )
          )}
        </div>

        <div className="nav-tail">
          <a className="nav-link" href="https://github.com/iceice666/inm" target="_blank" rel="noopener noreferrer" style={{ minHeight: 42, border: "1px solid var(--color-border)", borderRadius: 8, background: "var(--color-surface)" }}>
            Get the tokens
          </a>
          <button
            className="icon-button"
            type="button"
            title="Toggle color mode"
            aria-label="Toggle color mode"
            onClick={onToggle}
          >
            {dark ? (
              <Sun className="icon" aria-hidden="true" />
            ) : (
              <Moon className="icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
