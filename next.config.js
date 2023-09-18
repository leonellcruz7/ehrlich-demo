/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // Add the domains from which your images will be served
  },
};

module.exports = nextConfig;
