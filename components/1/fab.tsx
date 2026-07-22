"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FabAction {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export interface FabProps {
  icon: React.ReactNode;
  actions: FabAction[];
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

function Fab({ icon, actions, onClick, className, "aria-label": ariaLabel = "Open actions" }: FabProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3", className)}>
      {open && (
        <div className="flex flex-col items-end gap-3">
          {actions.map((action, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="whitespace-nowrap rounded-full border-[1.5px] border-ink bg-card px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide text-ink shadow-flat">
                {action.label}
              </span>
              <button
                type="button"
                onClick={() => {
                  action.onClick?.();
                  setOpen(false);
                }}
                aria-label={action.label}
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink bg-card text-ink shadow-flat transition-colors hover:bg-ink hover:text-cream [&_svg]:h-5 [&_svg]:w-5"
              >
                {action.icon}
              </button>
            </div>
          ))}
        </div>
      )}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => {
          onClick?.();
          setOpen((v) => !v);
        }}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-ink bg-ink text-cream shadow-flat transition-transform [&_svg]:h-6 [&_svg]:w-6",
          open && "rotate-45"
        )}
      >
        {icon}
      </button>
    </div>
  );
}

export { Fab };
