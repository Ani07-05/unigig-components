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
      },
      fontFamily: {
        display: ["var(--font-cabinet)", "sans-serif"],
        sans: ["var(--font-general)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        // the flat, offset "sticky-note" shadow used on floating cards -
        // deliberately not a blurred box-shadow
        flat: "5px 5px 0 var(--ink)",
      },
    },
  },
  plugins: [],
};

export default config;
