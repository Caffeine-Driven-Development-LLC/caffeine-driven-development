import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/caffeine-driven-development',
  transpilePackages: ['rc-util', 'rc-picker'],
};

export default nextConfig;