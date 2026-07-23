import * as React from "react";
export function Divider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-0.5 flex-1 bg-black" />
      {children && <span className="border-2 border-black bg-[#ffe500] px-2 py-0.5 text-[11px] font-black uppercase">{children}</span>}
      <div className="h-0.5 flex-1 bg-black" />
    </div>
  );
}
