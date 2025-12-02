import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },

  experimental: {
    // your experimental configs can stay empty or continue here
  },


  // Enable TypeScript strict build checking. Fix TypeScript errors to proceed.

  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

export default nextConfig;
