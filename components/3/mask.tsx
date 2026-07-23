import * as React from "react";
import { cn } from "@/lib/utils";

const clipPaths: Record<"circle" | "squircle" | "hexagon" | "triangle", string> = {
  circle: "circle(50% at 50% 50%)",
  squircle:
    "polygon(50% 0%, 80% 4%, 95% 20%, 99% 50%, 95% 80%, 80% 96%, 50% 100%, 20% 96%, 5% 80%, 1% 50%, 5% 20%, 20% 4%)",
  hexagon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  triangle: "polygon(50% 0%, 100% 100%, 0% 100%)",
};

export interface MaskProps extends React.HTMLAttributes<HTMLDivElement> {
  shape: "circle" | "squircle" | "hexagon" | "triangle";
  children: React.ReactNode;
}

function Mask({ className, shape, style, children, ...props }: MaskProps) {
  return (
    <div
      className={cn("inline-block overflow-hidden", className)}
      style={{ clipPath: clipPaths[shape], ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Mask };
