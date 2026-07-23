import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statusVariants = cva("relative inline-flex h-2.5 w-2.5 rounded-full", {
  variants: {
    variant: {
      online: "bg-dl-accent",
      offline: "bg-dl-ink-soft",
      busy: "bg-dl-primary",
      away: "bg-dl-primary-soft border border-dl-primary/60",
    },
  },
  defaultVariants: { variant: "online" },
});

export interface StatusProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusVariants> {
  pulse?: boolean;
}

function Status({ className, variant, pulse = false, ...props }: StatusProps) {
  return (
    <span className={cn(statusVariants({ variant, className }))} {...props}>
      {pulse && (
        <span className={cn("absolute inset-0 animate-ping rounded-full opacity-75", statusVariants({ variant }))} />
      )}
    </span>
  );
}

export { Status, statusVariants };
