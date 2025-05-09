/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  /**
   * Set the build output directory
   */
  distDir: 'out',
  
  /**
   * Set base path to the slug of your GitHub repository
   * Only in production, not in development
   */
  basePath: process.env.NODE_ENV === 'production' ? '/TareeqWeb' : '',
  
  /**
   * Make assets use relative paths rather than absolute paths
   * for GitHub Pages compatibility
   */
  assetPrefix: process.env.NODE_ENV === 'production' ? '/TareeqWeb' : '',
  
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
