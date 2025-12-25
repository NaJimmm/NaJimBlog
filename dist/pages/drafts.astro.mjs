import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BgAMFR6a.mjs';
import { $ as $$BlogListCard } from '../chunks/BlogListCard_Cmhot4Lg.mjs';
import { g as getCollection } from '../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$Drafts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Drafts;
  const draftPosts = await getCollection("blog", ({ data }) => {
    return data.draft === true;
  });
  const sortedDrafts = draftPosts.sort((a, b) => {
    const dateA = new Date(a.data.createdAt || 0);
    const dateB = new Date(b.data.createdAt || 0);
    return dateB.getTime() - dateA.getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u8349\u7A3F\u6587\u7AE0", "description": "\u5F00\u53D1\u73AF\u5883\u8349\u7A3F\u9884\u89C8" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8"> <div class="mb-8"> <h1 class="text-3xl font-bold text-txt-p dark:text-darkmode-txt-p mb-4">
草稿文章 (${sortedDrafts.length})
</h1> <p class="text-txt-light dark:text-darkmode-txt-light">
仅在开发环境可见的草稿文章列表
</p> </div> <div class="grid gap-6"> ${sortedDrafts.map((entry) => renderTemplate`${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "entry": entry })}`)} </div> ${sortedDrafts.length === 0 && renderTemplate`<div class="text-center py-12"> <p class="text-txt-light dark:text-darkmode-txt-light">
暂无草稿文章
</p> </div>`} </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/drafts.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/drafts.astro";
const $$url = "/drafts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Drafts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
