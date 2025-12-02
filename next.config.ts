import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },

  experimental: {
    // your experimental configs can stay empty or continue here
  },


  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

export default nextConfig;
