"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SwapProps {
  on: React.ReactNode;
  off: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  "aria-label"?: string;
}

function Swap({ on, off, checked, onCheckedChange, className, "aria-label": ariaLabel }: SwapProps) {
  const [internal, setInternal] = React.useState(false);
  const isControlled = checked !== undefined;
  const active = isControlled ? checked : internal;

  function toggle() {
    const next = !active;
    if (!isControlled) setInternal(next);
    onCheckedChange?.(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      aria-label={ariaLabel}
      className={cn(
        "relative inline-flex h-12 w-12 items-center justify-center rounded-md border border-c-line bg-c-surface text-c-ink transition-colors hover:border-c-primary hover:bg-c-primary hover:text-white [&_svg]:h-5 [&_svg]:w-5",
        className
      )}
    >
      <span className={cn("absolute inset-0 flex items-center justify-center transition-opacity", active ? "opacity-0" : "opacity-100")}>
        {off}
      </span>
      <span className={cn("absolute inset-0 flex items-center justify-center transition-opacity", active ? "opacity-100" : "opacity-0")}>
        {on}
      </span>
    </button>
  );
}

export { Swap };
