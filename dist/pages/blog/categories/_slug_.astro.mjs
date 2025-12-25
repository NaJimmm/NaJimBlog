import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$CollectionLayout } from '../../../chunks/CollectionLayout_BmULS4Ci.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_D8aGqn2R.mjs';
import { s as slugify } from '../../../chunks/textConverter_BRScpw42.mjs';
import { g as getPageSize } from '../../../chunks/config_Cg8a3zQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths() {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.status === "published" && !data.draft;
  });
  const categoryPosts = /* @__PURE__ */ new Map();
  allPosts.forEach((post) => {
    const postCategories = post.data.categories;
    if (postCategories && postCategories.toString()) {
      const categoryName = postCategories.toString();
      const categorySlug = slugify(categoryName);
      if (!categoryPosts.has(categorySlug)) {
        categoryPosts.set(categorySlug, []);
      }
      categoryPosts.get(categorySlug).push({ post, categoryName });
    }
  });
  const paths = [];
  const entriesPerPage = getPageSize("blog");
  categoryPosts.forEach((posts, categorySlug) => {
    const categoryName = posts[0].categoryName;
    const sortedPosts = posts.map((p) => p.post).sort((a, b) => {
      const dateA = a.data.publishedAt || a.data.createdAt;
      const dateB = b.data.publishedAt || b.data.createdAt;
      if (!dateA || !dateB) return 0;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
    const paginatedPosts = sortedPosts.slice(0, entriesPerPage);
    const pageProps = {
      categoryName,
      categoryPosts: paginatedPosts,
      currentPageIndex: 1,
      pageCount: Math.ceil(sortedPosts.length / entriesPerPage),
      totalArticleCount: sortedPosts.length
    };
    paths.push({
      params: {
        slug: categorySlug,
        page: "1"
      },
      props: pageProps
    });
  });
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const {
    categoryName,
    categoryPosts,
    pageCount,
    currentPageIndex,
    totalArticleCount
  } = Astro2.props;
  console.log("\u5F53\u524D\u9875\u9762\u6570\u636E\uFF1A", categoryPosts);
  const { slug, page = "1" } = Astro2.params;
  const entries = categoryPosts.map((post) => ({
    id: post.id,
    // slug: post.id,
    collection: "blog",
    body: post.body,
    data: {
      title: post.data.title,
      description: post.data.description,
      image: post.data.image,
      imageAlt: post.data.imageAlt || `${post.data.title} - \u7279\u8272\u56FE\u7247`,
      author: post.data.author,
      publishedAt: post.data.publishedAt || post.data.createdAt,
      updatedAt: post.data.updatedAt,
      categories: post.data.categories,
      tags: post.data.tags || [],
      featured: post.data.featured,
      status: post.data.status,
      draft: post.data.draft,
      recommended: post.data.recommended,
      views: post.data.views,
      hideToc: post.data.hideToc
    }
  }));
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.status === "published" && !data.draft;
  });
  const categoryStats = /* @__PURE__ */ new Map();
  allPosts.forEach((post) => {
    if (post.data.categories) {
      const cat = post.data.categories;
      if (cat && cat.toString()) {
        categoryStats.set(
          cat.toString(),
          (categoryStats.get(cat.toString()) || 0) + 1
        );
      }
    }
  });
  const categories = Array.from(categoryStats.entries()).map(([name, count]) => ({
    name,
    slug: slugify(name),
    count
  })).sort((a, b) => a.name.localeCompare(b.name));
  const tagStats = /* @__PURE__ */ new Map();
  allPosts.forEach((post) => {
    if (post.data.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag) => {
        tagStats.set(tag, (tagStats.get(tag) || 0) + 1);
      });
    }
  });
  const tags = Array.from(tagStats.keys()).map((name) => ({
    name,
    slug: slugify(name)
  })).sort((a, b) => a.name.localeCompare(b.name));
  const entryIndex = {
    id: "blog-category",
    collection: "blog",
    data: {
      title: categoryName,
      description: `${categoryName}\u5206\u7C7B\u4E0B\u7684\u6587\u7AE0`,
      categories: categories.map((cat) => cat.name),
      status: "published",
      draft: false,
      imageAlt: "\u535A\u5BA2\u5206\u7C7B\u9875\u9762",
      featured: false,
      recommended: false,
      views: 0,
      hideToc: true,
      publishedAt: /* @__PURE__ */ new Date(),
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  };
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "entryIndex": entryIndex, "entries": entries, "tags": tags.map((tag) => tag.name), "categories": categories, "pageIndex": currentPageIndex, "pageCount": pageCount, "allBlogCount": totalArticleCount, "basePath": `/blog/categories/${slug}` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/categories/[slug].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/categories/[slug].astro";
const $$url = "/blog/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
