import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Avoids Next.js picking up an
  // unrelated lockfile that exists higher up the filesystem.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  images: {
    // Remote image sources allowed by next/image.
    // These are TEMPORARY placeholder CDNs (Unsplash) used while the real
    // brand assets are pending. When the Sanity CMS is connected, add its
    // image host here (e.g. `cdn.sanity.io`) and remove the placeholders.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
