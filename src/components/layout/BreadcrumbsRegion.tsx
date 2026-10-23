import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsRegionProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export function BreadcrumbsRegion({
  title,
  subtitle,
  breadcrumbs,
  actions,
}: BreadcrumbsRegionProps) {
  return (
    <div className="mb-6 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="mb-1">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500">
            <li>
              <Link
                href="/"
                className="hover:text-slate-800 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-400" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-slate-800" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Page Title & Subtitle */}
        <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Actions Slot */}
      {actions && (
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          {actions}
        </div>
      )}
    </div>
  );
}
