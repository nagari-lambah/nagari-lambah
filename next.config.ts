import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rangkiang.agamkab.go.id",
      },
    ],
  },
};

export default nextConfig;