import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[100px] w-full resize-y rounded-md border border-c-line bg-c-surface px-4 py-3.5 text-[15px] text-c-ink placeholder:text-c-ink-soft/60",
        "outline-none focus-visible:ring-2 focus-visible:ring-c-primary focus-visible:ring-offset-2 focus-visible:ring-offset-c-bg",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
