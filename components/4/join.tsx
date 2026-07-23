import * as React from "react";
export function Join({ children }: { children: React.ReactNode }) {
  return <div className="flex [&>*:not(:first-child)]:-ml-[2px] [&>*]:border-2 [&>*]:border-black">{children}</div>;
}
