import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressBarVariants = cva("h-full transition-all duration-300 ease-out", {
  variants: {
    variant: {
      default: "bg-dl-primary",
      blue: "bg-dl-primary",
      green: "bg-dl-accent",
      mustard: "bg-dl-accent",
      coral: "bg-dl-primary-dark",
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

// Styled like a gauge/dial tick strip: a row of hairline ticks sits over
// the fill so the bar reads as a printed measuring scale, not a soft app bar.
function Progress({ className, variant, value, max = 100, ...props }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-sm border border-dl-line bg-dl-bg-2",
        className
      )}
      {...props}
    >
      <div className={cn(progressBarVariants({ variant }))} style={{ width: `${pct}%` }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.35)_0px,rgba(0,0,0,0.35)_1px,transparent_1px,transparent_10%)]"
      />
    </div>
  );
}

export { Progress, progressBarVariants };
