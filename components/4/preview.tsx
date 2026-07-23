import * as React from "react";

export function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-black bg-white p-6 shadow-[4px_4px_0_#000]">
      {children}
    </div>
  );
}
