const config = {
    siteUrl: 'https://edwin-chacko-portfolio.vercel.app.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/private/' },
      ],
    },
  };
  
  module.exports = config;
  