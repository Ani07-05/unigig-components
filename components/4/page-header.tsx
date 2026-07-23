import * as React from "react";

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="border-b-2 border-black bg-[#ffe500] px-6 py-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">{title}</h1>
          {description && <p className="mt-1 text-sm font-medium text-black/60">{description}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}
