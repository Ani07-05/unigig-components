import * as React from "react";

export function Diff({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid grid-cols-2 border-2 border-black text-sm font-mono">
      <div className="border-r-2 border-black bg-[#ffd0d0] p-3">
        <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-black/50">Before</div>
        {before.split("\n").map((l, i) => <div key={i} className="text-red-700">- {l}</div>)}
      </div>
      <div className="bg-[#d0ffd0] p-3">
        <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-black/50">After</div>
        {after.split("\n").map((l, i) => <div key={i} className="text-green-700">+ {l}</div>)}
      </div>
    </div>
  );
}
