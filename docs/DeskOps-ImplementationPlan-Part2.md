# DeskOps Remaining Implementation Tasks

<!--markdownlint-disable MD024 MD025 MD036-->

**Document Version:** 1.0
**Date:** October 26, 2025
**Status:** Pending Implementation
**Phases Covered:** 9-13 (Remaining Tasks)
**Part:** 2 of 2 (Phases 12-13)

---

## Overview

This document consolidates all remaining implementation tasks for the DeskOps Construction & Demolition Recycling Management System. These tasks follow the GZANSP × AOC protocol and build upon the completed foundation (Equipment & Manpower tracking, Dashboard KPI cards, and Interactive Charts).

### Completed Foundation

- ✅ Equipment Tracking Page with Form and Chart
- ✅ Manpower Attendance Page with Form and Chart
- ✅ Dashboard KPI Metric Cards with Animated Counters
- ✅ Dashboard Interactive Chart Components (5 charts)

### Remaining Work

**5 tasks across 2 phases**

---

## Phase 12: Authentication (2 Tasks)

### Task 12.1: Configure Clerk Authentication Middleware with Route Protection

**Ticket ID:** `42597a1b-d91b-4a9a-966b-3c86241e4b25`
**Size:** Issue
**Priority:** Critical

#### Objective

Implement Next.js middleware for route protection and role-based access control using Clerk.

#### Implementation Details

**Files to Create:**

- `apps/web/src/middleware.ts` - Clerk authentication middleware

**Files to Update:**

- `.env.local` - Add Clerk environment variables
- `.env.example` - Document Clerk variables

**Middleware Implementation:**

```typescript
// apps/web/src/middleware.ts
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/'],
  ignoredRoutes: ['/api/health'],

  beforeAuth: (req) => {
    // Add any pre-auth logic here
    console.log('Before auth:', req.url);
  },

  afterAuth: (auth, req) => {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Role-based access control
    if (auth.userId && req.nextUrl.pathname.startsWith('/admin')) {
      const userRole = auth.sessionClaims?.metadata?.role;

      if (userRole !== 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

**Environment Variables:**

```bash
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# .env.example
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={your_publishable_key}
CLERK_SECRET_KEY={your_secret_key}
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

#### Validation Checklist

- [ ] Middleware protects all routes except public/ignored
- [ ] Unauthenticated users redirected to sign-in
- [ ] Role-based access control checks user metadata
- [ ] Admin routes restricted to ADMIN role
- [ ] ClerkProvider verified in root layout
- [ ] Environment variables documented in .env.example

#### Documentation References

- `DeskOps-Backend.md` (lines 1048-1082)
- `DeskOps-ImplementationPlan.md` (lines 683-804)

---

[ ] ClerkProvider verified in root layout

[ ] Environment variables documented in .env.example

Documentation References:

- `DeskOps-Backend.md` (lines 1048-1082)
- `DeskOps-ImplementationPlan.md` (lines 683-804)

---

### Task 12.2: Create Clerk Authentication Pages and Custom useAuth Hook

**Ticket ID:** `df3ce88e-fe40-4c06-84b6-5358a024fdd5`
**Size:** Story
**Priority:** High

#### Objective

Implement authentication pages and custom hook for role-based UI rendering.

#### Implementation Details

**Files to Create:**

- `apps/web/src/app/sign-in/[[...sign-in]]/page.tsx` - Sign-in page
- `apps/web/src/app/sign-up/[[...sign-up]]/page.tsx` - Sign-up page
- `apps/web/src/hooks/use-auth.ts` - Custom auth hook

**Files to Update:**

- `apps/web/src/components/layout/header.tsx` - Use custom useAuth hook

**Sign-In Page:**

```typescript
// apps/web/src/app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function SignInPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">DeskOps</h1>
          <p className="text-muted-foreground mt-2">
            Construction & Demolition Recycling Management
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
```

**Sign-Up Page:**

```typescript
// apps/web/src/app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">DeskOps</h1>
          <p className="text-muted-foreground mt-2">
            Construction & Demolition Recycling Management
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
```

**Custom useAuth Hook:**

```typescript
// apps/web/src/hooks/use-auth.ts
import { useUser, useAuth as useClerkAuth } from '@clerk/nextjs';
import { UserRole } from '@deskops/constants';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export function useAuth(): {
  user: AuthUser | null;
  isLoading: boolean;
  isSignedIn: boolean;
  hasRole: (role: UserRole) => boolean;
  signOut: () => Promise<void>;
} {
  const { user, isLoaded } = useUser();
  const { isSignedIn, signOut } = useClerkAuth();

  const authUser: AuthUser | null = user
    ? {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.fullName || '',
        role: (user.publicMetadata.role as UserRole) || UserRole.MODERATOR,
        avatar: user.imageUrl,
      }
    : null;

  const hasRole = (role: UserRole): boolean => {
    if (!authUser) return false;

    // Admin has access to everything
    if (authUser.role === UserRole.ADMIN) return true;

    // Check specific role
    return authUser.role === role;
  };

  return {
    user: authUser,
    isLoading: !isLoaded,
    isSignedIn: !!isSignedIn,
    hasRole,
    signOut,
  };
}
```

**Update Header Component:**

```typescript
// apps/web/src/components/layout/header.tsx
import { useAuth } from '@/hooks/use-auth';

export function Header(): React.JSX.Element {
  const { user, hasRole } = useAuth();

  return (
    <header className="...">
      {/* ... existing header content ... */}

      {/* Show admin-only features */}
      {hasRole(UserRole.ADMIN) && (
        <Button variant="ghost" size="sm">
          Admin Panel
        </Button>
      )}

      {/* User info */}
      {user && (
        <div className="flex items-center gap-2">
          <span className="text-sm">{user.name}</span>
          <Badge>{user.role}</Badge>
        </div>
      )}
    </header>
  );
}
```

#### Validation Checklist

- [ ] Sign-in page renders Clerk SignIn component
- [ ] Sign-up page renders Clerk SignUp component
- [ ] Custom useAuth hook wraps Clerk hooks
- [ ] hasRole function checks user metadata correctly
- [ ] AuthUser interface uses UserRole enum from constants
- [ ] Header component uses custom useAuth hook
- [ ] Role-based UI rendering works correctly
- [ ] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Hooks.md` (lines 916-967)
- `DeskOps-ImplementationPlan.md` (lines 683-804)

---

## Phase 13: Testing Infrastructure (3 Tasks)

### Task 13.1: Configure Vitest Testing Framework with Mocks and Utilities

**Ticket ID:** `3c1d5d89-2517-4a22-9407-d19ff91365b1`
**Size:** Story
**Priority:** High

#### Objective

Setup Vitest testing infrastructure with mocks for Next.js and Clerk, plus test utilities.

#### Implementation Details

**Files to Create:**

- `apps/web/vitest.config.ts` - Vitest configuration
- `apps/web/src/test/setup.ts` - Global test setup with mocks
- `apps/web/src/test/utils.tsx` - Test utilities (renderWithProviders)
- `apps/web/src/test/mocks/` - Mock files directory

**Files to Update:**

- `apps/web/package.json` - Add test scripts

**Vitest Configuration:**

```typescript
// apps/web/vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.config.*', '**/*.d.ts'],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@deskops/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@deskops/constants': path.resolve(
        __dirname,
        '../../packages/constants/src'
      ),
      '@deskops/database': path.resolve(
        __dirname,
        '../../packages/database/src'
      ),
    },
  },
});
```

**Test Setup with Mocks:**

```typescript
// apps/web/src/test/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: '/dashboard',
    query: {},
  }),
  usePathname: () => '/dashboard',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

// Mock Clerk auth
vi.mock('@clerk/nextjs', () => ({
  useAuth: () => ({
    userId: 'user_test123',
    isSignedIn: true,
    isLoaded: true,
    getToken: vi.fn().mockResolvedValue('mock_token'),
    signOut: vi.fn(),
  }),
  useUser: () => ({
    user: {
      id: 'user_test123',
      emailAddresses: [{ emailAddress: 'test@example.com' }],
      fullName: 'Test User',
      imageUrl: 'https://example.com/avatar.jpg',
      publicMetadata: { role: 'MODERATOR' },
    },
    isLoaded: true,
  }),
  ClerkProvider: ({ children }: { children: React.ReactNode }) => children,
  SignIn: () => <div>SignIn Mock</div>,
  SignUp: () => <div>SignUp Mock</div>,
  UserButton: () => <div>UserButton Mock</div>,
}));

// Suppress console warnings in tests
global.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
};
```

**Test Utilities:**

```typescript
// apps/web/src/test/utils.tsx
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/providers/theme-provider';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

interface AllTheProvidersProps {
  children: React.ReactNode;
}

function AllTheProviders({ children }: AllTheProvidersProps) {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { renderWithProviders as render };
```

**Mock Files:**

```typescript
// apps/web/src/test/mocks/handlers.ts
export const handlers = [
  rest.get('/api/production', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        productions: [
          {
            id: 'prod_1',
            date: '2025-10-26',
            materialId: 'MAT001',
            qtyTon: 100.5,
            operation: 'CRU-PRO',
            material: { code: 'AGG-G1', name: 'G1', uom: 'TON' },
            site: { code: 'ALASLA-29', name: 'Al Asla' },
          },
        ],
      })
    );
  }),
];
```

**Update package.json:**

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.0",
    "vitest": "^4.0.3",
    "jsdom": "^27.0.1",
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/user-event": "^14.5.0",
    "@vitest/ui": "^4.0.3",
    "msw": "^2.0.0"
  }
}
```

#### Validation Checklist

- [ ] Vitest configured with React plugin and jsdom
- [ ] Path aliases match tsconfig
- [ ] Coverage thresholds set to 80%
- [ ] Next.js router mocked correctly
- [ ] Clerk auth mocked correctly
- [ ] renderWithProviders wraps QueryClient and Theme providers
- [ ] Test scripts added to package.json
- [ ] Mock handlers created for API routes

#### Documentation References

- `DeskOps-Configuration.md` (lines 867-985)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

### Task 13.2: Write Sample Unit and Integration Tests for Key Components

**Ticket ID:** `3cde6329-deed-46b9-bea6-88930c0684eb`
**Size:** Story
**Priority:** Medium

#### Objective

Create sample tests demonstrating testing patterns for forms, hooks, components, utilities, and stores.

#### Implementation Details

**Files to Create:**

- `apps/web/src/components/forms/__tests__/production-form.test.tsx`
- `apps/web/src/hooks/__tests__/use-production.test.ts`
- `apps/web/src/components/dashboard/__tests__/kpi-card.test.tsx`
- `apps/web/src/lib/exporters/__tests__/excel.test.ts`
- `apps/web/src/stores/__tests__/app-store.test.ts`

**Production Form Test:**

```typescript
// apps/web/src/components/forms/__tests__/production-form.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/utils';
import { ProductionForm } from '../production-form';

describe('ProductionForm', () => {
  it('renders form fields correctly', () => {
    render(<ProductionForm siteId="test_site" />);

    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/material/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/operation/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<ProductionForm siteId="test_site" />);

    const submitButton = screen.getByRole('button', { name: /create/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/material is required/i)).toBeInTheDocument();
      expect(screen.getByText(/quantity must be positive/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();

    render(<ProductionForm siteId="test_site" onSuccess={onSuccess} />);

    // Fill form
    await user.type(screen.getByLabelText(/quantity/i), '100.5');
    await user.selectOptions(screen.getByLabelText(/material/i), 'MAT001');
    await user.selectOptions(screen.getByLabelText(/operation/i), 'CRU-PRO');

    // Submit
    await user.click(screen.getByRole('button', { name: /create/i }));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  it('displays error message on submission failure', async () => {
    const user = userEvent.setup();

    // Mock API failure
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Server error' }),
    });

    render(<ProductionForm siteId="test_site" />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/quantity/i), '100.5');
    await user.click(screen.getByRole('button', { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument();
    });
  });
});
```

**Use Production Hook Test:**

```typescript
// apps/web/src/hooks/__tests__/use-production.test.ts
import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProduction } from '../use-production';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useProduction', () => {
  it('fetches production data successfully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        productions: [
          { id: '1', materialId: 'MAT001', qtyTon: 100 },
        ],
      }),
    });

    const { result } = renderHook(
      () => useProduction({ siteId: 'test_site' }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toHaveLength(1);
    expect(result.current.data[0].qtyTon).toBe(100);
  });

  it('handles fetch error correctly', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Failed to fetch' }),
    });

    const { result } = renderHook(
      () => useProduction({ siteId: 'test_site' }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
    });
  });

  it('does not fetch when disabled', () => {
    const { result } = renderHook(
      () => useProduction({ siteId: 'test_site', enabled: false }),
      { wrapper: createWrapper() }
    );

    expect(result.current.data).toEqual([]);
  });
});
```

**KPI Card Test:**

```typescript
// apps/web/src/components/dashboard/__tests__/kpi-card.test.tsx
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/utils';
import { KPICard } from '../kpi-card';

describe('KPICard', () => {
  it('renders metric value and label', () => {
    render(
      <KPICard
        title="Total Production"
        value={1250.5}
        unit="TON"
        change={12.5}
        trend="up"
      />
    );

    expect(screen.getByText(/total production/i)).toBeInTheDocument();
    expect(screen.getByText(/1,250.5/)).toBeInTheDocument();
    expect(screen.getByText(/TON/)).toBeInTheDocument();
  });

  it('displays positive trend indicator', () => {
    render(
      <KPICard
        title="Production"
        value={100}
        unit="TON"
        change={15}
        trend="up"
      />
    );

    expect(screen.getByText(/\+15%/)).toBeInTheDocument();
    expect(screen.getByTestId('trend-up-icon')).toBeInTheDocument();
  });

  it('displays negative trend indicator', () => {
    render(
      <KPICard
        title="Production"
        value={100}
        unit="TON"
        change={-8}
        trend="down"
      />
    );

    expect(screen.getByText(/-8%/)).toBeInTheDocument();
    expect(screen.getByTestId('trend-down-icon')).toBeInTheDocument();
  });

  it('shows loading skeleton when loading', () => {
    render(
      <KPICard
        title="Production"
        value={0}
        unit="TON"
        change={0}
        trend="up"
        isLoading
      />
    );

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});
```

**Excel Exporter Test:**

```typescript
// apps/web/src/lib/exporters/__tests__/excel.test.ts
import { describe, it, expect, vi } from 'vitest';
import { generateExcelReport } from '../excel';
import type { ExportJobData } from '../types';

describe('generateExcelReport', () => {
  it('generates Excel file with correct structure', async () => {
    const jobData: ExportJobData = {
      id: 'job_1',
      siteId: 'site_1',
      module: 'production',
      dateFrom: new Date('2025-10-01'),
      dateTo: new Date('2025-10-31'),
      granularity: 'daily',
      format: 'xlsx',
    };

    const onProgress = vi.fn();

    const result = await generateExcelReport(jobData, onProgress);

    expect(result.filePath).toContain('.xlsx');
    expect(result.fileSize).toBeGreaterThan(0);
    expect(result.fileHash).toHaveLength(64); // SHA-256 hash
    expect(result.recordCount).toBeGreaterThan(0);
    expect(onProgress).toHaveBeenCalledWith(100);
  });

  it('calls progress callback at intervals', async () => {
    const jobData: ExportJobData = {
      id: 'job_1',
      siteId: 'site_1',
      module: 'production',
      dateFrom: new Date('2025-10-01'),
      dateTo: new Date('2025-10-31'),
      granularity: 'daily',
      format: 'xlsx',
    };

    const onProgress = vi.fn();

    await generateExcelReport(jobData, onProgress);

    expect(onProgress).toHaveBeenCalledWith(10);
    expect(onProgress).toHaveBeenCalledWith(30);
    expect(onProgress).toHaveBeenCalledWith(50);
    expect(onProgress).toHaveBeenCalledWith(90);
    expect(onProgress).toHaveBeenCalledWith(100);
  });
});
```

**App Store Test:**

```typescript
// apps/web/src/stores/__tests__/app-store.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppStore } from '../app-store';

describe('useAppStore', () => {
  beforeEach(() => {
    // Reset store before each test
    useAppStore.setState({
      selectedSiteId: 'default_site',
      sidebarCollapsed: false,
      theme: 'system',
    });
  });

  it('initializes with default values', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.selectedSiteId).toBe('default_site');
    expect(result.current.sidebarCollapsed).toBe(false);
    expect(result.current.theme).toBe('system');
  });

  it('updates selected site', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedSiteId('new_site');
    });

    expect(result.current.selectedSiteId).toBe('new_site');
  });

  it('toggles sidebar collapsed state', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSidebarCollapsed(true);
    });

    expect(result.current.sidebarCollapsed).toBe(true);

    act(() => {
      result.current.setSidebarCollapsed(false);
    });

    expect(result.current.sidebarCollapsed).toBe(false);
  });

  it('updates theme', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
  });

  it('persists state to localStorage', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedSiteId('persisted_site');
    });

    // Check localStorage
    const stored = localStorage.getItem('deskops-app-state');
    expect(stored).toContain('persisted_site');
  });
});
```

#### Validation Checklist

- [ ] All tests follow AAA pattern (Arrange, Act, Assert)
- [ ] Tests use renderWithProviders from test utilities
- [ ] Form tests cover rendering, validation, submission success/error
- [ ] Hook tests cover data fetching, loading, error states
- [ ] Component tests cover rendering, interactions, loading states
- [ ] Utility tests cover core functionality
- [ ] Store tests cover state updates and persistence
- [ ] Coverage meets 80% threshold
- [ ] All tests use proper TypeScript types (NO any)

#### Documentation References

- `DeskOps-Configuration.md` (lines 867-985)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

#### Documentation References

- `DeskOps-Configuration.md` (lines 867-985)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

### Task 13.3: Configure Playwright E2E Tests for Critical User Flows

Ticket ID: d0b439aa-d8db-4a9a-87cd-47ea2c0cc1ba
Size: Story
Priority: Medium

Objective

**Ticket ID:** `6b8c5821-df64-4c2a-9b5f-c4b92e7f8a3d`
**Size:** Task
**Priority:** Medium

**Objective:**

Setup Playwright E2E testing for critical user flows including authentication, production, dashboard, and export.

#### Implementation Details

**Files to Verify:**

- `apps/web-e2e/playwright.config.ts` - Playwright configuration

**Files to Create:**

- `apps/web-e2e/src/auth.spec.ts` - Authentication flow tests
- `apps/web-e2e/src/production.spec.ts` - Production form tests
- `apps/web-e2e/src/dashboard.spec.ts` - Dashboard tests
- `apps/web-e2e/src/export.spec.ts` - Export flow tests

**Playwright Configuration (Verify):**

```typescript
// apps/web-e2e/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:3000';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npx nx run @ws-ops/web:start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    cwd: workspaceRoot,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['junit', { outputFile: 'test-results/junit.xml' }]],
});
```

**Authentication Flow Test:**

```typescript
// apps/web-e2e/src/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should display sign-in page', async ({ page }) => {
    await page.goto('/sign-in');

    await expect(page.locator('h1')).toContainText('DeskOps');
    await expect(page.locator('input[name="identifier"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test('should sign in successfully', async ({ page }) => {
    await page.goto('/sign-in');

    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Dashboard');
  });

  test('should display error for invalid credentials', async ({ page }) => {
    await page.goto('/sign-in');

    await page.fill('input[name="identifier"]', 'invalid@example.com');
    await page.fill('input[name="password"]', 'WrongPassword');
    await page.click('button[type="submit"]');

    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('should sign out successfully', async ({ page }) => {
    // Assume user is signed in
    await page.goto('/dashboard');

    await page.click('[data-testid="user-button"]');
    await page.click('text=Sign out');

    await expect(page).toHaveURL('/');
  });
});
```

**Production Form Test:**

```typescript
// apps/web-e2e/src/production.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Production Form', () => {
  test.beforeEach(async ({ page }) => {
    // Sign in before each test
    await page.goto('/sign-in');
    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('should navigate to production page', async ({ page }) => {
    await page.click('text=Production');

    await expect(page).toHaveURL('/dashboard/production');
    await expect(page.locator('h1')).toContainText('Production');
  });

  test('should open production form dialog', async ({ page }) => {
    await page.goto('/dashboard/production');

    await page.click('button:has-text("Add Production")');

    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.locator('text=Create Production Record')).toBeVisible();
  });

  test('should submit production form successfully', async ({ page }) => {
    await page.goto('/dashboard/production');
    await page.click('button:has-text("Add Production")');

    // Fill form
    await page.selectOption('select[name="materialId"]', 'MAT001');
    await page.fill('input[name="qtyTon"]', '100.5');
    await page.selectOption('select[name="operation"]', 'CRU-PRO');

    // Submit
    await page.click('button[type="submit"]');

    // Verify success
    await expect(page.locator('.toast')).toContainText(
      'Production record created'
    );
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should display validation errors', async ({ page }) => {
    await page.goto('/dashboard/production');
    await page.click('button:has-text("Add Production")');

    // Submit without filling required fields
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Material is required')).toBeVisible();
    await expect(page.locator('text=Quantity must be positive')).toBeVisible();
  });
});
```

**Dashboard Test:**

```typescript
// apps/web-e2e/src/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-in');
    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('should display KPI metric cards', async ({ page }) => {
    await expect(page.locator('text=Total Production Today')).toBeVisible();
    await expect(page.locator('text=Received Materials Today')).toBeVisible();
    await expect(page.locator('text=Total Dispatched Today')).toBeVisible();
    await expect(page.locator('text=Current Inventory Status')).toBeVisible();
  });

  test('should display metric values', async ({ page }) => {
    const productionCard = page.locator('[data-testid="kpi-production"]');

    await expect(productionCard).toBeVisible();
    await expect(productionCard.locator('.metric-value')).not.toBeEmpty();
    await expect(productionCard.locator('.metric-unit')).toContainText('TON');
  });

  test('should display trend indicators', async ({ page }) => {
    const trendIndicator = page
      .locator('[data-testid="trend-indicator"]')
      .first();

    await expect(trendIndicator).toBeVisible();
    await expect(trendIndicator).toHaveAttribute('data-trend', /up|down/);
  });

  test('should render charts', async ({ page }) => {
    await expect(
      page.locator('[data-testid="production-chart"]')
    ).toBeVisible();
    await expect(page.locator('[data-testid="inventory-chart"]')).toBeVisible();
  });

  test('should interact with chart tooltips', async ({ page }) => {
    const chart = page.locator('[data-testid="production-chart"]');

    await chart.hover();
    await expect(page.locator('.recharts-tooltip')).toBeVisible();
  });
});
```

**Export Flow Test:**

```typescript
// apps/web-e2e/src/export.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Export Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-in');
    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('should open export dialog', async ({ page }) => {
    await page.click('button:has-text("Export")');

    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.locator('text=Export Data')).toBeVisible();
  });

  test('should create export job', async ({ page }) => {
    await page.click('button:has-text("Export")');

    // Fill export form
    await page.selectOption('select[name="module"]', 'production');
    await page.selectOption('select[name="format"]', 'xlsx');
    await page.selectOption('select[name="granularity"]', 'daily');

    // Submit
    await page.click('button[type="submit"]');

    // Verify job created
    await expect(page.locator('.toast')).toContainText('Export job created');
  });

  test('should display export progress', async ({ page }) => {
    await page.click('button:has-text("Export")');
    await page.selectOption('select[name="module"]', 'production');
    await page.click('button[type="submit"]');

    // Wait for progress indicator
    await expect(page.locator('[data-testid="export-progress"]')).toBeVisible();
    await expect(page.locator('.progress-bar')).toBeVisible();
  });

  test('should download completed export', async ({ page }) => {
    // Assume export is completed
    await page.goto('/dashboard');

    const downloadPromise = page.waitForEvent('download');
    await page.click('[data-testid="download-export"]');

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/DeskOps_.*\.(xlsx|csv|pdf)/);
  });
});
```

#### Validation Checklist

- [ ] Playwright config verified with correct test projects
- [ ] WebServer configured to start dev server before tests
- [ ] Auth tests cover sign-in, sign-up, sign-out flows
- [ ] Production tests cover form submission end-to-end
- [ ] Dashboard tests cover metrics display and chart interactions
- [ ] Export tests cover job creation and download
- [ ] Test retries configured (2 retries in CI)
- [ ] Screenshots captured on failure
- [ ] Test reports generated (HTML + JUnit)
- [ ] Tests run in parallel efficiently

#### Documentation References

- `DeskOps-Configuration.md` (lines 986-1039)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

## Phase 14: Final Review (1 Task)

- `DeskOps-Configuration.md` (lines 986-1039)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

## Phase 14: Final Review (1 Task)

### Task 14.1: Review Completed Implementation of Phases 8-13

**Ticket ID:** `574628ea-438f-4725-909d-3bebc2b99e80`
**Size:** Story
**Priority:** High

**Objective:**

Comprehensive review of all implemented features to ensure quality, compliance, and functionality.

#### Review Checklist

**1. Pages & UI Components**

- [ ] All pages render without errors
- [ ] Responsive layouts work on mobile/tablet/desktop
- [ ] Design matches specifications from `DeskOps-Interface-Overview.md`
- [ ] Loading states display correctly
- [ ] Empty states show appropriate messages
- [ ] Error states provide clear feedback

**2. Forms & Validation**

- [ ] All forms validate with Zod schemas
- [ ] Required fields marked correctly
- [ ] Error messages display inline
- [ ] Success feedback via toast notifications
- [ ] Form resets after successful submission
- [ ] Disabled states prevent double submission

**3. API Routes**

- [ ] All routes follow `/api/[module]/[resource]` pattern
- [ ] NO versioned paths (`/api/v1/...`)
- [ ] Clerk authentication enforced
- [ ] Zod validation applied to request bodies
- [ ] Error handling uses `handleApiError` utility
- [ ] Rate limiting implemented where needed

**4. Type Safety**

- [ ] NO `any` types anywhere in codebase
- [ ] All interfaces properly typed
- [ ] Function parameters and return types explicit
- [ ] Generic types used correctly
- [ ] Type guards implemented where needed

**5. Constants & SSOT**

- [ ] All constants imported from `@deskops/constants`
- [ ] NO duplicate constant definitions
- [ ] Material, equipment, role definitions centralized
- [ ] Operation types referenced from SSOT
- [ ] UOM types consistent across codebase

**6. State Management**

- [ ] React Query hooks invalidate caches correctly
- [ ] Query keys use factory pattern
- [ ] Zustand stores persist to localStorage
- [ ] App store manages site, date, theme correctly
- [ ] Export store tracks job lifecycle

**7. Export System**

- [ ] Excel exports include frozen headers and filters
- [ ] PDF exports follow A4 format
- [ ] CSV exports are RFC 4180 compliant
- [ ] Progress tracking updates in real-time
- [ ] File hash generated for integrity
- [ ] Cleanup job removes expired exports

**8. Authentication**

- [ ] Clerk middleware protects routes
- [ ] Role-based access control works
- [ ] Sign-in/sign-up pages render correctly
- [ ] Custom `useAuth` hook provides role checking
- [ ] User metadata includes role information

**9. Testing**

- [ ] Unit tests achieve 80% coverage
- [ ] Integration tests cover key flows
- [ ] E2E tests cover critical user journeys
- [ ] All tests pass consistently
- [ ] Test utilities work correctly
- [ ] Mocks configured properly

**10. GZANSP Compliance**

- [ ] Zero assumptions made in implementation
- [ ] All decisions source-backed from documentation
- [ ] Single source of truth maintained
- [ ] Method-first architecture followed
- [ ] No banned terminology used
- [ ] Endpoint standardization enforced

#### Documentation References

- `DeskOps-ImplementationPlan.md` (lines 991-1026)
- `DeskOps-Interface-Overview.md` (entire document)
- `DeskOps-Backend.md` (entire document)
- `DeskOps-Frontend.md` (entire document)
- `DeskOps-DB-Prisma.md` (entire document)
- `DeskOps-Configuration.md` (entire document)
- `DeskOps-constants.md` (entire document)
- `DeskOps-Hooks.md` (entire document)
- `AGENTS.md` (entire document)

---

## ---

## Success Criteria

**Technical Requirements:**

- ✅ All TypeScript code strictly typed (NO `any`)
- ✅ All constants imported from centralized location
- ✅ All API routes follow `/api/[module]/[resource]` pattern
- ✅ All forms validate with Zod schemas
- ✅ Test coverage ≥ 80%

**Functional Requirements:**

- ✅ Inventory page displays calculated closing balances
- ✅ React Query hooks manage server state
- ✅ Zustand stores manage client state
- ✅ Export system generates valid files
- ✅ Authentication protects routes
- ✅ E2E tests cover critical flows

**Quality Requirements:**

- ✅ GZANSP compliance verified
- ✅ No banned terminology used
- ✅ Source-backed decisions documented
- ✅ Single source of truth maintained
- ✅ Method-first architecture followed

---

## Notes

- This document consolidates 13 remaining tasks from the original implementation plan
- All tasks follow GZANSP × AOC protocol strictly
- Implementation should proceed in phase order to maintain dependencies
- Each task includes validation checklists and documentation references
- Final review ensures all requirements met before deployment

---

**End of Document**
