"use client";

import * as React from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <button
      onClick={copy}
      title="Copy code"
      className="flex items-center gap-1.5 rounded-md border border-white/12 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white/40 transition hover:border-white/25 hover:text-white/80"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
            <path d="M2 8l4 4 8-8" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="5" width="9" height="9" rx="1.5" />
            <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}
