import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$TaxaLayout } from '../../chunks/TaxaLayout_Dbm74K1q.mjs';
import { g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
import { s as slugify } from '../../chunks/textConverter_BRScpw42.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const taxonomy = "tags";
  const title = "\u6807\u7B7E";
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.status === "published" && !data.draft;
  });
  let allTaxa = [];
  allPosts.forEach((post) => {
    if (post.data.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag) => {
        allTaxa.push(slugify(tag));
      });
    }
  });
  const taxa = [...new Set(allTaxa)].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "TaxaLayout", $$TaxaLayout, { "taxonomy": taxonomy, "taxonomyTitle": title, "taxa": taxa, "allTaxa": allTaxa })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/tags/index.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
