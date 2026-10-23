import {
  PartItem,
  PendingOrder,
  SalesLead,
  SalesChannel,
  ActivityEvent,
  StockSummaryStats
} from "@/types";

/**
 * DEMO DATA NOTICE:
 * This dataset provides realistic automotive parts shop inventory, sales, and lead information
 * for client demonstration purposes until the PostgreSQL / NestJS backend pipeline is connected.
 */
export const IS_DEMO_DATA = true;
export const DEMO_DATA_SOURCE = "Isolated Client Demo Fixture (Simulated Store #01 Data)";

export const DEMO_SUMMARY_STATS: StockSummaryStats = {
  totalSkus: 3420,
  inStockCount: 3184,
  lowStockCount: 142,
  outOfStockCount: 94,
  totalValuation: 148250.00,
  ordersPending: 8,
  leadsPending: 5,
  channelsActive: 4,
};

export const DEMO_LOW_AND_OUT_STOCK_PARTS: PartItem[] = [
  {
    id: "part-001",
    sku: "BRK-7402-C",
    oemNumber: "04465-33450",
    name: "Ceramic Front Brake Pad Set (D1078)",
    category: "Brakes & Friction",
    vehicleFitment: "2018-2023 Toyota Camry, 2019-2022 Avalon",
    binLocation: "A-12-03",
    onHand: 2,
    minThreshold: 10,
    reorderPoint: 15,
    unitCost: 24.50,
    retailPrice: 48.99,
    supplier: "Akebono Aftermarket",
    status: "LOW_STOCK"
  },
  {
    id: "part-002",
    sku: "ROT-1209-F",
    oemNumber: "43512-06150",
    name: "Vented Front Brake Rotor (296mm)",
    category: "Brakes & Friction",
    vehicleFitment: "2018-2023 Toyota Camry / RAV4 2.5L",
    binLocation: "A-14-01",
    onHand: 0,
    minThreshold: 8,
    reorderPoint: 12,
    unitCost: 38.00,
    retailPrice: 74.50,
    supplier: "Brembo Distributing",
    status: "OUT_OF_STOCK"
  },
  {
    id: "part-003",
    sku: "FLT-0982-SYN",
    oemNumber: "26300-35505",
    name: "Spin-On Synthetic Engine Oil Filter",
    category: "Filters & Lubrication",
    vehicleFitment: "2015-2023 Hyundai Elantra, Kia Forte 2.0L",
    binLocation: "B-03-02",
    onHand: 4,
    minThreshold: 24,
    reorderPoint: 36,
    unitCost: 4.25,
    retailPrice: 9.99,
    supplier: "Wix Filters NA",
    status: "LOW_STOCK"
  },
  {
    id: "part-004",
    sku: "ALT-8812-OEM",
    oemNumber: "104210-2070",
    name: "Alternator 150 Amp High Output Reman",
    category: "Electrical & Ignition",
    vehicleFitment: "2015-2020 Ford F-150 3.5L EcoBoost / 5.0L",
    binLocation: "C-08-01",
    onHand: 0,
    minThreshold: 3,
    reorderPoint: 5,
    unitCost: 115.00,
    retailPrice: 219.00,
    supplier: "Denso Sales Corp",
    status: "OUT_OF_STOCK"
  },
  {
    id: "part-005",
    sku: "SPK-4421-IR",
    oemNumber: "ILKAR7B11",
    name: "Laser Iridium Spark Plug (Pack of 4)",
    category: "Electrical & Ignition",
    vehicleFitment: "2016-2022 Honda Civic 1.5L Turbo, CR-V",
    binLocation: "B-09-04",
    onHand: 3,
    minThreshold: 16,
    reorderPoint: 24,
    unitCost: 19.80,
    retailPrice: 42.50,
    supplier: "NGK Spark Plugs USA",
    status: "LOW_STOCK"
  },
  {
    id: "part-006",
    sku: "SUS-3190-ST",
    oemNumber: "172526",
    name: "Quick-Strut Complete Front Assembly",
    category: "Suspension & Steering",
    vehicleFitment: "2014-2019 Chevrolet Silverado 1500 4WD",
    binLocation: "D-02-01",
    onHand: 1,
    minThreshold: 4,
    reorderPoint: 6,
    unitCost: 92.00,
    retailPrice: 178.00,
    supplier: "Monroe Commercial",
    status: "LOW_STOCK"
  },
  {
    id: "part-007",
    sku: "WMP-5510-KIT",
    oemNumber: "16100-39466",
    name: "Engine Water Pump with Metal Gasket",
    category: "Cooling & Heating",
    vehicleFitment: "2012-2020 Lexus RX350, Toyota Highlander 3.5L",
    binLocation: "C-04-03",
    onHand: 0,
    minThreshold: 4,
    reorderPoint: 8,
    unitCost: 46.50,
    retailPrice: 94.00,
    supplier: "Aisin World Corp",
    status: "OUT_OF_STOCK"
  },
  {
    id: "part-008",
    sku: "BLT-7801-EPDM",
    oemNumber: "6PK2130",
    name: "Micro-V Serpentine Drive Belt",
    category: "Belts & Hoses",
    vehicleFitment: "Universal Fitment - Multiple GM/Ford 3.6L/3.7L",
    binLocation: "B-11-01",
    onHand: 2,
    minThreshold: 12,
    reorderPoint: 18,
    unitCost: 12.30,
    retailPrice: 28.75,
    supplier: "Gates Corporation",
    status: "LOW_STOCK"
  }
];

export const DEMO_PENDING_ORDERS: PendingOrder[] = [
  {
    id: "ord-1049",
    orderNumber: "ORD-2026-1049",
    customerName: "Apex Collision & Mechanical",
    customerType: "Wholesale Garage",
    itemsCount: 6,
    totalAmount: 485.50,
    status: "AWAITING_PICK",
    priority: "URGENT",
    placedAt: "28m ago",
    vehicleNote: "2020 Honda Civic 1.5T Front End Rebuild"
  },
  {
    id: "ord-1048",
    orderNumber: "ORD-2026-1048",
    customerName: "Express Fleet Services LLC",
    customerType: "Fleet Account",
    itemsCount: 14,
    totalAmount: 1240.00,
    status: "PACKING",
    priority: "NORMAL",
    placedAt: "1h 15m ago",
    vehicleNote: "Ford Transit 250 Van Scheduled Maintenance"
  },
  {
    id: "ord-1047",
    orderNumber: "ORD-2026-1047",
    customerName: "Walk-in Counter (Dave Miller)",
    customerType: "Counter Retail",
    itemsCount: 2,
    totalAmount: 89.20,
    status: "AWAITING_PICK",
    priority: "NORMAL",
    placedAt: "1h 42m ago",
    vehicleNote: "2016 Chevy Cruze Brake Service"
  },
  {
    id: "ord-1046",
    orderNumber: "ORD-2026-1046",
    customerName: "eBay Motors (Buyer: motorhead_99)",
    customerType: "E-Commerce",
    itemsCount: 1,
    totalAmount: 142.00,
    status: "READY_FOR_DISPATCH",
    priority: "SCHEDULED",
    placedAt: "2h 10m ago",
    vehicleNote: "DENSO Fuel Injector Set #INJ-441"
  },
  {
    id: "ord-1045",
    orderNumber: "ORD-2026-1045",
    customerName: "Tony's Euro Repair Works",
    customerType: "Wholesale Garage",
    itemsCount: 4,
    totalAmount: 620.00,
    status: "PACKING",
    priority: "URGENT",
    placedAt: "3h 05m ago",
    vehicleNote: "2017 BMW 330i Cooling System Refresh"
  }
];

export const DEMO_LEADS_FOLLOWUP: SalesLead[] = [
  {
    id: "lead-01",
    contactName: "Marcus Sterling (Shop Foreman)",
    companyName: "Sterling Fleet Maintenance",
    source: "Phone Inbound",
    partRequested: "12x Heavy-Duty 12V AGM Batteries & Starter Units",
    vehicleDetails: "2019-2022 Freightliner M2 Commercial Delivery",
    urgency: "High",
    createdAt: "45m ago",
    status: "NEEDS_QUOTE",
    phone: "(555) 349-8821"
  },
  {
    id: "lead-02",
    contactName: "Elena Rostova",
    companyName: "Precision Alignment & Brake",
    source: "Online RFQ",
    partRequested: "Bulk pallet front ceramic pads (Camry / Civic common sizes)",
    vehicleDetails: "Multi-vehicle standard restock bid",
    urgency: "High",
    createdAt: "1h 30m ago",
    status: "FOLLOW_UP_REQUIRED",
    phone: "(555) 872-4419"
  },
  {
    id: "lead-03",
    contactName: "Kevin O'Connor",
    companyName: "O'Connor Auto Works",
    source: "Counter Visit",
    partRequested: "Dual Mass Flywheel & Clutch Kit cross-reference check",
    vehicleDetails: "2015 Audi A4 2.0T Quattro Manual",
    urgency: "Medium",
    createdAt: "2h 45m ago",
    status: "FITMENT_VERIFICATION",
    phone: "(555) 219-5503"
  },
  {
    id: "lead-04",
    contactName: "Samir Patel",
    companyName: "Patel Motors Used Cars",
    source: "Phone Inbound",
    partRequested: "Pre-purchase inspection parts bundle: plugs, filters, rotors",
    vehicleDetails: "2018 Subaru Outback 2.5L",
    urgency: "Standard",
    createdAt: "4h ago",
    status: "QUOTED",
    phone: "(555) 604-9188"
  },
  {
    id: "lead-05",
    contactName: "Robert Hughes",
    companyName: "Hughes Landscaping LLC",
    source: "Fleet Contact",
    partRequested: "Trailer brake assemblies and 7-way junction harnesses",
    vehicleDetails: "Commercial utility equipment trailers",
    urgency: "Medium",
    createdAt: "5h ago",
    status: "NEEDS_QUOTE",
    phone: "(555) 781-3320"
  }
];

export const DEMO_SALES_CHANNELS: SalesChannel[] = [
  {
    id: "ch-counter",
    name: "Main Counter POS",
    type: "Physical Counter",
    status: "HEALTHY",
    lastSync: "Real-time (Active)",
    ordersToday: 26,
    revenueToday: 3840.50
  },
  {
    id: "ch-wholesale",
    name: "Wholesale B2B Portal",
    type: "Wholesale Portal",
    status: "HEALTHY",
    lastSync: "3m ago",
    ordersToday: 9,
    revenueToday: 4920.00
  },
  {
    id: "ch-ebay",
    name: "eBay Motors Storefront",
    type: "eBay Motors",
    status: "HEALTHY",
    lastSync: "6m ago",
    ordersToday: 5,
    revenueToday: 680.20
  },
  {
    id: "ch-web",
    name: "Web Shop / Shopify Sync",
    type: "Shopify Store",
    status: "SYNCING",
    lastSync: "Syncing queue (2 pending)",
    ordersToday: 3,
    revenueToday: 410.00
  }
];

export const DEMO_RECENT_ACTIVITY: ActivityEvent[] = [
  {
    id: "act-1",
    timestamp: "12m ago",
    type: "STOCK_PICKED",
    title: "Order #1048 Picked",
    description: "6 items picked from aisle B and C by Warehouse Team",
    operator: "J. Davies"
  },
  {
    id: "act-2",
    timestamp: "34m ago",
    type: "STOCK_RECEIVED",
    title: "Supplier Shipment Dock 1",
    description: "Received 32x Wix Oil Filters (FLT-0982-SYN) from Wix NA",
    operator: "M. Vance"
  },
  {
    id: "act-3",
    timestamp: "1h 10m ago",
    type: "QUOTE_GENERATED",
    title: "Wholesale Quote #QT-891",
    description: "Dispatched estimate for $620.00 to Tony's Euro Repair",
    operator: "M. Vance"
  },
  {
    id: "act-4",
    timestamp: "2h 25m ago",
    type: "CORE_RETURN",
    title: "Alternator Core Logged",
    description: "Logged $45.00 refundable core return credit for Apex Collision",
    operator: "D. Miller"
  },
  {
    id: "act-5",
    timestamp: "3h 40m ago",
    type: "INVENTORY_AUDIT",
    title: "Bin Cycle Count: A-12",
    description: "Cycle count verified 2 units on hand for BRK-7402-C",
    operator: "J. Davies"
  }
];
