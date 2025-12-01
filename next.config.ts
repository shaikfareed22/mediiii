import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes and dynamic rendering
  // (required for Vercel serverless functions)
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default nextConfig;
