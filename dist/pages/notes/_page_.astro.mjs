import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$CollectionLayout } from '../../chunks/CollectionLayout_CbruQPY_.mjs';
import { b as getEntries, g as getIndex } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_ofjPCS65.mjs';
import { g as getPageSize, P as PAGINATION_CONFIG } from '../../chunks/config_Cg8a3zQ4.mjs';
import { a as getTaxa } from '../../chunks/taxonomyParser_BtBDVXoV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths({ paginate }) {
  const pageSize = PAGINATION_CONFIG.NOTES_DEFAULT_PAGE_SIZE;
  const entries = await getEntries("notes", sortByDate);
  const entryIndex = await getIndex("notes");
  const tags = await getTaxa("notes", "tags");
  return paginate(entries, {
    pageSize,
    props: { entryIndex, tags, allNotesCount: entries.length }
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const entriesPerPage = getPageSize("notes");
  const entries = await getEntries("notes", sortByDate);
  const { page, entryIndex, tags, allNotesCount } = Astro2.props;
  const { currentPage, data: currentEntries } = page;
  const pageCount = Math.ceil(entries.length / entriesPerPage);
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "entryIndex": entryIndex, "entries": currentEntries, "tags": tags, "pageIndex": currentPage, "pageCount": pageCount, "allNotesCount": allNotesCount })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/notes/[page].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/notes/[page].astro";
const $$url = "/notes/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
