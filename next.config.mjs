/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/",
        permanent: false,
      },
      {
        source: "/underdev",
        destination: "/",
        permanent: false,
      },
      {
        source: "/register",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
