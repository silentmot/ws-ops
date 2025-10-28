# @deskops/database

Prisma-based database layer for DeskOps production tracking system.

## Features

- **12 Production Models**: Site, Material, Equipment, ManpowerRole, Production, Dispatch, ReceivedMaterial, EquipmentLog, ManpowerLog, InventorySnapshot, ExportJob, ExportAudit
- **Zod Validation**: Runtime type-safe schemas for all input operations
- **Multi-Site Support**: Site isolation with siteId on all models
- **Idempotent Seeding**: Default site, materials, equipment, and roles from `@deskops/constants`
- **Singleton Client**: Global-cached Prisma client with query logging

## Installation

```bash
bun install
```

## Database Setup

**Important**: Always run Prisma commands from the project root to use `prisma.config.ts`.

### From Project Root (Recommended)

```bash
# Generate Prisma client (outputs to packages/database/src/generated/client)
bunx prisma generate

# Push schema to database (development)
bunx prisma db push

# Run migrations
bunx prisma migrate dev

# Seed database with default data
bunx prisma db seed

# Open Prisma Studio
bunx prisma studio
```

The root `prisma.config.ts` configures:
- Schema: `packages/database/prisma/schema.prisma`
- Migrations: `packages/database/prisma/migrations`
- Seed: `packages/database/prisma/seed.ts`
- Client output: `packages/database/src/generated/client`

### From Package Directory (Alternative)

```bash
cd packages/database

# Generate Prisma client
bun run db:generate

# Push schema to database
bun run db:push

# Seed database
bun run db:seed

# Open Prisma Studio
bun run db:studio
```

## Usage

```typescript
import { prisma, ProductionSchema } from '@deskops/database';

// Validate input
const input = ProductionSchema.parse({
  siteId: 'cm123abc',
  date: new Date(),
  materialId: 'cm456def',
  operation: 'CASTING',
  shift: 'DAY',
  quantity: 100.5,
  unit: 'MT',
});

// Create production record
const production = await prisma.production.create({
  data: input,
});
```

## Models

### Core Models

- **Site**: Multi-site configuration with code and name
- **Material**: 17 materials (Cement, Aggregates, Admixtures, etc.)
- **Equipment**: 9 equipment types (Batching Plant, Transit Mixer, etc.)
- **ManpowerRole**: 4 roles (Operator, Helper, Supervisor, Engineer)

### Production Models

- **Production**: Daily production tracking by material/operation/shift
- **Dispatch**: Outbound deliveries with vehicle and destination
- **ReceivedMaterial**: Inbound material receipts with supplier tracking

### Logging Models

- **EquipmentLog**: Equipment usage hours and status by shift
- **ManpowerLog**: Manpower headcount and hours by role/shift

### Inventory & Export Models

- **InventorySnapshot**: Daily material inventory with calculated/manual adjustments
- **ExportJob**: Async report generation with status tracking
- **ExportAudit**: Download tracking and record count audit trail

## Validation Schemas

All schemas located in `src/schemas/`:

- `ProductionSchema`, `DispatchSchema`, `ReceivedMaterialSchema`
- `EquipmentLogSchema`
- `ManpowerLogSchema`
- `InventorySnapshotSchema`, `InventorySnapshotCreateSchema`
- `ExportJobCreateSchema`, `ExportJobUpdateSchema`, `ExportAuditSchema`

## Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/deskops?schema=public"
NODE_ENV="development"
```

## TypeScript

Strict mode enabled with no `any` types. All Prisma types re-exported for convenience.
