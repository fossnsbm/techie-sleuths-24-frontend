/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/underdev",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
