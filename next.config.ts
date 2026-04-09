import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 2026.04.09 add
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;

