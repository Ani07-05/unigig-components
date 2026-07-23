import type { Config } from "tailwindcss";

// Every color here reads from a CSS variable defined in app/globals.css.
// Change the variable, not this file, when you need to retheme.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        "cream-2": "var(--cream-2)",
        card: "var(--card)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        line: "var(--line)",
        blue: "var(--blue)",
        mustard: "var(--mustard)",
        green: "var(--green)",
        coral: "var(--coral)",

        // theme 2 (corporate) - cool neutrals + one primary + CMYK accents
        "c-bg": "var(--c-bg)",
        "c-bg-2": "var(--c-bg-2)",
        "c-surface": "var(--c-surface)",
        "c-ink": "var(--c-ink)",
        "c-ink-soft": "var(--c-ink-soft)",
        "c-line": "var(--c-line)",
        "c-primary": "var(--c-primary)",
        "c-primary-dark": "var(--c-primary-dark)",
        "c-primary-soft": "var(--c-primary-soft)",
        "c-cyan": "var(--c-cyan)",
        "c-cyan-soft": "var(--c-cyan-soft)",
        "c-magenta": "var(--c-magenta)",
        "c-magenta-soft": "var(--c-magenta-soft)",
        "c-yellow": "var(--c-yellow)",
        "c-yellow-soft": "var(--c-yellow-soft)",
      },
      fontFamily: {
        display: ["var(--font-cabinet)", "sans-serif"],
        sans: ["var(--font-general)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],

        corp: ["var(--font-plex-sans)", "ui-sans-serif", "sans-serif"],
        "corp-mono": ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        // the flat, offset "sticky-note" shadow used on floating cards -
        // deliberately not a blurred box-shadow
        flat: "5px 5px 0 var(--ink)",

        // theme 2 - subtle, cool elevation. no blur-free offset shadows,
        // no playfulness - just quiet depth.
        "c-sm": "0 1px 2px 0 rgba(16, 21, 31, 0.06)",
        c: "0 1px 2px 0 rgba(16, 21, 31, 0.05), 0 12px 24px -12px rgba(16, 21, 31, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
