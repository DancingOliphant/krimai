/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow production builds to successfully complete even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disabling eslint during build since we're handling it separately
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
