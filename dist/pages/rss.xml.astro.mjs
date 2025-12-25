import { g as getCollection } from '../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../renderers.mjs';

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function(c) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
function formatDate(date) {
  return date.toUTCString();
}
async function GET(context) {
  const blog = await getCollection("blog", ({ data }) => {
    return data.draft !== true && data.status === "published";
  });
  const sortedPosts = blog.sort((a, b) => {
    const dateA = a.data.publishedAt || a.data.createdAt || /* @__PURE__ */ new Date(0);
    const dateB = b.data.publishedAt || b.data.createdAt || /* @__PURE__ */ new Date(0);
    return dateB.getTime() - dateA.getTime();
  }).slice(0, 25);
  const siteUrl = context.site.toString().replace(/\/$/, "");
  const feedUpdated = sortedPosts.length > 0 ? formatDate(sortedPosts[0].data.publishedAt || sortedPosts[0].data.createdAt || /* @__PURE__ */ new Date()) : formatDate(/* @__PURE__ */ new Date());
  const rssXml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NaJim的世界</title>
    <description>一个独立开发者的画地自圆</description>
    <link>${siteUrl}/</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${feedUpdated}</lastBuildDate>
    <pubDate>${feedUpdated}</pubDate>
    <language>zh-cn</language>
    <managingEditor>NaJim</managingEditor>
    <webMaster>NaJim</webMaster>
    <generator>Astro</generator>
    <ttl>60</ttl>

${sortedPosts.map((post) => {
    const pubDate = post.data.publishedAt || post.data.createdAt || /* @__PURE__ */ new Date();
    post.data.updatedAt || pubDate;
    const description = post.data.description || (post.body ? post.body.slice(0, 200).replace(/[#*`]/g, "") + "..." : "暂无描述");
    const postUrl = `${siteUrl}/blog/${post.id}/`;
    const author = post.data.author || "NaJim";
    let imageContent = "";
    if (post.data.image && typeof post.data.image.src === "string") {
      let imageUrl = post.data.image.src;
      if (imageUrl.startsWith("@assets/")) {
        imageUrl = imageUrl.replace("@assets/", `${siteUrl}/src/assets/`);
      } else if (imageUrl.startsWith("/")) {
        imageUrl = `${siteUrl}${imageUrl}`;
      } else if (!imageUrl.startsWith("http")) {
        imageUrl = `${siteUrl}/${imageUrl}`;
      }
      imageContent = `<enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" />`;
    }
    const categories = post.data.categories?.filter(Boolean) || [];
    const categoryContent = categories.map(
      (cat) => cat && `<category>${escapeXml(cat)}</category>`
    ).join("");
    return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${formatDate(pubDate)}</pubDate>
      <author>${escapeXml(author)}</author>
      <description>${escapeXml(description)}</description>
      ${imageContent}
      ${categoryContent}
    </item>`;
  }).join("\n\n")}

  </channel>
</rss>`;
  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
