import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function InvoicesPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Invoices & Accounts Receivable"
        subtitle="Commercial trade billing, payment receipts, statement of accounts, and core returns."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Invoices" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Invoicing & Accounts Receivable"
        moduleCategory="Financial Operations"
        description="Trade accounting module designed for automotive wholesale: monthly statement batch billing, credit memo adjustments, core deposit reconciliations, and payment aging."
        plannedCapabilities={[
          "Instant commercial tax invoice generation upon delivery confirmation",
          "Automated monthly batch statement billing for Net-30 / Net-60 repair shops",
          "Credit memo issuance for returned core units (alternators, calipers, steering racks)",
          "Partial payment allocation and aging schedule tracking (Current, 30, 60, 90+ days)",
          "Integration with accounting platforms (QuickBooks Online, Xero)",
          "PDF statement export and automatic email reminder scheduling",
        ]}
        plannedEndpoints={[
          "GET /api/v1/invoices?status={paid|unpaid|overdue}",
          "POST /api/v1/invoices",
          "POST /api/v1/invoices/{id}/payments",
          "GET /api/v1/invoices/aging-report",
        ]}
        schemaFields={[
          "id",
          "invoice_number",
          "order_id",
          "customer_id",
          "due_date",
          "subtotal",
          "core_deposits",
          "tax",
          "amount_paid",
          "balance_due",
          "status",
        ]}
      />
    </div>
  );
}
