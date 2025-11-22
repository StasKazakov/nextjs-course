import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
      turbopackFileSystemCacheForDev: true
  }
};

export default nextConfig;
