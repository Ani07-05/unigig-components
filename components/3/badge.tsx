import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-sm px-2.5 py-1 font-ledger-mono text-[10.5px] font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        solid: "border border-dl-primary-dark bg-dl-primary text-dl-ink",
        outline: "border border-dl-line bg-transparent text-dl-ink",
        soft: "bg-dl-primary-soft text-dl-primary",
        cyan: "bg-dl-accent-soft text-dl-accent",
        magenta: "border border-dl-primary/50 bg-transparent text-dl-primary",
        yellow: "border border-dl-primary-dark/40 bg-dl-accent text-dl-bg",
      },
    },
    defaultVariants: { variant: "soft" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
