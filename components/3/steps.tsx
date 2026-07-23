import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/3/icons";

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
                  "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-ledger-mono text-[11px] font-semibold",
                  isCompleted && "border border-dl-primary-dark bg-dl-primary text-dl-ink",
                  isCurrent && "border border-dl-accent bg-dl-surface text-dl-accent",
                  !isCompleted && !isCurrent && "border border-dl-line text-dl-ink-soft"
                )}
              >
                {isCompleted ? <CheckIcon className="h-3.5 w-3.5" /> : i + 1}
              </div>
              <span
                className={cn(
                  "whitespace-nowrap font-ledger-mono text-[10.5px] uppercase tracking-wider",
                  isCompleted || isCurrent ? "text-dl-ink" : "text-dl-ink-soft"
                )}
              >
                {step}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "mx-2 h-[1px] flex-1 self-start mt-4",
                  isCompleted ? "bg-dl-primary" : "bg-dl-line"
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
