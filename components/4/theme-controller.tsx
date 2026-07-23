"use client";
import * as React from "react";

const THEMES = [
  { key: "cream", label: "Cream", bg: "#f6f1e3" },
  { key: "neo", label: "Neo", bg: "#ffe500" },
  { key: "pink", label: "Pink", bg: "#ff2d78" },
];

export function ThemeController() {
  const [active, setActive] = React.useState("neo");
  return (
    <div className="flex items-center gap-2">
      {THEMES.map((t) => (
        <button key={t.key} onClick={() => setActive(t.key)}
          className={`flex items-center gap-2 border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all ${active === t.key ? "bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]" : "bg-white shadow-[3px_3px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]"}`}>
          <span className="h-3 w-3 rounded-full border border-black/30" style={{ background: t.bg }} />
          {t.label}
        </button>
      ))}
    </div>
  );
}
