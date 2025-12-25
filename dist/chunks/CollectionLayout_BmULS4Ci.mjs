import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as createAstro, e as addAttribute } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { d as getSiteStats, a as $$LiquidGlassLess, $ as $$BaseLayout } from './BaseLayout_BgAMFR6a.mjs';
import { $ as $$BlogListCard } from './BlogListCard_Cmhot4Lg.mjs';
import { $ as $$Pagination } from './Pagination_FcBjd0O4.mjs';
import { $ as $$PageHeader } from './PageHeader_BHqLWxIi.mjs';
import { s as slugify, l as lowerHumanize } from './textConverter_BRScpw42.mjs';
import { FaRegFolder, FaHashtag } from 'react-icons/fa';
import { $ as $$Image } from './_astro_assets_DuFEGDIh.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1VeAuF } from './picture_QvSxCHZe.mjs';

const $$AuthorSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const siteStats = await getSiteStats();
  const authorImage = __ASTRO_IMAGE_IMPORT_Z1VeAuF;
  return renderTemplate`<!-- 作者信息 -->${renderComponent($$result, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-lg p-4 my-2 mb-4", "animation": "fadeLeft" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="intersect:animate-fadeLeft"> <div class="mb-4 text-center justify-items-center"> ${authorImage && renderTemplate`<div class="relative group mb-1"> <div class="absolute -inset-1 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div> <a href="/page/about"> ${renderComponent($$result2, "Image", $$Image, { "class": "relative  w-20 h-20 rounded-full border-4 border-white/30 shadow-xl transform group-hover:scale-105 transition-all duration-300", "src": authorImage, "alt": "NaJim\u7684\u5934\u50CF", "width": 112, "height": 112, "loading": "lazy", "format": "webp", "quality": 75, "decoding": "async" })} </a> </div>`} <h1 class="text-xl lg:text-xl font-bold text-txt-p dark:text-darkmode-txt-p mb-2">
NaJim
</h1> <div class="w-20 h-1 bg-gradient-to-r from-orange-500 to-indigo-500 mx-auto lg:mx-0 rounded-full mb-4" style="margin:auto;"></div> </div> <div class="flex flex-row justify-between px-4"> <div class="flex flex-col items-center"> <div>分类</div> <div>${siteStats.categories}</div> </div> <div class="flex flex-col items-center"> <div>标签</div> <div>${siteStats.tags}</div> </div> <div class="flex flex-col items-center"> <div>文章</div> <div>${siteStats.articles}</div> </div> </div> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/authorSidebar.astro", void 0);

const $$Astro$1 = createAstro("https://github.com/NaJimmm");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { tags, categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-full w-full overflow-y-auto"> <!-- 作者信息 --> ${renderComponent($$result, "AuthorSidebar", $$AuthorSidebar, {})} <!-- categories --> ${renderComponent($$result, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": " dock !p-6 my-2 mb-4", "animation": "fadeLeft" }, { "default": ($$result2) => renderTemplate` <div class="intersect:animate-fadeLeft"> <!-- <div> --> <h4 class="mb-2 text-base md:text-lg"> <a href="/blog/categories"> ${renderComponent($$result2, "FaRegFolder", FaRegFolder, { "className": "mr-1 -mt-1.5 inline-block" })}
分类
</a> </h4> <hr class="mb-2 -mt-1 border border-gray-600/50"> <ul class="space-y-3"> ${categories.map((category) => {
    const isCountCategory = typeof category === "object" && "name" in category && "count" in category;
    const categoryName = isCountCategory ? category.name : category;
    const categoryCount = isCountCategory ? category.count : "";
    const categorySlug = isCountCategory ? category.slug : slugify(categoryName);
    return renderTemplate`<li class=""> <a class="text-sm md:text-lg px-2 py-1 transition-all list-item border-2 border-indigo-500/0 hover:border-slate-500 hover:rounded-lg hover:bg-white/40"${addAttribute(`/blog/categories/${categorySlug}`, "href")}> ${categoryName} ${categoryCount && renderTemplate`<div class="inline-block pl-1 text-gray-500">
(${categoryCount})
</div>`} </a> </li>`;
  })} </ul> </div> ` })} <!-- tags --> ${renderComponent($$result, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": " dock !p-6 mt-2 mb-4", "animation": "fadeLeft" }, { "default": ($$result2) => renderTemplate` <div class="intersect:animate-fadeLeft"> <h4 class="mb-2 text-base md:text-lg"> <a href="/blog/tags"> ${renderComponent($$result2, "FaHashtag", FaHashtag, { "className": "mr-1 -mt-1.5 inline-block" })}
标签
</a> </h4> <hr class="mb-2 -mt-1 border border-gray-600/50"> <ul> ${tags.map((tag) => {
    return renderTemplate`<li class="inline-block m-1 "> <a${addAttribute(tag, "aria-label")}${addAttribute(`/blog/tags/${lowerHumanize(tag)}`, "href")} type="secondary" class="text-sm md:text-lg rounded-sm transition-all px-2 py-1 border-2 border-indigo-500/0 hover:border-slate-500 hover:rounded-lg hover:bg-white/40">
#${tag} </a> </li>`;
  })} </ul> </div> ` })} </div>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/Sidebar.astro", void 0);

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$CollectionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollectionLayout;
  const {
    entryIndex,
    entries,
    tags,
    categories,
    // allCategories,
    pageIndex,
    pageCount,
    allBlogCount,
    basePath
  } = Astro2.props;
  const { title, description } = entryIndex ? entryIndex.data : {
    title: "\u5206\u7C7B",
    description: "\u5206\u7C7B\u4E0B\u7684\u6587\u7AE0"
  };
  console.log("\u5F53\u524D\u6240\u5728\u9875\uFF1A", pageIndex);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title, "description": description, "articleCount": allBlogCount })} <section class=""> <div class="flex" style="padding:0px;"> <div class="row px-0 mx-0 w-full"> <!-- blog posts --> <div class="col-12 lg:col-9 p-0 in"> ${entries.map((entry, index) => renderTemplate`<div class="mb-4"${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> ${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "entry": entry })} </div>`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "collection": "blog", "pageIndex": pageIndex, "pageCount": pageCount, "basePath": basePath })} </div> <!-- sidebar --> <div class="lg:col-3 lg:flex p-0 lg:pl-4" style="position: sticky; top: 4.1rem; align-self: flex-start;"> ${renderComponent($$result2, "BlogSidebar", $$Sidebar, { "tags": tags, "categories": categories, "allBlogCount": allBlogCount })} </div> </div> </div> </section> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/CollectionLayout.astro", void 0);

export { $$CollectionLayout as $ };
