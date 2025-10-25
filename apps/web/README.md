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

### Received Materials

- `GET /api/received?siteId=xxx&dateFrom=xxx&dateTo=xxx` - List received material records with filtering
- `POST /api/received` - Create a received material record

### Equipment Logs

- `GET /api/equipment?siteId=xxx&dateFrom=xxx&dateTo=xxx` - List equipment logs with filtering
- `POST /api/equipment` - Create an equipment log

### Manpower Logs

- `GET /api/manpower?siteId=xxx&dateFrom=xxx&dateTo=xxx` - List manpower logs with filtering
- `POST /api/manpower` - Create a manpower log

### Dashboard Metrics

- `GET /api/dashboard/metrics?siteId=xxx&dateFrom=xxx&dateTo=xxx` - Get dashboard KPI metrics with percentage changes

**Query Parameters:**

- `siteId` (required) - Site identifier
- `dateFrom` (optional) - Start date for filtering (ISO 8601). Defaults to today if both dates omitted.
- `dateTo` (optional) - End date for filtering (ISO 8601). Defaults to today if both dates omitted.

**Default Behavior:** If both `dateFrom` and `dateTo` are omitted, metrics are calculated for today compared to yesterday. If only one date is provided, it is used as a single-day window.

Returns aggregated metrics for the selected date range compared to the equivalent previous period:

```json
{
  "totalProduction": {
    "current": 1000,
    "previous": 800,
    "percentageChange": 25.0
  },
  "totalDispatched": {
    "current": 900,
    "previous": 750,
    "percentageChange": 20.0
  },
  "totalReceived": {
    "current": 500,
    "previous": 400,
    "percentageChange": 25.0
  },
  "equipmentUtilization": {
    "current": 320,
    "previous": 280,
    "percentageChange": 14.28
  },
  "currentInventoryStatus": {
    "current": 1500,
    "previous": 1200,
    "percentageChange": 25.0
  }
}
```

**Percentage Change Calculation:** `((current - previous) / previous) * 100`

If previous period has zero value, returns 100% if current > 0, otherwise 0%.

**Previous Period Calculation:** Inclusive day count is calculated, then the same number of days prior to the current period start is used as the previous period.

### Query Parameters

- `siteId` (required) - Site identifier
- `dateFrom` (optional) - Start date for filtering (ISO 8601)
- `dateTo` (optional) - End date for filtering (ISO 8601)

**Note:** For GET endpoints, date filtering supports single-sided boundaries. If only `dateFrom` is provided, all records from that date forward are returned. If only `dateTo` is provided, all records up to that date are returned. If both are provided, records within the range are returned.

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

### Received Material Actions

- `createReceivedMaterial(data)` - Create received material record
- `updateReceivedMaterial(id, data)` - Update received material record
- `deleteReceivedMaterial(id)` - Delete received material record

### Equipment Log Actions

- `createEquipmentLog(data)` - Create equipment log
- `updateEquipmentLog(id, data)` - Update equipment log
- `deleteEquipmentLog(id)` - Delete equipment log

### Manpower Log Actions

- `createManpowerLog(data)` - Create manpower log
- `updateManpowerLog(id, data)` - Update manpower log
- `deleteManpowerLog(id)` - Delete manpower log

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

## Layout Components

The application uses a two-level layout structure:

### Root Layout

The root layout (`src/app/layout.tsx`) provides global providers:

- **ClerkProvider** - Authentication context
- **ThemeProvider** - Dark/light mode switching via next-themes
- **QueryProvider** - React Query for data fetching
- **Toaster** - Toast notifications via Sonner
- **Inter Font** - Google Font with CSS variable

### Dashboard Layout

The dashboard layout (`src/app/dashboard/layout.tsx`) provides:

- **Authentication Check** - Redirects to /sign-in if not authenticated
- **Sidebar** - Collapsible navigation (240px → 64px)
- **Header** - Site selector, date range picker, notifications, theme toggle, user menu
- **Main Content Area** - Scrollable container for page content

### Header Component

The header includes 7 key elements:

1. **Logo** - DeskOps branding
2. **Site Selector** - Dropdown to switch between sites
3. **Date Range Picker** - Calendar popover for filtering data
4. **Notifications** - Dropdown with unread count badge
5. **Theme Toggle** - Switch between light/dark modes
6. **Settings Button** - Access to settings (future)
7. **User Menu** - Clerk UserButton with sign out

### Sidebar Component

The sidebar provides:

- **8 Navigation Links** - Dashboard, Production, Dispatch, Received, Equipment, Manpower, Inventory, Settings
- **Active Route Highlighting** - Visual indicator for current page
- **Collapsible State** - Toggle between full (240px) and collapsed (64px) width
- **Tooltips** - Show labels when collapsed
- **Icons** - Lucide React icons for each section

### Component Usage

```typescript
// The layout is automatically applied to all /dashboard/* routes
// Individual pages only need to export their content:

export default function ProductionPage() {
  return (
    <div>
      <h1>Production</h1>
      {/* Page content */}
    </div>
  );
}
```

## Key Dependencies

- **@clerk/nextjs** - Authentication and user management
- **@tanstack/react-query** - Data fetching and caching
- **next-themes** - Theme management
- **sonner** - Toast notifications
- **react-day-picker** - Date range selection
- **@deskops/ui** - Shared UI component library
- **@deskops/constants** - Centralized constants and types
- **@deskops/database** - Prisma client and validation schemas

## Validation

All input data is validated using Zod schemas from `@deskops/database`:

- `ProductionSchema` - Production record validation
- `DispatchSchema` - Dispatch record validation
- `ReceivedMaterialSchema` - Received material record validation
- `EquipmentLogSchema` - Equipment log validation
- `ManpowerLogSchema` - Manpower log validation
- `CreateSiteSchema` - Site creation validation

Additional business logic validation uses helper functions from `@deskops/constants`:

- `isValidMaterialId()` - Validates material exists
- `isValidOperationType()` - Validates operation type
- `isValidEquipmentId()` - Validates equipment exists
