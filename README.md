# DeskOps - Construction & Demolition Recycling Facility Management System

A comprehensive facility management system for construction and demolition (C&D) recycling operations, built with modern web technologies.

## Workspace Structure

- `apps/web` - Next.js 16 application with App Router
- `apps/web-e2e` - Playwright E2E tests
- `packages/constants` - Centralized constants and type definitions
- `packages/database` - Prisma schema and database utilities
- `packages/ui` - Shared UI components (Radix UI + Tailwind CSS)
- `packages/eslint-config` - Shared ESLint configuration

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode, NO `any` types)
- **Package Manager:** Bun
- **Monorepo:** Nx
- **Database:** PostgreSQL with Prisma
- **Authentication:** Clerk
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **State Management:** Zustand + React Query
- **Testing:** Vitest + Playwright

## Getting Started

1. Install dependencies:

   ```sh
   bun install
   ```

2. Setup environment:

   ```sh
   cp .env.example .env
   ```

   Fill in the required environment variables in `.env`

3. Initialize Husky:

   ```sh
   bun run prepare
   ```

4. Generate Prisma client:

   ```sh
   bun run db:generate
   ```

5. Run migrations:

   ```sh
   bun run db:migrate
   ```

6. Seed database:

   ```sh
   bun run db:seed
   ```

7. Start dev server:

   ```sh
   bun run dev
   ```

## Available Scripts

- `bun run build` - Build all projects
- `bun run dev` - Start development servers
- `bun run lint` - Lint all projects
- `bun run type-check` - Type check all projects
- `bun run test` - Run unit tests
- `bun run test:e2e` - Run E2E tests
- `bun run clean` - Clean build artifacts
- `bun run format` - Format code with Prettier
- `bun run db:generate` - Generate Prisma client
- `bun run db:migrate` - Run database migrations
- `bun run db:seed` - Seed database
- `bun run db:studio` - Open Prisma Studio

## Development

This project uses Nx for monorepo management. Learn more:

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/next?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/5Gr39XI4XC)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx dev web
```

To create a production bundle:

```sh
npx nx build web
```

To see all available targets to run for a project, run:

```sh
npx nx show project web
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/next:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/next?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
