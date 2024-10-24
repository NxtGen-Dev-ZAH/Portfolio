/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove rewrites from here since they don't work with static export
}

module.exports = nextConfig