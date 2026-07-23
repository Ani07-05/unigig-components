import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("", {
  variants: {
    variant: {
      plain: "border-c-line",
      dashed: "border-c-line",
    },
  },
  defaultVariants: { variant: "plain" },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical";
}

function Divider({
  className,
  variant,
  orientation = "horizontal",
  children,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("h-full w-0 self-stretch border-l", dividerVariants({ variant }), className)}
        {...props}
      />
    );
  }

  if (children) {
    return (
      <div
        className={cn("flex w-full items-center gap-4 font-corp-mono text-[11px] uppercase tracking-wide text-c-ink-soft", className)}
        {...props}
      >
        <span className={cn("h-0 flex-1 border-t", dividerVariants({ variant }))} />
        {children}
        <span className={cn("h-0 flex-1 border-t", dividerVariants({ variant }))} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-0 w-full border-t", dividerVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
