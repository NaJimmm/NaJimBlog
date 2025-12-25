import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$TaxaLayout } from '../../chunks/TaxaLayout_Dbm74K1q.mjs';
import { s as slugify } from '../../chunks/textConverter_BRScpw42.mjs';
import { g as getIndex, b as getEntries } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_ofjPCS65.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const taxonomy = "categories";
  const title = "\u5206\u7C7B";
  await getIndex("blog");
  const allPosts = await getEntries("blog", sortByDate);
  allPosts.length;
  let allTaxa = [];
  allPosts.forEach((post) => {
    const cat = post.data.categories;
    if (cat) {
      allTaxa.push(slugify(post.data.categories.toString()));
    }
  });
  const taxa = [...new Set(allTaxa)].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "TaxaLayout", $$TaxaLayout, { "taxonomy": taxonomy, "taxonomyTitle": title, "taxa": taxa, "allTaxa": allTaxa })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/categories/index.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/categories/index.astro";
const $$url = "/blog/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
