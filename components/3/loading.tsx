import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("inline-block animate-spin rounded-full border-dl-accent border-t-transparent", {
  variants: {
    size: {
      sm: "h-4 w-4 border-2",
      default: "h-6 w-6 border-2",
      lg: "h-9 w-9 border-[3px]",
    },
  },
  defaultVariants: { size: "default" },
});

const ringVariants = cva("inline-block animate-spin rounded-full border-dl-accent border-t-transparent", {
  variants: {
    size: {
      sm: "h-4 w-4 border-[3px]",
      default: "h-6 w-6 border-4",
      lg: "h-9 w-9 border-[5px]",
    },
  },
  defaultVariants: { size: "default" },
});

const dotSizes = {
  sm: "h-1 w-1",
  default: "h-1.5 w-1.5",
  lg: "h-2.5 w-2.5",
} as const;

export interface LoadingProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "spinner" | "dots" | "ring";
  size?: "sm" | "default" | "lg";
}

function Loading({ className, variant = "spinner", size = "default", ...props }: LoadingProps) {
  if (variant === "dots") {
    return (
      <span className={cn("inline-flex items-center gap-1.5", className)} {...props}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn("animate-bounce rounded-full bg-dl-accent", dotSizes[size])}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </span>
    );
  }

  if (variant === "ring") {
    return <span className={cn(ringVariants({ size, className }))} {...props} />;
  }

  return <span className={cn(spinnerVariants({ size, className }))} {...props} />;
}

export { Loading, spinnerVariants };
