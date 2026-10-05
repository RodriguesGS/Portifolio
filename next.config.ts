import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["pt", "en"],
        defaultLocale: "pt",
        localeDetection: false,
    },
    async redirects() {
        return [
            { source: "/sobre", destination: "/about", permanent: true },
            { source: "/projetos", destination: "/projects", permanent: true },
            { source: "/contato", destination: "/contact", permanent: true },
            { source: "/habilidades", destination: "/about#skills", permanent: true },
        ];
    },
};

export default nextConfig;