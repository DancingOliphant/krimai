/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Generate static HTML export
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
