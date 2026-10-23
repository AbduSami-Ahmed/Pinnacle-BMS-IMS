import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function ReportsPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Business Reports & Inventory Analytics"
        subtitle="Parts turnover velocity, slow-moving/dead stock analysis, gross margin, and channel sales."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Reports" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Business Intelligence & Parts Analytics"
        moduleCategory="Executive Analytics"
        description="Automotive reporting suite designed to maximize capital efficiency: identify dead inventory, optimize reorder points by seasonal velocity, and analyze garage profitability."
        plannedCapabilities={[
          "Fast-moving vs Slow-moving vs Dead Stock audit (0 sales in 90/180/365 days)",
          "Inventory turnover ratio and GMROI (Gross Margin Return on Investment) by category",
          "Commercial trade account profitability and credit utilization reports",
          "Sales channel performance breakdown (Counter POS vs Wholesale vs eBay Motors)",
          "Core deposit return lag analysis (tracking unreturned core units by shop)",
          "Scheduled automated PDF / CSV executive summaries dispatched via email",
        ]}
        plannedEndpoints={[
          "GET /api/v1/reports/inventory-velocity?period={30d|90d|1y}",
          "GET /api/v1/reports/dead-stock",
          "GET /api/v1/reports/sales-by-channel",
          "GET /api/v1/reports/customer-margins",
        ]}
        schemaFields={[
          "sku",
          "category",
          "units_sold_90d",
          "current_stock",
          "days_of_supply",
          "turnover_rate",
          "gross_profit_margin",
          "holding_cost",
        ]}
      />
    </div>
  );
}
