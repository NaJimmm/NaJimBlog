import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$TaxonLayout } from '../../../chunks/TaxonLayout_F7bkkbvv.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_D8aGqn2R.mjs';
import { s as slugify } from '../../../chunks/textConverter_BRScpw42.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const prerender = true;
async function getStaticPaths() {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.status === "published" && !data.draft;
  });
  const allTags = /* @__PURE__ */ new Set();
  allPosts.forEach((post) => {
    if (post.data.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag) => {
        allTags.add(tag);
      });
    }
  });
  return Array.from(allTags).map((tag) => ({
    params: { slug: slugify(tag) },
    props: { taxon: tag }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { taxon } = Astro2.props;
  const { slug } = Astro2.params;
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.status === "published" && !data.draft;
  });
  const entries = allPosts.filter((post) => {
    return post.data.tags && Array.isArray(post.data.tags) && post.data.tags.some((tag) => slugify(tag) === slug);
  }).map((post) => ({
    id: post.id,
    slug: post.id,
    body: post.body,
    collection: "blog",
    data: {
      title: post.data.title,
      description: post.data.description,
      publishedAt: post.data.publishedAt || post.data.createdAt,
      updatedAt: post.data.updatedAt,
      image: post.data.image,
      categories: post.data.categories,
      tags: post.data.tags || [],
      author: post.data.author,
      featured: post.data.featured,
      status: post.data.status,
      draft: post.data.draft,
      imageAlt: post.data.imageAlt,
      recommended: post.data.recommended,
      views: post.data.views,
      hideToc: post.data.hideToc
    }
  })).sort((a, b) => {
    const dateA = new Date(a.data.publishedAt);
    const dateB = new Date(b.data.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });
  return renderTemplate`${renderComponent($$result, "TaxonLayout", $$TaxonLayout, { "taxon": taxon, "entries": entries })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/tags/[slug].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/tags/[slug].astro";
const $$url = "/blog/tags/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
