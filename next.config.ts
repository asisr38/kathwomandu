import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.fineartamerica.com",
        pathname: "/images-medium-large-5/**",
      },
    ],
  },
};

export default nextConfig;
