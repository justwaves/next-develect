const withTwin = require('./withTwin.js')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  webpack: (config) => {
    return config
  },
})

module.exports = nextConfig
