import * as React from "react";
import { cn } from "@/lib/utils";
export function Menu({ children }: { children: React.ReactNode }) { return <ul className="space-y-0">{children}</ul>; }
export function MenuItem({ icon, active, children }: { icon?: React.ReactNode; active?: boolean; children: React.ReactNode }) {
  return (
    <li className={cn("flex cursor-pointer items-center gap-3 border-2 border-black px-4 py-2.5 text-[13.5px] font-bold transition-colors", active ? "bg-[#ffe500]" : "bg-white hover:bg-[#ffe500]/50")}>
      {icon && <span className="h-5 w-5 [&_svg]:h-5 [&_svg]:w-5">{icon}</span>}{children}
    </li>
  );
}
