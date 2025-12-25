import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { a as $$LiquidGlassLess, $ as $$BaseLayout } from './BaseLayout_BgAMFR6a.mjs';
import { $ as $$Pagination } from './Pagination_FcBjd0O4.mjs';
import { $ as $$PageHeader } from './PageHeader_BHqLWxIi.mjs';
import { s as slugify, p as plainify } from './textConverter_BRScpw42.mjs';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaSmile } from 'react-icons/fa';
import { f as formatDate } from './formatDate_D4-qXOVz.mjs';
import { $ as $$Image } from './_astro_assets_DuFEGDIh.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1VeAuF } from './picture_QvSxCHZe.mjs';

const $$Astro$1 = createAstro("https://github.com/NaJimmm");
const $$NotesListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NotesListCard;
  const { entry } = Astro2.props;
  const { title, description, createdAt, tags, images, mood, location } = entry.data;
  const slug = slugify(entry.data.title);
  const entryDate = createdAt ? formatDate(createdAt) : null;
  const contentPreview = entry.body ? plainify(entry.body).slice(0, 150) + (plainify(entry.body).length > 150 ? "..." : "") : "";
  return renderTemplate`${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-lg my-4 pl-0 bg-gradient-to-br gradient shadow-lg hover:shadow-xl hover:scale-[1.01]", "textClass": "h-full", "animation": "fadeRight" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4"> <!-- 作者信息和发布时间 --> <div class="flex items-center mb-4"> <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"> <img${addAttribute(__ASTRO_IMAGE_IMPORT_Z1VeAuF.src, "src")} alt="作者头像" class="w-full h-full object-cover"> </div> <div class="ml-3"> <h4 class="font-bold">NaJim</h4> <div class="flex items-center text-xs text-gray-700 dark:text-gray-400"> ${entryDate && renderTemplate`<span class="flex items-center"> ${renderComponent($$result2, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-1" })} ${entryDate} </span>`} ${location && renderTemplate`<span class="flex items-center ml-2"> ${renderComponent($$result2, "FaMapMarkerAlt", FaMapMarkerAlt, { "className": "mr-1" })} ${location} </span>`} ${mood && renderTemplate`<span class="flex items-center ml-2"> ${renderComponent($$result2, "FaSmile", FaSmile, { "className": "mr-1" })} ${mood} </span>`} </div> </div> </div> <!-- 内容区域 --> <div class="mb-4"> <!-- 标题 --> <h3 class="mb-2 text-xl font-bold text-txt-p dark:text-darkmode-txt-p leading-tight"> <a${addAttribute(`/notes/${slug}`, "href")} class="hover:text-primary transition-colors duration-200"> ${title} </a> </h3> <!-- 内容预览 --> <a${addAttribute(`/notes/${slug}`, "href")} class="block"> <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3"> ${description || contentPreview} </p> </a> <!-- 图片区域 - 多图模式 --> ${images && images.length > 0 && renderTemplate`<div class="relative flex flex-wrap gap-4 rounded-lg mb-3"> ${images.map((image) => renderTemplate`<a${addAttribute(`/notes/${slug}`, "href")} class="block"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full rounded-md md:rounded-lg shadow-lg object-cover max-w-[100px] md:max-w-[200px] max-h-[100px] md:max-h-[200px] hover:scale-105 transition-transform duration-500", "src": image.src, "alt": image.alt, "width": 300, "height": 300, "quality": 90, "format": "webp", "loading": "lazy" })} </a>`)} </div>`} <!-- 标签 --> ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 "> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/notes/tags/${tag}`, "href")} class="px-2 py-1 glass-l text-xs text-gray-900/50 rounded-full hover:bg-white/40 transition-colors duration-300 dark:text-gray-200/60">
#${tag} </a>`)} </div>`} </div> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/notes/NotesListCard.astro", void 0);

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$CollectionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollectionLayout;
  const {
    entryIndex,
    entries,
    tags,
    pageIndex,
    pageCount,
    allNotesCount,
    basePath
  } = Astro2.props;
  const { title, description } = entryIndex ? entryIndex.data : {
    title: "\u7AD9\u70B9\u52A8\u6001",
    description: "\u6700\u65B0\u7684\u7AD9\u70B9\u52A8\u6001\u548C\u66F4\u65B0"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title, "description": description, "articleCount": allNotesCount })} <section class=""> <div class="flex" style="padding:0px;"> <div class="row px-0 mx-0 w-full grid grid-cols-1 lg:grid-cols-4 gap-6"> <!-- notes posts --> <div class="lg:col-span-3 p-0"> ${entries.length > 0 ? entries.map((entry, index) => renderTemplate`<div class="mb-5"${addAttribute(`animation-delay: ${index * 200}ms`, "style")}> ${renderComponent($$result2, "NotesListCard", $$NotesListCard, { "entry": entry })} </div>`) : renderTemplate`<div class="mb-5"> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "containerClass": "p-4", "animation": "fadeRight" }, { "default": ($$result3) => renderTemplate` <p class="text-center">暂无动态内容</p> ` })} </div>`} ${renderComponent($$result2, "Pagination", $$Pagination, { "collection": "notes", "pageIndex": pageIndex, "pageCount": pageCount, "basePath": basePath })} </div> <!-- sidebar --> <div class="lg:col-span-1 lg:flex max-h-static_sidemenu sticky p-0 lg:pl-5 top-[4rem]"> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock !p-6", "containerClass": "py-5 w-full", "animation": "fadeLeft" }, { "default": ($$result3) => renderTemplate` <div class="sidebar-widget mb-8"> <h4 class="mb-3">标签</h4> <div class="flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/notes/tags/${tag}`, "href")} class="text-sm md:text-base px-2 py-1 transition-all border-2 border-indigo-500/0 hover:border-slate-500 hover:rounded-lg hover:bg-white/40"> ${tag} </a>`)} </div> </div> <div class="sidebar-widget"> <h4 class="mb-3">统计</h4> <p>共 ${allNotesCount || 0} 条动态</p> </div> ` })} </div> </div> </div> </section> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/notes/CollectionLayout.astro", void 0);

export { $$CollectionLayout as $ };
