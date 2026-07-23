import * as React from "react";
export function Indicator({ badge, children }: { badge?: React.ReactNode; children: React.ReactNode }) {
  return <div className="relative inline-flex"><div>{children}</div>{badge && <div className="absolute -right-1 -top-1">{badge}</div>}</div>;
}
