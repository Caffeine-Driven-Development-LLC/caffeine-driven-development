import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/caffeine-driven-development',
  transpilePackages: ['@ant-design', 'rc-util', 'rc-pagination', 'rc-picker'], // Add antd related packages
};

export default nextConfig;
