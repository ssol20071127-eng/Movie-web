import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
