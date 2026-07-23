import * as React from "react";
export function Timeline({ items }: { items: { time?: string; title: string; description?: string }[] }) {
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="h-4 w-4 border-2 border-black bg-[#ffe500] flex-shrink-0" />
            {i < items.length - 1 && <div className="w-0.5 flex-1 bg-black mt-0" />}
          </div>
          <div className="pb-5">
            {item.time && <div className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40">{item.time}</div>}
            <div className="font-bold text-[13.5px]">{item.title}</div>
            {item.description && <div className="text-[12px] text-black/50">{item.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
