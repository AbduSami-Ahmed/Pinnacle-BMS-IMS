import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function ProductsPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Products & Catalog Management"
        subtitle="Central catalog for automotive replacement parts, cross-references, and pricing tiers."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Products" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Products & Parts Catalog"
        moduleCategory="Catalog & Master Data"
        description="Comprehensive parts management engine supporting OEM part cross-referencing, multi-tier pricing (retail, wholesale, garage net), superseding part chains, and manufacturer warranty tracking."
        plannedCapabilities={[
          "OEM to Aftermarket cross-reference matrix (Bosch, ACDelco, Denso, NGK, Monroe)",
          "Superseded and discontinued part mapping with replacement suggestions",
          "Automotive category taxonomy (Brakes, Engine, Filtration, Suspension, Electrical)",
          "Multi-tier price books (Retail MSRP, Jobber, Commercial Fleet, Wholesale Tier 1/2)",
          "Core charge handling and refundable unit deposit tracking",
          "Bulk CSV/Excel catalog import and export with validation rules",
        ]}
        plannedEndpoints={[
          "GET /api/v1/products?search={term}&category={id}",
          "POST /api/v1/products",
          "GET /api/v1/products/{id}/cross-references",
          "PUT /api/v1/products/{id}/pricing-tiers",
        ]}
        schemaFields={[
          "id",
          "sku",
          "oem_number",
          "brand_id",
          "category_id",
          "unit_cost",
          "retail_price",
          "jobber_price",
          "core_deposit",
          "weight_kg",
        ]}
      />
    </div>
  );
}
