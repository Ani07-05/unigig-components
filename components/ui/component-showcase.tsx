"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function ComponentShowcase({
  children,
  code,
}: {
  children: React.ReactNode;
  code: React.ReactNode;
}) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview");

  return (
    <div className="overflow-hidden rounded-2xl border-[1.5px] border-ink">
      {/* tab bar */}
      <div className="flex items-center border-b border-ink bg-card px-4">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "relative py-3 pr-5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors",
              tab === t ? "text-ink" : "text-ink-soft hover:text-ink"
            )}
          >
            {t}
            {tab === t && (
              <span className="absolute bottom-0 left-0 right-4 h-[2px] rounded-full bg-ink" />
            )}
          </button>
        ))}
      </div>

      {/* preview pane */}
      <div className={cn(tab !== "preview" && "hidden")}>
        <div className="flex min-h-[200px] flex-wrap items-center justify-center gap-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(0,0,0,0.015)_12px,rgba(0,0,0,0.015)_24px)] bg-cream px-10 py-12">
          {children}
        </div>
      </div>

      {/* code pane */}
      <div className={cn(tab !== "code" && "hidden")}>{code}</div>
    </div>
  );
}
