"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
const Ctx = React.createContext<{ value: string; set: (v: string) => void }>({ value: "", set: () => {} });
export function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  const [value, set] = React.useState(defaultValue);
  return <Ctx.Provider value={{ value, set }}><div>{children}</div></Ctx.Provider>;
}
export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex border-2 border-black">{children}</div>;
}
export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(Ctx);
  return (
    <button onClick={() => ctx.set(value)} className={cn("flex-1 px-4 py-2.5 text-[13px] font-black uppercase tracking-wide border-r-2 border-black last:border-r-0 transition-colors", ctx.value === value ? "bg-[#ffe500]" : "bg-white hover:bg-[#ffe500]/40")}>
      {children}
    </button>
  );
}
export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(Ctx);
  if (ctx.value !== value) return null;
  return <div className="border-2 border-t-0 border-black p-4 text-[13.5px]">{children}</div>;
}
