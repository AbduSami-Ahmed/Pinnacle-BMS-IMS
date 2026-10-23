"use client";

import * as React from "react";
import Link from "next/link";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { DemoNoticeBanner, DemoViewMode } from "@/components/dashboard/DemoNoticeBanner";
import { MetricSummaryCards } from "@/components/dashboard/MetricSummaryCards";
import { LowStockTable } from "@/components/dashboard/LowStockTable";
import { OrdersAwaitingFulfillment } from "@/components/dashboard/OrdersAwaitingFulfillment";
import { LeadsFollowupList } from "@/components/dashboard/LeadsFollowupList";
import { SalesChannelsStatus } from "@/components/dashboard/SalesChannelsStatus";
import { RecentActivityFeed } from "@/components/dashboard/RecentActivityFeed";
import { Button } from "@/components/ui/Button";
import {
  DEMO_SUMMARY_STATS,
  DEMO_LOW_AND_OUT_STOCK_PARTS,
  DEMO_PENDING_ORDERS,
  DEMO_LEADS_FOLLOWUP,
  DEMO_SALES_CHANNELS,
  DEMO_RECENT_ACTIVITY,
} from "@/data/mock-demo-data";
import {
  AlertOctagon,
  ArrowRight,
  Boxes,
  FileSpreadsheet,
} from "lucide-react";

export default function DashboardPage() {
  const [viewMode, setViewMode] = React.useState<DemoViewMode>("normal");
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle simulated reload
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Derive data based on simulated view mode
  const currentStats = React.useMemo(() => {
    if (viewMode === "empty") {
      return {
        totalSkus: 0,
        inStockCount: 0,
        lowStockCount: 0,
        outOfStockCount: 0,
        totalValuation: 0,
        ordersPending: 0,
        leadsPending: 0,
        channelsActive: 0,
      };
    }
    return DEMO_SUMMARY_STATS;
  }, [viewMode]);

  const currentParts = React.useMemo(() => {
    if (viewMode === "empty") return [];
    return DEMO_LOW_AND_OUT_STOCK_PARTS;
  }, [viewMode]);

  const currentOrders = React.useMemo(() => {
    if (viewMode === "empty") return [];
    return DEMO_PENDING_ORDERS;
  }, [viewMode]);

  const currentLeads = React.useMemo(() => {
    if (viewMode === "empty") return [];
    return DEMO_LEADS_FOLLOWUP;
  }, [viewMode]);

  const currentChannels = React.useMemo(() => {
    if (viewMode === "empty") return [];
    return DEMO_SALES_CHANNELS;
  }, [viewMode]);

  const currentActivities = React.useMemo(() => {
    if (viewMode === "empty") return [];
    return DEMO_RECENT_ACTIVITY;
  }, [viewMode]);

  return (
    <div>
      {/* Page Title & Breadcrumb Header */}
      <BreadcrumbsRegion
        title="Operations Dashboard"
        subtitle="Live showroom counter, warehouse inventory alerts, and sales-channel reconciliation."
        breadcrumbs={[{ label: "Dashboard" }]}
        actions={
          <>
            <Link href="/inventory">
              <Button variant="outline" size="sm">
                <Boxes className="w-3.5 h-3.5 mr-1" />
                Inventory Master
              </Button>
            </Link>
            <Link href="/reports">
              <Button variant="outline" size="sm">
                <FileSpreadsheet className="w-3.5 h-3.5 mr-1" />
                Reports
              </Button>
            </Link>
          </>
        }
      />

      {/* Demo Notice Banner & UX Toggles */}
      <DemoNoticeBanner
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onRefresh={handleRefresh}
        isLoading={isLoading}
      />

      {/* Simulated Error State Container */}
      {viewMode === "error" ? (
        <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center max-w-xl mx-auto my-12 space-y-3">
          <AlertOctagon className="w-10 h-10 text-red-600 mx-auto" />
          <h3 className="text-base font-semibold text-red-900">
            Database Query Simulation Failed
          </h3>
          <p className="text-xs text-red-700 leading-relaxed max-w-md mx-auto">
            This simulated error demonstrates how the interface handles an unreached PostgreSQL replica or transient network timeout gracefully without crashing the application shell.
          </p>
          <div className="pt-2">
            <Button
              variant="danger"
              size="sm"
              onClick={() => setViewMode("normal")}
            >
              Restore Normal Dashboard View
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* 1. Top Stock & Operations Metrics */}
          <MetricSummaryCards stats={currentStats} isLoading={isLoading} />

          {/* 2. Critical Inventory Attention: Low & Out of Stock */}
          <LowStockTable parts={currentParts} isLoading={isLoading} />

          {/* 3. Orders Awaiting Fulfilment */}
          <OrdersAwaitingFulfillment orders={currentOrders} isLoading={isLoading} />

          {/* 4. Split Grid: Leads Requiring Follow-Up & Channel Status */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-7">
              <LeadsFollowupList leads={currentLeads} isLoading={isLoading} />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <SalesChannelsStatus channels={currentChannels} isLoading={isLoading} />
              <RecentActivityFeed activities={currentActivities} isLoading={isLoading} />
            </div>
          </div>

          {/* Quick Access to Module Shells Banner */}
          <div className="bg-white border border-slate-200 rounded-md p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-semibold text-slate-900">
                Next Stage Roadmap:
              </span>{" "}
              <span className="text-slate-600">
                Vehicles (VIN lookup & ACES catalog), Quotes, and Invoicing modules are ready in navigation shell preview.
              </span>
            </div>
            <Link href="/vehicles" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              <span>Inspect Vehicles Shell</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
