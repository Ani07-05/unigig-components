import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-full px-[10px] py-[3px] font-mono text-[11px] font-bold uppercase tracking-wide",
  {
    variants: {
      variant: {
        solid: "bg-ink text-cream",
        outline: "border-[1.5px] border-ink bg-transparent text-ink",
        soft: "bg-cream-2 text-ink",
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
