/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: 'export',
  
  /**
   * Set the build output directory
   */
  distDir: 'out',
  
  /**
   * Set base path to the slug of your GitHub repository
   */
  basePath: '/TareeqWeb',
  
  /**
   * Disable server-based image optimization as GitHub Pages
   * doesn't support server-side functionality
   */
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
