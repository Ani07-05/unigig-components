"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Dropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const children2 = React.Children.toArray(children);
  return (
    <div ref={ref} className="relative inline-block">
      {React.cloneElement(children2[0] as React.ReactElement<{ onClick?: () => void }>, { onClick: () => setOpen(!open) })}
      {open && <div className="absolute left-0 top-full z-50 mt-1 min-w-[160px] border-2 border-black bg-white shadow-[4px_4px_0_#000]">{children2.slice(1)}</div>}
    </div>
  );
}
export function DropdownTrigger({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} className="border-2 border-black bg-white px-4 py-2.5 text-[13.5px] font-bold hover:bg-[#ffe500]">{children} ▾</button>;
}
export function DropdownContent({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function DropdownItem({ children }: { children: React.ReactNode }) {
  return <div className="cursor-pointer border-b-2 border-black px-4 py-2.5 text-[13.5px] font-medium last:border-b-0 hover:bg-[#ffe500]">{children}</div>;
}
