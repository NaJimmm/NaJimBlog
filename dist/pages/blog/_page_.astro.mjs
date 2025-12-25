import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$CollectionLayout } from '../../chunks/CollectionLayout_BmULS4Ci.mjs';
import { g as getTaxaWithCount, a as getTaxa } from '../../chunks/taxonomyParser_BtBDVXoV.mjs';
import { g as getIndex, b as getEntries } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_ofjPCS65.mjs';
import { g as getPageSize } from '../../chunks/config_Cg8a3zQ4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths({ paginate }) {
  const entries = await getEntries("blog", sortByDate);
  return paginate(entries, { pageSize: 4 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const entriesPerPage = getPageSize("blog");
  const { page } = Astro2.params;
  console.log("\u5206\u7C7B\u9875\u9762page:", page);
  const currentPageIndex = page && !isNaN(Number(page)) ? Number(page) : 1;
  const entryIndex = await getIndex("blog");
  const entries = await getEntries("blog", sortByDate);
  const allBlogCount = entries.length;
  const categoriesWithCount = await getTaxaWithCount("blog", "categories");
  const tags = await getTaxa("blog", "tags");
  const indexOfLastEntry = currentPageIndex * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);
  const pageCount = Math.ceil(entries.length / entriesPerPage);
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "entryIndex": entryIndex, "entries": currentEntries, "categories": categoriesWithCount, "tags": tags, "pageIndex": currentPageIndex, "pageCount": pageCount, "allBlogCount": allBlogCount })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/[page].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
