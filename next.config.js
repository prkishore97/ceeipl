/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["postimg.cc", "www.imghippo.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
