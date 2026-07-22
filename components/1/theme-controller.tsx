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
        "relative inline-flex h-8 w-14 flex-shrink-0 items-center rounded-full border-[1.5px] border-ink transition-colors",
        checked ? "bg-ink" : "bg-cream-2",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-[22px] w-[22px] translate-x-[3px] rounded-full border-[1.5px] border-ink bg-card transition-transform",
          checked && "translate-x-[27px] bg-mustard"
        )}
      />
    </button>
  );
}

export { ThemeController };
