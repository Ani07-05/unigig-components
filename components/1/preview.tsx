import * as React from "react";
import { cn } from "@/lib/utils";

function Preview({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-wrap items-center justify-center gap-4 rounded-2xl border-[1.5px] border-ink bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(0,0,0,0.015)_12px,rgba(0,0,0,0.015)_24px)] bg-cream px-8 py-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Preview };
