export type StockStatus = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK" | "ON_ORDER";

export interface PartItem {
  id: string;
  sku: string;
  oemNumber: string;
  name: string;
  category: string;
  vehicleFitment: string;
  binLocation: string;
  onHand: number;
  minThreshold: number;
  reorderPoint: number;
  unitCost: number;
  retailPrice: number;
  supplier: string;
  status: StockStatus;
}

export type OrderFulfillmentStatus = 
  | "AWAITING_PICK" 
  | "PACKING" 
  | "READY_FOR_DISPATCH" 
  | "DISPATCHED";

export type CustomerType = 
  | "Wholesale Garage" 
  | "Counter Retail" 
  | "E-Commerce" 
  | "Fleet Account";

export interface PendingOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  customerType: CustomerType;
  itemsCount: number;
  totalAmount: number;
  status: OrderFulfillmentStatus;
  priority: "URGENT" | "NORMAL" | "SCHEDULED";
  placedAt: string;
  vehicleNote: string;
}

export type LeadStatus = 
  | "NEEDS_QUOTE" 
  | "FITMENT_VERIFICATION" 
  | "FOLLOW_UP_REQUIRED" 
  | "QUOTED";

export interface SalesLead {
  id: string;
  contactName: string;
  companyName?: string;
  source: "Phone Inbound" | "Counter Visit" | "Online RFQ" | "Fleet Contact";
  partRequested: string;
  vehicleDetails: string;
  urgency: "High" | "Medium" | "Standard";
  createdAt: string;
  status: LeadStatus;
  phone: string;
}

export type ChannelSyncStatus = "HEALTHY" | "SYNCING" | "NEEDS_ATTENTION";

export interface SalesChannel {
  id: string;
  name: string;
  type: "Physical Counter" | "Wholesale Portal" | "eBay Motors" | "Shopify Store";
  status: ChannelSyncStatus;
  lastSync: string;
  ordersToday: number;
  revenueToday: number;
}

export type ActivityType = 
  | "STOCK_PICKED" 
  | "STOCK_RECEIVED" 
  | "QUOTE_GENERATED" 
  | "CORE_RETURN" 
  | "INVENTORY_AUDIT";

export interface ActivityEvent {
  id: string;
  timestamp: string;
  type: ActivityType;
  title: string;
  description: string;
  operator: string;
}

export interface StockSummaryStats {
  totalSkus: number;
  inStockCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  totalValuation: number;
  ordersPending: number;
  leadsPending: number;
  channelsActive: number;
}
