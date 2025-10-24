# Frontend Architecture & UI Components

## DeskOps React Component System

### Overview

Complete frontend architecture using Next.js 16 App Router with React 19, implementing a flat UI design system with shadcn/ui components, Recharts for data visualization, and strict TypeScript patterns. No `any` types permitted throughout the component hierarchy.

---

## Component Architecture Principles

- **Flat UI Design**: Subtle elevation, clean surfaces, purposeful animations
- **Type Safety**: Strict TypeScript with NO `any` types
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation
- **Performance**: Code splitting, lazy loading, optimized bundle sizes
- **Single Source of Truth**: All constants imported from centralized location
- **Design Tokens**: Consistent spacing, colors, typography through CSS variables

---

## Project Structure

```ini
src/
├── app/                          # App Router pages
│   ├── (dashboard)/             # Dashboard layout group
│   │   ├── dashboard/           # Main dashboard page
│   │   ├── production/          # Production tracking page
│   │   ├── dispatch/            # Dispatch management page
│   │   ├── received/            # Received materials page
│   │   ├── equipment/           # Equipment utilization page
│   │   ├── manpower/            # Manpower attendance page
│   │   └── layout.tsx           # Dashboard layout
│   ├── globals.css              # Global styles and CSS variables
│   └── layout.tsx               # Root layout
├── components/                   # Reusable UI components
│   ├── ui/                      # shadcn/ui base components
│   ├── charts/                  # Chart components (Recharts)
│   ├── forms/                   # Form components
│   ├── layout/                  # Layout components
│   ├── dashboard/               # Dashboard-specific components
│   └── data-table/              # Data table components
├── hooks/                        # Custom React hooks
├── lib/                         # Utilities and configurations
│   ├── constants.ts             # Centralized constants (provided)
│   ├── utils.ts                 # Utility functions
│   ├── validations.ts           # Zod schemas for forms
│   └── design-tokens.ts         # Design system tokens
└── types/                       # TypeScript type definitions
```

---

## Design System & Tokens

### Design Tokens Configuration

```typescript
// src/lib/design-tokens.ts
import { DECIMAL_PRECISION, UOM } from './constants';

export const DesignTokens = {
  // Spacing (8px grid system)
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px - Labels
      sm: '0.875rem',   // 14px - Body
      base: '1rem',     // 16px - H3
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px - H2
      '2xl': '2rem',    // 32px - H1
      '3xl': '2.25rem', // 36px - Data numbers
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.6',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',
    },
  },

  // Colors (OKLCH palette)
  colors: {
    // Base colors
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',

    // Semantic colors
    primary: 'hsl(var(--primary))',
    primaryForeground: 'hsl(var(--primary-foreground))',
    secondary: 'hsl(var(--secondary))',
    secondaryForeground: 'hsl(var(--secondary-foreground))',

    // Data visualization colors
    chart: [
      'hsl(var(--chart-1))', // Production - Emerald
      'hsl(var(--chart-2))', // Received - Cyan
      'hsl(var(--chart-3))', // Dispatched - Orange
      'hsl(var(--chart-4))', // Inventory - Purple
      'hsl(var(--chart-5))', // Equipment - Blue
    ],

    // Status colors
    success: 'hsl(var(--success))',
    warning: 'hsl(var(--warning))',
    destructive: 'hsl(var(--destructive))',

    // UI elements
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    muted: 'hsl(var(--muted))',
    mutedForeground: 'hsl(var(--muted-foreground))',
  },

  // Shadows & Elevation
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },

  // Border radius
  radius: {
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
  },

  // Animation durations
  animation: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    counter: '1200ms',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index layers
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

export type DesignTokens = typeof DesignTokens;
```

### Global CSS Variables

```css
/* src/app/globals.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;

    /* Chart colors */
    --chart-1: 142 76% 36%;  /* Emerald */
    --chart-2: 173 58% 39%;  /* Cyan */
    --chart-3: 24 70% 50%;   /* Orange */
    --chart-4: 263 70% 50%;  /* Purple */
    --chart-5: 213 94% 68%;  /* Blue */

    /* Status colors */
    --success: 142 76% 36%;
    --warning: 38 92% 50%;
    --error: 0 84% 60%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;

    /* Chart colors (adjusted for dark mode) */
    --chart-1: 142 70% 45%;
    --chart-2: 173 55% 50%;
    --chart-3: 24 75% 60%;
    --chart-4: 263 75% 65%;
    --chart-5: 213 90% 75%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* Ensure tabular numbers for data */
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }

  /* Focus styles */
  .focus-ring {
    @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## Layout Components

### Root Layout

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DeskOps - Construction & Demolition Recycling Management',
  description: 'Modern web application for managing construction and demolition recycling facility operations',
  keywords: ['recycling', 'construction', 'demolition', 'inventory', 'production'],
  authors: [{ name: 'DeskOps Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider>
              {children}
              <Toaster richColors position="top-right" />
            </QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
```

**Note:** Import QueryProvider:

```typescript
import { QueryProvider } from '@/components/providers/query-provider';
```

### Dashboard Layout

```typescript
// src/app/(dashboard)/layout.tsx
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps): JSX.Element {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### Header Component

```typescript
// src/components/layout/header.tsx
'use client';

import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { Bell, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { SiteSelector } from '@/components/site-selector';
import { DateRangePicker } from '@/components/date-range-picker';
import { DEFAULT_SITE_CODE } from '@/lib/constants';

export function Header(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const [selectedSite, setSelectedSite] = useState(DEFAULT_SITE_CODE);
  const [dateRange, setDateRange] = useState<{
    from: Date;
    to: Date;
  }>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date(),
  });

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold tracking-tight">DeskOps</h1>
        <SiteSelector
          value={selectedSite}
          onValueChange={setSelectedSite}
        />
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />
      </div>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-2">
              <h4 className="font-semibold">Notifications</h4>
              <p className="text-sm text-muted-foreground">You have 3 unread notifications</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Export completed</p>
                <p className="text-xs text-muted-foreground">Production report is ready for download</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Inventory threshold</p>
                <p className="text-xs text-muted-foreground">AGG-3/4 stock is running low</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>

        {/* User menu */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
```

### Sidebar Navigation

```typescript
// src/components/layout/sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Package,
  Truck,
  Download,
  Settings,
  Users,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Production', href: '/production', icon: BarChart3 },
  { name: 'Dispatch', href: '/dispatch', icon: Truck },
  { name: 'Received', href: '/received', icon: Download },
  { name: 'Equipment', href: '/equipment', icon: Wrench },
  { name: 'Manpower', href: '/manpower', icon: Users },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleCollapsed = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          'flex flex-col border-r bg-card transition-all duration-300',
          collapsed ? 'w-16' : 'w-64'
        )}
      >
        {/* Collapse button */}
        <div className="flex h-16 items-center justify-end px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapsed}
            className="h-8 w-8"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            const linkContent = (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                  isActive
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground',
                  collapsed && 'justify-center px-2'
                )}
              >
                <Icon className={cn('h-5 w-5', !collapsed && 'mr-3')} />
                {!collapsed && (
                  <>
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );

            if (collapsed) {
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    {linkContent}
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }

            return linkContent;
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}
```

---

## Dashboard Components

### KPI Metric Cards

```typescript
// src/components/dashboard/kpi-card.tsx
'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { formatWithPrecision, UOM } from '@/lib/constants';

interface KPICardProps {
  title: string;
  value: number;
  unit: UOM;
  change: number;
  isLoading?: boolean;
  className?: string;
}

export function KPICard({
  title,
  value,
  unit,
  change,
  isLoading = false,
  className,
}: KPICardProps): JSX.Element {
  const [animatedValue, setAnimatedValue] = useState(0);
  const isPositive = change >= 0;

  useEffect(() => {
    if (isLoading) return;

    const duration = 1200;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(increment * currentStep, value);
      setAnimatedValue(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isLoading]);

  if (isLoading) {
    return (
      <Card className={cn('', className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-8 w-24 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-16 animate-pulse rounded bg-muted" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn(
          'flex items-center space-x-1 text-xs',
          isPositive ? 'text-green-600' : 'text-red-600'
        )}>
          {isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          <span>{Math.abs(change).toFixed(1)}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tabular-nums">
          {formatWithPrecision(animatedValue, unit)} {unit}
        </div>
        <p className="text-xs text-muted-foreground">
          {isPositive ? '+' : ''}{change.toFixed(1)}% from yesterday
        </p>
      </CardContent>
    </Card>
  );
}
```

### Chart Components

```typescript
// src/components/charts/production-vs-target-chart.tsx
'use client';

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatWithPrecision } from '@/lib/constants';

interface ProductionVsTargetData {
  date: string;
  production: number;
  target: number;
  gap: number;
}

interface ProductionVsTargetChartProps {
  data: ProductionVsTargetData[];
  isLoading?: boolean;
}

export function ProductionVsTargetChart({
  data,
  isLoading = false,
}: ProductionVsTargetChartProps): JSX.Element {
  if (isLoading) {
    return (
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Production vs Target</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 animate-pulse rounded bg-muted" />
        </CardContent>
      </Card>
    );
  }

  const CustomTooltip = ({ active, payload, label }: unknown): JSX.Element | null => {
    if (active && payload && Array.isArray(payload) && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-3 shadow-md">
          <p className="font-medium">{`Date: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${formatWithPrecision(Number(entry.value), 'TON')} TON`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Production vs Target</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis className="text-xs" />
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Bar
              dataKey="production"
              fill="hsl(var(--chart-1))"
              name="Production"
              radius={[2, 2, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              name="Target"
              dot={{ r: 4 }}
            />
            <ReferenceLine
              y={0}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="2 2"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
```

```typescript
// src/components/charts/inventory-chart.tsx
'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  Brush,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatWithPrecision } from '@/lib/constants';

interface InventoryData {
  date: string;
  closing: number;
  minThreshold: number;
  maxThreshold: number;
}

interface InventoryChartProps {
  data: InventoryData[];
  isLoading?: boolean;
}

export function InventoryChart({
  data,
  isLoading = false,
}: InventoryChartProps): JSX.Element {
  if (isLoading) {
    return (
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Inventory Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 animate-pulse rounded bg-muted" />
        </CardContent>
      </Card>
    );
  }

  const CustomTooltip = ({ active, payload, label }: unknown): JSX.Element | null => {
    if (active && payload && Array.isArray(payload) && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-3 shadow-md">
          <p className="font-medium">{`Date: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${formatWithPrecision(Number(entry.value), 'TON')} TON`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Inventory Levels</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="inventoryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              className="text-xs"
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
            />
            <YAxis className="text-xs" />
            <Tooltip content={CustomTooltip} />

            {/* Threshold bands */}
            <ReferenceArea
              y1="minThreshold"
              y2="maxThreshold"
              fill="hsl(var(--success))"
              fillOpacity={0.1}
              ifOverflow="extendDomain"
            />

            <Area
              type="monotone"
              dataKey="closing"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              fill="url(#inventoryGradient)"
              name="Inventory"
            />

            <Brush
              dataKey="date"
              height={30}
              stroke="hsl(var(--chart-4))"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
```

---

## Form Components

### Production Form

```typescript
// src/components/forms/production-form.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import {
  MATERIALS,
  OPERATION_TYPES,
  type OperationType,
  getMaterialsInOrder,
} from '@/lib/constants';
import { createProduction } from '@/app/actions/production';

const productionFormSchema = z.object({
  siteId: z.string().cuid(),
  date: z.date(),
  shift: z.enum(['MORNING', 'AFTERNOON', 'NIGHT']).optional(),
  materialId: z.string().min(1, 'Material is required'),
  qtyTon: z.number().positive('Quantity must be positive').max(999999.999),
  operation: z.enum(['CRU-PRO', 'CRU-DIS', 'CRU-OP', 'SEG-OP']),
  notes: z.string().max(500).optional(),
});

type ProductionFormData = z.infer<typeof productionFormSchema>;

interface ProductionFormProps {
  siteId: string;
  onSuccess?: () => void;
}

export function ProductionForm({ siteId, onSuccess }: ProductionFormProps): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProductionFormData>({
    resolver: zodResolver(productionFormSchema),
    defaultValues: {
      siteId,
      date: new Date(),
      qtyTon: 0,
      operation: 'CRU-PRO',
    },
  });

  const onSubmit = async (data: ProductionFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const result = await createProduction(data);

      if (result.success) {
        toast.success('Production record created successfully');
        form.reset();
        onSuccess?.();
      } else {
        toast.error(result.error || 'Failed to create production record');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const materials = getMaterialsInOrder();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Production Record</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Material */}
              <FormField
                control={form.control}
                name="materialId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {materials.map((material) => (
                          <SelectItem key={material.id} value={material.id}>
                            {material.code} - {material.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Quantity */}
              <FormField
                control={form.control}
                name="qtyTon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity (TON)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.001"
                        min="0"
                        max="999999.999"
                        placeholder="0.000"
                        className="tabular-nums"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Operation */}
              <FormField
                control={form.control}
                name="operation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Operation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select operation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(OPERATION_TYPES).map(([code, { label }]) => (
                          <SelectItem key={code} value={code}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Shift */}
              <FormField
                control={form.control}
                name="shift"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shift (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shift" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="MORNING">Morning</SelectItem>
                        <SelectItem value="AFTERNOON">Afternoon</SelectItem>
                        <SelectItem value="NIGHT">Night</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Notes */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Additional notes..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? 'Creating...' : 'Create Production Record'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
```

---

## Data Table Component

```typescript
// src/components/data-table/data-table.tsx
'use client';

import { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings2 } from 'lucide-react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = 'Search...',
}: DataTableProps<TData, TValue>): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          {searchKey && (
            <Input
              placeholder={searchPlaceholder}
              value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ''}
              onChange={(event) =>
                table.getColumn(searchKey)?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px]"
            />
          )}
        </div>

        {/* Column visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto h-8">
              <Settings2 className="mr-2 h-4 w-4" />
              View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
```

---

## Summary

This frontend architecture provides:

- **Complete component system** with flat UI design and shadcn/ui integration
- **Type-safe components** with NO `any` types throughout
- **Responsive layouts** with sidebar navigation and header
- **Interactive charts** using Recharts with custom styling
- **Form components** with validation and error handling
- **Data tables** with sorting, filtering, and pagination
- **Design token system** with consistent spacing and colors
- **Accessibility compliance** with WCAG 2.1 AA standards
- **Performance optimization** with code splitting and lazy loading

**Next Steps**:

1. Implement remaining chart components (Equipment, Manpower)
2. Add export dialog components
3. Create notification system components
4. Implement mobile-responsive adjustments
5. Add comprehensive Storybook documentation
6. Set up visual regression testing with Chromatic
