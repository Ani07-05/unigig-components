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

        // theme 3 (dispatch ledger) - warm near-black workshop paper,
        // oxblood primary, brass accent. no purple, no cool grays.
        // NOTE: prefixed "dl-" not "l-" - Tailwind reads border-l-<color> as
        // the directional (left-side) border utility, so a plain "l-line"
        // key collided with theme 1's "line" color and silently resolved to
        // the wrong (light cream) value on every bordered component.
        "dl-bg": "var(--l-bg)",
        "dl-bg-2": "var(--l-bg-2)",
        "dl-surface": "var(--l-surface)",
        "dl-ink": "var(--l-ink)",
        "dl-ink-soft": "var(--l-ink-soft)",
        "dl-line": "var(--l-line)",
        "dl-primary": "var(--l-primary)",
        "dl-primary-dark": "var(--l-primary-dark)",
        "dl-primary-soft": "var(--l-primary-soft)",
        "dl-accent": "var(--l-accent)",
        "dl-accent-soft": "var(--l-accent-soft)",
      },
      fontFamily: {
        display: ["var(--font-cabinet)", "sans-serif"],
        sans: ["var(--font-general)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],

        corp: ["var(--font-plex-sans)", "ui-sans-serif", "sans-serif"],
        "corp-mono": ["var(--font-plex-mono)", "ui-monospace", "monospace"],

        ledger: ["var(--font-instrument-serif)", "serif"],
        "ledger-mono": ["var(--font-space-mono)", "ui-monospace", "monospace"],
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

        // theme 3 - deep warm-black elevation, like a stack of paper
        // docket sheets lifted off a workbench. no cool-toned blur.
        "dl-sm": "0 1px 0 0 rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.35)",
        dl: "0 1px 0 0 rgba(0, 0, 0, 0.4), 0 14px 32px -12px rgba(0, 0, 0, 0.65)",
      },
    },
  },
  plugins: [],
};

export default config;
