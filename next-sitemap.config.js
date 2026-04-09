const config = {
  siteUrl: 'https://edwinchacko.online',

  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],

    additionalSitemaps: [
      'https://edwinchacko.online/sitemap.xml',
    ],
  },
};

module.exports = config;
