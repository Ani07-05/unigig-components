"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
  registerTrigger: (value: string, el: HTMLButtonElement | null) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(component: string) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error(`${component} must be used within <Tabs>`);
  }
  return ctx;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

function Tabs({ defaultValue, value, onValueChange, className, children, ...props }: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;
  const triggersRef = React.useRef<Map<string, HTMLButtonElement>>(new Map());

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  const registerTrigger = React.useCallback((val: string, el: HTMLButtonElement | null) => {
    if (el) triggersRef.current.set(val, el);
    else triggersRef.current.delete(val);
  }, []);

  return (
    <TabsContext.Provider value={{ value: activeValue, setValue, registerTrigger }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

function TabsList({ className, children, ...props }: TabsListProps) {
  const { value } = useTabsContext("TabsList");
  const listRef = React.useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = React.useState<{ left: number; width: number } | null>(null);

  React.useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) return;
    const activeEl = listEl.querySelector<HTMLButtonElement>(`[data-value="${CSS.escape(value)}"]`);
    if (activeEl) {
      setIndicator({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    }
  }, [value, children]);

  return (
    <div
      ref={listRef}
      className={cn("relative flex items-center gap-5 border-b-[1.5px] border-ink", className)}
      {...props}
    >
      {children}
      {indicator && (
        <span
          aria-hidden
          className="absolute bottom-[-1.5px] h-[2px] bg-ink transition-all duration-200 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      )}
    </div>
  );
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const { value: activeValue, setValue, registerTrigger } = useTabsContext("TabsTrigger");
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      data-value={value}
      ref={(el) => registerTrigger(value, el)}
      aria-selected={isActive}
      onClick={() => setValue(value)}
      className={cn(
        "whitespace-nowrap py-2.5 font-mono text-[12px] uppercase tracking-wide transition-colors",
        isActive ? "font-bold text-ink" : "text-ink-soft hover:text-ink",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const { value: activeValue } = useTabsContext("TabsContent");
  if (activeValue !== value) return null;

  return (
    <div className={cn("pt-4", className)} {...props}>
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
