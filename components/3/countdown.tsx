"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export interface CountdownProps {
  target: Date;
  className?: string;
}

function Countdown({ target, className }: CountdownProps) {
  const [time, setTime] = React.useState(() => getTimeLeft(target));

  React.useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-[3px] border border-dl-primary-dark bg-dl-primary font-ledger-mono text-2xl font-bold tracking-wide text-dl-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
            {String(unit.value).padStart(2, "0")}
          </div>
          <span className="font-ledger-mono text-[10px] uppercase tracking-wider text-dl-ink-soft">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export { Countdown };
