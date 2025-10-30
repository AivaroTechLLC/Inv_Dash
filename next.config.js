/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Netlify deployment
  // Netlify plugin handles the deployment better
  
  // External packages for server components
  serverExternalPackages: ['@prisma/client'],
  
  // Image optimization configuration
  images: {
    unoptimized: true, // Required for Netlify
  },
  
  // Environment variables
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
  
  // TypeScript configuration
  typescript: {
    // Type checking is handled by separate script
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig