/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['https://img-c.udemycdn.com/']
  }
}

module.exports = nextConfig
