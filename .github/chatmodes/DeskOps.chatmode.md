---
description: 'Specialized chat mode for DeskOps project. Use for all DeskOps-related queries.'
tools: ['edit', 'runNotebooks', 'search', 'new', 'runCommands', 'runTasks', 'sequentialThinking/*', 'filesystem/*', 'context7/*', 'memory/*', 'Nx Mcp Server/*', 'nextjs-docs-mcp/*', 'usages', 'vscodeAPI', 'think', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo', 'github.vscode-pull-request-github/copilotCodingAgent', 'github.vscode-pull-request-github/activePullRequest', 'github.vscode-pull-request-github/openPullRequest', 'ms-ossdata.vscode-pgsql/pgsql_connect', 'ms-ossdata.vscode-pgsql/pgsql_query', 'ms-ossdata.vscode-pgsql/database', 'ms-vscode.vscode-websearchforcopilot/websearch', 'extensions', 'todos', 'runTests']
---

# DeskOps.chatmode.md

## Project Context

DeskOps is a construction & demolition recycling facility operations management system built in an **Nx monorepo** with Next.js 15, TypeScript, and PostgreSQL. The system tracks production, dispatch, **received materials**, equipment usage, and manpower attendance with real-time inventory calculations.

## Core Principles

## Ground Zero-Assumption No Skipping Protocol

**GZANSP**
**G** - Ground
**Z** - Zero
**A** - Assumption
**N**- No
**S**- Skipping
**P**- Protocol

**Definition:** This protocol requires that all generated information be carefully examined and addressed without leaving out any part within the request's boundaries. Every step in the analysis or process is crucial to ensure that no important detail is missed and no assumptions are made. This aims to maintain a thorough understanding and a strict outcome, avoiding random assumptions and following instructions precisely.

### GZANSP Compliance

- **Zero Assumptions**: Every decision must cite an explicit source
- **No 'any' types**: Use explicit, concrete types always
- **SSOT**: Import all constants from `/lib/constants.ts`
- **No API versioning**: Use `/api/[module]/[resource]` format only

### Nx Workspace Guidelines

- **Always use Nx commands**: `bunx nx dev web`, NOT `npm run dev`
- **Run tasks through Nx**: `nx run`, `nx run-many`, `nx affected`
- **Use Nx tools**: `nx_workspace`, `nx_project_details`, `nx_docs`
- **Workspace structure**: Nx monorepo with `apps/web/` and future `libs/`
- **Changes tracking**: Record all changes in `CHANGELOG.md` and Commit messages of the changes upon every task completion.

### Forbidden Terminology

NEVER use these terms in code, comments, or documentation:

- Comprehensive, Enhanced, Advanced, Corrected, Fixed, Implemented
- Future, Final, Improved, Upgraded, Perfected, Complete, Newer
- Refined, Optimized, Best, Ideal, Flawless, Optimal, Executive
- New, Old, Updated, Modified, Migrated

## Technology Stack

```typescript
// Primary stack
- Workspace: Nx Monorepo
- Framework: Next.js 15 (App Router)
- Language: TypeScript 5.9
- Database: PostgreSQL 17+ with Prisma ORM
- Authentication: Clerk
- Styling: Tailwind CSS 4 + Skeleton UI
- Package Manager: Bun (NOT npm/npx)
- Charts: Recharts
- Forms: React Hook Form + Zod
- Testing: Jest (unit), Playwright (E2E)
```

## Project Structure (Nx Workspace)

```lua
desk-ops/                          # Nx Workspace Root
├── apps/
│   ├── web/                 # Next.js application
│   │   └── src/
│   │       ├── actions/     # Server Actions for mutations
│   │       ├── app/         # Next.js App Router
│   │       ├── components/  # React components
│   │       ├── hooks/       # Custom React hooks
│   │       ├── lib/         # Utilities
│   │       └── types/       # TypeScript definitions
│   └── web-e2e/             # E2E tests
├── libs/                    # Shared libraries (future)
├── nx.json                  # Nx configuration
└── workspace.json           # Workspace configuration
```

## API Routes (Complete List)

```lua
/api/production
/api/production/[id]
/api/dispatch
/api/dispatch/[id]
/api/received               # Received materials (recycled feed)
/api/received/[id]
/api/equipment
/api/equipment/logs
/api/equipment/utilization
/api/manpower
/api/manpower/logs
/api/inventory
/api/inventory/calculate
/api/inventory/snapshot
/api/materials
/api/materials/[id]
/api/dashboard/kpis
/api/dashboard/trends
/api/reports/production
/api/reports/dispatch
/api/reports/received      # Received materials report
/api/reports/export
/api/users
/api/users/[id]
/api/health
```

## Business Logic

### Inventory Calculation Formula

```typescript
// The CORRECT formula (from documents)
inventory = production + received - dispatched;

// Or more specifically for daily snapshots:
closingStock = openingStock + production + received - dispatched;

// Implementation
export async function calculateInventorySnapshot(siteId: string, materialId: string, date: Date) {
  const [opening, prod, recv, disp] = await Promise.all([
    getOpeningStock(siteId, materialId, date),
    getProduction(siteId, materialId, date),
    getReceived(siteId, materialId, date), // Don't forget received!
    getDispatched(siteId, materialId, date),
  ]);

  const closing = opening + prod + recv - disp;

  return {
    opening,
    production: prod,
    received: recv, // Important component
    dispatched: disp,
    closing,
  };
}
```

## Nx Commands (Use These!)

```bash
# Nx Workspace Commands
bunx nx graph                        # View project dependency graph
bunx nx show projects                # List all projects
bunx nx show project web             # Show project details
bunx nx affected:test               # Test affected projects
bunx nx affected:build              # Build affected projects
bunx nx reset                       # Reset Nx cache

# Development
bunx nx dev web                     # Start Next.js dev server
bunx nx build web                   # Build for production
bunx nx test web                    # Run unit tests
bunx nx e2e web-e2e                 # Run E2E tests
bunx nx lint web                    # Lint code

# Generate Nx Components
nx g @nx/next:app apps/new-app              # New app
nx g @nx/next:page apps/web/pages/new-page  # New page
nx g @nx/next:component apps/web/components/new-component  # New component

# Database (still use bunx for Prisma)
bunx prisma generate                # Generate Prisma client
bunx prisma db push                 # Push schema to database
bunx prisma migrate dev             # Create migration
bunx prisma studio                  # Open database GUI
bunx tsx prisma/seed.ts             # Seed database
```

## Database Schema (Key Models)

```typescript
// Transaction tables (daily entries)
- Production        # Daily production entries
- Dispatch          # Material dispatch transactions
- Received          # Received materials (recycled feed) - IMPORTANT!
- EquipmentLog      # Equipment usage logs
- ManpowerLog       # Manpower attendance logs

// Master tables (reference data)
- Site              # Site definitions
- Material          # Material catalog (SSOT)
- Equipment         # Equipment catalog (SSOT)
- ManpowerRole      # Role definitions (SSOT)
- User              # Clerk integration

// Calculated tables
- InventorySnapshot # Daily inventory calculations
- DashboardMetric   # Pre-calculated KPIs
```

## Constants (SSOT)

Always import from `@/lib/constants`:

```typescript
import {
  MATERIALS, // 17 materials
  EQUIPMENT, // 9 equipment items
  ROLES, // 5 manpower roles
  DEFAULT_SITE_CODE, // "ALASLA-29"
  MaterialCategory, // AGGREGATES | PROCESSED_BASE | FINE | SPECIALTY | RAW_FEED
  EquipmentType, // CRUSHING_SCREENING | EARTH_MOVING | HAULING | AUXILIARY
  ShiftType, // MORNING | AFTERNOON | NIGHT
  UserRole, // ADMIN | OPERATOR | MODERATOR
  API_ENDPOINTS, // All API endpoint constants
  VALIDATION, // Validation thresholds
  EXPORT_HEADERS, // Export column headers
  getMaterialById,
  getEquipmentById,
  formatWithPrecision,
} from '@/lib/constants';
```

## Validation Patterns

```typescript
// lib/validations/received.ts (Don't forget this module!)
import { z } from 'zod';
import { VALIDATION } from '@/lib/constants';

export const receivedSchema = z.object({
  date: z
    .date()
    .min(VALIDATION.MIN_DATE)
    .max(new Date(Date.now() + 86400000)),
  siteId: z.string().min(1),
  materialId: z.string().min(1).refine(isValidMaterialId),
  quantity: z.number().min(VALIDATION.MIN_QUANTITY).max(VALIDATION.MAX_QUANTITY),
  source: z.string().min(1), // Source of received material
  notes: z.string().optional(),
});
```

## Server Actions Example

```typescript
// actions/received.ts (Important module!)
'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import { receivedSchema } from '@/lib/validations/received';
import { calculateInventorySnapshot } from '@/lib/calculations/inventory';

export async function createReceived(data: unknown) {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: 'Unauthorized' };
  }

  const result = receivedSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: 'Validation failed' };
  }

  // Create received entry
  const received = await db.received.create({
    data: {
      ...result.data,
      createdBy: user.id,
    },
  });

  // Trigger inventory recalculation (includes received!)
  await calculateInventorySnapshot(result.data.siteId, result.data.materialId, result.data.date);

  revalidatePath('/dashboard');
  revalidatePath('/received');

  return { success: true, data: received };
}
```

## Export Patterns

```typescript
// Must include all data types in exports
export async function generateExcelReport(data: ExportData): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();

  // Sheet 1: Dashboard Summary
  // Sheet 2: Production
  // Sheet 3: Received (Don't forget!)
  // Sheet 4: Dispatch
  // Sheet 5: Equipment
  // Sheet 6: Manpower
  // Sheet 7: Inventory Snapshots

  // Use SSOT headers
  const receivedSheet = workbook.addWorksheet('Received');
  receivedSheet.addRow(EXPORT_HEADERS.production); // Same structure
}
```

## Module-Specific Guidelines

### Production Module

- Only allow final materials (isFinal = true)
- Require shift selection
- Link to equipment for tracking
- Trigger inventory recalculation

### Received Module (Important!)

- Track received materials (recycled feed)
- Capture source information
- Allow any material type (not just final)
- Trigger inventory recalculation
- Part of the inventory formula!

### Dispatch Module

- Validate stock availability
- Customer and vehicle info
- Reference numbers
- Reduce inventory

### Dashboard Module

- Formula: `inventory = production + received - dispatched`
- 4 KPI cards including received materials
- Charts show all three flows
- Auto-refresh via SSE (60s)

## Key Reminders

1. **This is an Nx workspace** - Use `bunx nx` commands
2. **Inventory includes received** - Formula: production + received - dispatched
3. **Don't forget /api/received** - It's a core module
4. **Always check nx_workspace tool** for architecture questions
5. **Use nx_docs tool** for Nx best practices
6. **Run affected tests** - `bunx nx affected:test`
7. **View dependency graph** - `bunx nx graph`

## Documentation References

- **Nx Guidelines**: `/AGENTS.md` and `/CLAUDE.md`
- **Project Overview**: `/documentation/overview/DeskOps-ProjectOverview.md`
- **Database Schema**: `/documentation/dev/DeskOps-DatabaseSchema.md`
- **Constants SSOT**: `/documentation/dev/DeskOps-constants.md`
- **API Routes**: Section 3.1 of NextJS Blueprint shows all routes
