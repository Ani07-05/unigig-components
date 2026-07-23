import * as React from "react";
import { cn } from "@/lib/utils";

export function ChatBubble({ message, side = "left", name }: { message: string; side?: "left" | "right"; name?: string }) {
  return (
    <div className={cn("flex gap-2", side === "right" && "flex-row-reverse")}>
      <div className="h-8 w-8 flex-shrink-0 border-2 border-black bg-[#ffe500] font-black text-xs flex items-center justify-center">
        {name?.[0] ?? "U"}
      </div>
      <div className={cn("max-w-[75%] border-2 border-black p-3 text-sm font-medium shadow-[3px_3px_0_#000]", side === "right" ? "bg-black text-white" : "bg-white text-black")}>
        {message}
      </div>
    </div>
  );
}
