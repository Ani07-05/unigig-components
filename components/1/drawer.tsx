"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function CloseIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

function Drawer({ open, onOpenChange, side = "left", children, className }: DrawerProps) {
  React.useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-ink/40" onClick={() => onOpenChange(false)} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "absolute top-0 h-full w-[300px] max-w-[85vw] bg-cream shadow-flat transition-transform duration-300 ease-out",
          side === "left" && "left-0 border-r-[1.5px] border-ink",
          side === "right" && "right-0 border-l-[1.5px] border-ink",
          open
            ? "translate-x-0"
            : side === "left"
              ? "-translate-x-full"
              : "translate-x-full",
          className
        )}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-ink bg-card text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>
        <div className="h-full overflow-y-auto p-6 pt-16">{children}</div>
      </div>
    </div>
  );
}

export { Drawer };
