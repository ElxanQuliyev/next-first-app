/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['https://img-c.udemycdn.com/']
  },
  env:{
    API_URL:process.env.API_URL
  },
  i18n:{
    locales:["az","tr"],
    defaultLocale:"az",
    localeDetection: false
  }
}

module.exports = nextConfig
