import * as React from "react";
import { cn } from "@/lib/utils";

function Preview({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-wrap items-center justify-center gap-5 rounded-md border border-c-line bg-c-bg-2 px-8 py-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Preview };
