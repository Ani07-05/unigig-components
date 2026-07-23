import * as React from "react";
export function Stat({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}
export function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-black bg-white px-5 py-4 shadow-[3px_3px_0_#000]">
      <div className="text-[11px] font-black uppercase tracking-widest text-black/50">{label}</div>
      <div className="mt-1 text-[26px] font-black text-black">{value}</div>
    </div>
  );
}
