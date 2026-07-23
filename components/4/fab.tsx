import * as React from "react";
import { cn } from "@/lib/utils";

export function FAB({ icon, onClick, className }: { icon: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button onClick={onClick}
      className={cn("flex h-14 w-14 items-center justify-center border-2 border-black bg-[#ff2d78] shadow-[4px_4px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none", className)}>
      {icon}
    </button>
  );
}
