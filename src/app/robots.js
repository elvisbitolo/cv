import { SITE_URL } from "@/lib/site-url";

export default function robots() {
  const siteUrl = SITE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
