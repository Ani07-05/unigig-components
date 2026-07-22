import * as React from "react";
import { cn } from "@/lib/utils";

export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
}

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ legend, className, children, ...props }, ref) => (
    <fieldset
      ref={ref}
      className={cn(
        "rounded-xl border-[1.5px] border-dashed border-line p-4",
        className
      )}
      {...props}
    >
      <legend className="px-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
        {legend}
      </legend>
      {children}
    </fieldset>
  )
);
Fieldset.displayName = "Fieldset";

export { Fieldset };
