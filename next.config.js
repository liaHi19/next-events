/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_URL: process.env.REACT_APP_DEV_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;
