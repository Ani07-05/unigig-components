import * as React from "react";
export function Progress({ value = 0 }: { value?: number }) {
  return (
    <div className="h-5 w-full border-2 border-black bg-white">
      <div className="h-full bg-[#ffe500] transition-all" style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}
