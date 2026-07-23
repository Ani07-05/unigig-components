"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ThemeControllerProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  "aria-label"?: string;
}

function ThemeController({ checked, onCheckedChange, className, "aria-label": ariaLabel = "Toggle theme" }: ThemeControllerProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative inline-flex h-8 w-14 flex-shrink-0 items-center rounded-[3px] border border-dl-line transition-colors",
        checked ? "bg-dl-primary" : "bg-dl-bg-2",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-[22px] w-[22px] translate-x-[3px] rounded-[2px] border border-dl-line bg-dl-surface transition-transform",
          checked && "translate-x-[27px] bg-dl-accent"
        )}
      />
    </button>
  );
}

export { ThemeController };
