import * as React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StockSummaryStats } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/utils";
import {
  Boxes,
  AlertTriangle,
  ShoppingCart,
  PhoneCall,
  Share2,
} from "lucide-react";

export interface MetricSummaryCardsProps {
  stats: StockSummaryStats;
  isLoading?: boolean;
}

export function MetricSummaryCards({ stats, isLoading }: MetricSummaryCardsProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-28 bg-white border border-slate-200 rounded-md p-4 animate-pulse flex flex-col justify-between"
          >
            <div className="h-4 bg-slate-200 rounded w-2/3" />
            <div className="h-6 bg-slate-200 rounded w-1/2" />
            <div className="h-3 bg-slate-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
      {/* Metric 1: Total SKUs & Valuation */}
      <Card className="hover:border-slate-300">
        <CardContent className="p-3.5 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Total Catalog SKUs</span>
            <Boxes className="w-4 h-4 text-slate-400" />
          </div>
          <div className="my-1">
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              {formatNumber(stats.totalSkus)}
            </span>
          </div>
          <div className="text-[11px] text-slate-500 truncate">
            Valuation: <strong className="text-slate-700">{formatCurrency(stats.totalValuation)}</strong>
          </div>
        </CardContent>
      </Card>

      {/* Metric 2: Stock Attention Indicators */}
      <Card className="hover:border-slate-300">
        <CardContent className="p-3.5 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Stock Attention</span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-center gap-1.5 my-1">
            <span className="text-xl font-bold text-slate-900">
              {stats.lowStockCount + stats.outOfStockCount}
            </span>
            <span className="text-xs text-slate-500">items</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Badge variant="danger" withDot>
              {stats.outOfStockCount} Out
            </Badge>
            <Badge variant="warning" withDot>
              {stats.lowStockCount} Low
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Metric 3: Orders Awaiting Fulfilment */}
      <Card className="hover:border-slate-300">
        <CardContent className="p-3.5 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Orders Awaiting Pick</span>
            <ShoppingCart className="w-4 h-4 text-blue-600" />
          </div>
          <div className="my-1">
            <span className="text-xl font-bold text-slate-900">
              {stats.ordersPending}
            </span>
            <span className="text-xs text-slate-500 ml-1">in queue</span>
          </div>
          <div className="text-[11px] text-slate-500 truncate">
            <span className="text-blue-700 font-semibold">5 ready</span> for picking
          </div>
        </CardContent>
      </Card>

      {/* Metric 4: Leads Requiring Follow-Up */}
      <Card className="hover:border-slate-300">
        <CardContent className="p-3.5 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Leads for Follow-up</span>
            <PhoneCall className="w-4 h-4 text-slate-400" />
          </div>
          <div className="my-1">
            <span className="text-xl font-bold text-slate-900">
              {stats.leadsPending}
            </span>
            <span className="text-xs text-slate-500 ml-1">inquiries</span>
          </div>
          <div className="text-[11px] text-slate-500 truncate">
            <Badge variant="info">3 Commercial Shops</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Metric 5: Active Sales Channels */}
      <Card className="hover:border-slate-300">
        <CardContent className="p-3.5 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Connected Channels</span>
            <Share2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="my-1">
            <span className="text-xl font-bold text-slate-900">
              {stats.channelsActive} / 4
            </span>
            <span className="text-xs text-slate-500 ml-1">active</span>
          </div>
          <div className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
            Counter, B2B, eBay, Web
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
