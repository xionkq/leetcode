const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/leetcode' : undefined,
}

export default nextConfig
