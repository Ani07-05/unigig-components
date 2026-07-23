import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// One chip shape everywhere - color is the only thing that changes
// meaning, so it stays learnable across tiers and statuses alike.
const tagVariants = cva(
  "inline-block whitespace-nowrap rounded px-3 py-1.5 font-corp-mono text-[11px] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        flash: "bg-c-yellow text-white",
        standard: "bg-c-yellow text-white",
        extended: "bg-c-cyan text-white",
        open: "bg-c-yellow text-white",
        progress: "bg-c-primary text-white",
        done: "bg-c-cyan text-white",
      },
    },
    defaultVariants: { variant: "flash" },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return <span className={cn(tagVariants({ variant, className }))} {...props} />;
}

export { Tag, tagVariants };
