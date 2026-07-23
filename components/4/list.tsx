import * as React from "react";

export function List({ children }: { children: React.ReactNode }) {
  return <ul className="divide-y-2 divide-black border-2 border-black">{children}</ul>;
}

export function ListItem({ leading, title, subtitle }: { leading?: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <li className="flex items-center gap-3 bg-white px-4 py-3 hover:bg-[#ffe500] transition-colors">
      {leading && <div className="flex-shrink-0">{leading}</div>}
      <div>
        <div className="text-[13px] font-black">{title}</div>
        {subtitle && <div className="text-[11px] font-medium text-black/50">{subtitle}</div>}
      </div>
    </li>
  );
}
