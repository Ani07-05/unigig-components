import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("border-2 border-black px-4 py-3 text-[13.5px] font-bold shadow-[3px_3px_0_#000]", {
  variants: {
    variant: {
      info:    "bg-[#cce5ff] text-black",
      success: "bg-[#ffe500] text-black",
      warning: "bg-[#ff2d78] text-white",
      error:   "bg-black text-white",
    },
  },
  defaultVariants: { variant: "info" },
});

export function Alert({ className, variant, children }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) {
  const prefix = { info: "INFO", success: "OK", warning: "WARN", error: "ERR" }[variant ?? "info"];
  return (
    <div className={cn(alertVariants({ variant }), className)}>
      <span className="mr-2 font-black">[{prefix}]</span>{children}
    </div>
  );
}
