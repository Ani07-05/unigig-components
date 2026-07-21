"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/ui/icons";

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
      <div className="flex items-center gap-2.5 rounded-[12px] border-[1.5px] border-ink bg-card px-3.5 py-3 transition-shadow focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 focus-within:ring-offset-cream">
        <SearchIcon className="h-[18px] w-[18px] flex-shrink-0 text-ink-soft" />
        <input
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setOpen(true)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-ink-soft/60 outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); setOpen(false); onSearch?.(""); }}
            className="flex-shrink-0 rounded-full p-0.5 text-ink-soft hover:text-ink"
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
        <ul className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-xl border-[1.5px] border-ink bg-card shadow-flat">
          {filtered.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleSelect(item)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-ink/5 active:bg-ink/10",
                  i < filtered.length - 1 && "border-b border-dashed border-line"
                )}
              >
                <SearchIcon className="h-3.5 w-3.5 flex-shrink-0 text-ink-soft" />
                <span className="flex-1 text-[14.5px] font-semibold">{item.label}</span>
                {item.meta && (
                  <span className="font-mono text-[11px] text-ink-soft">{item.meta}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* No results */}
      {open && query.trim() && filtered.length === 0 && (
        <div className="absolute z-50 mt-1.5 w-full rounded-xl border-[1.5px] border-ink bg-card px-4 py-3 shadow-flat">
          <span className="font-mono text-[13px] text-ink-soft">No gigs found for &ldquo;{query}&rdquo;</span>
        </div>
      )}
    </div>
  );
}
