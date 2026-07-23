"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Checkbox({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-5 w-5 cursor-pointer appearance-none border-2 border-black bg-white checked:bg-[#ffe500]",
        "relative after:absolute after:inset-0 after:flex after:items-center after:justify-center",
        "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}
