/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_DEVELOPMENT: process.env.REACT_APP_DEV_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
};

module.exports = nextConfig;
