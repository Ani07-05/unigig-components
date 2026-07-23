import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Neobrutalism badges — solid fill, thick border, no radius
const badgeVariants = cva(
  "inline-block border-2 border-black px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",
  {
    variants: {
      variant: {
        yellow: "bg-[#ffe500] text-black",
        pink:   "bg-[#ff2d78] text-white",
        black:  "bg-black text-white",
        white:  "bg-white text-black",
        blue:   "bg-[#0066ff] text-white",
        green:  "bg-[#00cc66] text-black",
      },
    },
    defaultVariants: { variant: "yellow" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
