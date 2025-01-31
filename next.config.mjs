/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["sc04.alicdn.com", "fiverrnew.cybersoft.edu.vn"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "sc04.alicdn.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "fiverrnew.cybersoft.edu.vn",
                port: "",
                pathname: "**",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
