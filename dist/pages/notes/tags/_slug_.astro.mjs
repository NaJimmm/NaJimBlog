import { c as createAstro, a as createComponent } from '../../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../../../chunks/_astro_content_D8aGqn2R.mjs';
import { s as slugify } from '../../../chunks/textConverter_BRScpw42.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths() {
  const allPosts = await getCollection("notes");
  const allTags = /* @__PURE__ */ new Set();
  allPosts.forEach((post) => {
    const postTags = post.data.tags;
    if (postTags && Array.isArray(postTags)) {
      postTags.forEach((tag) => {
        allTags.add(tag);
      });
    }
  });
  return Array.from(allTags).map((tag) => ({
    params: { slug: slugify(tag) }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return Astro2.rewrite(`/notes/tags/${encodeURI(slug)}/1`);
}, "/Users/najim/Project/study/NaJimBlog/src/pages/notes/tags/[slug].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/notes/tags/[slug].astro";
const $$url = "/notes/tags/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
