import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[100px] w-full resize-y rounded-md border border-dl-line bg-dl-surface px-4 py-3.5 font-ledger-mono text-[14px] tracking-wide text-dl-ink placeholder:text-dl-ink-soft/60",
        "outline-none focus-visible:ring-2 focus-visible:ring-dl-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dl-bg",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
