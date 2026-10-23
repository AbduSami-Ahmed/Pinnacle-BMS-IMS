import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function SettingsPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Store & System Settings"
        subtitle="Manage warehouse locations, tax jurisdictions, user roles, and safety stock defaults."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Settings" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Store & System Configuration"
        moduleCategory="Administration"
        description="Centralized administration for multi-location automotive businesses: define warehouse branch structures, sales tax rules, role-based staff permissions, and reorder algorithms."
        plannedCapabilities={[
          "Multi-branch and warehouse location management (Branches, Counters, Docks)",
          "State/County sales tax rates and tax-exempt resale certificate rules",
          "Role-based access control (Store Manager, Counter Sales, Warehouse Picker, Bookkeeper)",
          "Global inventory threshold rules and automated safety stock calculation formulas",
          "Invoice print formatting, company letterhead, and thermal receipt printer settings",
          "Audit logs for critical inventory overrides, price adjustments, and write-offs",
        ]}
        plannedEndpoints={[
          "GET /api/v1/settings/branches",
          "PUT /api/v1/settings/tax-rules",
          "GET /api/v1/settings/users-permissions",
          "PUT /api/v1/settings/inventory-thresholds",
        ]}
        schemaFields={[
          "id",
          "store_name",
          "tax_id",
          "default_warehouse_id",
          "currency",
          "reorder_formula",
          "allow_negative_stock",
          "require_manager_override_on_discount",
        ]}
      />
    </div>
  );
}
