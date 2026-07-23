import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// A "stamp" button: modest corner radius (never a pill), a faint inset
// double-line to read like an embossed date-stamp, ink-solid primary.
const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-[3px] font-ledger-mono font-semibold uppercase tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "border border-dl-primary-dark bg-dl-primary text-dl-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_0_rgba(0,0,0,0.45)] hover:bg-dl-primary-dark",
        outline:
          "border border-dl-line bg-transparent text-dl-ink shadow-[inset_0_0_0_1px_rgba(201,151,63,0)] hover:border-dl-accent hover:text-dl-accent hover:shadow-[inset_0_0_0_1px_var(--dl-accent)]",
        ghost: "bg-transparent text-dl-accent hover:bg-dl-accent-soft",
      },
      size: {
        default: "px-6 py-3 text-[12.5px]",
        lg: "px-8 py-[15px] text-[13.5px]",
        sm: "px-4 py-2 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element instead of a <button> - e.g. asChild + <Link>. */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
