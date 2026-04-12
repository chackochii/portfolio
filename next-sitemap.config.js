/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://edwinchacko.online',

  generateRobotsTxt: true,

  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/projects'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
  ],

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
