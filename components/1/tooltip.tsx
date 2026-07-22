"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const sideClasses = {
  top: "bottom-full left-1/2 mb-2.5 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2.5 -translate-x-1/2",
  left: "right-full top-1/2 mr-2.5 -translate-y-1/2",
  right: "left-full top-1/2 ml-2.5 -translate-y-1/2",
} as const;

const arrowSideClasses = {
  top: "top-full left-1/2 -mt-[5px] -translate-x-1/2",
  bottom: "bottom-full left-1/2 -mb-[5px] -translate-x-1/2",
  left: "left-full top-1/2 -ml-[5px] -translate-y-1/2",
  right: "right-full top-1/2 -mr-[5px] -translate-y-1/2",
} as const;

export interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  className?: string;
}

function Tooltip({ content, side = "top", children, className }: TooltipProps) {
  const [visible, setVisible] = React.useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1.5 font-mono text-[12px] text-cream shadow-flat transition-opacity duration-150",
          sideClasses[side],
          visible ? "opacity-100" : "opacity-0",
          className
        )}
      >
        {content}
        <span className={cn("absolute h-2 w-2 rotate-45 bg-ink", arrowSideClasses[side])} />
      </span>
    </span>
  );
}

export { Tooltip };
