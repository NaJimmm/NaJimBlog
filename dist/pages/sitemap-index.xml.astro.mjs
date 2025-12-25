import { a as getSiteUrl } from '../chunks/config_Cg8a3zQ4.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const siteUrl = getSiteUrl();
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap.xml</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
    return new Response(sitemapIndex, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error) {
    console.error("Error generating sitemap index:", error);
    const siteUrl = new URL(request.url).origin;
    const fallbackIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap.xml</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
    return new Response(fallbackIndex, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=300"
        // 错误情况下缓存时间较短
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
