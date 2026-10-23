import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div className="relative inline-block w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full h-9 rounded-md border border-slate-300 bg-white px-3 py-1.5 pr-8 text-sm text-slate-900 appearance-none cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 focus-visible:border-blue-600",
            "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    );
  }
);

Select.displayName = "Select";
