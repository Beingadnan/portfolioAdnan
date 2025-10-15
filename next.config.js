/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1000, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyberpanel.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.chesscomfiles.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.ipleaders.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zohowebstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig