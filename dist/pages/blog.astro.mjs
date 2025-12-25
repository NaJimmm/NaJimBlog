import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$CollectionLayout } from '../chunks/CollectionLayout_BmULS4Ci.mjs';
import { g as getTaxaWithCount, a as getTaxa } from '../chunks/taxonomyParser_BtBDVXoV.mjs';
import { g as getIndex, b as getEntries } from '../chunks/BaseLayout_BgAMFR6a.mjs';
import { s as sortByDate } from '../chunks/sortFunctions_ofjPCS65.mjs';
import { g as getPageSize } from '../chunks/config_Cg8a3zQ4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const currentPageIndex = 1;
  const entryIndex = await getIndex("blog");
  const entries = await getEntries("blog", sortByDate);
  const allBlogCount = entries.length;
  const categoriesWithCount = await getTaxaWithCount("blog", "categories");
  const tags = await getTaxa("blog", "tags");
  const entriesPerPage = getPageSize("blog");
  const indexOfLastEntry = currentPageIndex * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);
  const pageCount = Math.ceil(entries.length / entriesPerPage);
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "entryIndex": entryIndex, "entries": currentEntries, "categories": categoriesWithCount, "tags": tags, "pageIndex": currentPageIndex, "pageCount": pageCount, "allBlogCount": allBlogCount })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
