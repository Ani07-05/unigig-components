"use client";
import * as React from "react";

export function Hover3DCard({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 16;
    setTilt({ x, y });
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform 0.1s ease-out" }}
      className="border-2 border-black bg-white p-6 shadow-[4px_4px_0_#000]">
      {children}
    </div>
  );
}
