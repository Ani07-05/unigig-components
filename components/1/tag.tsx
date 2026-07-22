import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// One pill shape everywhere - color is the only thing that changes
// meaning, so it stays learnable across tiers and statuses alike.
const tagVariants = cva(
  "inline-block whitespace-nowrap rounded-full px-[11px] py-[5px] font-mono text-[11px] font-bold uppercase tracking-wide",
  {
    variants: {
      variant: {
        flash: "bg-coral text-white",
        standard: "bg-mustard text-[#2b2205]",
        extended: "bg-green text-[#eafff2]",
        open: "bg-mustard text-[#2b2205]",
        progress: "bg-blue text-white",
        done: "bg-green text-[#eafff2]",
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
