"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/2/icons";

export interface SearchSuggestion {
  id: string;
  label: string;
  meta?: string;
}

export interface SearchProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  onSearch?: (query: string) => void;
  onSelect?: (item: SearchSuggestion) => void;
  className?: string;
}

export function Search({
  placeholder = "Search gigs…",
  suggestions = [],
  onSearch,
  onSelect,
  className,
}: SearchProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? suggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Close dropdown on outside click
  React.useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setOpen(true);
    onSearch?.(val);
  }

  function handleSelect(item: SearchSuggestion) {
    setQuery(item.label);
    setOpen(false);
    onSelect?.(item);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setOpen(false);
      onSearch?.(query);
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={ref} className={cn("relative w-full max-w-md", className)}>
      {/* Input row */}
      <div className="flex items-center gap-3 rounded-md border border-c-line bg-c-surface px-4 py-3.5 transition-shadow focus-within:ring-2 focus-within:ring-c-primary focus-within:ring-offset-2 focus-within:ring-offset-c-bg">
        <SearchIcon className="h-[18px] w-[18px] flex-shrink-0 text-c-ink-soft" />
        <input
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setOpen(true)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-c-ink placeholder:text-c-ink-soft/60 outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); setOpen(false); onSearch?.(""); }}
            className="flex-shrink-0 rounded-full p-0.5 text-c-ink-soft hover:text-c-ink"
            aria-label="Clear"
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-md border border-c-line bg-c-surface shadow-c">
          {filtered.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className={cn(
                  "flex w-full items-center gap-3 px-5 py-3.5 text-left hover:bg-c-bg-2 active:bg-c-bg-2",
                  i < filtered.length - 1 && "border-b border-c-line"
                )}
              >
                <SearchIcon className="h-3.5 w-3.5 flex-shrink-0 text-c-ink-soft" />
                <span className="flex-1 text-[14.5px] font-semibold text-c-ink">{item.label}</span>
                {item.meta && (
                  <span className="font-corp-mono text-[11px] text-c-ink-soft">{item.meta}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* No results */}
      {open && query.trim() && filtered.length === 0 && (
        <div className="absolute z-50 mt-1.5 w-full rounded-md border border-c-line bg-c-surface px-5 py-3.5 shadow-c">
          <span className="font-corp-mono text-[13px] text-c-ink-soft">No gigs found for &ldquo;{query}&rdquo;</span>
        </div>
      )}
    </div>
  );
}
