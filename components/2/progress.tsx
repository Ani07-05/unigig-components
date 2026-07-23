import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressBarVariants = cva("h-full rounded-md transition-all duration-300 ease-out", {
  variants: {
    variant: {
      default: "bg-c-primary",
      blue: "bg-c-primary",
      green: "bg-c-cyan",
      mustard: "bg-c-yellow",
      coral: "bg-c-magenta",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  max?: number;
}

function Progress({ className, variant, value, max = 100, ...props }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(
        "h-2.5 w-full overflow-hidden rounded-md border border-c-line bg-c-bg-2",
        className
      )}
      {...props}
    >
      <div className={cn(progressBarVariants({ variant }))} style={{ width: `${pct}%` }} />
    </div>
  );
}

export { Progress, progressBarVariants };
