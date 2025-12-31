/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Matches every single path on the old domain
        source: "/:path*",
        // Sends them to the exact same path on the new domain
        destination: "https://sharifosmanhadi.info/:path*",
        // 308 Permanent Redirect (tells Google the site has moved forever)
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
