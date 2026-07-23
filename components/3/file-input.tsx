"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, id, onChange, ...props }, ref) => {
    const [fileName, setFileName] = React.useState<string | null>(null);
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border border-dashed border-dl-line bg-dl-surface p-7 text-center transition-colors hover:bg-dl-bg-2",
          className
        )}
      >
        <span className="font-ledger italic text-[16px] text-dl-ink">
          {fileName ?? "Click to choose a file"}
        </span>
        {!fileName && (
          <span className="font-ledger-mono text-[11px] tracking-wide text-dl-ink-soft">or drag and drop</span>
        )}
        <input
          ref={ref}
          id={inputId}
          type="file"
          className="sr-only"
          onChange={(e) => {
            setFileName(e.target.files?.[0]?.name ?? null);
            onChange?.(e);
          }}
          {...props}
        />
      </label>
    );
  }
);
FileInput.displayName = "FileInput";

export { FileInput };
