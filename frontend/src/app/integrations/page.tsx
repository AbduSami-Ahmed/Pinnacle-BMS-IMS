import * as React from "react";
import { BreadcrumbsRegion } from "@/components/layout/BreadcrumbsRegion";
import { NotImplementedPlaceholder } from "@/components/common/NotImplementedPlaceholder";

export default function IntegrationsPage() {
  return (
    <div>
      <BreadcrumbsRegion
        title="Integrations & Sales Channels"
        subtitle="Manage connectors for eBay Motors, Shopify, Mitchell 1 / Epicor, and carrier APIs."
        breadcrumbs={[
          { label: "Dashboard", href: "/" },
          { label: "Integrations" },
        ]}
      />

      <NotImplementedPlaceholder
        moduleName="Channel & API Integrations Hub"
        moduleCategory="System Connectors"
        description="Unified connector hub synchronizing parts inventory, pricing, and orders across online marketplaces, electronic parts catalogs (EPC), and shop management systems."
        plannedCapabilities={[
          "eBay Motors API connector: automated listing creation with compatibility charts",
          "Shopify / WooCommerce sync: near real-time stock levels and automated order pull",
          "Automotive industry EPC connectors (Epicor LaserCat, WHI Nexpart, Mitchell 1)",
          "Carrier rate shopping & label generation (FedEx, UPS, Regional Freight)",
          "Supplier electronic ordering (EDI 850/855/856/810) for automated replenishment",
          "Webhook subscriptions and sync error retry queues with logging",
        ]}
        plannedEndpoints={[
          "GET /api/v1/integrations/status",
          "POST /api/v1/integrations/sync/{channelId}",
          "GET /api/v1/integrations/webhooks/logs",
          "PUT /api/v1/integrations/settings/{channelId}",
        ]}
        schemaFields={[
          "id",
          "channel_name",
          "channel_type",
          "api_credentials_encrypted",
          "sync_frequency_minutes",
          "last_synced_at",
          "is_active",
          "error_count",
        ]}
      />
    </div>
  );
}
