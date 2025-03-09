/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow production builds to successfully complete even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disabling eslint during build since we're handling it separately
    ignoreDuringBuilds: true,
  },
  // Ensure proper static export
  generateStaticParams: async function generateStaticParams() {
    return [
      { slug: 'getting-started-with-ai' },
      { slug: 'machine-learning-basics' },
      { slug: 'future-of-ai' }
    ]
  }
}

module.exports = nextConfig
