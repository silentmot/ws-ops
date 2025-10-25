import type { NextConfig } from 'next';

import { composePlugins, withNx } from '@nx/next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Turbopack is the default bundler in Next.js 16+
  // Enable filesystem caching for faster subsequent builds (Beta)
  experimental: {
    turbopackFileSystemCacheForDev: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },

  images: {
    domains: ['images.clerk.dev'],
    formats: ['image/webp', 'image/avif'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
        ],
      },
    ];
  },
};

export default composePlugins(withNx)(nextConfig);
