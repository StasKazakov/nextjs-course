import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
      turbopackFileSystemCacheForDev: true
  }
};

export default nextConfig;
