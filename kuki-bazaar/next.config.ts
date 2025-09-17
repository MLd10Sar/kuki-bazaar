import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Fix workspace root detection
  outputFileTracingRoot: process.cwd(),
  
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    domains: ['images.unsplash.com'],
  },
  
  // Ensure static export works properly
  trailingSlash: false,
  
  // Build optimizations - disable ESLint during build temporarily
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint during build
  },
};

export default nextConfig;
