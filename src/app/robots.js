const SITE_URL = "https://www.30secondsofknowledge.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/.next/", "/node_modules/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
