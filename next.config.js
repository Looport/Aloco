/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['surrealdb.js'],
  },
}

module.exports = nextConfig
