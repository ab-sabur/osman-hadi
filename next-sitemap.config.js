/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sharifosmanhadi.info",
  generateRobotsTxt: true,
  exclude: ["/login", "/admin", "/admin/*"], // Removes these from sitemap.xml
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/admin"],
      },
    ],
  },
};
