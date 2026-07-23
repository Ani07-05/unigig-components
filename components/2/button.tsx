import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-corp font-semibold transition-colors disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-c-primary text-white hover:bg-c-primary-dark",
        outline: "border border-c-line bg-c-surface text-c-ink hover:border-c-primary hover:text-c-primary",
        ghost: "bg-transparent text-c-primary hover:bg-c-primary-soft",
      },
      size: {
        default: "px-6 py-3 text-[14.5px]",
        lg: "px-8 py-[15px] text-[15.5px]",
        sm: "px-4 py-2 text-[13px]",
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
