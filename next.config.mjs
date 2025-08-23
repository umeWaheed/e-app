/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
      },
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: ["react-md-editor"],
};

export default nextConfig;
