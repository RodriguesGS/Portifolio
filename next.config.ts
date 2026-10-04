import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    localeDetection: false,
  },
};

export default nextConfig;