/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "govisually.com",
      },
    ],
  },
};

export default nextConfig;
