"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Boxes,
  Warehouse,
  Users,
  CarFront,
  PhoneCall,
  FileText,
  ShoppingCart,
  Receipt,
  PlugZap,
  BarChart3,
  Settings2,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Store,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  badgeVariant?: "neutral" | "warning" | "info" | "danger";
}

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Products", href: "/products", icon: Boxes },
  { label: "Inventory", href: "/inventory", icon: Warehouse, badge: "142", badgeVariant: "warning" },
  { label: "Customers", href: "/customers", icon: Users },
  { label: "Vehicles", href: "/vehicles", icon: CarFront },
  { label: "Leads", href: "/leads", icon: PhoneCall, badge: "5", badgeVariant: "info" },
  { label: "Quotes", href: "/quotes", icon: FileText },
  { label: "Orders", href: "/orders", icon: ShoppingCart, badge: "8", badgeVariant: "neutral" },
  { label: "Invoices", href: "/invoices", icon: Receipt },
];

const SECONDARY_NAV_ITEMS: NavItem[] = [
  { label: "Integrations", href: "/integrations", icon: PlugZap },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings2 },
];

export interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();

  const renderNavLinks = (items: NavItem[]) => (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => onCloseMobile()}
              title={isCollapsed ? item.label : undefined}
              className={cn(
                "group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1",
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600 pl-2 rounded-l-none"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                isCollapsed && "justify-center px-2 border-l-0"
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 shrink-0",
                  isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                )}
              />
              {!isCollapsed && (
                <span className="truncate flex-1">{item.label}</span>
              )}
              {!isCollapsed && item.badge && (
                <span
                  className={cn(
                    "text-[10px] font-semibold px-1.5 py-0.5 rounded-full border leading-none shrink-0",
                    item.badgeVariant === "warning" && "bg-amber-50 text-amber-900 border-amber-300",
                    item.badgeVariant === "info" && "bg-blue-50 text-blue-700 border-blue-200",
                    item.badgeVariant === "danger" && "bg-red-50 text-red-700 border-red-200",
                    (!item.badgeVariant || item.badgeVariant === "neutral") &&
                      "bg-slate-100 text-slate-700 border-slate-300"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-40 flex flex-col bg-white border-r border-slate-200 select-none",
          "md:translate-x-0 transition-none",
          isCollapsed ? "w-16" : "w-60",
          isMobileOpen ? "translate-x-0 w-60" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Brand Header */}
        <div className="h-14 flex items-center justify-between px-3.5 border-b border-slate-200">
          <Link
            href="/"
            className="flex items-center gap-2.5 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Wrench className="w-4 h-4" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-slate-900 leading-tight truncate">
                  Auto Parts Hub
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-none">
                  BMS / IMS Suite
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation Body */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-5">
          <div>
            {!isCollapsed && (
              <div className="px-3 pb-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Management
              </div>
            )}
            {renderNavLinks(PRIMARY_NAV_ITEMS)}
          </div>

          <div>
            {!isCollapsed && (
              <div className="px-3 pb-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Operations
              </div>
            )}
            {renderNavLinks(SECONDARY_NAV_ITEMS)}
          </div>
        </div>

        {/* Location / Shop Context Footer */}
        {!isCollapsed && (
          <div className="p-3 border-t border-slate-200 bg-slate-50 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-medium truncate">
              <Store className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">Branch #01 - Central Hub</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Counter POS & Warehouse
            </div>
          </div>
        )}

        {/* Desktop Collapse / Expand Button */}
        <div className="hidden md:flex items-center justify-end p-2 border-t border-slate-200">
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="w-full h-8 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 w-full px-2">
                <ChevronLeft className="w-4 h-4" />
                <span>Collapse sidebar</span>
              </div>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
