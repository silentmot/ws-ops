# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DeskOps** is a Construction & Demolition (C&D) recycling facility management system built as an Nx monorepo using Next.js 16, TypeScript, Prisma, and PostgreSQL. It tracks materials inventory, production, dispatch, equipment utilization, and manpower attendance across multiple facilities.

## Essential Development Commands

### Running the Application
```bash
bun run dev              # Start Next.js dev server (Turbopack)
bun run build            # Build all projects for production
bun run start            # Start production server
```

### Database Operations
```bash
bun run db:generate      # Generate Prisma client (MUST run after schema changes)
bun run db:migrate       # Run database migrations
bun run db:seed          # Seed database with initial data
bun run db:studio        # Open Prisma Studio GUI

# From web app directory (apps/web):
bun run db:generate      # Generate Prisma client for web app
```

### Code Quality
```bash
bun run lint             # Lint all projects
bun run type-check       # TypeScript type checking
bun run format           # Format code with Prettier

# Test commands
bun run test             # Run unit tests (Vitest)
bun run test:ui          # Run tests with UI
bun run test:e2e         # Run E2E tests (Playwright)
```

### Nx Workspace Commands
```bash
# Run tasks for specific project
bunx nx dev web          # Start web app dev server
bunx nx build web        # Build web app
bunx nx test web         # Test web app
bunx nx lint web         # Lint web app

# Run tasks for affected projects only (faster)
bunx nx affected:test    # Test affected by changes
bunx nx affected:build   # Build affected by changes

# Utilities
bunx nx graph            # View project dependency graph
bunx nx reset            # Reset Nx cache (if having issues)
bun run clean            # Clean build artifacts (.next, .nx)
```

## Architecture

### Monorepo Structure

This is an **Nx monorepo** with the following structure:

```
ws-ops/
├── apps/
│   ├── web/              # Next.js 16 App Router application
│   └── web-e2e/          # Playwright E2E tests
├── packages/
│   ├── constants/        # Single Source of Truth (SSOT) for all constants
│   ├── database/         # Prisma schema, client, and Zod schemas
│   ├── ui/               # Shared UI components
│   └── eslint-config/    # Shared ESLint config
```

### Key Architectural Principles

#### 1. GZANSP × AOC Compliance (Strict Development Rules)

- **Zero `any` Types**: NEVER use TypeScript `any`. Every value must have explicit typing.
- **No Assumptions**: Every decision must cite explicit source from constants or schema.
- **Single Source of Truth (SSOT)**: ALL constants MUST be imported from `@deskops/constants`.
- **No API Versioning**: API routes use `/api/[module]/[resource]` format only.
- **Method-First Pattern**: Single HTTP method per operation using adapter pattern.

#### 2. Constants Package (`@deskops/constants`)

**CRITICAL**: This package is the SSOT for ALL business logic constants. NEVER hardcode values.

```typescript
import {
  MATERIALS,           // 17 materials (aggregates, fine, raw feed, etc.)
  EQUIPMENT,           // 9 equipment items
  ROLES,               // 5 manpower roles
  SHIFT_TYPES,         // 3 shifts: MORNING, AFTERNOON, NIGHT
  OPERATION_TYPES,     // 4 operation types: CRU-PRO, CRU-DIS, SEG-OP, CRU-OP
  getMaterialById,     // Helper functions
  getEquipmentByCode,
  isValidMaterialId,
} from '@deskops/constants';
```

#### 3. Database Package (`@deskops/database`)

Centralized Prisma client and Zod schemas:

```typescript
import {
  prisma,              // Singleton Prisma client
  ProductionSchema,    // Zod validation schemas
  DispatchSchema,
  EquipmentLogSchema,
} from '@deskops/database';
```

**Database Models** (12 total):
- **Core Config**: Site, Material, Equipment, ManpowerRole
- **Transactions**: Production, Dispatch, ReceivedMaterial, EquipmentLog, ManpowerLog
- **Calculated**: InventorySnapshot
- **Audit**: ExportJob, ExportAudit

#### 4. Inventory Calculation Formula

**CRITICAL BUSINESS LOGIC**:
```typescript
closingStock = openingStock + production + received - dispatched + adjustment
```

All inventory snapshots MUST follow this formula. This is calculated and stored in `InventorySnapshot` model.

#### 5. Prisma Configuration

The Prisma schema is located at `packages/database/prisma/schema.prisma` (NOT in the standard `prisma/` directory).

Configuration is in `prisma.config.ts`:
- Schema path: `packages/database/prisma/schema.prisma`
- Migrations: `packages/database/prisma/migrations`
- Generated client: `packages/database/src/generated/client`

**After ANY schema changes**:
```bash
bun run db:generate  # MUST run this to regenerate client
```

### API Route Structure

**Pattern**: `/api/[module]/[resource]`

```
/api/production           # List all production entries (GET)
/api/production/[id]      # Get/Update/Delete specific entry (GET/PATCH/DELETE)
/api/dispatch             # List all dispatch transactions (GET)
/api/dispatch/[id]        # Get/Update/Delete specific transaction
/api/received             # List received materials
/api/equipment            # Equipment logs
/api/manpower             # Manpower attendance
/api/inventory            # Inventory snapshots
/api/dashboard/metrics    # Dashboard KPIs
/api/exports              # Export job management
```

### Server Actions Pattern

Server Actions are in `apps/web/src/app/actions/[module].ts`:

```typescript
'use server';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@deskops/database';

export async function createProduction(data: ProductionInput) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: 'Unauthorized' };

  // Validate with Zod schema
  const validated = ProductionSchema.parse(data);

  // Create in database
  const production = await prisma.production.create({
    data: { ...validated, createdBy: userId },
  });

  revalidatePath('/dashboard/production');
  return { success: true, data: production };
}
```

### Component Organization

```
apps/web/src/
├── app/
│   ├── dashboard/        # Main dashboard routes
│   ├── production/       # Production tracking page
│   ├── dispatch/         # Dispatch management page
│   ├── equipment/        # Equipment logs page
│   ├── manpower/         # Manpower attendance page
│   ├── actions/          # Server Actions (createProduction, etc.)
│   └── api/              # API routes
├── components/
│   ├── forms/            # Form components (ProductionForm, EquipmentForm)
│   ├── charts/           # Recharts visualizations
│   ├── layout/           # Layout components (sidebar, header)
│   └── ui/               # Base UI components (Radix + Tailwind)
├── hooks/                # Custom React hooks (useProduction, etc.)
├── lib/                  # Utilities & configs
├── stores/               # Zustand stores
└── types/                # TypeScript types
```

### Form Pattern

Forms use React Hook Form + Zod validation:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductionSchema } from '@deskops/database';
import { MATERIALS } from '@deskops/constants';

export function ProductionForm() {
  const form = useForm({
    resolver: zodResolver(ProductionSchema),
    defaultValues: {
      date: new Date(),
      materialId: '',
      qtyTon: 0,
      operation: 'CRU-PRO',
    },
  });

  // ...rest of form
}
```

## Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **State**: Zustand + React Query

### Backend
- **Runtime**: Bun
- **Database**: PostgreSQL 17
- **ORM**: Prisma
- **Auth**: Clerk
- **Validation**: Zod

### DevOps
- **Monorepo**: Nx
- **Testing**: Vitest + Playwright
- **Linting**: ESLint + Prettier

## Important Development Notes

### When Working with Database

1. **ALWAYS run `bun run db:generate`** after modifying `packages/database/prisma/schema.prisma`
2. Prisma client is located at `packages/database/src/generated/client` (not the default location)
3. Use the centralized `prisma` export from `@deskops/database`, NOT direct Prisma imports
4. All Zod schemas for validation are in `packages/database/src/schemas/`

### When Creating Forms

1. Import validation schema from `@deskops/database`
2. Import constants (materials, equipment, roles) from `@deskops/constants`
3. NEVER hardcode dropdown options - use the SSOT constants
4. Use Server Actions for mutations (located in `apps/web/src/app/actions/`)

### When Creating API Routes

1. Follow pattern: `/api/[module]/route.ts` for collections
2. Follow pattern: `/api/[module]/[id]/route.ts` for single resources
3. Use Prisma client from `@deskops/database`
4. Validate input with Zod schemas
5. Check authentication with Clerk's `auth()` helper

### TypeScript Strict Rules

- NO `any` types allowed anywhere
- All functions must have explicit return types for exported functions
- All props interfaces must be explicitly defined
- Use type guards from `@deskops/constants` for runtime validation

### Material Categories

**17 Materials Total**:
- **Aggregates** (9): G1, 3/4, 3/8, S1, APBC, FILLING, RIPRAP, 4 INCH, 6 INCH
- **Fine** (2): WASHED SAND, NATURAL SAND
- **Specialty** (1): BEDDING SAND
- **Processed Base** (2): CRUSHED BASE, RECYCLED BASE
- **Raw Feed** (3): CONCRETE DEBRIS, MIXED C&D DEBRIS, ASPHALT DEBRIS (not sellable)

### Equipment Types

**9 Equipment Items**:
- **Crushing/Screening**: Jaw Crusher, Cone Crusher, Vibrating Screen
- **Earth Moving**: Excavator CAT320, Excavator PC200, Wheel Loader
- **Hauling**: Dump Truck 6W, Dump Truck 10W
- **Auxiliary**: Generator 500kVA

### Manpower Roles

**5 Roles**:
- Equipment Driver
- Crusher Operator
- Maintenance Worker
- Laborer
- Security

## Common Workflows

### Adding a New Module

1. Create Prisma model in `packages/database/prisma/schema.prisma`
2. Run `bun run db:generate` and `bun run db:migrate`
3. Create Zod schema in `packages/database/src/schemas/[module].ts`
4. Export schema in `packages/database/src/schemas/index.ts`
5. Create API routes in `apps/web/src/app/api/[module]/route.ts`
6. Create Server Actions in `apps/web/src/app/actions/[module].ts`
7. Create page in `apps/web/src/app/dashboard/[module]/page.tsx`
8. Create form component in `apps/web/src/components/forms/[module]-form.tsx`

### Running a Single Test

```bash
# Unit test for specific file
bunx vitest run path/to/file.test.ts

# E2E test for specific file
bunx playwright test path/to/test.spec.ts

# Run tests in specific browser
bunx playwright test --project=chromium
```

### Debugging

```bash
# View Prisma client configuration
bunx nx run database:build

# Check TypeScript errors across all projects
bunx nx run-many -t typecheck

# View all Nx tasks available
bunx nx show project web
```

## Environment Variables

Required in `.env`:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/deskops_dev"
DIRECT_URL="postgresql://user:password@localhost:5432/deskops_dev"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

## Documentation References

Full documentation is in `docs/`:
- `DeskOps-ImplementationPlan.md` - Remaining implementation phases
- `DeskOps-DB-Prisma.md` - Database schema documentation
- `DeskOps-constants.md` - Constants reference guide
- `DeskOps-Backend.md` - API routes and server actions
- `DeskOps-Frontend.md` - Components and hooks guide
- `DeskOps-Configuration.md` - Nx, TypeScript, Tailwind setup
- `DeskOps-Interface-Overview.md` - UI/UX specifications
