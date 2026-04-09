module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "edwin-chacko-portfolio.vercel.app",
          },
        ],
        destination: "https://edwinchacko.online/:path*",
        permanent: true,
      },
    ];
  },
};
