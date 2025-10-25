import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const isDev = process.env['NODE_ENV'] === 'development';
const enableQueryLog = process.env['PRISMA_QUERY_LOG'] === 'true' || isDev;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
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
  });

if (enableQueryLog && isDev) {
  // Type assertion needed due to conditional log configuration
  const queryableClient = prisma as PrismaClient & {
    $on: (event: 'query', callback: (e: { query: string; params: string; duration: number }) => void) => void;
  };
  queryableClient.$on('query', (e: { query: string; params: string; duration: number }) => {
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');
  });
}

if (process.env['NODE_ENV'] !== 'production') {
  globalForPrisma.prisma = prisma;
}

export type PrismaClientType = typeof prisma;
