"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Radio({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type="radio"
      className={cn("h-5 w-5 cursor-pointer appearance-none border-2 border-black bg-white checked:border-[4px] checked:border-black checked:bg-[#ffe500] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2", className)}
      {...props}
    />
  );
}
