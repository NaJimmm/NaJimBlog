import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, e as addAttribute } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { a as $$LiquidGlassLess } from './BaseLayout_BgAMFR6a.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    collection,
    pageIndex = 1,
    pageCount = 1,
    pageIDs,
    basePath
  } = Astro2.props;
  let pageList = [];
  for (let i = 1; i <= pageCount; i++) {
    pageList.push(i);
  }
  const getPageLink = (page) => {
    if (basePath) {
      return `${basePath}/${page}`;
    } else if (pageIDs && pageIDs.length > 0) {
      const pageID = pageIDs[page - 1];
      return pageID ? `/${collection}/${pageID}` : `/${collection}`;
    } else {
      if (page === 1) {
        return `/${collection}`;
      } else {
        return `/${collection}/${page}`;
      }
    }
  };
  let prevPage;
  let nextPage;
  if (pageIndex > 1) {
    prevPage = getPageLink(pageIndex - 1);
  } else {
    prevPage = null;
  }
  if (pageIndex < pageCount) {
    nextPage = getPageLink(pageIndex + 1);
  } else {
    nextPage = null;
  }
  return renderTemplate`${pageCount >= 1 && renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-center pb-2">${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "containerClass": "rounded-md p-2 mx-2 space-x-2" }, { "default": ($$result2) => renderTemplate`${prevPage ? renderTemplate`<a${addAttribute(prevPage, "href")} class="col rounded px-2 py-1.5 text-txt-p dark:text-darkmode-txt-p" aria-label="Previous">${renderComponent($$result2, "FaArrowLeft", FaArrowLeft, { "className": "inline-block" })}</a>` : renderTemplate`<span class="col rounded px-2 py-1.5 text-txt-light dark:text-darkmode-txt-light" aria-label="Previous">${renderComponent($$result2, "FaArrowLeft", FaArrowLeft, { "className": "inline-block" })}</span>`}${pageIDs ? renderTemplate`<div aria-current="page" class="col rounded px-4 py-2 text-txt-p  dark:text-darkmode-txt-p">${pageIndex + 1}</div>` : pageList.map(
    (pagination) => pagination === pageIndex ? renderTemplate`<span aria-current="page" class="col rounded px-4 py-2 font-semibold text-txt-p dark:text-darkmode-txt-p border border-txt-light dark:border-darkmode-txt-light">${pagination}</span>` : renderTemplate`<a${addAttribute(getPageLink(pagination), "href")} aria-current="page" class="col rounded px-4 py-2 font-semibold text-txt-p dark:text-darkmode-txt-p">${pagination}</a>`
  )}${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")} class="col rounded px-2 py-1.5 text-txt-p dark:text-darkmode-txt-p" aria-label="Next">${renderComponent($$result2, "FaArrowRight", FaArrowRight, { "className": "inline-block" })}</a>` : renderTemplate`<span class="col rounded px-2 py-1.5 text-txt-light dark:text-darkmode-txt-light" aria-label="Next">${renderComponent($$result2, "FaArrowRight", FaArrowRight, { "className": "inline-block" })}</span>`}` })}</nav>`}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/Pagination.astro", void 0);

export { $$Pagination as $ };
