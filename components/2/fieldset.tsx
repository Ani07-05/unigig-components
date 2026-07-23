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
        "rounded-md border border-c-line p-5",
        className
      )}
      {...props}
    >
      <legend className="px-1 font-corp-mono text-[11px] uppercase tracking-wide text-c-ink-soft">
        {legend}
      </legend>
      {children}
    </fieldset>
  )
);
Fieldset.displayName = "Fieldset";

export { Fieldset };
