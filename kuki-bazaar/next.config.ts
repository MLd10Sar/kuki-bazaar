import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Essential configurations only
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  
  // Disable problematic features for Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Ensure proper routing
  trailingSlash: false,
};

export default nextConfig;
