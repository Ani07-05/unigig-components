"use client";
import * as React from "react";

function pad(n: number) { return String(n).padStart(2, "0"); }

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [diff, setDiff] = React.useState(0);
  React.useEffect(() => {
    const tick = () => setDiff(Math.max(0, Math.floor((targetDate.getTime() - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  return (
    <div className="flex gap-2">
      {[{ v: h, l: "HRS" }, { v: m, l: "MIN" }, { v: s, l: "SEC" }].map(({ v, l }) => (
        <div key={l} className="flex flex-col items-center border-2 border-black bg-[#ffe500] px-4 py-3 shadow-[4px_4px_0_#000]">
          <span className="text-3xl font-black leading-none tabular-nums">{pad(v)}</span>
          <span className="text-[10px] font-black uppercase tracking-widest mt-1">{l}</span>
        </div>
      ))}
    </div>
  );
}
