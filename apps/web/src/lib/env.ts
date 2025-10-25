import { z } from 'zod';

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

function validateServerEnv(): z.infer<typeof serverSchema> {
  const parsed = serverSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      '❌ Invalid server environment variables:',
      parsed.error.flatten().fieldErrors
    );
    throw new Error('Invalid server environment variables');
  }

  return parsed.data;
}

function validateClientEnv(): z.infer<typeof clientSchema> {
  const parsed = clientSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      '❌ Invalid client environment variables:',
      parsed.error.flatten().fieldErrors
    );
    throw new Error('Invalid client environment variables');
  }

  return parsed.data;
}

export const serverEnv =
  typeof window === 'undefined' ? validateServerEnv() : null;
export const clientEnv = validateClientEnv();
