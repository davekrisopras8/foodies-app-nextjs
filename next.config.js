/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co`,
        port: '',
        pathname: '/storage/v1/object/public/user-images/**',
      },
    ],
  },
};
module.exports = nextConfig;
