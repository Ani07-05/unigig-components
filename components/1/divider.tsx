import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("", {
  variants: {
    variant: {
      plain: "border-line",
      dashed: "border-dashed border-line",
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
        className={cn("h-full w-0 self-stretch border-l-[1.5px]", dividerVariants({ variant }), className)}
        {...props}
      />
    );
  }

  if (children) {
    return (
      <div
        className={cn("flex w-full items-center gap-3 font-mono text-[11px] uppercase tracking-wide text-ink-soft", className)}
        {...props}
      >
        <span className={cn("h-0 flex-1 border-t-[1.5px]", dividerVariants({ variant }))} />
        {children}
        <span className={cn("h-0 flex-1 border-t-[1.5px]", dividerVariants({ variant }))} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-0 w-full border-t-[1.5px]", dividerVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
