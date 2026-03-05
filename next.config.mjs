/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/heat1',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
