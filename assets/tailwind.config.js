/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte,astro,html}"],
  theme: {
    extend: {
      colors: {
        plum: {
          900: "oklch(34.0% 0.023 323.2)",
        },
        clay: {
          500: "oklch(60.0% 0.060 30.0)",
        },
        mist: {
          500: "oklch(69.5% 0.011 164.7)",
        },
        stone: {
          300: "oklch(81.0% 0.017 64.6)",
        },
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        raised: "var(--color-raised)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-soft": "var(--color-accent-soft)",
        cool: "var(--color-cool)",
        "on-accent": "var(--color-on-accent)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      borderRadius: {
        control: "8px",
        inner: "6px",
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        item: "var(--shadow-item)",
      },
    },
  },
  plugins: [],
};
