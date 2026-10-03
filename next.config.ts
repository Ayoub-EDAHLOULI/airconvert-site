import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits .next/standalone (minimal server.js + traced node_modules) for the Docker image.
  output: "standalone",
};

export default nextConfig;
