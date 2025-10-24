# Project Structure & Configuration

## DeskOps Monorepo Setup and Configuration Guide

### Overview

Complete monorepo configuration using Nx workspace with Next.js 16, TypeScript, bun package manager, and comprehensive tooling setup. Implements strict TypeScript patterns with NO `any` types and follows modern development practices.

---

## Project Structure

```ini
deskops-monorepo/
├── apps/
│   └── web/                     # Main Next.js application
│       ├── src/
│       │   ├── app/             # App Router pages
│       │   ├── components/      # React components
│       │   ├── hooks/           # Custom hooks
│       │   ├── lib/             # Utilities and configurations
│       │   ├── stores/          # Zustand stores
│       │   └── types/           # TypeScript types
│       ├── public/              # Static assets
│       ├── prisma/              # Database schema and migrations
│       ├── next.config.ts       # Next.js configuration
│       ├── tailwind.config.ts   # Tailwind CSS configuration
│       ├── tsconfig.json        # TypeScript configuration
│       └── package.json         # App dependencies
├── packages/
│   ├── ui/                      # Shared UI components (shadcn/ui)
│   │   ├── src/
│   │   │   ├── components/      # Reusable components
│   │   │   └── lib/             # Component utilities
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── constants/               # Shared constants and types
│   │   ├── src/
│   │   │   ├── materials.ts     # Material definitions
│   │   │   ├── equipment.ts     # Equipment definitions
│   │   │   ├── operations.ts    # Operation types
│   │   │   └── index.ts         # Centralized exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── database/                # Shared database utilities
│   │   ├── src/
│   │   │   ├── schemas/         # Zod validation schemas
│   │   │   ├── types.ts         # Database types
│   │   │   └── client.ts        # Prisma client
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── eslint-config/           # Shared ESLint configuration
│       ├── index.js
│       ├── react.js
│       └── package.json
├── tools/
│   ├── scripts/                 # Build and deployment scripts
│   └── github/                  # GitHub Actions workflows
├── nx.json                      # Nx workspace configuration
├── package.json                 # Root package.json
├── tsconfig.json               # Root TypeScript configuration
├── .gitignore
├── .env.example
└── README.md
```

---

## Root Configuration Files

### Package.json (Root)

```json
{
  "name": "deskops",
  "version": "1.0.0",
  "private": true,
  "description": "Construction & Demolition Recycling Facility Management System",
  "scripts": {
    "build": "nx run-many -t build",
    "dev": "nx run-many -t dev",
    "lint": "nx run-many -t lint",
    "type-check": "nx run-many -t type-check",
    "test": "nx run-many -t test",
    "test:e2e": "nx run-many -t test:e2e",
    "clean": "nx reset && nx run-many -t clean",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\"",
    "db:generate": "cd apps/web && bunx prisma generate",
    "db:migrate": "cd apps/web && bunx prisma migrate dev",
    "db:seed": "cd apps/web && bunx prisma db seed",
    "db:studio": "cd apps/web && bunx prisma studio",
    "prepare": "husky install"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@typescript-eslint/eslint-plugin": "^6.13.0",
    "@typescript-eslint/parser": "^6.13.0",
    "eslint": "^8.54.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.0",
    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "nx": "^18.0.0",
    "@nx/workspace": "^18.0.0",
    "@nx/next": "^18.0.0",
    "typescript": "^5.3.0"
  },
  "packageManager": "bun@1.2.0",
  "engines": {
    "node": ">=18.0.0",
    "bun": ">=1.2.0"
  },
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{md,json}": [
      "prettier --write"
    ]
  }
}
```

### Husky Pre-commit Hook

```bash
#!/usr/bin/env sh
# .husky/pre-commit

# Run lint-staged
bunx lint-staged

# Optional: Run type check on staged TypeScript files
# Uncomment below to enable type checking (may slow down commits)
# echo "Running type check..."
# bun run type-check
```

**Setup Instructions:**

1. Initialize Husky (if not already done):

   ```bash
   bunx husky install
   ```

2. Create the pre-commit hook:

   ```bash
   bunx husky add .husky/pre-commit "bunx lint-staged"
   ```

3. Make the hook executable:

   ```bash
   chmod +x .husky/pre-commit
   ```

4. Test the hook:

   ```bash
   git add .
   git commit -m "test: validate pre-commit hook"
   ```

### Nx Workspace Configuration

```json
// nx.json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["{projectRoot}/.next", "{projectRoot}/dist"],
      "cache": true
    },
    "dev": {
      "cache": false
    },
    "lint": {
      "dependsOn": ["^lint"],
      "cache": true
    },
    "type-check": {
      "dependsOn": ["^type-check"],
      "cache": true
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["{projectRoot}/coverage"],
      "cache": true
    },
    "test:e2e": {
      "dependsOn": ["build"],
      "outputs": ["{projectRoot}/test-results"],
      "cache": true
    },
    "clean": {
      "cache": false
    },
    "db:generate": {
      "cache": false
    },
    "db:migrate": {
      "cache": false
    }
  },
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "production": [
      "default",
      "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
      "!{projectRoot}/tsconfig.spec.json",
      "!{projectRoot}/.eslintrc.json"
    ],
    "sharedGlobals": ["{workspaceRoot}/.env.*"]
  },
  "affected": {
    "defaultBase": "main"
  },
  "plugins": [
    {
      "plugin": "@nx/next/plugin",
      "options": {
        "buildTargetName": "build",
        "devTargetName": "dev",
        "startTargetName": "start"
      }
    }
  ]
}
```

### Root TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@deskops/ui": ["./packages/ui/src"],
      "@deskops/constants": ["./packages/constants/src"],
      "@deskops/database": ["./packages/database/src"]
    },

    // Strict type checking
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true
  },
  "include": [
    "nx.json",
    "package.json"
  ],
  "exclude": [
    "node_modules",
    ".next",
    "dist"
  ],
  "references": [
    { "path": "./apps/web" },
    { "path": "./packages/ui" },
    { "path": "./packages/constants" },
    { "path": "./packages/database" },
    { "path": "./packages/eslint-config" }
  ]
}
```

---

## Application Configuration

### Next.js Configuration

```typescript
// apps/web/next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Basic configuration
  reactStrictMode: true,
  swcMinify: true,

  // TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // ESLint configuration
  eslint: {
    dirs: ['src'],
  },

  // Experimental features
  experimental: {
    typedRoutes: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },

  // Image optimization
  images: {
    domains: ['images.clerk.dev'],
    formats: ['image/webp', 'image/avif'],
  },

  // Security headers
  async headers() {
    const isProd = process.env.NODE_ENV === 'production';

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://clerk.deskops.app", // Clerk requires unsafe-inline for widgets
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://clerk.deskops.app https://*.clerk.accounts.dev",
              "frame-src 'self' https://clerk.deskops.app",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          ...(isProd ? [{
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          }] : []),
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configurations here
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },

  // Bundle analyzer (development only)
  ...(process.env.ANALYZE === 'true' && {
    experimental: {
      bundlePagesRouterDependencies: true,
    },
  }),
};

export default nextConfig;
```

### App Package.json

```json
// apps/web/package.json
{
  "name": "@deskops/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev --turbopack",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:seed": "prisma db seed",
    "db:studio": "prisma studio",
    "clean": "rm -rf .next && rm -rf .nx"
  },
  "dependencies": {
    "@clerk/nextjs": "^4.29.0",
    "@hookform/resolvers": "^3.3.0",
    "@prisma/client": "^5.7.0",
    "@radix-ui/react-accordion": "^1.1.0",
    "@radix-ui/react-alert-dialog": "^1.0.0",
    "@radix-ui/react-avatar": "^1.0.0",
    "@radix-ui/react-calendar": "^1.0.0",
    "@radix-ui/react-checkbox": "^1.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-label": "^2.0.0",
    "@radix-ui/react-popover": "^1.0.0",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@radix-ui/react-switch": "^1.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-tooltip": "^1.0.0",
    "@tanstack/react-query": "^5.12.0",
    "@tanstack/react-table": "^8.11.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "cmdk": "^0.2.0",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.294.0",
    "next": "16.0.0",
    "next-themes": "^0.2.0",
    "react": "19.0.0",
    "react-day-picker": "^8.10.0",
    "react-dom": "19.0.0",
    "react-hook-form": "^7.48.0",
    "recharts": "^2.8.0",
    "sonner": "^1.2.0",
    "tailwind-merge": "^2.1.0",
    "tailwindcss-animate": "^1.0.0",
    "zod": "^3.22.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "@deskops/constants": "workspace:*",
    "@deskops/database": "workspace:*",
    "@deskops/eslint-config": "workspace:*",
    "@deskops/ui": "workspace:*",
    "@next/bundle-analyzer": "^16.0.0",
    "@playwright/test": "^1.40.0",
    "@tanstack/react-query-devtools": "^5.12.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/node": "^20.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.54.0",
    "eslint-config-next": "^16.0.0",
    "jsdom": "^23.0.0",
    "postcss": "^8.4.0",
    "prisma": "^5.7.0",
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.0",
    "@tailwindcss/forms": "^0.5.0",
    "typescript": "^5.3.0",
    "vitest": "^1.0.0"
  },
  "prisma": {
    "seed": "bun run prisma/seed.ts"
  }
}
```

### App TypeScript Configuration

```json
// apps/web/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/stores/*": ["./src/stores/*"],
      "@/types/*": ["./src/types/*"],
      "@deskops/ui": ["../../packages/ui/src"],
      "@deskops/constants": ["../../packages/constants/src"],
      "@deskops/database": ["../../packages/database/src"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ],
  "references": [
    { "path": "../../packages/ui" },
    { "path": "../../packages/constants" },
    { "path": "../../packages/database" }
  ]
}
```

### Package TypeScript Configurations

```json
// packages/ui/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

```json
// packages/constants/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

```json
// packages/database/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
  "references": [
    { "path": "../constants" }
  ]
}
```

---

## Styling Configuration

### Tailwind CSS Configuration

```typescript
// apps/web/tailwind.config.ts
import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    // Include UI package components
    path.join(path.dirname(require.resolve('@deskops/ui/package.json')), 'src/**/*.{ts,tsx}'),
    // Alternatively, use relative path
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;

export default config;
```

### PostCSS Configuration

```javascript
// apps/web/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## Linting and Formatting

### ESLint Configuration

```javascript
// packages/eslint-config/index.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error', // CRITICAL: NO any types
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // General rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',

    // Import rules
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-cycle': 'error',

    // React specific rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
```

```javascript
// packages/eslint-config/react.js
module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'warn',
    'jsx-a11y/anchor-is-valid': 'off', // Next.js Link component
  },
};
```

### Prettier Configuration

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## Testing Configuration

### Vitest Configuration

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
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'e2e'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@deskops/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@deskops/constants': path.resolve(__dirname, '../../packages/constants/src'),
      '@deskops/database': path.resolve(__dirname, '../../packages/database/src'),
    },
  },
});
```

### Test Setup

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
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/dashboard',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Clerk
vi.mock('@clerk/nextjs', () => ({
  useAuth: () => ({
    userId: 'test-user-id',
    isSignedIn: true,
    getToken: vi.fn().mockResolvedValue('test-token'),
  }),
  useUser: () => ({
    user: {
      id: 'test-user-id',
      emailAddresses: [{ emailAddress: 'test@example.com' }],
      fullName: 'Test User',
      imageUrl: 'https://example.com/avatar.jpg',
      publicMetadata: { role: 'MODERATOR' },
    },
    isLoaded: true,
  }),
  UserButton: () => <div data-testid="user-button">User Button</div>,
}));

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Suppress console warnings in tests
const originalWarn = console.warn;
console.warn = (...args: unknown[]) => {
  if (typeof args[0] === 'string' && args[0].includes('Warning:')) {
    return;
  }
  originalWarn(...args);
};
```

### Playwright Configuration

```typescript
// apps/web/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
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
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'bun run dev',
    port: Number(PORT),
    reuseExistingServer: !process.env.CI,
  },
});
```

---

## Package Configurations

### Shared UI Package

```json
// packages/ui/package.json
{
  "name": "@deskops/ui",
  "version": "1.0.0",
  "private": true,
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    },
    "./styles.css": "./src/styles.css"
  },
  "scripts": {
    "lint": "eslint src/",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.0",
    "@radix-ui/react-alert-dialog": "^1.0.0",
    "@radix-ui/react-avatar": "^1.0.0",
    "@radix-ui/react-button": "^1.0.0",
    "@radix-ui/react-calendar": "^1.0.0",
    "@radix-ui/react-checkbox": "^1.0.0",
    "@radix-ui/react-dialog": "^1.0.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "@radix-ui/react-form": "^0.0.3",
    "@radix-ui/react-label": "^2.0.0",
    "@radix-ui/react-popover": "^1.0.0",
    "@radix-ui/react-progress": "^1.0.0",
    "@radix-ui/react-radio-group": "^1.1.0",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.0",
    "@radix-ui/react-slider": "^1.1.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@radix-ui/react-switch": "^1.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-textarea": "^1.0.0",
    "@radix-ui/react-toast": "^1.1.0",
    "@radix-ui/react-toggle": "^1.0.0",
    "@radix-ui/react-tooltip": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.294.0",
    "tailwind-merge": "^2.1.0"
  },
  "devDependencies": {
    "@deskops/eslint-config": "workspace:*",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "eslint": "^8.54.0",
    "typescript": "^5.3.0"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

### ESLint Config Package

```json
// packages/eslint-config/package.json
{
  "name": "@deskops/eslint-config",
  "version": "1.0.0",
  "private": true,
  "main": "./index.js",
  "files": [
    "index.js",
    "react.js"
  ],
  "dependencies": {
    "@typescript-eslint/eslint-plugin": "^6.13.0",
    "@typescript-eslint/parser": "^6.13.0",
    "eslint-plugin-import": "^2.29.0",
    "eslint-plugin-react": "^7.33.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "@next/eslint-plugin-next": "^16.0.0",
    "eslint-import-resolver-typescript": "^3.6.0"
  },
  "devDependencies": {
    "eslint": "^8.54.0",
    "typescript": "^5.3.0"
  },
  "peerDependencies": {
    "eslint": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Constants Package

```json
// packages/constants/package.json
{
  "name": "@deskops/constants",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./src/index.ts"
    }
  },
  "scripts": {
    "lint": "eslint src/",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@deskops/eslint-config": "workspace:*",
    "@types/node": "^20.10.0",
    "eslint": "^8.54.0",
    "typescript": "^5.3.0"
  }
}
```

---

## Environment Configuration

### Environment Variables

```bash
# .env.example
# ============================================================================
# DATABASE CONFIGURATION (Server-only)
# ============================================================================
DATABASE_URL="postgresql://username:password@localhost:5432/deskops_dev?schema=public"
DIRECT_URL="postgresql://username:password@localhost:5432/deskops_dev?schema=public"

# ============================================================================
# AUTHENTICATION (Clerk)
# ============================================================================
# Server-only secrets (NO NEXT_PUBLIC_ prefix)
CLERK_SECRET_KEY="sk_test_..."

# Public keys (NEXT_PUBLIC_ prefix for client access)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"

# ============================================================================
# APP CONFIGURATION (Public)
# ============================================================================
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# ============================================================================
# FEATURE FLAGS (Server-only - access via process.env on server)
# ============================================================================
FEATURE_EXPORTS="true"
FEATURE_AUDIT_LOG="true"
FEATURE_ADVANCED_CHARTS="true"

# ============================================================================
# EXTERNAL SERVICES (Server-only secrets)
# ============================================================================
REDIS_URL="redis://localhost:6379"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# ============================================================================
# ANALYTICS (Public)
# ============================================================================
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=""
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=""

# ============================================================================
# MONITORING (Server-only)
# ============================================================================
SENTRY_DSN=""
SENTRY_ORG=""
SENTRY_PROJECT=""

# ============================================================================
# DEVELOPMENT
# ============================================================================
NODE_ENV="development"
ANALYZE="false"
```

### Runtime Environment Validation

```typescript
// apps/web/src/lib/env.ts
import { z } from 'zod';

/**
 * Server-side environment schema
 * Validates server-only environment variables
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),
  CLERK_SECRET_KEY: z.string().min(1),
  REDIS_URL: z.string().url().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SENTRY_DSN: z.string().url().optional(),
});

/**
 * Client-side environment schema
 * Only NEXT_PUBLIC_* variables are accessible on the client
 */
const clientSchema = z.object({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_VERCEL_ANALYTICS_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
});

/**
 * Validate server environment variables
 * Call this in server-only code (API routes, server actions, etc.)
 */
export function validateServerEnv(): z.infer<typeof serverSchema> {
  const parsed = serverSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid server environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid server environment variables');
  }

  return parsed.data;
}

/**
 * Validate client environment variables
 * These are safe to use in client components
 */
export function validateClientEnv(): z.infer<typeof clientSchema> {
  const parsed = clientSchema.safeParse({
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_VERCEL_ANALYTICS_ID: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  });

  if (!parsed.success) {
    console.error('❌ Invalid client environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid client environment variables');
  }

  return parsed.data;
}

// Type-safe environment access
export const serverEnv = typeof window === 'undefined' ? validateServerEnv() : null;
export const clientEnv = validateClientEnv();
```

---
