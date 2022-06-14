/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    REACT_APP_API_KEY: "17cb9cb9529cb8834644430fec04bb2b"
  },
  images: { domains: ["image.tmdb.org", "d.ifengimg.com"] }
}

module.exports = nextConfig
