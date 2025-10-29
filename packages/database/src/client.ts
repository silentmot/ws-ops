import { PrismaClient } from './generated/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis as unknown as {
  prisma?: ReturnType<typeof createPrismaClient>;
};

const isDev = process.env['NODE_ENV'] === 'development';
const enableQueryLog = process.env['PRISMA_QUERY_LOG'] === 'true' || isDev;

function createPrismaClient() {
  return new PrismaClient({
    log: enableQueryLog
      ? [
          { emit: 'event', level: 'query' },
          { emit: 'stdout', level: 'error' },
          { emit: 'stdout', level: 'warn' },
        ]
      : [
          { emit: 'stdout', level: 'error' },
          { emit: 'stdout', level: 'warn' },
        ],
  }).$extends(withAccelerate());
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (enableQueryLog && isDev) {
  // Access the underlying client for query event logging
  const baseClient = new PrismaClient({
    log: [
      { emit: 'event', level: 'query' },
      { emit: 'stdout', level: 'error' },
      { emit: 'stdout', level: 'warn' },
    ],
  });

  baseClient.$on(
    'query',
    (e: { query: string; params: string; duration: number }) => {
      console.warn('Query: ' + e.query);
      console.warn('Params: ' + e.params);
      console.warn('Duration: ' + e.duration + 'ms');
    }
  );
}

if (process.env['NODE_ENV'] !== 'production') {
  globalForPrisma.prisma = prisma;
}

export type PrismaClientType = typeof prisma;
