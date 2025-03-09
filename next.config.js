/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Explicitly set experimental options if needed
  experimental: {
    // Add any specific experimental features here
  }
}

module.exports = nextConfig
