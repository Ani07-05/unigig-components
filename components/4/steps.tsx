import * as React from "react";
import { cn } from "@/lib/utils";
export function Steps({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="flex items-center">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center gap-1">
            <div className={cn("flex h-8 w-8 items-center justify-center border-2 border-black text-[12px] font-black", i < current ? "bg-[#ffe500]" : i === current ? "bg-black text-white" : "bg-white")}>{i + 1}</div>
            <span className="text-[10px] font-black uppercase tracking-wide whitespace-nowrap">{step}</span>
          </div>
          {i < steps.length - 1 && <div className={cn("h-0.5 flex-1 mx-1 mb-4", i < current ? "bg-black" : "bg-black/20")} />}
        </React.Fragment>
      ))}
    </div>
  );
}
