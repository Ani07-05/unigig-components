import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex min-w-[22px] items-center justify-center rounded-[6px] border-[1.5px] border-b-[3px] border-ink bg-card px-1.5 py-0.5 font-mono text-[12px] font-bold text-ink",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}

export { Kbd };
