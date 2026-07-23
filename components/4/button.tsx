import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Neobrutalism — thick border, hard offset shadow, saturated fills
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[4px] border-2 border-black font-bold transition-all duration-100 disabled:pointer-events-none disabled:opacity-40 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
  {
    variants: {
      variant: {
        primary: "bg-[#ffe500] text-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
        pink:    "bg-[#ff2d78] text-white shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
        white:   "bg-white text-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
        ghost:   "bg-transparent text-black shadow-none hover:bg-black hover:text-white",
      },
      size: {
        default: "px-5 py-2.5 text-[14px]",
        lg:      "px-7 py-3.5 text-[15px]",
        sm:      "px-3.5 py-1.5 text-[12px]",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
