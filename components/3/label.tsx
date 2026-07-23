import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("font-ledger-mono text-[12px] font-semibold uppercase tracking-wider text-dl-ink", className)}
      {...props}
    >
      {children}
      {required && <span className="ml-0.5 text-dl-primary">*</span>}
    </label>
  )
);
Label.displayName = "Label";

export { Label };
