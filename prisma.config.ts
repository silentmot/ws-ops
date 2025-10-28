import path from "node:path";
import { defineConfig } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: path.join("packages", "database", "prisma", "schema.prisma"),
  migrations: {
    path: path.join("packages", "database", "prisma", "migrations"),
    seed: "bun run packages/database/prisma/seed.ts",
  },
  views: {
    path: path.join("packages", "database", "prisma", "views"),
  },
  typedSql: {
    path: path.join("packages", "database", "prisma", "queries"),
  },
});
