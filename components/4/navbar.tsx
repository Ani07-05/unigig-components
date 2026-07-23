import * as React from "react";
export function Navbar({ start, end }: { start?: React.ReactNode; end?: React.ReactNode }) {
  return (
    <nav className="flex items-center justify-between border-b-2 border-black bg-[#ffe500] px-5 py-3">
      <div className="font-black text-[15px] uppercase tracking-widest">{start}</div>
      <div>{end}</div>
    </nav>
  );
}
