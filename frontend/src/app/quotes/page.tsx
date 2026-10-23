import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function QuotesPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Commercial Quotes & Estimates"
        subtitle="Generate and dispatch multi-line price estimates, core deposits, and parts bundles."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Quotes" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Commercial Quotes & Estimates Engine"
        moduleCategory="Sales Operations"
        description="Fast quote builder enabling parts professionals to bundle brake jobs, engine rebuild components, or suspension kits with trade discounts and core charge breakdowns."
        plannedCapabilities={[
          "Instant PDF estimate generation with shop logo, terms, and expiration dates",
          "One-click conversion of accepted quote into active fulfillment Order",
          "Automated wholesale pricing tier application with margin floor safeguards",
          "Core charge deposit breakdown (e.g., $45 core on alternator/starter)",
          "Quote expiration management (e.g. 7-day price guarantee on volatile metals/batteries)",
          "Direct SMS / Email estimate dispatch with client acceptance link",
        ]}
        plannedEndpoints={[
          "GET /api/v1/quotes?status={draft|sent|accepted|expired}",
          "POST /api/v1/quotes",
          "POST /api/v1/quotes/{id}/convert-to-order",
          "GET /api/v1/quotes/{id}/pdf",
        ]}
        schemaFields={[
          "id",
          "quote_number",
          "customer_id",
          "subtotal",
          "core_charges",
          "tax_amount",
          "total_amount",
          "status",
          "valid_until",
          "notes",
        ]}
      />
    </div>
  );
}
