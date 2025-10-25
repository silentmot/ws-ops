import path from "node:path";
import { defineConfig } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: path.join("packages", "/database/prisma/schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "tsx prisma/seed.ts", // or your preferred command
  },
  views: {
    path: path.join("prisma", "views"),
  },
  typedSql: {
    path: path.join("prisma", "queries"),
  },
});
