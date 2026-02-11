import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This tells Next.js where your site is hosted on GitHub
  basePath: '/njit-sample-cs-bs', 
  assetPrefix: '/njit-sample-cs-bs',
};

export default nextConfig;