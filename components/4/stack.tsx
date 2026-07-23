import * as React from "react";

export function Stack({ children }: { children: React.ReactNode }) {
  const arr = React.Children.toArray(children);
  return (
    <div className="relative" style={{ height: `${arr.length * 8 + 80}px` }}>
      {arr.map((child, i) => (
        <div key={i} className="absolute border-2 border-black bg-white shadow-[3px_3px_0_#000]"
          style={{ top: `${i * 8}px`, left: `${i * 8}px`, zIndex: arr.length - i, width: "100%" }}>
          {child}
        </div>
      ))}
    </div>
  );
}
