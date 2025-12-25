import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$CollectionLayout } from '../../../../chunks/CollectionLayout_CbruQPY_.mjs';
import { g as getCollection } from '../../../../chunks/_astro_content_D8aGqn2R.mjs';
import { s as slugify } from '../../../../chunks/textConverter_BRScpw42.mjs';
import { g as getPageSize } from '../../../../chunks/config_Cg8a3zQ4.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths() {
  const allPosts = await getCollection("notes");
  const tagPosts = /* @__PURE__ */ new Map();
  allPosts.forEach((post) => {
    const postTags = post.data.tags;
    if (postTags && Array.isArray(postTags)) {
      postTags.forEach((tag) => {
        const tagSlug = slugify(tag);
        if (!tagPosts.has(tagSlug)) {
          tagPosts.set(tagSlug, []);
        }
        tagPosts.get(tagSlug).push({ post, tagName: tag });
      });
    }
  });
  const paths = [];
  const entriesPerPage = getPageSize("notes");
  tagPosts.forEach((posts, tagSlug) => {
    const tagName = posts[0].tagName;
    const sortedPosts = posts.map((p) => p.post).sort((a, b) => {
      const dateA = a.data.publishedAt || a.data.createdAt;
      const dateB = b.data.publishedAt || b.data.createdAt;
      if (!dateA || !dateB) return 0;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
    const pageCount = Math.ceil(sortedPosts.length / entriesPerPage);
    for (let i = 1; i <= pageCount; i++) {
      const startIndex = (i - 1) * entriesPerPage;
      const endIndex = startIndex + entriesPerPage;
      const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
      paths.push({
        params: {
          slug: tagSlug,
          page: i.toString()
        },
        props: {
          tagName,
          tagPosts: paginatedPosts,
          currentPageIndex: i,
          pageCount,
          totalArticleCount: sortedPosts.length
        }
      });
    }
  });
  return paths;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  console.log("\u8FDB\u5165slug\u9875\u9762");
  const { tagName, tagPosts, currentPageIndex, pageCount, totalArticleCount } = Astro2.props;
  const { slug, page } = Astro2.params;
  const entries = tagPosts.map((post) => ({
    id: post.id,
    // slug: post.id,
    collection: "notes",
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
  const allNotePosts = await getCollection("notes");
  const tagStats = /* @__PURE__ */ new Map();
  allNotePosts.forEach((post) => {
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
    id: "notes-tag",
    collection: "notes",
    data: {
      title: tagName,
      description: `\u6807\u7B7E"${tagName}"\u4E0B\u7684\u52A8\u6001`,
      tags: tags.map((tag) => tag.name),
      draft: false,
      imageAlt: "\u52A8\u6001\u6807\u7B7E\u9875\u9762",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }
  };
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "entryIndex": entryIndex, "entries": entries, "tags": tags.map((tag) => tag.name), "pageIndex": currentPageIndex, "pageCount": pageCount, "allNotesCount": totalArticleCount, "basePath": `/notes/tags/${slug}` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/notes/tags/[slug]/[page].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/notes/tags/[slug]/[page].astro";
const $$url = "/notes/tags/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
