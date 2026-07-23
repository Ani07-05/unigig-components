import * as React from "react";
export function Range({ defaultValue, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="range" defaultValue={defaultValue} className="w-full accent-black cursor-pointer" {...props} />;
}
