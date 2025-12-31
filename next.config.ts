import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Set your desired limit here
    }
  }
};

export default nextConfig;
