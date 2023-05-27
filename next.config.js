/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pchmayoreo.com']
  },
  env: {
    ROUTE_URL: process.env.ROUTE_URL,
  },
}

module.exports = nextConfig
