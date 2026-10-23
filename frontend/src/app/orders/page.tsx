import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function OrdersPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Orders & Fulfilment Processing"
        subtitle="Manage counter point-of-sale orders, wholesale garage dispatches, and marketplace picks."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Orders" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Orders & Warehouse Fulfilment"
        moduleCategory="Order Management"
        description="End-to-end sales order processing covering counter POS transactions, warehouse pick list generation, packing slips, driver route manifests, and marketplace fulfillment."
        plannedCapabilities={[
          "Counter Point-of-Sale (POS) barcode scanning and instant cash/card receipting",
          "Automated warehouse pick sheet generation optimized by bin location sequence",
          "Commercial garage delivery driver dispatch manifests with delivery sign-off",
          "Partial fulfillment and backorder management with automatic customer notification",
          "Integration with shipping carriers (FedEx, UPS, regional hot-shot couriers)",
          "Returned merchandise authorization (RMA) and warranty return processing",
        ]}
        plannedEndpoints={[
          "GET /api/v1/orders?status={awaiting_pick|packing|dispatched}",
          "POST /api/v1/orders",
          "PATCH /api/v1/orders/{id}/fulfillment-status",
          "GET /api/v1/orders/{id}/pick-sheet",
        ]}
        schemaFields={[
          "id",
          "order_number",
          "customer_id",
          "channel_id",
          "fulfillment_status",
          "payment_status",
          "total_items",
          "subtotal",
          "shipping_cost",
          "total_amount",
          "created_at",
        ]}
      />
    </div>
  );
}
