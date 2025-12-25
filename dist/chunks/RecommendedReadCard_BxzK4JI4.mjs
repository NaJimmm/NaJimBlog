import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { f as formatDate } from './formatDate_D4-qXOVz.mjs';
import { r as readingTime, $ as $$PlaceholderImage } from './PlaceholderImage_v2lO1ueQ.mjs';
import { $ as $$Image } from './_astro_assets_DuFEGDIh.mjs';
/* empty css                           */

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$RecommendedReadCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecommendedReadCard;
  const {
    entry,
    showImage = true,
    showReadingTime = true,
    compact = false
  } = Astro2.props;
  const { title, createdAt, image, imageAlt } = entry.data;
  const hasCustomImage = !!(image && typeof image === "object" && "src" in image);
  const displayImageAlt = imageAlt || `${title} - \u63A8\u8350\u9605\u8BFB`;
  const entryDate = createdAt ? formatDate(createdAt) : null;
  const estimatedReadingTime = readingTime(entry.body || "", 1);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group flex p-2 pr-4 items-center gap-3 rounded-[25px] text-txt-p
   hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300 
   border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50
    [&_*]:hover:text-darkmode-txt-p`, "class")} data-astro-cid-tibg2hfl> <a${addAttribute(`/blog/${entry.id}`, "href")} class="flex items-center gap-3 w-full no-underline" data-astro-cid-tibg2hfl> <!-- 左侧图片 --> ${showImage && renderTemplate`<div${addAttribute(`flex-shrink-0 rounded-[18px] overflow-hidden ${compact ? "w-14 h-14" : "w-16 h-16"}  block lg:hidden 2xl:block`, "class")} data-astro-cid-tibg2hfl> ${hasCustomImage ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105", "src": image, "alt": displayImageAlt, "inferSize": true, "loading": "lazy", "format": "webp", "quality": 20, "fetchpriority": "high", "decoding": "async", "style": `width: ${compact ? "64x" : "64px"}; height: ${compact ? "64px" : "64px"};`, "data-astro-cid-tibg2hfl": true })}` : renderTemplate`${renderComponent($$result, "PlaceholderImage", $$PlaceholderImage, { "title": title, "className": "w-full h-full rounded-[18px]", "data-astro-cid-tibg2hfl": true })}`} </div>`} <!-- 右侧内容 --> <div class="flex-1 min-w-0" data-astro-cid-tibg2hfl> <!-- 文章标题 --> <h4${addAttribute(`text-txt-light dark:text-darkmode-txt-light line-clamp-2 leading-tight mb-1 ${compact ? "text-sm" : "text-base"}`, "class")} data-astro-cid-tibg2hfl> ${title} </h4> <!-- 元信息：日期和阅读时间 --> <div${addAttribute(`flex items-center gap-2 text-gray-500 dark:text-gray-300 ${compact ? "text-xs" : "text-sm"}`, "class")} data-astro-cid-tibg2hfl> <!-- 发布日期 --> ${entryDate && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-tibg2hfl> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-tibg2hfl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-tibg2hfl></path> </svg> ${entryDate} </span>`} <!-- 分隔符 --> ${entryDate && showReadingTime && renderTemplate`<span class="text-gray-300 dark:text-gray-600" data-astro-cid-tibg2hfl>•</span>`} <!-- 阅读时间 --> ${showReadingTime && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-tibg2hfl> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-tibg2hfl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-tibg2hfl></path> </svg> ${estimatedReadingTime} </span>`} </div> </div> </a> </div> `;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/RecommendedReadCard.astro", void 0);

export { $$RecommendedReadCard as $ };
