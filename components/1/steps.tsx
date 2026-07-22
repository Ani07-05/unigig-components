import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/1/icons";

export interface StepsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  steps: string[];
  current: number;
}

function Steps({ steps, current, className, ...props }: StepsProps) {
  return (
    <div className={cn("flex w-full items-start", className)} {...props}>
      {steps.map((step, i) => {
        const isCompleted = i < current;
        const isCurrent = i === current;
        const isLast = i === steps.length - 1;

        return (
          <div key={step} className={cn("flex items-center", !isLast && "flex-1")}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-bold",
                  isCompleted && "bg-ink text-cream",
                  isCurrent && "border-[1.5px] border-ink bg-card text-ink",
                  !isCompleted && !isCurrent && "border-[1.5px] border-line text-ink-soft"
                )}
              >
                {isCompleted ? <CheckIcon className="h-3.5 w-3.5" /> : i + 1}
              </div>
              <span
                className={cn(
                  "whitespace-nowrap font-mono text-[11px] uppercase tracking-wide",
                  isCompleted || isCurrent ? "text-ink" : "text-ink-soft"
                )}
              >
                {step}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "mx-2 h-[1.5px] flex-1 self-start mt-4",
                  isCompleted ? "bg-ink" : "bg-line"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export { Steps };
