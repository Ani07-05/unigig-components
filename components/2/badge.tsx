import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded px-2.5 py-1 font-corp-mono text-[11px] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        solid: "bg-c-primary text-white",
        outline: "border border-c-line bg-transparent text-c-ink",
        soft: "bg-c-primary-soft text-c-primary-dark",
        cyan: "bg-c-cyan-soft text-c-cyan",
        magenta: "bg-c-magenta-soft text-c-magenta",
        yellow: "bg-c-yellow-soft text-c-yellow",
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
