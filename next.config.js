/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "1000logos.net",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
