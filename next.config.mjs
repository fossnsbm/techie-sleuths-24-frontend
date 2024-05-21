/** @type {import('next').NextConfig} */
const nextConfig = {
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
