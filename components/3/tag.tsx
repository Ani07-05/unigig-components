import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// One chip shape everywhere - color is the only thing that changes
// meaning, so it stays learnable across tiers and statuses alike.
const tagVariants = cva(
  "inline-block whitespace-nowrap rounded-sm px-3 py-1.5 font-ledger-mono text-[10.5px] font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        flash: "bg-dl-accent text-dl-bg",
        standard: "bg-dl-accent text-dl-bg",
        extended: "bg-dl-primary-soft text-dl-primary",
        open: "bg-dl-accent text-dl-bg",
        progress: "bg-dl-primary text-dl-ink",
        done: "bg-dl-primary-soft text-dl-primary",
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
