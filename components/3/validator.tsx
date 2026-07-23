import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const validatorVariants = cva("font-ledger-mono text-[11px] tracking-wide", {
  variants: {
    variant: {
      error: "text-dl-primary",
      success: "text-dl-accent",
      hint: "text-dl-ink-soft",
    },
  },
  defaultVariants: { variant: "hint" },
});

export interface ValidatorProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof validatorVariants> {}

function Validator({ className, variant, ...props }: ValidatorProps) {
  return <p className={cn(validatorVariants({ variant, className }))} {...props} />;
}

export { Validator, validatorVariants };
