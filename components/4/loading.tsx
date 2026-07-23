import * as React from "react";
export function Loading({ variant = "spinner" }: { variant?: "spinner" | "ring" | "dots" }) {
  if (variant === "dots") return <div className="flex gap-1">{[0,1,2].map(i => <span key={i} className="h-3 w-3 animate-bounce border-2 border-black bg-[#ffe500]" style={{ animationDelay: `${i * 0.15}s` }} />)}</div>;
  if (variant === "ring") return <div className="h-8 w-8 animate-spin border-4 border-black border-t-[#ffe500]" />;
  return <div className="h-8 w-8 animate-spin border-4 border-black border-t-transparent" />;
}
