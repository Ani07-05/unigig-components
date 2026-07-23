import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// A brass keycap: warm gradient face, dark base shadow like a cut key
// lifted slightly off the plate.
function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex min-w-[26px] items-center justify-center rounded-[4px] border border-dl-primary-dark/40 px-2 py-1 font-ledger-mono text-[11px] font-bold tracking-wide text-dl-bg",
        "bg-gradient-to-b from-dl-accent to-[#a67d33] shadow-[0_2px_0_0_#5c4520,0_3px_4px_rgba(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}

export { Kbd };
