import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { u as upperHumanize, s as slugify } from './textConverter_BRScpw42.mjs';
import { FaRegFolder, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { r as readingTime, $ as $$PlaceholderImage } from './PlaceholderImage_v2lO1ueQ.mjs';
import { f as formatDate } from './formatDate_D4-qXOVz.mjs';
import { $ as $$Image } from './_astro_assets_DuFEGDIh.mjs';
import { a as $$LiquidGlassLess } from './BaseLayout_BgAMFR6a.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$BlogListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogListCard;
  const { entry } = Astro2.props;
  const { title, description, createdAt, categories, tags, image, imageAlt } = entry.data;
  const descriptionLength = 100;
  const hasCustomImage = !!(image && typeof image === "object" && "src" in image);
  const displayImageAlt = imageAlt || `${title} - \u9ED8\u8BA4\u56FE\u7247`;
  const entryDate = createdAt ? formatDate(createdAt) : null;
  const entryReadingTime = readingTime(entry.body, 1);
  const entryDescription = description?.substring(0, descriptionLength) || "";
  return renderTemplate`<!-- 列表页专用卡片：固定高度，优化布局 --><!-- <div class="p-1 h-full rounded-lg"> --><!-- <div class="liquidGlass-effect intersect:animate-fadeUp rounded-lg"></div>
    <div class="liquidGlass-tint intersect:animate-fadeUp rounded-lg"></div>
    <div class="liquidGlass-shine intersect:animate-fadeUp rounded-lg"></div> -->${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-lg h-36 md:h-52 my-2 pl-0 hover:scale-[1.01]", "textClass": "h-full", "animation": "fadeRight" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex h-full"> <!-- 左侧图片区域：固定宽度，图片自适应填充 --> <div class="relative w-32 md:w-64 h-full flex-shrink-0 overflow-hidden rounded-[25px] group"> <a${addAttribute(`/blog/${entry.id}`, "href")}> ${hasCustomImage ? renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110", "src": image, "alt": displayImageAlt, "inferSize": true, "loading": "lazy", "format": "webp", "quality": 40, "decoding": "async", "fetchpriority": "high" })}
            <!-- 图片遮罩层 -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg group-hover:rounded-xl transition-opacity duration-300"></div>` : renderTemplate`<div class="w-full h-full transition-all duration-500 group-hover:scale-110"> ${renderComponent($$result2, "PlaceholderImage", $$PlaceholderImage, { "title": title, "className": "w-full h-full rounded-lg" })} </div>`} </a> </div> <!-- 右侧内容区域：自适应宽度 --> <div class="flex-1 py-1 px-3 md:px-6 flex flex-col justify-between min-w-0"> <!-- 上半部分：标题和元信息 --> <div class="flex-1"> <!-- 文章标题：限制行数 --> <h4 class="mb-2 text-xl font-bold text-gray-900 !line-clamp-2 leading-tight"> <a${addAttribute(`/blog/${entry.id}`, "href")} class="hover:text-primary transition-colors duration-200 truncate md:whitespace-normal  block"> ${title} </a> </h4> <!-- 元信息：紧凑布局 --> <div class="flex flex-wrap items-center gap-6 mb-2"> ${categories && renderTemplate`<div class="glass-l rounded-md flex items-center text-gray-600 hover:text-primary transition-colors"> ${categories.slice(0, 2).map(
    (category, index) => category && renderTemplate`<a${addAttribute(`/blog/categories/${slugify(category)}`, "href")} class="flex items-center px-1.5 py-0.5 hover:bg-primary/10 transition-colors duration-200 dark:text-darkmode-txt-light"> ${renderComponent($$result2, "FaRegFolder", FaRegFolder, { "className": "mr-1 text-xs" })} <span class="font-medium text-xs"> ${upperHumanize(category)} </span> </a>`
  )} ${categories.length > 2 && renderTemplate`<span class="text-gray-400 ml-1">
+${categories.length - 2} </span>`} </div>`} ${renderTemplate`<div class="items-center text-gray-500 hidden md:flex"> ${renderComponent($$result2, "FaRegClock", FaRegClock, { "className": "mr-1 text-xs dark:text-darkmode-txt-light" })} <span class="font-medium text-xs dark:text-darkmode-txt-light"> ${entryReadingTime} </span> </div>`} ${entryDate && renderTemplate`<div class="flex items-center text-gray-500"> ${renderComponent($$result2, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-1 text-xs dark:text-darkmode-txt-s" })} <span class="font-medium text-xs dark:text-darkmode-txt-s"> ${entryDate} </span> </div>`} </div> <!-- 文章描述：限制行数 --> <p class="!line-clamp-2 leading-relaxed text-txt-light dark:text-darkmode-txt-light hidden md:flex text-sm md:text-base"> ${entryDescription} </p> </div> <!-- 下半部分：阅读更多按钮 --> <div class="mt-2 pt-2 hidden md:flex"> <a${addAttribute(`/blog/${entry.id}`, "href")} class="inline-flex items-center text-primary hover:text-primary-dark font-medium text-xs transition-colors duration-200 group"> <span>阅读全文</span> <svg class="ml-1 w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div> ` })} <!-- </div> -->`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/BlogListCard.astro", void 0);

export { $$BlogListCard as $ };
