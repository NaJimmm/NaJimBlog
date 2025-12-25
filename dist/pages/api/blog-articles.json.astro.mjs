import { g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  try {
    console.log("开始获取博客文章...");
    const allPosts = await getCollection("blog", ({ data, filePath }) => {
      return data.status === "published" && !data.draft && filePath?.indexOf("-index") == -1;
    });
    const articles = allPosts.map((post) => ({
      slug: post.id,
      // 使用文件名作为slug
      title: post.data.title,
      description: post.data.description,
      publishedAt: post.data.publishedAt || post.data.createdAt,
      categories: post.data.categories,
      tags: post.data.tags || []
    }));
    articles.sort((a, b) => {
      const dateA = new Date(a.publishedAt || 0);
      const dateB = new Date(b.publishedAt || 0);
      return dateB.getTime() - dateA.getTime();
    });
    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
        // 缓存1小时
      }
    });
  } catch (error) {
    console.error("获取博客文章失败:", error);
    return new Response(
      JSON.stringify({ error: "获取博客文章失败" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
