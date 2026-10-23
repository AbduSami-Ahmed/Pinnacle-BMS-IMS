import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Database, Eye } from "lucide-react";

export type DemoViewMode = "normal" | "empty" | "error";

export interface DemoNoticeBannerProps {
  viewMode: DemoViewMode;
  onViewModeChange: (mode: DemoViewMode) => void;
  onRefresh: () => void;
  isLoading: boolean;
}

export function DemoNoticeBanner({
  viewMode,
  onViewModeChange,
  onRefresh,
  isLoading,
}: DemoNoticeBannerProps) {
  return (
    <div className="bg-slate-100 border border-slate-300 rounded-md p-3 sm:p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        {/* Left: Info */}
        <div className="flex items-start sm:items-center gap-2.5">
          <Database className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-900">
              Client Demo Mode Active:
            </span>
            <span className="text-xs text-slate-600">
              Displaying simulated Store #01 automotive catalog and transaction fixtures.
            </span>
            <Badge variant="warning" withDot>
              Sample Data Only
            </Badge>
          </div>
        </div>

        {/* Right: Working Demo Presenter Controls */}
        <div className="flex items-center gap-2 flex-wrap pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200">
          <span className="text-[11px] font-medium text-slate-500 mr-1 flex items-center gap-1">
            <Eye className="w-3 h-3" />
            UX State:
          </span>

          <button
            type="button"
            onClick={() => onViewModeChange("normal")}
            className={`text-xs px-2.5 py-1 rounded border font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              viewMode === "normal"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            }`}
          >
            Live Demo Data
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange("empty")}
            className={`text-xs px-2.5 py-1 rounded border font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              viewMode === "empty"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            }`}
          >
            Zero-Data State
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange("error")}
            className={`text-xs px-2.5 py-1 rounded border font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              viewMode === "error"
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            }`}
          >
            Simulate Error
          </button>

          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            isLoading={isLoading}
            className="h-7 text-xs bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            title="Reload sample metrics to demonstrate loading feedback"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Reload
          </Button>
        </div>
      </div>
    </div>
  );
}
