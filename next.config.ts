import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: "/pablo",
        assetPrefix: "/pablo/",
      }
    : {}),
};

export default nextConfig;
