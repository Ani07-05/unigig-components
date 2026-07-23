import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn("w-full appearance-none border-2 border-black bg-white px-4 py-2.5 text-[14px] font-bold text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2", className)}
      {...props}
    />
  );
}
