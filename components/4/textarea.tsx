import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={4}
      className={cn("w-full border-2 border-black bg-white px-4 py-2.5 text-[14px] text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2", className)}
      {...props}
    />
  );
}
