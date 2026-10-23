# Auto Parts Hub (Pinnacle-BMS-IMS)

Central auto-parts Business Management System (BMS) and Inventory Management System (IMS) connecting counter sales, wholesale garage accounts, and multi-channel eCommerce catalogs.

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript (strict mode)
- **Styling**: Tailwind CSS v4, Lucide Icons
- **Planned Backend**: NestJS REST API, PostgreSQL + Prisma ORM
- **Deployment Strategy**: Docker Compose, GitHub Actions, AWS

## Visual System & Design Foundation
- Clean, conventional business-application layout tailored for automotive parts operations
- White and light-grey surfaces (`#F8FAFC` page background, `#FFFFFF` cards and tables)
- Dark, readable typography (`#0F172A` text), subtle borders (`#E2E8F0`), modest corner radii (`rounded-md`), minimal shadows
- High-contrast semantic status labels (In Stock, Low Stock, Out of Stock, Urgent, Awaiting Pick)
- Accessible focus rings on all interactive elements (`focus-visible:ring-2 focus-visible:ring-blue-600`)

## Application Shell & Navigation
- Collapsible sidebar with quick-access badges and category grouping
- Top navigation with search bar, branch selector, notifications preview, demo mode indicator, and parts manager profile
- Breadcrumbs and action headers across all pages
- Responsive drawer for mobile and tablet devices

## Navigation Shells
1. **Dashboard** (`/`) - Operational overview, inventory alerts, orders queue, commercial leads, and channel status
2. **Products** (`/products`) - OEM cross-reference matrix, superseded part chains, multi-tier price books
3. **Inventory** (`/inventory`) - Warehouse bin locations (aisle/shelf/bin), cycle counting, threshold triggers
4. **Customers** (`/customers`) - Commercial garage accounts, credit terms, and delivery routes
5. **Vehicles** (`/vehicles`) - 17-digit VIN decoding, Year/Make/Model hierarchy, and ACES/PIES compatibility
6. **Leads** (`/leads`) - Counter walk-in RFQs, phone inquiry logging, and quote conversion
7. **Quotes** (`/quotes`) - Multi-line price estimates, core deposit calculations, and PDF generation
8. **Orders** (`/orders`) - Point-of-Sale orders, warehouse pick lists, and driver dispatch manifests
9. **Invoices** (`/invoices`) - Commercial trade billing, payment reconciliation, aging reports, core credits
10. **Integrations** (`/integrations`) - eBay Motors sync, Shopify connector, electronic parts catalogs (EPC)
11. **Reports** (`/reports`) - Fast/slow/dead stock velocity, category margins, and channel performance
12. **Settings** (`/settings`) - Branch management, sales tax jurisdictions, user roles, reorder formulas

## Available Commands
```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run TypeScript type check
npm run typecheck

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Start production server
npm start
```
