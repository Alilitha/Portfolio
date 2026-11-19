import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default function config(phase: string): NextConfig {
  const shared: NextConfig = {
    basePath: '/Portfolio',
    trailingSlash: true,
    images: { unoptimized: true },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...shared,
      async redirects() {
        return [{ source: '/', destination: '/Portfolio/', basePath: false, permanent: false }];
      },
    };
  }

  return { ...shared, output: 'export' };
}
