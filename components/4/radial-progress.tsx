import * as React from "react";
export function RadialProgress({ value = 0, size = 80 }: { value?: number; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e0e0e0" strokeWidth={4} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#000" strokeWidth={4} strokeDasharray={circ} strokeDashoffset={circ * (1 - value / 100)} strokeLinecap="butt" transform={`rotate(-90 ${size/2} ${size/2})`} />
      </svg>
      <span className="absolute text-[13px] font-black">{value}%</span>
    </div>
  );
}
