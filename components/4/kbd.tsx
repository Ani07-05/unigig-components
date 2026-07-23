import * as React from "react";
export function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className="inline-block border-2 border-black bg-[#ffe500] px-2 py-0.5 font-mono text-[11px] font-black shadow-[2px_2px_0_#000]">{children}</kbd>;
}
