import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// The "dashed" variant reads as a perforated tear-line - a row of little
// punched notches instead of a plain rule, like a carbon-copy sheet edge.
const dividerVariants = cva("", {
  variants: {
    variant: {
      plain: "border-dl-line",
      dashed: "border-dl-line",
    },
  },
  defaultVariants: { variant: "plain" },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical";
}

function Perforation({ orientation }: { orientation: "horizontal" | "vertical" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex flex-shrink-0 items-center justify-center gap-2.5",
        orientation === "horizontal" ? "h-0 flex-1 border-t border-dashed border-dl-line" : "w-0 flex-1 border-l border-dashed border-dl-line"
      )}
    />
  );
}

function Divider({
  className,
  variant,
  orientation = "horizontal",
  children,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    if (variant === "dashed") {
      return (
        <div role="separator" aria-orientation="vertical" className={cn("relative flex h-full w-0 flex-col items-center self-stretch", className)} {...props}>
          <Perforation orientation="vertical" />
        </div>
      );
    }
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
        className={cn("flex w-full items-center gap-4 font-ledger-mono text-[10.5px] uppercase tracking-wider text-dl-ink-soft", className)}
        {...props}
      >
        {variant === "dashed" ? <Perforation orientation="horizontal" /> : <span className={cn("h-0 flex-1 border-t", dividerVariants({ variant }))} />}
        {children}
        {variant === "dashed" ? <Perforation orientation="horizontal" /> : <span className={cn("h-0 flex-1 border-t", dividerVariants({ variant }))} />}
      </div>
    );
  }

  if (variant === "dashed") {
    return (
      <div role="separator" aria-orientation="horizontal" className={cn("w-full", className)} {...props}>
        <Perforation orientation="horizontal" />
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
