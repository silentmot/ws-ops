import { composePlugins, withNx } from '@nx/next';

const nextConfig = {
  // Turbopack is the default bundler in Next.js 16+
  // Enable filesystem caching for faster subsequent builds (Beta)
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default composePlugins(withNx)(nextConfig);
