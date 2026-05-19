import type { NextConfig } from "next";

import { buildSecurityHeaders } from "./src/config/security";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd()
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: buildSecurityHeaders(isProduction)
      }
    ];
  }
};

export default nextConfig;
