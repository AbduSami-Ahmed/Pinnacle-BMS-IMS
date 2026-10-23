import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: "healthy",
      service: "Auto Parts Hub REST API",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      modules: [
        "Products & Catalog",
        "Inventory & Bins",
        "Customers & Trade Accounts",
        "Vehicles & Fitment (ACES/PIES)",
        "Leads & RFQs",
        "Quotes & Estimates",
        "Orders & POS",
        "Invoices & Receivables",
        "Integrations (eBay Motors / Shopify)",
        "Reports & Turnover Analytics",
      ],
    };
  }

  getDemoSummary() {
    return {
      storeName: "Auto Parts Hub - Store #01 (Central Warehouse)",
      status: "operational",
      activeChannels: 4,
      totalCatalogSkus: 3420,
      inventoryValuation: 148250.00,
      stockAttentionRequired: {
        outOfStock: 94,
        lowStock: 142,
      },
      ordersAwaitingPick: 8,
      leadsPendingFollowUp: 5,
    };
  }
}
