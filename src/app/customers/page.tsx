import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function CustomersPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Customers & Commercial Accounts"
        subtitle="Manage wholesale garage accounts, commercial credit terms, and counter customer profiles."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Customers" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Customer & Commercial Account CRM"
        moduleCategory="Client Relationships"
        description="Comprehensive customer database tailored to automotive trade accounts, fleet managers, collision shops, and retail counter walk-ins."
        plannedCapabilities={[
          "Commercial trade account profiles with assigned pricing tiers (Jobber / Wholesale)",
          "Net-30, Net-60, and COD credit limit management with overdue order holds",
          "Garage delivery addresses, dispatch route grouping, and preferred driver notes",
          "Tax exemption certificate tracking (resale certificates for auto repair shops)",
          "Fleet vehicle garage profiles linked directly to customer accounts",
          "Statement of account generation with automatic periodic email dispatch",
        ]}
        plannedEndpoints={[
          "GET /api/v1/customers?type={commercial|retail}",
          "POST /api/v1/customers",
          "GET /api/v1/customers/{id}/credit-status",
          "GET /api/v1/customers/{id}/vehicles",
        ]}
        schemaFields={[
          "id",
          "account_number",
          "business_name",
          "contact_name",
          "email",
          "phone",
          "pricing_tier",
          "credit_limit",
          "credit_balance",
          "tax_exempt_number",
        ]}
      />
    </div>
  );
}
