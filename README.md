# Auto Parts Hub (Pinnacle-BMS-IMS)

Central auto-parts Business Management System (BMS) and Inventory Management System (IMS) connecting showroom counter sales, wholesale commercial garage accounts, and multi-channel eCommerce catalogs.

## Monorepo Architecture

```text
Pinnacle-BMS-IMS/
├── frontend/                  # Next.js 16 + React 19 + Tailwind CSS + Lucide Icons
│   ├── src/
│   │   ├── app/               # App Router pages (Dashboard & 11 Navigation Shells)
│   │   ├── components/        # UI primitives, application shell, dashboard widgets
│   │   ├── data/              # Isolated demo dataset fixture
│   │   ├── lib/               # Utility functions (formatting, clsx/twMerge)
│   │   └── types/             # Domain TypeScript definitions
│   ├── package.json           # Frontend scripts ("dev": "next dev" on port 3000)
│   └── tsconfig.json
│
├── backend/                   # NestJS REST API + PostgreSQL + Prisma ORM
│   ├── prisma/
│   │   └── schema.prisma      # PostgreSQL models (Parts, Categories, Orders, Leads, etc.)
│   ├── src/
│   │   ├── prisma/            # PrismaService lifecycle connection
│   │   ├── app.controller.ts  # REST endpoints (/api/v1/health, /api/v1/summary)
│   │   ├── app.service.ts     # Business logic
│   │   ├── app.module.ts      # NestJS root module
│   │   └── main.ts            # API Server bootstrap on port 5000 with CORS
│   ├── .env.example           # Environment variables template
│   ├── .env                   # Local development configuration
│   ├── package.json           # Backend scripts ("dev": "tsx watch src/main.ts")
│   └── tsconfig.json
│
└── package.json               # Root workspace orchestrator with dev scripts
```

---

## How to Run Locally in PowerShell

You can run the applications either individually in separate PowerShell terminal windows or together concurrently from the root directory.

### Option A: Run Both Together from Root Terminal
From the project root (`Pinnacle-BMS-IMS/`):
```powershell
npm run dev
```
*(Runs both frontend on `http://localhost:3000` and backend API on `http://localhost:5000` concurrently with live reloading).*

---

### Option B: Run in Separate PowerShell Terminals

#### Terminal 1 — Frontend (Next.js Application)
```powershell
cd frontend
npm run dev
```
> **Frontend URL**: `http://localhost:3000`

#### Terminal 2 — Backend (NestJS REST API)
```powershell
cd backend
npm run dev
```
> **Backend API URL**: `http://localhost:5000/api/v1`  
> **Health Check Endpoint**: `http://localhost:5000/api/v1/health`  
> **Business Summary Endpoint**: `http://localhost:5000/api/v1/summary`

---

## Additional Available Commands

### Build Both Projects
```powershell
npm run build
```

### Typecheck & Lint
```powershell
# Typecheck both frontend and backend
npm run typecheck

# Run frontend ESLint
npm run lint
```

### Prisma Commands (Backend)
```powershell
cd backend
# Generate Prisma Client
npm run prisma:generate

# Run development migrations against PostgreSQL
npm run prisma:migrate
```
