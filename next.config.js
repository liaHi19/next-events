/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_ENV: process.env.REACT_APP_ENV,
    MONGODB_URI: process.env.REACT_APP_MONGODB_URI,
    MONGODB_NAME: process.env.MONGODB_NAME,
  },
};

module.exports = nextConfig;
