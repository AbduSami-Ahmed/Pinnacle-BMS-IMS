import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function LeadsPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Sales Leads & Counter Inquiries"
        subtitle="Manage inbound phone RFQs, counter walk-ins, and online part requests."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Leads" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Leads & Counter Inquiries Pipeline"
        moduleCategory="Sales Enablement"
        description="Fast-response pipeline designed for parts counter staff to record incoming phone inquiries, verify fitment, and convert garage inquiries into formal quotes with one click."
        plannedCapabilities={[
          "Quick counter intake form (Customer, Vehicle YMM, Part Description, Urgency)",
          "Direct linkage to catalog search for immediate part availability check",
          "Automated follow-up reminders for high-value fleet and collision shop RFQs",
          "Lost sale tracking and unfulfilled demand reporting (e.g., lost due to out-of-stock)",
          "Conversion tracking from phone inquiry to Quote to Picked Order",
          "Staff attribution and counter sales performance tracking",
        ]}
        plannedEndpoints={[
          "GET /api/v1/leads?status={open|quoted|closed}",
          "POST /api/v1/leads",
          "POST /api/v1/leads/{id}/convert-to-quote",
          "PATCH /api/v1/leads/{id}/status",
        ]}
        schemaFields={[
          "id",
          "contact_name",
          "company_name",
          "phone",
          "email",
          "source",
          "vehicle_id",
          "parts_requested",
          "urgency",
          "status",
          "assigned_user_id",
        ]}
      />
    </div>
  );
}
