import { c as createAstro, a as createComponent, d as renderScript, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, f as defineScriptVars, g as renderSlot } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
import { a as $$LiquidGlassLess, c as $$GlassButton, $ as $$BaseLayout } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { m as markdownify, u as upperHumanize, s as slugify, l as lowerHumanize, p as plainify } from '../../chunks/textConverter_BRScpw42.mjs';
/* empty css                                      */
import { f as formatDate } from '../../chunks/formatDate_D4-qXOVz.mjs';
import { r as readingTime } from '../../chunks/PlaceholderImage_v2lO1ueQ.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DuFEGDIh.mjs';
import { FaRegUserCircle, FaRegCalendarAlt, FaRegClock, FaRegFolder, FaHashtag } from 'react-icons/fa';
import { _ as __ASTRO_IMAGE_IMPORT_Z1VeAuF } from '../../chunks/picture_QvSxCHZe.mjs';
import { $ as $$Comment } from '../../chunks/Comment_DdkkFq_2.mjs';
import { $ as $$RecommendedReadCard } from '../../chunks/RecommendedReadCard_BxzK4JI4.mjs';
import { S as SITE_INFO } from '../../chunks/config_Cg8a3zQ4.mjs';
export { renderers } from '../../renderers.mjs';

function createHeadingHierarchy(headings) {
  const topLevelHeadings = [];
  headings.forEach((heading) => {
    const h = {
      ...heading,
      subheadings: []
    };
    if (h.depth >= 2) {
      topLevelHeadings.push(h);
    } else {
      let parent = topLevelHeadings[topLevelHeadings.length - 1];
      if (parent) {
        parent.subheadings.push(h);
      }
    }
  });
  return topLevelHeadings;
}

const $$Astro$4 = createAstro("https://github.com/NaJimmm");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings, tocDepth = 3 } = Astro2.props;
  const heirarchy = createHeadingHierarchy(headings);
  const toc = heirarchy.filter((heading) => heading.depth <= tocDepth);
  return renderTemplate`${toc.length > 0 && renderTemplate`${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "animation": "fadeLeft", "wrapperClass": "dock !p-6", "data-astro-cid-hop3l3kc": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="intersect:animate-fadeLeft" data-astro-cid-hop3l3kc><h2 class="text-2xl border-none mb-3" data-astro-cid-hop3l3kc>内容导航</h2><div class="max-h-96 overflow-y-auto" data-astro-cid-hop3l3kc><ul class="list-none m-0 space-y-1" data-astro-cid-hop3l3kc>${toc.map((heading) => renderTemplate`<li${addAttribute(`${heading.depth === 2 ? "ml-0" : "ml-4"}`, "class")} data-astro-cid-hop3l3kc><a${addAttribute(`#${heading.slug}`, "href")} class="block w-full leading-relaxed no-underline hover:text-primary transition-colors duration-200 py-1" data-toc-link data-astro-cid-hop3l3kc>${heading.text}</a></li>`)}</ul></div></div>` })}`}${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/components/common/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/TableOfContents.astro", void 0);

const $$Astro$3 = createAstro("https://github.com/NaJimmm");
const $$EntryHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EntryHeader;
  const {
    entry,
    showInfo = true,
    showImage = true,
    showAuthor = false,
    showDate = true,
    showPubDate = false,
    showModDate = false,
    showReadingTime = false,
    showCategories = false,
    showTags = false
  } = Astro2.props;
  const {
    title,
    author,
    categories,
    tags,
    image,
    imageAlt,
    createdAt,
    pubDate,
    modDate,
    complexity
  } = entry.data;
  categories?.sort((a, b) => a.localeCompare(b));
  tags?.sort((a, b) => a.localeCompare(b));
  return renderTemplate`${maybeRenderHead()}<div class=""> ${showInfo && renderTemplate`${renderComponent($$result, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": `${image && showImage ? "dock mb-4 !p-0 overflow-hidden" : "dock mb-4 overflow-hidden"}`, "textClass": `${image && showImage ? "" : "border border-white/10 dark:border-white/5"}` }, { "default": ($$result2) => renderTemplate`${image && typeof image === "object" && "src" in image && showImage && renderTemplate`<div class="absolute inset-0"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover rounded-[35px]", "src": image, "alt": imageAlt || "", "height": 280, "width": 1200, "loading": "eager" })}  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/0"></div> </div>`}<div${addAttribute(`relative z-10 ${image && showImage ? "p-6 min-h-[280px] flex flex-col justify-end" : "p-4"}`, "class")}> <div${addAttribute(`${image && showImage ? "text-white" : ""}`, "class")}> <h1${addAttribute(`${image && showImage ? "mb-4 text-white drop-shadow-lg text-shadow-lg text-xl md:text-3xl font-bold" : "mb-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"}`, "class")}>${unescapeHTML(markdownify(title))}</h1> <ul${addAttribute(`flex flex-wrap gap-4 text-sm ${image && showImage ? "text-white/90" : "text-gray-600 dark:text-gray-300"}`, "class")}> ${author && showAuthor && renderTemplate`<li class="flex items-center gap-1"> <a${addAttribute(`/authors/${slugify(author.id)}`, "href")} class="flex items-center gap-1 hover:text-primary transition-colors"> ${renderComponent($$result2, "FaRegUserCircle", FaRegUserCircle, { "className": "text-base" })} <span>${upperHumanize(author.id)}</span> </a> </li>`} ${createdAt && showDate && renderTemplate`<li class="flex items-center gap-1" title="创建日期"> ${renderComponent($$result2, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "text-base" })} <span>${formatDate(createdAt)}</span> </li>`} ${pubDate && showPubDate && renderTemplate`<li class="flex items-center gap-1" title="发布日期"> ${renderComponent($$result2, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "text-base" })} <span>Published ${formatDate(pubDate)}</span> </li>`} ${modDate && showModDate && renderTemplate`<li class="flex items-center gap-1"> ${renderComponent($$result2, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "text-base" })} <span>Updated ${formatDate(modDate)}</span> </li>`} ${complexity && complexity > 0 && showReadingTime && renderTemplate`<li class="flex items-center gap-1" title="阅读所需时间"> ${renderComponent($$result2, "FaRegClock", FaRegClock, { "className": "text-base" })} <span>${readingTime(entry.body, complexity)}</span> </li>`} ${categories && showCategories && renderTemplate`<li class="flex items-center gap-2" title="分类"> ${categories.map((category, index) => renderTemplate`<a${addAttribute(`/blog/categories/${slugify(category)}`, "href")} class="flex items-center gap-1 hover:text-primary transition-colors"> ${renderComponent($$result2, "FaRegFolder", FaRegFolder, { "className": "text-base" })} <span>${upperHumanize(category)}</span> </a>`)} </li>`} ${tags && showTags && renderTemplate`<li class="flex items-center gap-2" title="标签"> ${tags.map((tag, index) => renderTemplate`<a${addAttribute(`/blog/tags/${slugify(tag)}`, "href")} class="flex items-center gap-1 hover:text-primary transition-colors"> ${renderComponent($$result2, "FaHashtag", FaHashtag, { "className": "text-base" })} <span>${lowerHumanize(tag)}</span> </a>`)} </li>`}  </ul> </div> </div> ` })}`} </div>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/EntryHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://github.com/NaJimmm");
const $$ShareButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShareButton;
  const { title, description, folder, id } = Astro2.props;
  const baseURL = Astro2.site;
  const shareUrl = `${baseURL}${folder}/${id}`;
  const shareIcon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
</svg>`;
  return renderTemplate(_a || (_a = __template(["", " <!-- \u63D0\u793A\u6D88\u606F --> ", '<div id="share-toast" class="share-toast hidden" data-astro-cid-qerq4hxv>\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF01</div>  <script type="module">', '\n  const shareBtn = document.getElementById("share-btn");\n  const shareToast = document.getElementById("share-toast");\n\n  // \u590D\u5236\u5230\u526A\u8D34\u677F\u51FD\u6570\n  async function copyToClipboard(text) {\n    try {\n      if (navigator.clipboard && window.isSecureContext) {\n        await navigator.clipboard.writeText(text);\n        return true;\n      } else {\n        // \u964D\u7EA7\u65B9\u6848\n        const textArea = document.createElement("textarea");\n        textArea.value = text;\n        textArea.style.position = "fixed";\n        textArea.style.left = "-999999px";\n        textArea.style.top = "-999999px";\n        document.body.appendChild(textArea);\n        textArea.focus();\n        textArea.select();\n        const result = document.execCommand("copy");\n        textArea.remove();\n        return result;\n      }\n    } catch (err) {\n      console.error("\u590D\u5236\u5931\u8D25:", err);\n      return false;\n    }\n  }\n\n  // \u663E\u793A\u63D0\u793A\u6D88\u606F\n  function showToast() {\n    shareToast.classList.remove("hidden", "hide");\n    shareToast.classList.add("show");\n\n    setTimeout(() => {\n      shareToast.classList.add("hide");\n      setTimeout(() => {\n        shareToast.classList.add("hidden");\n        shareToast.classList.remove("show", "hide");\n      }, 300);\n    }, 2000);\n  }\n\n  // \u5206\u4EAB\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\n  shareBtn.addEventListener("click", async () => {\n    if (shareBtn.disabled) return;\n\n    shareBtn.disabled = true;\n\n    try {\n      const success = await copyToClipboard(shareUrl);\n      if (success) {\n        showToast();\n      } else {\n        console.error("\u590D\u5236\u94FE\u63A5\u5931\u8D25");\n      }\n    } catch (error) {\n      console.error("\u5206\u4EAB\u64CD\u4F5C\u5931\u8D25:", error);\n    } finally {\n      shareBtn.disabled = false;\n    }\n  });\n\n  // \u521D\u59CB\u5316\u51FD\u6570\n  function init() {\n    // \u5206\u4EAB\u6309\u94AE\u521D\u59CB\u5316\u5B8C\u6210\n  }\n\n  // Astro \u9875\u9762\u5BFC\u822A\u4E8B\u4EF6\u76D1\u542C\n  document.addEventListener("astro:page-load", init);\n\n  // \u517C\u5BB9\u9996\u6B21\u52A0\u8F7D\u548C\u4F20\u7EDF\u9875\u9762\u8DF3\u8F6C\n  if (document.readyState === "loading") {\n    document.addEventListener("DOMContentLoaded", init);\n  } else {\n    // \u7ACB\u5373\u6267\u884C\u521D\u59CB\u5316\n    init();\n  }\n<\/script>'])), renderComponent($$result, "GlassButton", $$GlassButton, { "id": "share-btn", "variant": "secondary", "size": "md", "icon": shareIcon, "iconPosition": "left", "title": "\u5206\u4EAB", "className": "min-w-24 justify-center", "data-astro-cid-qerq4hxv": true }, { "default": async ($$result2) => renderTemplate`
分享
` }), maybeRenderHead(), defineScriptVars({ shareUrl, title }));
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/ShareButton.astro", void 0);

const $$Astro$1 = createAstro("https://github.com/NaJimmm");
const $$EntryLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EntryLayout;
  const isDev = false;
  const { entry } = Astro2.props;
  const isDraft = entry.data.draft;
  const { title, description, image, hideToc, updatedAt, author } = entry.data;
  const { headings } = await renderEntry(entry);
  const descriptionLenth = 200;
  const globalHideToc = false;
  const tocDepth = 3;
  hideToc || globalHideToc || headings.filter((heading) => heading.depth <= tocDepth).length === 0;
  const articleClass = "w-full lg:w-3/4 xl:w-4/5";
  const entryDescription = description || (entry.body ? plainify(entry.body.slice(0, descriptionLenth)) : "");
  const allBlogPosts = await getCollection("blog", ({ data, filePath }) => {
    if (filePath?.includes("-index.md")) {
      return false;
    }
    return data.status === "published" && !data.draft;
  });
  const currentTags = entry.data.tags || [];
  const currentCategories = entry.data.categories || [];
  const recommendedPosts = allBlogPosts.filter((post) => post.id !== entry.id).map((post) => {
    let score = 0;
    const postTags = post.data.tags || [];
    const postCategories = post.data.categories || [];
    const tagMatches = postTags.filter(
      (tag) => currentTags.includes(tag)
    ).length;
    score += tagMatches * 2;
    const categoryMatches = postCategories.filter(
      (cat) => currentCategories.includes(cat)
    ).length;
    score += categoryMatches * 3;
    return { post, score };
  }).sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    const dateA = new Date(
      a.post.data.publishedAt || a.post.data.createdAt || 0
    );
    const dateB = new Date(
      b.post.data.publishedAt || b.post.data.createdAt || 0
    );
    return dateB.getTime() - dateA.getTime();
  }).slice(0, 5).map((item) => item.post);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": entryDescription, "image": image?.src }, { "default": async ($$result2) => renderTemplate`  ${isDraft && isDev}<section class="flex container px-3 lg:px-8"> <div${addAttribute([articleClass], "class:list")}> <article> <section> ${renderComponent($$result2, "EntryHeader", $$EntryHeader, { "entry": entry, "showImage": true, "showAuthor": true, "showDate": true, "showReadingTime": true, "showCategories": true, "showTags": true })} </section> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "containerType": "section", "heavy": true, "wrapperClass": "panel flex flex-col justify-between mb-4 rounded-[35px] intersect-no-queue min-h-96" }, { "default": async ($$result3) => renderTemplate` <div class="p-3 lg:p-8 prose max-w-none markdown-content text-txt-p dark:text-darkmode-txt-p intersect:animate-fadeUp"> ${renderSlot($$result3, $$slots["default"])} </div> ` })} <!-- 文章信息区 --> <!-- 文章底部信息卡片 --> <div class="relative mt-16"> <!-- 作者头像 - 超出顶部 --> <div class="left_centor -top-12 transform -translate-x-1/2 z-10 animate-fadeUp"> <div class="relative group"> <div class="absolute -inset-2 bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 rounded-[35px] blur opacity-40 group-hover:opacity-60 transition duration-300"></div> ${renderComponent($$result2, "Image", $$Image, { "class": "relative w-20 h-20 rounded-full border-4 border-white/50 shadow-2xl transform group-hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm", "src": __ASTRO_IMAGE_IMPORT_Z1VeAuF, "alt": author || "Author", "width": 80, "height": 80, "loading": "lazy" })} </div> </div> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-2xl pt-16 pb-8 px-8", "textClass": "intersect-no-queue" }, { "default": async ($$result3) => renderTemplate`  <div class="text-center m-6"> <div class="font-bold text-2xl text-txt-p dark:text-darkmode-txt-p mb-1"> ${author || "NaJim"} </div> <!-- <div class="text-sm text-txt-s dark:text-darkmode-txt-s opacity-80">
                文章作者
              </div> --> </div>  <div class="flex items-center justify-center gap-4 mb-2"> ${renderComponent($$result3, "ShareButton", $$ShareButton, { "title": title, "description": entryDescription, "folder": "blog", "id": entry.id })} </div>  <div class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2"></div>  <div class="space-y-4 text-center"> <!-- 版权信息 --> <div class="text-xs text-txt-p dark:text-darkmode-txt-p opacity-75 leading-relaxed"> <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"> <span>
© 2025 by
<a${addAttribute(SITE_INFO.URL, "href")}>${SITE_INFO.SITE_NAME}</a>
本文基于
<a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="font-bold">
CC BY-NC-SA 4.0
</a>
许可
<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC 协议" aria-label="CC 协议" style="max-width: 1em;max-height:1em; display:inline-block;"> <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="必须注明创作者" style="max-width: 1em;max-height:1em;display:inline-block;"> <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="仅允许将作品用于非商业用途" style="max-width: 1em;max-height:1em;display:inline-block;"> <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="改编作品必须遵循相同条款进行共享" style="max-width: 1em;max-height:1em;display:inline-block;"> </span> <span class="hidden sm:inline text-white/30">|</span> <span class="inline-flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
最后更新：${updatedAt ? new Date(updatedAt).toLocaleDateString("zh-CN") : "未知"} </span> </div> </div> </div> ` })} </div> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-lg p-6 my-4", "textClass": "intersect-no-queue  px-3 lg:px-8 " }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Comment", $$Comment, {})} ` })} </article> </div> <!--sidebar --> <div class="flex-col h-full sticky top-[4rem] ml-4 space-y-4 hidden lg:flex lg:w-1/4 xl:w-1/5"> ${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings, "tocDepth": tocDepth })} <!-- 推荐阅读模块 --> ${recommendedPosts.length > 0 && renderTemplate`${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock rounded-[25px] overflow-hidden mb-3", "textClass": "intersect-no-queue" }, { "default": async ($$result3) => renderTemplate` <div class="py-2"> <div class="flex items-center justify-between mb-4"> <h3 class="text-lg font-bold text-txt-p dark:text-darkmode-txt-p flex items-center gap-2"> <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg>
推荐阅读
</h3> </div> <div class="space-y-1"> ${recommendedPosts.map((post, index) => renderTemplate`<div class="intersect:animate-fadeUp"${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> ${renderComponent($$result3, "RecommendedReadCard", $$RecommendedReadCard, { "entry": post, "showImage": true, "showReadingTime": true, "compact": true })} </div>`)} </div> </div> ` })}`} </div> </section> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/EntryLayout.astro", void 0);

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });
  const paths = blogEntries.map((entry) => ({
    params: { entry: entry.id },
    props: { entry }
  }));
  console.log("paths", paths);
  return paths;
}
const $$entry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$entry;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "EntryLayout", $$EntryLayout, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/blog/[entry].astro", void 0);
const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/blog/[entry].astro";
const $$url = "/blog/[entry]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$entry,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
