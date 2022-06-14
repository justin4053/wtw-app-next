/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },

  images: { domains: ["image.tmdb.org", "d.ifengimg.com"] }
}

module.exports = nextConfig
