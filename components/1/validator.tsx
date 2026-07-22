import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const validatorVariants = cva("font-mono text-[12px]", {
  variants: {
    variant: {
      error: "text-coral",
      success: "text-green",
      hint: "text-ink-soft",
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
