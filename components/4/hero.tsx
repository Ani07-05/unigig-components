import * as React from "react";
export function Hero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: React.ReactNode }) {
  return (
    <div className="border-2 border-black bg-[#ffe500] p-8 shadow-[6px_6px_0_#000]">
      {eyebrow && <p className="mb-2 text-[11px] font-black uppercase tracking-widest opacity-60">{eyebrow}</p>}
      <h1 className="text-[40px] font-black uppercase leading-none tracking-tight text-black">{title}</h1>
      {description && <p className="mt-3 max-w-lg text-[14px] font-medium text-black/70">{description}</p>}
      {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
    </div>
  );
}
