import * as React from "react";
export function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-2 border-black p-5">
      <legend className="px-2 text-[11px] font-black uppercase tracking-widest text-black bg-[#ffe500] border-2 border-black">{legend}</legend>
      {children}
    </fieldset>
  );
}
