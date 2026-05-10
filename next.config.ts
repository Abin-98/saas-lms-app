import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
      resolveAlias: {
      "swr": "swr/dist/index/index.mjs",
      "swr/infinite": "swr/dist/infinite/index.mjs",
      "swr/mutation": "swr/dist/mutation/index.mjs",
      },
    },
};

export default nextConfig;
