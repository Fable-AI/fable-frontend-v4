import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  typescript: { ignoreBuildErrors: true },

  async rewrites() {
    return [
      {
        source: '/.well-known/code-payments.json',
        destination: '/api/well-known/code-payments', // This points to the dynamic API route
      },
    ];
  },
};

export default nextConfig;
