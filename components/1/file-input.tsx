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
          "flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-[1.5px] border-dashed border-ink bg-card p-6 text-center transition-colors hover:bg-cream-2",
          className
        )}
      >
        <span className="text-[14.5px] font-semibold text-ink">
          {fileName ?? "Click to choose a file"}
        </span>
        {!fileName && (
          <span className="font-mono text-[12px] text-ink-soft">or drag and drop</span>
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
