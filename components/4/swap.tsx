"use client";
import * as React from "react";

export function Swap({ on, off }: { on: React.ReactNode; off: React.ReactNode }) {
  const [active, setActive] = React.useState(false);
  return (
    <button onClick={() => setActive(!active)} className="border-2 border-black bg-white p-2 shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000] transition-all">
      {active ? on : off}
    </button>
  );
}
