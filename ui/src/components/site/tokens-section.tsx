const TOKENS = [
  { token: "bg",        role: "Page canvas",                light: "#C9BFB6", dark: "#3E343F" },
  { token: "surface",   role: "Panels and cards",           light: "#DAD2CB", dark: "#493E4A" },
  { token: "raised",    role: "Inputs and secondary fills", light: "#E8E1DB", dark: "#584B59" },
  { token: "text",      role: "Primary text",               light: "#2F2730", dark: "#E8E1DB" },
  { token: "muted",     role: "Secondary text, metadata",   light: "#625B5E", dark: "#B6AFAD" },
  { token: "border",    role: "Dividers and outlines",      light: "#AFA8A3", dark: "#6B6069" },
  { token: "accent",    role: "Buttons and links",          light: "#7E4F49", dark: "#D7A095" },
  { token: "cool",      role: "Support and status",         light: "#79837F", dark: "#AAB4B0" },
  { token: "on-accent", role: "Text on accent",             light: "#E8E1DB", dark: "#3E343F" },
]

export function TokensSection() {
  return (
    <section className="section alt" id="tokens" aria-labelledby="tokens-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="index">02 / Tokens</span>
            <h2 id="tokens-title">Nine roles do all the work.</h2>
          </div>
          <p>
            Components reference roles, not colors. Swatches below are live — they
            reflect the mode you&rsquo;re viewing — while the columns name the exact value in each.
          </p>
        </div>

        <div className="token-table" role="table" aria-label="Semantic tokens">
          <div className="tk-row head" role="row">
            <span role="columnheader" aria-label="Swatch" />
            <span role="columnheader">Token</span>
            <span role="columnheader">Role</span>
            <span role="columnheader">Light</span>
            <span role="columnheader">Dark</span>
          </div>
          {TOKENS.map((t) => (
            <div className="tk-row" role="row" key={t.token}>
              <span
                className="tk-swatch"
                style={{ background: `var(--color-${t.token})` }}
                aria-hidden="true"
              />
              <span className="tk-name">--{t.token}</span>
              <span className="tk-role">{t.role}</span>
              <span className="tk-val">{t.light}</span>
              <span className="tk-val dim">{t.dark}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
