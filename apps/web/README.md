# DeskOps Web Application

Next.js 16 application with App Router providing the frontend and API layer for the DeskOps Construction & Demolition Recycling Facility Management System.

## API Routes

All API routes follow the `/api/[module]/[resource]` pattern and require Clerk authentication.

### Sites Management

- `GET /api/sites` - List all active sites
- `POST /api/sites` - Create a new site
- `GET /api/sites/[siteId]` - Get site details with record counts

### Production Data

- `GET /api/production?siteId=xxx&dateFrom=xxx&dateTo=xxx` - List production records with filtering
- `POST /api/production` - Create a production record

### Dispatch Data

- `GET /api/dispatch?siteId=xxx&dateFrom=xxx&dateTo=xxx` - List dispatch records with filtering
- `POST /api/dispatch` - Create a dispatch record

### Query Parameters

- `siteId` (required) - Site identifier
- `dateFrom` (optional) - Start date for filtering (ISO 8601)
- `dateTo` (optional) - End date for filtering (ISO 8601)

### Response Format

All successful responses return JSON with appropriate HTTP status codes:

- 200: Success (GET)
- 201: Created (POST)
- 400: Validation error
- 401: Unauthorized
- 404: Not found
- 500: Server error

## Server Actions

Server Actions provide an alternative to API routes with automatic cache revalidation.

### Production Actions

- `createProduction(data)` - Create production record
- `updateProduction(id, data)` - Update production record
- `deleteProduction(id)` - Delete production record

### Dispatch Actions

- `createDispatch(data)` - Create dispatch record
- `updateDispatch(id, data)` - Update dispatch record
- `deleteDispatch(id)` - Delete dispatch record

### Usage Example

```typescript
import { createProduction } from '@/app/actions';

const result = await createProduction({
  siteId: 'site_123',
  date: new Date(),
  materialId: 'MAT001',
  qtyTon: 150.5,
  operation: 'CRU-PRO',
});

if (result.success) {
  // Handle success
} else {
  // Handle error: result.error
}
```

## Authentication

All API routes and Server Actions require Clerk authentication. The `auth()` function from `@clerk/nextjs` is used to verify user identity.

### Environment Variables

Required Clerk environment variables:

- `CLERK_SECRET_KEY` - Server-side secret key
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Client-side publishable key

## Validation

All input data is validated using Zod schemas from `@deskops/database`:

- `ProductionSchema` - Production record validation
- `DispatchSchema` - Dispatch record validation
- `CreateSiteSchema` - Site creation validation

Additional business logic validation uses helper functions from `@deskops/constants`:

- `isValidMaterialId()` - Validates material exists
- `isValidOperationType()` - Validates operation type
- `isValidEquipmentId()` - Validates equipment exists
