/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['https://img-c.udemycdn.com/']
  },
  publicRuntimeConfig: {
    apiUrl:"http://elxanquliyev2-001-site3.htempurl.com/api",
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
