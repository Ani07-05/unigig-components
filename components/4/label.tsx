import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({ className, required, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label className={cn("text-[12px] font-black uppercase tracking-widest text-black", className)} {...props}>
      {children}{required && <span className="ml-1 text-[#ff2d78]">*</span>}
    </label>
  );
}
