<div align="center">

# 🏗️ DeskOps

### Construction & Demolition Recycling Facility Management System

*A production-ready, enterprise-grade facility management platform for C&D recycling operations*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Nx](https://img.shields.io/badge/Nx-Monorepo-143055?logo=nx)](https://nx.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-316192?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](./LICENSE)

[📚 Documentation](./docs) • [🚀 Quick Start](#-quick-start) • [🏗️ Architecture](#-architecture) • [🧪 Testing](#-testing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**DeskOps** is a comprehensive facility management system designed specifically for Construction & Demolition (C&D) recycling operations. Built with modern web technologies and following enterprise-grade best practices, it provides real-time tracking, analytics, and reporting for:

- 📦 **Materials Inventory** — Real-time stock tracking with automated calculations
- 🏭 **Production Monitoring** — Daily crusher production metrics and efficiency tracking
- 🚚 **Dispatch Management** — Transaction records for material shipments and customer orders
- ♻️ **Recycling Tracking** — Received materials (CDW) intake and processing logs
- ⚙️ **Equipment Utilization** — Operational hours, maintenance, and performance analytics
- 👷 **Manpower Attendance** — Shift-based headcount and labor hours tracking
- 📊 **Dashboard Analytics** — KPI metrics, trends, and interactive data visualizations
- 📁 **Export Capabilities** — Excel, PDF, and CSV reports with Power BI integration

### Business Value

- **Real-time Visibility** — Instant access to inventory levels, production rates, and operational metrics
- **Data-Driven Decisions** — Interactive charts and KPI cards for strategic planning
- **Audit Compliance** — Complete audit trail for all transactions and exports
- **Multi-Site Support** — Manage multiple facilities from a single platform
- **Role-Based Access** — Granular permissions for operators, moderators, and administrators

---

## ✨ Key Features

### 📊 Real-Time Dashboard
- **4 KPI Metric Cards** with animated counters and trend indicators
- **5 Interactive Charts** (Line, Area, Bar, Composed) with tooltips and zoom
- **Live Data Updates** via Server-Sent Events (SSE) every 60 seconds
- **Responsive Design** — Optimized for desktop, tablet, and mobile

### 🔐 Authentication & Authorization
- **Clerk Integration** — Secure authentication with social logins
- **Role-Based Access Control** — Admin, Moderator, Operator roles
- **Multi-Site Permissions** — Site-level data isolation and access control
- **Session Management** — Automatic token refresh and secure logout

### 📈 Advanced Analytics
- **Production vs Target** — Compare actual output against daily goals
- **Received vs Dispatched** — Track material flows with net calculations
- **Inventory Trends** — Area charts with threshold bands and predictions
- **Equipment Efficiency** — Utilization heatmaps and breakdown analysis
- **Manpower Analytics** — Shift-based attendance and labor distribution

### 🎨 Modern UI/UX
- **Flat UI Design** — Clean, data-first interface with subtle elevation
- **Dark/Light Themes** — Automatic theme switching with user preferences
- **Smooth Animations** — Stagger cascade effects and micro-interactions
- **Accessibility** — WCAG 2.1 AA compliant with keyboard navigation

### 📦 Export System
- **Multiple Formats** — Excel (.xlsx), PDF (.pdf), CSV (.csv), Power BI CSV
- **Background Processing** — Async job queue with progress tracking
- **Smart Filtering** — Date ranges, modules, granularity (daily/weekly/monthly)
- **Rate Limiting** — Max 5 active jobs per user for fair resource allocation
- **Secure Downloads** — Signed URLs with 24-hour expiry and SHA-256 hashing

---

## 🛠 Technology Stack

<table>
<tr>
<td width="33%" valign="top">

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.9](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **State:** [Zustand](https://zustand-demo.pmnd.rs/) + [React Query](https://tanstack.com/query)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts:** [Recharts](https://recharts.org/)

</td>
<td width="33%" valign="top">

### Backend
- **Runtime:** [Bun](https://bun.sh/)
- **Database:** [PostgreSQL 17](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **API:** Next.js API Routes + Server Actions
- **Validation:** Zod schemas
- **Job Queue:** BullMQ + Redis (planned)

</td>
<td width="33%" valign="top">

### DevOps
- **Monorepo:** [Nx](https://nx.dev/)
- **Package Manager:** Bun
- **Testing:** [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **Linting:** ESLint + Prettier
- **Git Hooks:** Husky + lint-staged
- **CI/CD:** GitHub Actions (planned)
- **Hosting:** Vercel (planned)

</td>
</tr>
</table>

---

## 🏗️ Architecture

### Nx Monorepo Structure

```
ws-ops/
├── apps/
│   ├── web/                          # Next.js 16 application
│   │   ├── src/
│   │   │   ├── app/                  # App Router pages
│   │   │   │   ├── dashboard/        # Main dashboard
│   │   │   │   ├── production/       # Production tracking
│   │   │   │   ├── dispatch/         # Dispatch management
│   │   │   │   ├── received/         # Received materials
│   │   │   │   ├── equipment/        # Equipment logs
│   │   │   │   ├── manpower/         # Manpower attendance
│   │   │   │   ├── inventory/        # Inventory snapshots
│   │   │   │   └── api/              # API routes
│   │   │   ├── components/           # React components
│   │   │   │   ├── forms/            # Form components
│   │   │   │   ├── charts/           # Chart components
│   │   │   │   ├── layout/           # Layout components
│   │   │   │   └── ui/               # Base UI components
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   ├── lib/                  # Utilities & configs
│   │   │   ├── stores/               # Zustand stores
│   │   │   └── types/                # TypeScript types
│   │   ├── public/                   # Static assets
│   │   └── prisma/                   # Database schema
│   └── web-e2e/                      # Playwright E2E tests
├── packages/
│   ├── ui/                           # Shared UI components
│   ├── constants/                    # Centralized constants (SSOT)
│   ├── database/                     # Prisma client & schemas
│   └── eslint-config/                # Shared ESLint config
├── docs/                             # Documentation
├── nx.json                           # Nx configuration
├── package.json                      # Root package.json
└── tsconfig.json                     # Root TypeScript config
```

### Core Design Principles

#### 1. GZANSP × AOC Compliance
- ✅ **Zero Assumptions** — Every decision cites explicit source
- ✅ **No `any` Types** — Strict TypeScript with concrete types only
- ✅ **SSOT** — All constants imported from `@deskops/constants`
- ✅ **No API Versioning** — Use `/api/[module]/[resource]` format only
- ✅ **Method-First** — Single method per operation using adapter pattern

#### 2. Database Schema (PostgreSQL + Prisma)
- **Transaction Tables**: Production, Dispatch, ReceivedMaterial, EquipmentLog, ManpowerLog
- **Master Tables**: Site, Material, Equipment, ManpowerRole
- **Calculated Tables**: InventorySnapshot, DashboardMetric
- **Audit Tables**: ExportJob, ExportAudit

#### 3. Inventory Calculation Formula
```typescript
inventory = production + received - dispatched
// Or for daily snapshots:
closingStock = openingStock + production + received - dispatched + adjustment
```

#### 4. API Route Pattern
```
/api/production           # List all production entries
/api/production/[id]      # Get/Update/Delete specific entry
/api/dispatch             # List all dispatch transactions
/api/dispatch/[id]        # Get/Update/Delete specific transaction
/api/received             # List received materials
/api/equipment            # Equipment logs
/api/manpower             # Manpower attendance
/api/inventory            # Inventory snapshots
/api/dashboard/metrics    # Dashboard KPIs
/api/exports              # Export job management
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0
- **Bun** >= 1.2.0
- **PostgreSQL** >= 17.0
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/silentmot/ws-ops.git
   cd ws-ops
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Setup environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and fill in required variables:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/deskops_dev"
   DIRECT_URL="postgresql://user:password@localhost:5432/deskops_dev"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
   CLERK_SECRET_KEY="sk_test_..."

   # App Configuration
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   NODE_ENV="development"
   ```

4. **Initialize database**

   ```bash
   # Generate Prisma client
   bun run db:generate

   # Run migrations
   bun run db:migrate

   # Seed database with initial data
   bun run db:seed
   ```

5. **Initialize Git hooks**

   ```bash
   bun run prepare
   ```

6. **Start development server**

   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💻 Development

### Available Commands

```bash
# Development
bun run dev              # Start Next.js dev server with Turbopack
bun run build            # Build all projects for production
bun run start            # Start production server

# Code Quality
bun run lint             # Lint all projects
bun run type-check       # TypeScript type checking
bun run format           # Format code with Prettier

# Testing
bun run test             # Run unit tests (Vitest)
bun run test:ui          # Run tests with UI
bun run test:e2e         # Run E2E tests (Playwright)
bun run test:e2e:ui      # Run E2E tests with UI

# Database
bun run db:generate      # Generate Prisma client
bun run db:migrate       # Run database migrations
bun run db:seed          # Seed database with sample data
bun run db:studio        # Open Prisma Studio (database GUI)

# Utilities
bun run clean            # Clean build artifacts (.next, .nx)
bunx nx graph            # View project dependency graph
bunx nx reset            # Reset Nx cache
```

### Nx Workspace Commands

```bash
# Run tasks for specific project
bunx nx dev web          # Start web app dev server
bunx nx build web        # Build web app
bunx nx test web         # Test web app
bunx nx lint web         # Lint web app

# Run tasks for multiple projects
bunx nx run-many -t build     # Build all projects
bunx nx run-many -t test      # Test all projects

# Run tasks for affected projects only
bunx nx affected:test         # Test affected by changes
bunx nx affected:build        # Build affected by changes

# View project details
bunx nx show project web      # Show web project details
bunx nx show projects         # List all projects
```

### Project Structure Guidelines

#### Component Organization
```typescript
// components/forms/production-form.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductionSchema } from '@deskops/database';
import { MATERIALS, getMaterialById } from '@deskops/constants';

export function ProductionForm() {
  const form = useForm({
    resolver: zodResolver(ProductionSchema),
  });
  // ...
}
```

#### Custom Hooks
```typescript
// hooks/use-production.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { ProductionSchema } from '@deskops/database';

export function useProduction(siteId: string) {
  return useQuery({
    queryKey: ['production', siteId],
    queryFn: () => fetchProduction(siteId),
  });
}
```

#### Server Actions
```typescript
// app/actions/production.ts
'use server';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';

export async function createProduction(data: ProductionInput) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: 'Unauthorized' };
  // ...
}
```

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
# Run all unit tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with coverage
bun run test:coverage

# Run tests with UI
bun run test:ui
```

### E2E Tests (Playwright)

```bash
# Run all E2E tests
bun run test:e2e

# Run E2E tests with UI
bun run test:e2e:ui

# Run specific test file
bunx playwright test auth.spec.ts

# Run tests in specific browser
bunx playwright test --project=chromium
```

### Test Structure

```
apps/web/src/
├── components/
│   └── forms/
│       └── __tests__/
│           └── production-form.test.tsx
├── hooks/
│   └── __tests__/
│       └── use-production.test.ts
└── lib/
    └── exporters/
        └── __tests__/
            └── excel.test.ts

apps/web-e2e/src/
├── auth.spec.ts
├── production.spec.ts
├── dashboard.spec.ts
└── export.spec.ts
```

---

## 🚢 Deployment

### Environment Setup

1. **Production Environment Variables**

   ```env
   # Production Database (Vercel Postgres, Supabase, etc.)
   DATABASE_URL="postgresql://..."
   DIRECT_URL="postgresql://..."

   # Clerk Production Keys
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
   CLERK_SECRET_KEY="sk_live_..."

   # Production URLs
   NEXT_PUBLIC_APP_URL="https://deskops.app"
   NODE_ENV="production"

   # Optional: Redis for job queue
   REDIS_URL="redis://..."
   ```

2. **Vercel Deployment**

   ```bash
   # Install Vercel CLI
   bun add -g vercel

   # Deploy to preview
   vercel

   # Deploy to production
   vercel --prod
   ```

3. **Database Migration**

   ```bash
   # Run migrations on production
   bunx prisma migrate deploy

   # Seed production data (if needed)
   bunx prisma db seed
   ```

### Build Optimization

- **Next.js Build**: `bunx nx build web`
- **Static Exports**: Configure in `next.config.ts`
- **Edge Functions**: API routes automatically deployed to Edge
- **Image Optimization**: Next.js Image component with CDN
- **Bundle Analysis**: Set `ANALYZE=true` environment variable

---

## 📚 Documentation

### Complete Documentation Set

- **[Implementation Plan](./docs/DeskOps-ImplementationPlan.md)** — Remaining phases breakdown
- **[Configuration Guide](./docs/DeskOps-Configuration.md)** — Nx, TypeScript, Tailwind setup
- **[Constants Reference](./docs/DeskOps-constants.md)** — SSOT for materials, equipment, roles
- **[Database Schema](./docs/DeskOps-DB-Prisma.md)** — Prisma models and relationships
- **[Backend Guide](./docs/DeskOps-Backend.md)** — API routes and server actions
- **[Frontend Guide](./docs/DeskOps-Frontend.md)** — Components and hooks
- **[Hooks Guide](./docs/DeskOps-Hooks.md)** — Custom React hooks
- **[Interface Overview](./docs/DeskOps-Interface-Overview.md)** — UI/UX specifications

### Key Concepts

#### Materials Catalog (17 Materials)
- **Aggregates** (9) — 3/4, 1/2, 3/8, 2, 1.5, 1, 3/16, 1/16, 0-5mm
- **Fine** (2) — Sand, Powder
- **Specialty** (1) — Oversize
- **Processed Base** (2) — Subbase, A1A
- **Raw Feed** (3) — Feed, CDW, Pure (not sellable)

#### Equipment Catalog (9 Items)
- **Crushing/Screening** — Static Crusher, Mobile Screen
- **Earth Moving** — Front Loader, Bulldozer, Excavator
- **Hauling** — Dumper, Dyna
- **Auxiliary** — Grader, Winch

#### Manpower Roles (5 Roles)
- Equipment Driver
- Crusher Operator
- Maintenance Worker
- Laborer
- Security

---

## 🤝 Contributing

### Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes following conventions**
   - Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
   - Run `bun run lint` before committing
   - Ensure all tests pass: `bun run test`

3. **Commit with pre-commit hooks**

   ```bash
   git add .
   git commit -m "feat: add production chart component"
   ```

   Husky will automatically:
   - Lint staged files
   - Format code with Prettier
   - Run type checking

4. **Push and create Pull Request**

   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- **TypeScript**: NO `any` types — use explicit types always
- **Imports**: Absolute paths with `@/` or `@deskops/` prefixes
- **Components**: Functional components with TypeScript interfaces
- **Naming**: PascalCase for components, camelCase for functions
- **Formatting**: Prettier with 2-space indentation, single quotes

---

## 📄 License

**Proprietary** — All rights reserved. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

---

## 🙏 Acknowledgments

Built with ❤️ using:
- [Next.js](https://nextjs.org/) by Vercel
- [Nx](https://nx.dev/) by Nrwl
- [Prisma](https://www.prisma.io/) by Prisma Data
- [Clerk](https://clerk.com/) for authentication
- [Radix UI](https://www.radix-ui.com/) for primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

<div align="center">

**[⬆ Back to Top](#-deskops)**

Made with precision and care for C&D recycling operations worldwide.

</div>
