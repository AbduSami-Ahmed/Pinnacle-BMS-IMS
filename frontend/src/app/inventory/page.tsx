import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function InventoryPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Inventory & Multi-Bin Stock Control"
        subtitle="Warehouse bin locations, cycle counting, safety stock thresholds, and stock movements."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Inventory" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Warehouse & Inventory Management"
        moduleCategory="Stock Control"
        description="Multi-warehouse and aisle/shelf/bin stock tracking system designed for rapid parts counter retrieval, automated reorder triggers, and FIFO/LIFO valuation."
        plannedCapabilities={[
          "Precise aisle, rack, shelf, and bin location routing (e.g. A-12-03)",
          "Automated minimum threshold alerts and supplier purchase order generation",
          "Barcode scanner integration for receiving dock and counter pick verification",
          "Physical inventory cycle counting workflows with variance tracking",
          "Inter-branch transfers between central warehouse and local retail counters",
          "Core deposit return quarantine and vendor credit memo reconciliation",
        ]}
        plannedEndpoints={[
          "GET /api/v1/inventory/stock-levels?warehouse={id}",
          "POST /api/v1/inventory/adjustments",
          "POST /api/v1/inventory/transfers",
          "GET /api/v1/inventory/bins/{binId}/occupancy",
        ]}
        schemaFields={[
          "id",
          "product_id",
          "warehouse_id",
          "bin_location",
          "quantity_on_hand",
          "quantity_reserved",
          "safety_stock",
          "reorder_point",
          "last_counted_at",
        ]}
      />
    </div>
  );
}
