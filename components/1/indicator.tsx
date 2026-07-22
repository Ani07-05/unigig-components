import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const indicatorPositions = cva("absolute z-10", {
  variants: {
    position: {
      "top-right": "-top-1.5 -right-1.5",
      "top-left": "-top-1.5 -left-1.5",
      "bottom-right": "-bottom-1.5 -right-1.5",
      "bottom-left": "-bottom-1.5 -left-1.5",
    },
  },
  defaultVariants: { position: "top-right" },
});

export interface IndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorPositions> {
  badge: React.ReactNode;
  children: React.ReactNode;
}

function Indicator({ className, position, badge, children, ...props }: IndicatorProps) {
  return (
    <div className={cn("relative inline-flex", className)} {...props}>
      {children}
      <span className={cn(indicatorPositions({ position }))}>{badge}</span>
    </div>
  );
}

export { Indicator };
