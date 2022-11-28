/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = withVideos(nextConfig)
