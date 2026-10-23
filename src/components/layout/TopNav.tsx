"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  User,
  ShieldCheck,
  Building,
  LogOut,
  Info,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";

export interface TopNavProps {
  onOpenMobileSidebar: () => void;
  onSearchClick?: () => void;
}

export function TopNav({ onOpenMobileSidebar }: TopNavProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showDemoInfoModal, setShowDemoInfoModal] = React.useState(false);

  const userMenuRef = React.useRef<HTMLDivElement>(null);
  const notificationsRef = React.useRef<HTMLDivElement>(null);

  // Close menus on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-14 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile hamburger & Global Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          aria-label="Open navigation menu"
          className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search parts by SKU, OEM #, VIN, or customer..."
            aria-label="Search catalog and inventory"
            className="w-full h-8 pl-8 pr-12 text-xs rounded border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
          />
          <kbd className="hidden lg:inline-block absolute right-2 top-1/2 -translate-y-1/2 text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded border border-slate-300 font-mono">
            Ctrl+K
          </kbd>
        </div>
      </div>

      {/* Right: Status Indicators, Notifications & User Menu */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Isolated Demo Data Indicator Button */}
        <button
          type="button"
          onClick={() => setShowDemoInfoModal(true)}
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          title="Click to view client demo mode details"
        >
          <Badge variant="warning" withDot className="hidden sm:inline-flex cursor-pointer hover:bg-amber-100">
            Demo Fixture Active
          </Badge>
        </button>

        {/* Notifications Popover */}
        <div className="relative" ref={notificationsRef}>
          <button
            type="button"
            aria-label="Notifications (3 unread)"
            aria-expanded={isNotificationsOpen}
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white" />
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-md shadow-md py-2 z-50 text-xs">
              <div className="px-3 pb-2 border-b border-slate-200 flex items-center justify-between font-semibold text-slate-900">
                <span>System Notifications</span>
                <span className="text-[11px] text-blue-600 font-normal">3 alerts</span>
              </div>
              <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                <div className="p-3 hover:bg-slate-50">
                  <div className="font-medium text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    Low Stock Alert
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    Part #ROT-1209-F reached 0 units on hand. 8 units required for backorders.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">15m ago</span>
                </div>
                <div className="p-3 hover:bg-slate-50">
                  <div className="font-medium text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Wholesale RFQ Incoming
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    Apex Collision requested fitment verification on 2020 Honda Civic brake sets.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">42m ago</span>
                </div>
                <div className="p-3 hover:bg-slate-50">
                  <div className="font-medium text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    eBay Motors Synced
                  </div>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    Catalog sync completed: 42 parts updated with current counter pricing.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">1h ago</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User / Profile Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            type="button"
            aria-label="User profile menu"
            aria-expanded={isUserMenuOpen}
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-2 p-1 pl-2 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-semibold shrink-0">
              MV
            </div>
            <div className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-xs font-semibold text-slate-900">Marcus Vance</span>
              <span className="text-[10px] text-slate-500">Parts Manager</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 ml-0.5" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-md shadow-md py-1.5 z-50 text-xs">
              <div className="px-3 py-2 border-b border-slate-200">
                <div className="font-semibold text-slate-900">Marcus Vance</div>
                <div className="text-[11px] text-slate-500">marcus.v@autopartshub.demo</div>
                <div className="flex items-center gap-1 mt-1.5 text-[10px] text-slate-600">
                  <Building className="w-3 h-3 text-slate-400" />
                  <span>Main Warehouse (Branch #01)</span>
                </div>
              </div>

              <div className="py-1">
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="w-full text-left px-3 py-1.5 text-slate-700 hover:bg-slate-100 flex items-center gap-2 focus-visible:outline-none focus-visible:bg-slate-100"
                >
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>My Profile & Preferences</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="w-full text-left px-3 py-1.5 text-slate-700 hover:bg-slate-100 flex items-center gap-2 focus-visible:outline-none focus-visible:bg-slate-100"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Role: Store Administrator</span>
                </button>
              </div>

              <div className="border-t border-slate-200 pt-1 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    alert("Sign out is disabled in this client demo session.");
                  }}
                  className="w-full text-left px-3 py-1.5 text-red-600 hover:bg-red-50 flex items-center gap-2 focus-visible:outline-none focus-visible:bg-red-50"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out (Demo Session)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Information Modal */}
      {showDemoInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50">
          <div className="bg-white rounded-md border border-slate-300 shadow-lg max-w-md w-full p-5 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-semibold text-slate-900">
                  Client Demo Environment Notice
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDemoInfoModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="py-3 space-y-2 text-slate-600 leading-relaxed">
              <p>
                This application is running in <strong>Client Progress Demo Mode</strong>.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded p-2.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>UI Design System & Shell: Implemented</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dashboard & Navigation Shells: Implemented</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Backend PostgreSQL / NestJS: Scheduled Next Stage</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                All business numbers and stock counters displayed are isolated demo fixtures. No production database mutations or payment gateways are executed in this preview.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDemoInfoModal(false)}
                className="px-3 py-1.5 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
