import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import interUrl from './assets/Inter.ttf';

export const design: DesignSystem = {
  palette: {
    bg: '#C9BFB6',
    text: '#2F2730',
    accent: '#7E4F49',
  },
  fonts: {
    display: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  typeScale: {
    hero: 154,
    body: 34,
  },
  radius: 8,
};

const C = {
  plum: '#3E343F',
  clay: '#A1736B',
  mist: '#979F9B',
  stone: '#C9BFB6',
  lightBg: '#C9BFB6',
  lightSurface: '#DAD2CB',
  lightRaised: '#E8E1DB',
  lightText: '#2F2730',
  lightMuted: '#625B5E',
  lightBorder: '#AFA8A3',
  lightAccent: '#7E4F49',
  lightAccentSoft: '#A1736B',
  lightCool: '#79837F',
  lightOnAccent: '#E8E1DB',
  darkBg: '#3E343F',
  darkSurface: '#493E4A',
  darkRaised: '#584B59',
  darkText: '#E8E1DB',
  darkMuted: '#B6AFAD',
  darkBorder: '#6B6069',
  darkAccent: '#D7A095',
  darkAccentSoft: '#C58E82',
  darkCool: '#AAB4B0',
  darkOnAccent: '#3E343F',
};

const mono = '"SF Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace';
const sans = 'var(--osd-font-body)';
const W = 1920;
const H = 1080;
const padX = 132;
const padY = 104;

type Mode = 'light' | 'dark';

type Theme = {
  mode: Mode;
  bg: string;
  surface: string;
  raised: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  accentSoft: string;
  cool: string;
  onAccent: string;
  shadow: string;
};

const light: Theme = {
  mode: 'light',
  bg: C.lightBg,
  surface: C.lightSurface,
  raised: C.lightRaised,
  text: C.lightText,
  muted: C.lightMuted,
  border: C.lightBorder,
  accent: C.lightAccent,
  accentSoft: C.lightAccentSoft,
  cool: C.lightCool,
  onAccent: C.lightOnAccent,
  shadow: '0 24px 70px rgba(47, 39, 48, 0.16)',
};

const dark: Theme = {
  mode: 'dark',
  bg: C.darkBg,
  surface: C.darkSurface,
  raised: C.darkRaised,
  text: C.darkText,
  muted: C.darkMuted,
  border: C.darkBorder,
  accent: C.darkAccent,
  accentSoft: C.darkAccentSoft,
  cool: C.darkCool,
  onAccent: C.darkOnAccent,
  shadow: '0 28px 78px rgba(24, 18, 25, 0.42)',
};

const base = (t: Theme): React.CSSProperties => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: `${padY}px ${padX}px`,
  background: t.bg,
  color: t.text,
  fontFamily: sans,
});

const styles = `
@font-face {
  font-family: Inter;
  src: url(${interUrl}) format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@keyframes inm-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes inm-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes inm-drift { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-10px,0); } }
@keyframes inm-scan { from { transform: translateX(-120%); } to { transform: translateX(120%); } }
@keyframes inm-pulse { 0%, 100% { opacity: .58; transform: scale(1); } 50% { opacity: 1; transform: scale(1.045); } }
* { box-sizing: border-box; }
`;

const Styles = () => <style>{styles}</style>;

const Mark = ({ size = 86 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <g stroke="#5D555E" strokeOpacity="0.18" strokeWidth="1.5">
      <ellipse cx="18.5" cy="19" rx="11.5" ry="10.5" transform="rotate(-12 18.5 19)" fill={C.mist} />
      <ellipse cx="45.5" cy="19" rx="11.5" ry="10.5" transform="rotate(12 45.5 19)" fill={C.stone} />
      <ellipse cx="31.5" cy="46" rx="13" ry="12" fill={C.plum} />
      <circle cx="32" cy="31" r="14" fill={C.clay} />
    </g>
  </svg>
);

const Logo = ({ t, size = 74 }: { t: Theme; size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18, fontWeight: 850, fontSize: 38, letterSpacing: '-0.02em', color: t.text }}>
    <span style={{ width: size, height: size, display: 'grid', placeItems: 'center', background: t.raised, border: `1px solid ${t.border}`, borderRadius: 14 }}><Mark size={size - 16} /></span>
    inm
  </div>
);

const Eyebrow = ({ t, children }: { t: Theme; children: React.ReactNode }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, color: t.muted, fontSize: 23, fontWeight: 780, letterSpacing: '0.015em' }}>
    <span style={{ width: 44, height: 14, borderRadius: 999, background: t.cool }} />
    {children}
  </div>
);

const Footer = ({ t, section }: { t: Theme; section: string }) => (
  <div style={{ position: 'absolute', left: padX, right: padX, bottom: 54, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 18, borderTop: `1px solid ${t.border}`, color: t.muted, fontSize: 20, fontWeight: 720 }}>
    <span>{section}</span>
    <span style={{ fontFamily: mono }}>inm · 2026</span>
  </div>
);

const H1 = ({ children, size = 104, max = 1280 }: { children: React.ReactNode; size?: number; max?: number }) => (
  <h1 style={{ margin: 0, maxWidth: max, fontSize: size, lineHeight: 0.94, letterSpacing: '-0.025em', fontWeight: 900 }}>{children}</h1>
);

const H2 = ({ children, size = 80, max = 1360 }: { children: React.ReactNode; size?: number; max?: number }) => (
  <h2 style={{ margin: 0, maxWidth: max, fontSize: size, lineHeight: 1, letterSpacing: '-0.018em', fontWeight: 860 }}>{children}</h2>
);

const Lead = ({ t, children, max = 960 }: { t: Theme; children: React.ReactNode; max?: number }) => (
  <p style={{ margin: 0, maxWidth: max, color: t.muted, fontSize: 34, lineHeight: 1.45, fontWeight: 470 }}>{children}</p>
);

const BlockField = ({ t, dense = false }: { t: Theme; dense?: boolean }) => (
  <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    <div style={{ position: 'absolute', right: 124, top: dense ? 64 : 112, width: dense ? 360 : 430, height: dense ? 420 : 500, background: C.plum, border: `1px solid ${t.border}`, boxShadow: t.shadow, animation: 'inm-drift 7s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', right: dense ? 342 : 410, bottom: dense ? 128 : 158, width: dense ? 208 : 250, height: dense ? 208 : 250, background: C.clay, border: `1px solid ${t.border}`, boxShadow: t.shadow, animation: 'inm-drift 8s ease-in-out infinite reverse' }} />
    <div style={{ position: 'absolute', right: dense ? 94 : 118, top: dense ? 52 : 82, width: dense ? 246 : 294, height: dense ? 136 : 164, background: C.stone, border: `1px solid ${t.border}`, boxShadow: t.shadow }} />
    <div style={{ position: 'absolute', right: dense ? 516 : 610, top: dense ? 284 : 346, width: dense ? 120 : 142, height: dense ? 120 : 142, background: C.mist, border: `1px solid ${t.border}`, opacity: 0.86 }} />
  </div>
);

const Chip = ({ t, children }: { t: Theme; children: React.ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: 48, padding: '9px 18px', borderRadius: 999, border: `1px solid ${t.border}`, background: t.surface, color: t.muted, fontSize: 20, fontWeight: 760 }}>{children}</span>
);

const Swatch = ({ name, hex, role, color, text = C.lightText, large = false }: { name: string; hex: string; role: string; color: string; text?: string; large?: boolean }) => (
  <div style={{ minHeight: large ? 246 : 190, padding: 24, background: color, color: text, border: '1px solid rgba(47, 39, 48, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ fontSize: 26, fontWeight: 840, letterSpacing: '-0.01em' }}>{name}</div>
    <div>
      <div style={{ fontFamily: mono, fontSize: 20, fontWeight: 760 }}>{hex}</div>
      <div style={{ marginTop: 8, fontSize: 18, lineHeight: 1.35, maxWidth: 280 }}>{role}</div>
    </div>
  </div>
);

const Stat = ({ t, label, value, note }: { t: Theme; label: string; value: string; note: string }) => (
  <div style={{ padding: 30, minHeight: 210, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: t.muted, fontSize: 20, fontWeight: 760 }}><span style={{ width: 14, height: 14, borderRadius: 999, background: t.accent }} />{label}</div>
    <div style={{ marginTop: 24, color: t.text, fontSize: 72, fontWeight: 890, letterSpacing: '-0.035em', fontFamily: mono }}>{value}</div>
    <div style={{ marginTop: 8, color: t.muted, fontSize: 20, lineHeight: 1.35 }}>{note}</div>
  </div>
);

const Row = ({ t, n, title, body, active = false }: { t: Theme; n: string; title: string; body: string; active?: boolean }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: 28, padding: '26px 30px', background: active ? t.raised : t.surface, border: `1px solid ${active ? t.accentSoft : t.border}`, borderRadius: 10 }}>
    <div style={{ fontFamily: mono, fontSize: 28, color: active ? t.accent : t.muted, fontWeight: 780 }}>{n}</div>
    <div><div style={{ fontSize: 31, fontWeight: 820, letterSpacing: '-0.012em' }}>{title}</div><div style={{ marginTop: 8, color: t.muted, fontSize: 22, lineHeight: 1.38 }}>{body}</div></div>
  </div>
);

const ProductMock = ({ t }: { t: Theme }) => {
  const rows = [
    ['Editorial workspace', 'Active', t.accent],
    ['Portfolio index', 'Review', t.cool],
    ['Dashboard controls', 'Ready', t.accentSoft],
    ['Status stream', 'Synced', t.cool],
  ];
  return (
    <div style={{ width: 680, padding: 20, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, boxShadow: t.shadow }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 10px 22px' }}>
        <div style={{ display: 'flex', gap: 8 }}><span style={{ width: 12, height: 12, borderRadius: 999, background: t.accent }} /><span style={{ width: 12, height: 12, borderRadius: 999, background: t.cool }} /><span style={{ width: 12, height: 12, borderRadius: 999, background: t.border }} /></div>
        <div style={{ fontFamily: mono, color: t.muted, fontSize: 16 }}>{t.mode} mode</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16 }}>
        <div style={{ padding: 18, background: t.raised, border: `1px solid ${t.border}`, borderRadius: 8 }}>
          {['Inbox', 'Review', 'Tokens', 'Settings'].map((item, i) => <div key={item} style={{ padding: '12px 10px', marginBottom: 6, borderRadius: 7, color: i === 2 ? t.onAccent : t.muted, background: i === 2 ? t.accent : 'transparent', fontSize: 18, fontWeight: 750 }}>{item}</div>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {rows.map(([name, status, color]) => <div key={name} style={{ display: 'grid', gridTemplateColumns: '18px 1fr auto', gap: 14, alignItems: 'center', padding: '17px 18px', background: t.raised, border: `1px solid ${t.border}`, borderRadius: 8 }}><span style={{ width: 12, height: 12, borderRadius: 999, background: color }} /><span style={{ fontSize: 18, color: t.text, fontWeight: 720 }}>{name}</span><span style={{ padding: '5px 10px', borderRadius: 999, background: t.surface, border: `1px solid ${t.border}`, color: t.muted, fontSize: 14, fontWeight: 800 }}>{status}</span></div>)}
          <button style={{ marginTop: 8, minHeight: 48, border: 0, borderRadius: 8, background: t.accent, color: t.onAccent, fontSize: 18, fontWeight: 820 }}>Apply palette</button>
        </div>
      </div>
    </div>
  );
};

const Cover: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><BlockField t={t} /><div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}><Logo t={t} /><div style={{ flex: 1 }} /><Eyebrow t={t}>OKLCH palette for quiet interfaces</Eyebrow><div style={{ height: 28 }} /><H1 size={132} max={980}>Warm stone, soft clay, deep plum.</H1><div style={{ height: 34 }} /><Lead t={t} max={950}>A low-chroma color system for editorial tools, dashboards, and calm creative product UI.</Lead><div style={{ flex: 1 }} /><div style={{ display: 'flex', gap: 12 }}><Chip t={t}>conference deck</Chip><Chip t={t}>1920 × 1080</Chip><Chip t={t}>open-slide</Chip></div></div><Footer t={t} section="design system overview" /></div>;
};

const Thesis: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><div style={{ display: 'grid', gridTemplateColumns: '1fr 560px', gap: 96, height: '100%', alignItems: 'center', paddingBottom: 80 }}><div><Eyebrow t={t}>The problem</Eyebrow><div style={{ height: 30 }} /><H2 size={92}>Most palettes are pretty before they are useful.</H2><div style={{ height: 36 }} /><Lead t={t} max={1060}>Interfaces need repeated surfaces, readable secondary text, quiet state, and a single obvious action color. inm starts with those jobs, not with decoration.</Lead></div><div style={{ display: 'grid', gap: 18 }}><Row t={t} n="01" title="No pure white" body="Warm stone keeps the page soft without going muddy." active /><Row t={t} n="02" title="No pure black" body="Plum gives dark mode structure without glare." /><Row t={t} n="03" title="One signal" body="Clay carries actions, links, and active state." /></div></div><Footer t={t} section="thesis" /></div>;
};

const Anchors: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>Foundation</Eyebrow><div style={{ height: 28 }} /><H2 size={88}>Four anchors, tuned into UI roles.</H2><div style={{ height: 52 }} /><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}><Swatch name="Plum black" hex="#3E343F" role="Dark canvas and structural color." color={C.plum} text={C.darkText} large /><Swatch name="Clay rose" hex="#A1736B" role="Brand accent family." color={C.clay} text={C.darkOnAccent} large /><Swatch name="Mist gray" hex="#979F9B" role="Cool support and quiet status." color={C.mist} text={C.lightText} large /><Swatch name="Warm stone" hex="#C9BFB6" role="Light canvas and neutral foundation." color={C.stone} text={C.lightText} large /></div><div style={{ marginTop: 54, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 44, alignItems: 'start' }}><Lead t={t} max={980}>The anchors are intentionally low-chroma. The token system adds the contrast, hierarchy, and state needed for actual product screens.</Lead><div style={{ padding: 26, border: `1px solid ${t.border}`, background: t.surface, borderRadius: 10, color: t.muted, fontSize: 24, lineHeight: 1.42 }}><strong style={{ color: t.text }}>Rule:</strong> anchors are emotional foundations; semantic tokens are what product code uses.</div></div><Footer t={t} section="anchors" /></div>;
};

const LightTokens: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>Light mode</Eyebrow><div style={{ height: 24 }} /><H2 size={82}>Warm stone is the canvas; clay is the signal.</H2><div style={{ height: 42 }} /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 16 }}><Swatch name="Background" hex="#C9BFB6" role="page canvas" color={C.lightBg} /><Swatch name="Surface" hex="#DAD2CB" role="panels and controls" color={C.lightSurface} /><Swatch name="Raised" hex="#E8E1DB" role="higher emphasis" color={C.lightRaised} /><Swatch name="Text" hex="#2F2730" role="body text · Lc 65" color={C.lightText} text={C.darkText} /><Swatch name="Accent" hex="#7E4F49" role="actions · Lc 47" color={C.lightAccent} text={C.darkText} /></div><div style={{ height: 34 }} /><div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 44, alignItems: 'center' }}><ProductMock t={t} /><div><Lead t={t} max={720}>Light mode avoids contrast theater. Borders and surface tone do most of the hierarchy work; the action color stays available for intent.</Lead><div style={{ height: 28 }} /><div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}><Chip t={t}>body Lc ~65</Chip><Chip t={t}>muted Lc ~47</Chip><Chip t={t}>accent Lc ~47</Chip></div></div></div><Footer t={t} section="light tokens" /></div>;
};

const DarkTokens: Page = () => {
  const t = dark;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>Dark mode</Eyebrow><div style={{ height: 24 }} /><H2 size={82}>Plum black is not black. That is the point.</H2><div style={{ height: 42 }} /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 16 }}><Swatch name="Background" hex="#3E343F" role="page canvas" color={C.darkBg} text={C.darkText} /><Swatch name="Surface" hex="#493E4A" role="panels and controls" color={C.darkSurface} text={C.darkText} /><Swatch name="Raised" hex="#584B59" role="higher emphasis" color={C.darkRaised} text={C.darkText} /><Swatch name="Text" hex="#E8E1DB" role="body text · Lc -82" color={C.darkText} text={C.lightText} /><Swatch name="Accent" hex="#D7A095" role="actions · Lc -51" color={C.darkAccent} text={C.lightText} /></div><div style={{ height: 34 }} /><div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 44, alignItems: 'center' }}><ProductMock t={t} /><div><Lead t={t} max={720}>Dark mode keeps the same semantics as light mode. The emotional temperature changes; the component contract does not.</Lead><div style={{ height: 28 }} /><div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}><Chip t={t}>body Lc ~-82</Chip><Chip t={t}>muted Lc ~-53</Chip><Chip t={t}>accent Lc ~-51</Chip></div></div></div><Footer t={t} section="dark tokens" /></div>;
};

const Oklch: Page = () => {
  const t = light;
  const lines = ['--color-bg: oklch(81.0% 0.017 64.6);', '--color-text: oklch(28.5% 0.020 322.5);', '--color-accent: oklch(47.9% 0.065 27.6);', '--color-border: oklch(73.6% 0.011 58.2);'];
  return <div style={base(t)}><Styles /><div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 84, height: '100%', alignItems: 'center', paddingBottom: 80 }}><div><Eyebrow t={t}>Color math</Eyebrow><div style={{ height: 28 }} /><H2 size={88}>OKLCH makes tuning less random.</H2><div style={{ height: 36 }} /><Lead t={t}>Lightness, chroma, and hue move independently. That matters when you need a whole product system, not four isolated swatches.</Lead></div><div style={{ border: `1px solid ${t.border}`, background: t.surface, borderRadius: 12, overflow: 'hidden', boxShadow: t.shadow }}><div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '22px 26px', borderBottom: `1px solid ${t.border}` }}><span style={{ width: 12, height: 12, borderRadius: 999, background: C.clay }} /><span style={{ width: 12, height: 12, borderRadius: 999, background: C.mist }} /><span style={{ width: 12, height: 12, borderRadius: 999, background: t.border }} /><span style={{ marginLeft: 14, fontFamily: mono, color: t.muted, fontSize: 18 }}>tokens.css</span></div><div style={{ padding: 34, fontFamily: mono, fontSize: 29, lineHeight: 1.85 }}>{lines.map((line, i) => <div key={line} style={{ color: i === 0 ? t.accent : i === 2 ? t.accentSoft : t.text }}><span style={{ color: t.muted, marginRight: 24 }}>{String(i + 1).padStart(2, '0')}</span>{line}</div>)}</div></div></div><Footer t={t} section="oklch" /></div>;
};

const Contrast: Page = () => {
  const t = dark;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>Readability</Eyebrow><div style={{ height: 24 }} /><H2 size={84}>APCA targets turn “looks fine” into a constraint.</H2><div style={{ height: 46 }} /><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}><Stat t={t} label="Body · light" value="65" note="APCA Lc on warm stone" /><Stat t={t} label="Accent · light" value="47" note="Action labels on canvas" /><Stat t={t} label="Body · dark" value="-82" note="Primary text on plum" /><Stat t={t} label="Muted · dark" value="-53" note="Secondary copy remains readable" /></div><div style={{ marginTop: 58, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}><Row t={t} n="60" title="Normal body" body="Use 60+ or -60 where reading is the task." active /><Row t={t} n="45" title="Secondary labels" body="Metadata and controls can sit lower." /><Row t={t} n="30" title="Display only" body="Large, non-critical labels can be softer." /></div><Footer t={t} section="contrast" /></div>;
};

const SameRoles: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>System behavior</Eyebrow><div style={{ height: 24 }} /><H2 size={82}>Two moods. One component contract.</H2><div style={{ height: 54 }} /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'start' }}><ProductMock t={light} /><ProductMock t={dark} /></div><div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}><Row t={t} n="bg" title="Canvas" body="Stone in light, plum in dark." active /><Row t={t} n="ui" title="Surfaces" body="Panels step up through tone, not heavy shadow." /><Row t={t} n="act" title="Action" body="Clay remains the one active signal." /></div><Footer t={t} section="light and dark" /></div>;
};

const Typography: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 78, height: '100%', alignItems: 'center', paddingBottom: 80 }}><div><Eyebrow t={t}>Typography</Eyebrow><div style={{ height: 28 }} /><H2 size={86}>Inter stays out of the way.</H2><div style={{ height: 34 }} /><Lead t={t}>The type system is intentionally narrow: big confident display, dense readable body, compact uppercase labels only where they help scanning.</Lead></div><div style={{ display: 'grid', gap: 18 }}><div style={{ padding: 30, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}><div style={{ fontSize: 96, lineHeight: .9, fontWeight: 900, letterSpacing: '-0.025em' }}>Display</div><div style={{ marginTop: 12, color: t.muted, fontFamily: mono, fontSize: 18 }}>64–118px · 800–900 · tight line-height</div></div><div style={{ padding: 30, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}><div style={{ fontSize: 48, lineHeight: 1.05, fontWeight: 820 }}>Heading for product context</div><div style={{ marginTop: 12, color: t.muted, fontFamily: mono, fontSize: 18 }}>28–72px · 760–820</div></div><div style={{ padding: 30, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}><div style={{ fontSize: 27, lineHeight: 1.55, fontWeight: 470, color: t.muted }}>Body copy keeps long screens calm and readable without fighting the interface chrome.</div><div style={{ marginTop: 12, color: t.muted, fontFamily: mono, fontSize: 18 }}>16–18px in product · scaled for stage here</div></div></div></div><Footer t={t} section="type" /></div>;
};

const Components: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>Components</Eyebrow><div style={{ height: 24 }} /><H2 size={84}>Calm density is a component decision.</H2><div style={{ height: 48 }} /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}><div style={{ padding: 34, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}><button style={{ minHeight: 58, padding: '0 26px', borderRadius: 8, border: 0, background: t.accent, color: t.onAccent, fontSize: 22, fontWeight: 840 }}>Primary action</button><button style={{ marginLeft: 14, minHeight: 58, padding: '0 26px', borderRadius: 8, border: `1px solid ${t.border}`, background: t.raised, color: t.text, fontSize: 22, fontWeight: 780 }}>Secondary</button><h3 style={{ margin: '34px 0 10px', fontSize: 30 }}>Buttons</h3><p style={{ margin: 0, color: t.muted, fontSize: 22, lineHeight: 1.4 }}>Clay for action. Surface for everything else.</p></div><div style={{ padding: 34, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}><div style={{ display: 'grid', gap: 10 }}>{['Design spec', 'Token audit', 'Contrast pass'].map((item, i) => <div key={item} style={{ padding: 16, background: i === 0 ? t.raised : t.surface, border: `1px solid ${i === 0 ? t.accentSoft : t.border}`, borderRadius: 8, fontSize: 20, fontWeight: 730 }}>{item}</div>)}</div><h3 style={{ margin: '30px 0 10px', fontSize: 30 }}>Rows</h3><p style={{ margin: 0, color: t.muted, fontSize: 22, lineHeight: 1.4 }}>Repeated surfaces stay flat and scannable.</p></div><div style={{ padding: 34, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 10 }}><div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}><Chip t={t}>Ready</Chip><Chip t={t}>Review</Chip><Chip t={t}>Synced</Chip></div><h3 style={{ margin: '86px 0 10px', fontSize: 30 }}>Badges</h3><p style={{ margin: 0, color: t.muted, fontSize: 22, lineHeight: 1.4 }}>Mist is support, not a second accent.</p></div></div><div style={{ marginTop: 46 }}><Lead t={t} max={1260}>Avoid nested-card spectacle. Use cards for repeated items, metrics, modals, or genuinely framed tools.</Lead></div><Footer t={t} section="components" /></div>;
};

const Handoff: Page = () => {
  const t = dark;
  const code = ['@import "./tailwind-theme.css";', '', '<main className="bg-bg text-text font-sans">', '  <section className="bg-surface border-border">', '    <button className="bg-accent text-on-accent">', '      Apply palette', '    </button>', '  </section>', '</main>'];
  return <div style={base(t)}><Styles /><div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 70, height: '100%', alignItems: 'center', paddingBottom: 80 }}><div><Eyebrow t={t}>Handoff</Eyebrow><div style={{ height: 28 }} /><H2 size={88}>Design intent ships as tokens.</H2><div style={{ height: 36 }} /><Lead t={t}>The repo includes Tailwind v4 theme CSS, a Tailwind v3 config extension, framework-free CSS variables, and a portable DESIGN.md.</Lead><div style={{ height: 34 }} /><div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}><Chip t={t}>tailwind-theme.css</Chip><Chip t={t}>tailwind.config.js</Chip><Chip t={t}>DESIGN.md</Chip></div></div><div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, overflow: 'hidden', boxShadow: t.shadow }}><div style={{ padding: '22px 26px', borderBottom: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between' }}><span style={{ fontFamily: mono, color: t.muted, fontSize: 18 }}>usage.tsx</span><span style={{ color: t.accent, fontSize: 18, fontWeight: 800 }}>semantic classes</span></div><div style={{ padding: 34, fontFamily: mono, fontSize: 25, lineHeight: 1.7 }}>{code.map((line, i) => <div key={`${line}-${i}`} style={{ color: line.includes('bg-accent') ? t.accent : line.includes('className') ? t.text : t.muted }}>{line || '\u00A0'}</div>)}</div></div></div><Footer t={t} section="handoff" /></div>;
};

const Adoption: Page = () => {
  const t = light;
  return <div style={base(t)}><Styles /><Eyebrow t={t}>Adoption</Eyebrow><div style={{ height: 24 }} /><H2 size={84}>A palette rollout should be boring.</H2><div style={{ height: 48 }} /><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}><Row t={t} n="W1" title="Adopt tokens" body="Drop in CSS variables and wire both roots." active /><Row t={t} n="W2" title="Build components" body="Buttons, rows, inputs, badges on shared roles." /><Row t={t} n="W3" title="Tune contrast" body="Check APCA across real surfaces." /><Row t={t} n="W4" title="Ship handoff" body="Export Tailwind config and keep DESIGN.md current." /></div><div style={{ position: 'relative', marginTop: 74, height: 160, borderTop: `2px solid ${t.border}` }}>{[0, 1, 2, 3].map((i) => <div key={i} style={{ position: 'absolute', left: `${i * 31.5}%`, top: -13, width: 26, height: 26, borderRadius: 999, background: i === 0 ? t.accent : t.surface, border: `2px solid ${i === 0 ? t.accent : t.border}` }} />)}<div style={{ position: 'absolute', left: 0, top: 36, maxWidth: 960 }}><Lead t={t}>The goal is not a dramatic redesign. The goal is replacing accidental color with durable semantic roles.</Lead></div></div><Footer t={t} section="rollout" /></div>;
};

const Closing: Page = () => {
  const t = dark;
  return <div style={base(t)}><Styles /><BlockField t={t} dense /><div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1220 }}><Logo t={t} /><div style={{ height: 54 }} /><H1 size={126} max={1180}>Calm, scannable, warm.</H1><div style={{ height: 34 }} /><Lead t={t} max={920}>Semantic OKLCH tokens, light and dark modes, and a portable handoff for product UI.</Lead><div style={{ height: 54 }} /><span style={{ display: 'inline-flex', width: 'fit-content', alignItems: 'center', minHeight: 58, padding: '0 24px', borderRadius: 999, background: t.accent, color: t.onAccent, fontSize: 22, fontWeight: 850, fontFamily: mono }}>github.com/iceice666/inm</span></div><Footer t={t} section="closing" /></div>;
};

export const meta: SlideMeta = {
  title: 'inm design system',
  createdAt: '2026-06-19T00:00:00.000Z',
};

export const notes = [
  'Open by framing inm as a practical palette: quiet UI, warm surfaces, and a system that survives product implementation.',
  'Name the failure mode: many palettes work in a Dribbble frame but fail in tables, settings, and review queues.',
  'Explain that the anchors are not the API. The semantic token layer is the API.',
  'Use the product mock to show why light mode needs surface steps and restrained action color.',
  'Stress parity: dark mode changes emotional temperature, not component semantics.',
  'Keep OKLCH concise. The audience only needs the tuning model: lightness, chroma, hue move separately.',
  'Use APCA figures as proof that the palette is constrained by readability, not taste alone.',
  'Point at the two mocks and show that components do not need per-mode special casing.',
  'Typography slide: Inter is intentionally boring. It lets color and spacing carry the brand.',
  'Component slide: density is a feature. The palette is designed for repeated rows and panels.',
  'Handoff slide: the deliverable is installable tokens, not screenshots.',
  'Adoption slide: the rollout is deliberately incremental and safe.',
  'Closing: return to the three-word brand promise and the repo link.',
] satisfies string[];

export default [Cover, Thesis, Anchors, LightTokens, DarkTokens, Oklch, Contrast, SameRoles, Typography, Components, Handoff, Adoption, Closing] satisfies Page[];
