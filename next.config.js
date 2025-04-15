/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['api.placeholder.com', 'assets.aceternity.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig 