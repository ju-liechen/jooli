/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  // This explicitly sets to use pages router if needed, though it's the default for Next.js
  useFileSystemPublicRoutes: true,
  // Enable CSS modules
  sassOptions: {
    includePaths: ['./styles'],
  }
};

export default nextConfig;
