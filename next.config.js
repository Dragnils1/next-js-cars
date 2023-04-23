/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['s.auto.drom.ru', 'localhost']
  }
}

module.exports = nextConfig
