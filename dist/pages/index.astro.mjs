import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate, d as renderScript, f as defineScriptVars } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { b as getEntries, d as getSiteStats, $ as $$BaseLayout, a as $$LiquidGlassLess } from '../chunks/BaseLayout_BgAMFR6a.mjs';
import { $ as $$Button } from '../chunks/Button_zdAVQOWV.mjs';
import { p as plainify, s as slugify } from '../chunks/textConverter_BRScpw42.mjs';
import { FaRegCalendarAlt, FaSmile, FaMapMarkerAlt } from 'react-icons/fa';
import { r as readingTime, $ as $$PlaceholderImage } from '../chunks/PlaceholderImage_v2lO1ueQ.mjs';
import { f as formatDate } from '../chunks/formatDate_D4-qXOVz.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DuFEGDIh.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1VeAuF } from '../chunks/picture_QvSxCHZe.mjs';
import 'clsx';
/* empty css                                 */
import { a as getEntry } from '../chunks/_astro_content_D8aGqn2R.mjs';
import { s as sortByDate } from '../chunks/sortFunctions_ofjPCS65.mjs';
import { $ as $$RecommendedReadCard } from '../chunks/RecommendedReadCard_BxzK4JI4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://github.com/NaJimmm");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { entry } = Astro2.props;
  const { title, description, createdAt, categories, tags, image, imageAlt } = entry.data;
  const descriptionLength = 200;
  const hasCustomImage = !!(image && typeof image === "object" && "src" in image);
  const displayImageAlt = imageAlt || `${title} - \u9ED8\u8BA4\u56FE\u7247`;
  const entryDate = createdAt ? formatDate(createdAt) : null;
  readingTime(entry.body, 1);
  const entryDescription = description || plainify(entry.body.slice(0, descriptionLength));
  return renderTemplate`${maybeRenderHead()}<div class="glass-t border border-slate-300 dark:border-slate-700 h-full my-2 pl-0 rounded-[25px] overflow-hidden transition-all duration-300 group"> <div class="flex flex-col h-full rounded-[25px] 
    hover:scale-[1.02] transition-all duration-300  hover:shadow-xl"> <!-- 特色图片展示 --> <div class="relative w-full aspect-[7/3] overflow-hidden rounded-t-[24px]"> <a${addAttribute(`/blog/${entry.id}`, "href")} class="block w-full h-full"> ${hasCustomImage ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105", "src": image, "alt": displayImageAlt, "inferSize": true, "loading": "lazy", "format": "webp", "quality": 50, "decoding": "async", "fetchpriority": "high" })}  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div> ` })}` : renderTemplate`<div class="w-full h-full transition-all duration-500 ease-out group-hover:scale-105"> ${renderComponent($$result, "PlaceholderImage", $$PlaceholderImage, { "title": title, "className": "w-full h-full rounded-t-[24px]" })} </div>`} </a> </div> <!-- 内容区域 --> <div class="p-5"> <!-- 文章标题 --> <h4 class="mb-2 text-lg font-bold text-txt-p dark:text-darkmode-txt-p line-clamp-1 leading-tight"> <a${addAttribute(`/blog/${entry.id}`, "href")} class="hover:text-primary transition-colors duration-200 group-hover:text-primary"> ${title} </a> </h4> <!-- 元信息 --> <div class="flex flex-wrap items-center gap-2 mb-3 text-xs"> ${categories && renderTemplate`<div class="flex items-center"> ${categories.map(
    (category, index, array) => renderTemplate`<a${addAttribute(`/blog/categories/${slugify(category ? category : "")}`, "href")} class="text-txt-light dark:text-darkmode-txt-light bg-primary/10 text-primary py-1 pr-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200">  ${category} </a>`
  )} </div>`} ${entryDate && renderTemplate`<div class="flex items-center text-txt-light dark:text-darkmode-txt-light"> ${renderComponent($$result, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-1" })} <span>${entryDate}</span> </div>`} </div> <!-- 文章描述 --> <p class="text-txt-light dark:text-darkmode-txt-light line-clamp-2 leading-relaxed text-sm mb-4"> ${entryDescription} </p> <!-- 阅读更多链接 --> <a${addAttribute(`/blog/${entry.id}`, "href")} class="inline-flex items-center text-primary hover:text-primary-dark text-md font-medium transition-colors duration-200 group/link"> <span>阅读更多</span> <svg class="ml-1 w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> </div>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/Card.astro", void 0);

const $$Astro$1 = createAstro("https://github.com/NaJimmm");
const $$HomeNotesPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeNotesPreview;
  const { entries, limit = 3 } = Astro2.props;
  const displayEntries = entries.slice(0, limit);
  return renderTemplate`${maybeRenderHead()}<div class="pt-3"> <div class="flex items-center justify-between mb-4 px-3"> <h3 class="text-xl font-bold text-txt-p dark:text-darkmode-txt-p">
站点动态
</h3> </div> <div class="space-y-1"> ${displayEntries.map((entry, index) => {
    const { title, description, createdAt, mood, location } = entry.data;
    const entryDate = createdAt ? formatDate(createdAt) : null;
    entry.body ? plainify(entry.body).slice(0, 100) + (plainify(entry.body).length > 100 ? "..." : "") : "";
    return renderTemplate`<div class="group rounded-[25px] hover:bg-primary/5 transition-all duration-300 intersect:animate-fadeUp opacity-0 py-2 px-4
             hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-darkmode-txt-light [&_*]:hover:text-darkmode-txt-p"${addAttribute(`animation-delay: ${index * 200}ms`, "style")}> <div class="flex items-start space-x-2">   <a${addAttribute(`/notes/${slugify(entry.data.title)}`, "href")} class="hover:text-primary transition-colors duration-0"> <div class="flex-1 min-w-0"> <span class="font-normal text-txt-p dark:text-darkmode-txt-p mb-1 line-clamp-1"> ${title} </span>   <div class="flex flex-wrap items-center gap-2 mb-1"> ${entryDate && renderTemplate`<time class="text-xs text-txt-light dark:text-darkmode-txt-light opacity-70 flex items-center"> ${renderComponent($$result, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-1 text-[10px]" })} ${entryDate} </time>`} ${mood && renderTemplate`<span class="text-xs text-txt-light dark:text-darkmode-txt-light opacity-70 flex items-center"> ${renderComponent($$result, "FaSmile", FaSmile, { "className": "mr-1 text-[10px]" })} ${mood} </span>`} ${location && renderTemplate`<span class="text-xs text-txt-light dark:text-darkmode-txt-light opacity-70 flex items-center"> ${renderComponent($$result, "FaMapMarkerAlt", FaMapMarkerAlt, { "className": "mr-1 text-[10px]" })} ${location} </span>`} </div> </div> </a> </div> </div>`;
  })} </div>  <div class="mt-4 text-center"> <a href="/notes" class="text-sm text-primary hover:text-primary-dark transition-colors inline-flex items-center">
查看更多动态
<svg class="ml-1 w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/notes/HomeNotesPreview.astro", void 0);

const $$ArticleCalendar = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getEntries("blog");
  const notesPosts = await getEntries("notes");
  const allPosts = [...blogPosts, ...notesPosts];
  function generateCalendarData() {
    const today = /* @__PURE__ */ new Date();
    const currentYear = today.getFullYear();
    const weeks = [];
    const startDate = new Date(currentYear, 0, 1);
    const currentDate = new Date(startDate);
    const startDay = currentDate.getDay();
    const daysToSubtract = startDay === 0 ? 6 : startDay - 1;
    currentDate.setDate(currentDate.getDate() - daysToSubtract);
    const toLocalYMD = (d) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    };
    const articleCounts = /* @__PURE__ */ new Map();
    allPosts.forEach((post) => {
      const dateToUse = post.data.createdAt || /* @__PURE__ */ new Date();
      const publishDate = toLocalYMD(new Date(dateToUse));
      articleCounts.set(publishDate, (articleCounts.get(publishDate) || 0) + 1);
    });
    const endDate = new Date(currentYear, 11, 31);
    const totalDays = Math.ceil(
      (endDate.getTime() - currentDate.getTime()) / (1e3 * 60 * 60 * 24)
    ) + 7;
    const totalWeeks = Math.ceil(totalDays / 7) - 1;
    for (let week = 0; week < totalWeeks; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const dateStr = toLocalYMD(currentDate);
        const dateSimpleStr = `${currentDate.getMonth() + 1}\u6708${currentDate.getDate()}\u65E5`;
        const count = articleCounts.get(dateStr) || 0;
        let level = 0;
        if (count > 0) level = 1;
        if (count >= 2) level = 2;
        if (count >= 4) level = 3;
        if (count >= 6) level = 4;
        weekData.push({
          date: dateStr,
          dateSimple: dateSimpleStr,
          count,
          level
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(weekData);
    }
    return weeks;
  }
  const calendarData = generateCalendarData();
  function getMonthLabels() {
    const months = [];
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const chineseMonths = [
      "\u4E00\u6708",
      "\u4E8C\u6708",
      "\u4E09\u6708",
      "\u56DB\u6708",
      "\u4E94\u6708",
      "\u516D\u6708",
      "\u4E03\u6708",
      "\u516B\u6708",
      "\u4E5D\u6708",
      "\u5341\u6708",
      "\u5341\u4E00\u6708",
      "\u5341\u4E8C\u6708"
    ];
    for (let month = 0; month < 12; month++) {
      const date = new Date(currentYear, month, 1);
      const startOfYear = new Date(currentYear, 0, 1);
      const startDay = startOfYear.getDay();
      const daysToSubtract = startDay === 0 ? 6 : startDay - 1;
      const calendarStart = new Date(startOfYear);
      calendarStart.setDate(calendarStart.getDate() - daysToSubtract);
      const daysDiff = Math.floor(
        (date.getTime() - calendarStart.getTime()) / (1e3 * 60 * 60 * 24)
      );
      const weekPosition = Math.floor(daysDiff / 7);
      months.push({
        name: chineseMonths[month],
        position: weekPosition
      });
    }
    return months;
  }
  function getArticleStats() {
    const totalArticles = allPosts.length;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const thisYearArticles = allPosts.filter((post) => {
      const dateToUse = post.data.createdAt || /* @__PURE__ */ new Date();
      return new Date(dateToUse).getFullYear() === currentYear;
    }).length;
    const activeDays = /* @__PURE__ */ new Set();
    allPosts.forEach((post) => {
      const dateToUse = post.data.createdAt || /* @__PURE__ */ new Date();
      if (new Date(dateToUse).getFullYear() === currentYear) {
        activeDays.add(new Date(dateToUse).toISOString().split("T")[0]);
      }
    });
    return {
      totalArticles,
      thisYearArticles,
      activeDays: activeDays.size
    };
  }
  const monthLabels = getMonthLabels();
  const articleStats = getArticleStats();
  return renderTemplate`${maybeRenderHead()}<div class="article-calendar" data-astro-cid-rexdov24> <!--   <div class="mb-3">
    <h3 class="text-base font-medium text-txt-p dark:text-darkmode-txt-p opacity-80">
      文章日历
    </h3>
  </div> --> <div class="calendar-container" data-astro-cid-rexdov24> <div class="calendar-wrapper" data-astro-cid-rexdov24> <div class="calendar-main" data-astro-cid-rexdov24> <div class="calendar-content" data-astro-cid-rexdov24> <!-- 月份标签 --> <div class="month-labels flex flex-row justify-between" data-astro-cid-rexdov24> ${monthLabels.map((month) => renderTemplate`<span class="text-sm text-txt-light dark:text-darkmode-txt-light"${addAttribute(month.position, "data-position")}${addAttribute(`--month-position: ${month.position}`, "style")} data-astro-cid-rexdov24> ${month.name} </span>`)} </div> <!-- 日历网格 --> <div class="calendar-grid" data-astro-cid-rexdov24> ${calendarData.map((week) => renderTemplate`<div class="week-column" data-astro-cid-rexdov24> ${week.map((day) => renderTemplate`<div${addAttribute(`calendar-day ${day.level === 0 ? "level-0" : day.level === 1 ? "level-1" : day.level === 2 ? "level-2" : day.level === 3 ? "level-3" : "level-4"}`, "class")}${addAttribute(`${day.count == 0 ? day.dateSimple : day.dateSimple + "\uFF08" + day.count + "\u7BC7\uFF09"}`, "title")} data-astro-cid-rexdov24></div>`)} </div>`)} </div> </div> <!-- 图例和统计信息 --> <div class="legend-stats-container w-full" data-astro-cid-rexdov24> <!-- 文章统计 --> <div class="article-stats" data-astro-cid-rexdov24> <p class="stats-summary text-sm text-gray-600 dark:text-gray-400" data-astro-cid-rexdov24>
今年已发布 <span class="font-semibold text-blue-600 dark:text-blue-400" data-astro-cid-rexdov24>${articleStats.thisYearArticles}</span> 篇文章， 累计活跃 <span class="font-semibold text-green-600 dark:text-green-400" data-astro-cid-rexdov24>${articleStats.activeDays}</span> 天， 总共 <span class="font-semibold text-purple-600 dark:text-purple-400" data-astro-cid-rexdov24>${articleStats.totalArticles}</span> 篇文章
</p> </div> <!-- 图例 --> <div class="legend" data-astro-cid-rexdov24> <span class="legend-text" data-astro-cid-rexdov24>少</span> <div class="legend-levels" data-astro-cid-rexdov24> <div class="legend-square level-0" data-astro-cid-rexdov24></div> <div class="legend-square level-1" data-astro-cid-rexdov24></div> <div class="legend-square level-2" data-astro-cid-rexdov24></div> <div class="legend-square level-3" data-astro-cid-rexdov24></div> <div class="legend-square level-4" data-astro-cid-rexdov24></div> </div> <span class="legend-text" data-astro-cid-rexdov24>多</span> </div> </div> </div> </div> </div> </div> `;
}, "/Users/najim/Project/study/NaJimBlog/src/components/home/ArticleCalendar.astro", void 0);

const $$AuthorProfile = createComponent(async ($$result, $$props, $$slots) => {
  const socialEntry = await getEntry("social", "-index");
  socialEntry?.data.platforms;
  await getEntries("blog", sortByDate);
  return renderTemplate`${maybeRenderHead()}<div class="author-profile" data-astro-cid-hdxow24l> <div class="relative" data-astro-cid-hdxow24l> <!-- 装饰性背景 --> <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-xl" data-astro-cid-hdxow24l></div> <div class="relative " data-astro-cid-hdxow24l> <div class="flex flex-col items-center space-y-4" data-astro-cid-hdxow24l> <!-- 头像区域 --> ${__ASTRO_IMAGE_IMPORT_Z1VeAuF && renderTemplate`<div class="relative group" data-astro-cid-hdxow24l> <!-- 动态光环效果 --> <div class="absolute -inset-2 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse" data-astro-cid-hdxow24l></div> <!-- 外圈装饰 --> <div class="absolute -inset-1 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-300" data-astro-cid-hdxow24l></div> ${renderComponent($$result, "Image", $$Image, { "class": "relative w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-white/50 dark:border-gray-300/30 shadow-2xl transform group-hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800", "src": __ASTRO_IMAGE_IMPORT_Z1VeAuF, "alt": "NaJim\u7684\u5934\u50CF", "width": 112, "height": 112, "loading": "eager", "format": "webp", "quality": 90, "decoding": "async", "fetchpriority": "high", "data-astro-cid-hdxow24l": true })} </div>`} <!-- 个人信息区域 --> <div class="text-center space-y-3" data-astro-cid-hdxow24l> <!-- 名字和徽章 --> <div class="flex flex-col items-center gap-3" data-astro-cid-hdxow24l> <h1 class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" data-astro-cid-hdxow24l>
NaJim
</h1> <div class="flex justify-center gap-2" data-astro-cid-hdxow24l> <span class="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/30" data-astro-cid-hdxow24l>
开发者
</span> <span class="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full border border-purple-500/30" data-astro-cid-hdxow24l>
博主
</span> </div> </div> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/components/home/AuthorProfile.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/najim/Project/study/NaJimBlog/src/components/home/AuthorProfile.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://github.com/NaJimmm");
const $$RecentComments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentComments;
  const { limit = 8 } = Astro2.props;
  const allPosts = await getEntries("blog");
  const pages = await getEntries("pages");
  const titleMap = Object.fromEntries(
    [...allPosts, ...pages].map((p) => [p.id, p.data.title])
  );
  return renderTemplate(_a || (_a = __template(["", '<section class="rounded-lg pt-3"> <div class="flex items-center justify-between mb-4 px-3"> <h3 class="text-xl font-bold text-txt-p dark:text-darkmode-txt-p">\n最近留言\n</h3> </div> <ul id="recent-comments-list" class="space-y-1"></ul> </section> <script>(function(){', '\n  let list = document.getElementById("recent-comments-list");\n  const maxLen=100;\n  function showLoading(){\n    if(!list) return;\n    list.setAttribute(\'aria-busy\',\'true\');\n    list.innerHTML = `\n      <li class="py-4">\n        <div class="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-200">\n          <span class="inline-block w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></span>\n          <span>正在加载留言…</span>\n        </div>\n      </li>\n    `;\n  }\n  function showError(msg){\n    if(!list) return;\n    list.removeAttribute(\'aria-busy\');\n    list.innerHTML = `\n      <li class="py-4">\n        <div class="text-center text-red-600 dark:text-red-400">\n          ${msg || "评论获取失败，请稍后重试。"}\n        </div>\n      </li>\n    `;\n    const btn = document.getElementById("rc-retry-btn");\n    if(btn){ btn.addEventListener("click", load, { once: true }); }\n  }\n  function stripHtml(s){\n    try{\n      return (s||"").replace(/<[^>]*>/g,"").trim()\n    }catch(e){\n      console.error(\'stripHtml报错：\',e)\n      return "";\n    }\n  }\n  function pathFromUrl(u){\n    try{\n      //根据/截取路径，获取最后一个路径段\n      if(u.indexOf("/")!=-1){\n        u=u.split("/")[u.split("/").length-1];\n      }\n      return decodeURIComponent(u)||u\n    }catch(e){\n      console.error(\'格式化路径报错：\',e)\n      return u;\n    }\n  }\n  function ensureTwikoo(cb){\n    if(window.twikoo){cb();return}\n    const s=document.createElement("script");\n    s.src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js";\n    s.async=true;\n    s.onload=cb;\n    document.body.appendChild(s);\n  }\n  function render(items){\n    if(list){ list.removeAttribute(\'aria-busy\'); }\n    if(!list || !items || items.length==0) {\n      //显示一个空提示\n      list.innerHTML=`\n        <li class="text-slate-500 dark:text-slate-200 text-center">还没有留言哦</li>\n      `;\n      return;\n    }\n    list.innerHTML="";\n    items.forEach((it,index)=>{\n      const url=it.url||it.link||"";\n      const path=pathFromUrl(url);\n      const title=titleMap[path]||path;\n      const full=stripHtml(it.comment||it.content||"");\n      const short=full.length>maxLen?full.slice(0,maxLen)+"…":full;\n      const li=document.createElement("li");\n      li.className="group rounded-[25px] hover:bg-primary/5 transition-all duration-300 intersect:animate-fadeUp opacity-0 p-3 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-darkmode-txt-light [&_*]:hover:text-darkmode-txt-p";\n      li.style.animationDelay=`${index * 200}ms`;\n      li.innerHTML=`\n        <a class="no-underline hover:text-primary" href="${url}">\n          <div class="text-txt-light dark:text-darkmode-txt-light flex items-center gap-2 mt-1 h-8">\n            <span class="glass w-9 h-9 rounded-full overflow-hidden hover:rotate-12 duration-300">\n              <img src="${it.avatar||it.avatarUrl||""}" alt="${it.nick||it.nickname||"匿名"}" class="w-9 h-9 rounded-full">\n            </span>\n            <div class="flex flex-col justify-center leading-tight h-8">\n              <span class="text-base text-txt-p dark:text-darkmode-txt-p">${it.nick||"匿名"}</span>\n              <span class="text-xs text-slate-500 dark:text-slate-200">${new Date(it.created||Date.now()).toLocaleString()}</span>\n            </div>\n          </div>\n          <div class="text-[#3e5f6a] dark:text-darkmode-txt-p leading-7 line-clamp-2 font-semibold mt-3" title="${full.replace(/"/g,\'&quot;\')}">${short}</div>\n          <div class="text-sm italic opacity-0 group-hover:opacity-100 text-slate-600 dark:text-slate-100/50 border-t border-slate-300/30 dark:border-darkmode-border/30 pt-1 text-right transition-opacity duration-300">\n            来自：${title}\n          </div>\n        </a>\n      `;\n      list.appendChild(li);\n    });\n  }\n  function load(){\n    list = document.getElementById("recent-comments-list");\n    if(!list){return}\n    if(!twikooEnvId){\n      showError("留言模块未加载，Twikoo envId 未配置。");\n      return;\n    }\n    showLoading();\n    ensureTwikoo(()=>{\n      if(!window.twikoo){\n        showError("评论系统初始化失败");\n        return;\n      }\n      window.twikoo.getRecentComments({ envId: twikooEnvId, pageSize: limit })\n        .then((res)=>{\n          const arr=res?.comments||res||[];\n          console.log(\'从twikoo获取评论列表\',arr)\n          render(arr);\n        })\n        .catch((err)=>{\n          console.error(\'获取最近评论失败\', err);\n          showError("评论获取失败，请稍后重试。");\n        });\n    });\n  }\n  // document.addEventListener("DOMContentLoaded", load);\n  document.addEventListener("astro:page-load", load);\n  function ensureTwikoo(cb){\n    if(window.twikoo){cb();return}\n    const s=document.createElement("script");\n    s.src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js";\n    s.async=true;\n    s.onload=cb;\n    s.onerror=()=>{\n      showError("评论系统加载失败，请稍后重试。");\n    };\n    document.body.appendChild(s);\n  }\n})();</script>'], ["", '<section class="rounded-lg pt-3"> <div class="flex items-center justify-between mb-4 px-3"> <h3 class="text-xl font-bold text-txt-p dark:text-darkmode-txt-p">\n最近留言\n</h3> </div> <ul id="recent-comments-list" class="space-y-1"></ul> </section> <script>(function(){', '\n  let list = document.getElementById("recent-comments-list");\n  const maxLen=100;\n  function showLoading(){\n    if(!list) return;\n    list.setAttribute(\'aria-busy\',\'true\');\n    list.innerHTML = \\`\n      <li class="py-4">\n        <div class="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-200">\n          <span class="inline-block w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></span>\n          <span>正在加载留言…</span>\n        </div>\n      </li>\n    \\`;\n  }\n  function showError(msg){\n    if(!list) return;\n    list.removeAttribute(\'aria-busy\');\n    list.innerHTML = \\`\n      <li class="py-4">\n        <div class="text-center text-red-600 dark:text-red-400">\n          \\${msg || "评论获取失败，请稍后重试。"}\n        </div>\n      </li>\n    \\`;\n    const btn = document.getElementById("rc-retry-btn");\n    if(btn){ btn.addEventListener("click", load, { once: true }); }\n  }\n  function stripHtml(s){\n    try{\n      return (s||"").replace(/<[^>]*>/g,"").trim()\n    }catch(e){\n      console.error(\'stripHtml报错：\',e)\n      return "";\n    }\n  }\n  function pathFromUrl(u){\n    try{\n      //根据/截取路径，获取最后一个路径段\n      if(u.indexOf("/")!=-1){\n        u=u.split("/")[u.split("/").length-1];\n      }\n      return decodeURIComponent(u)||u\n    }catch(e){\n      console.error(\'格式化路径报错：\',e)\n      return u;\n    }\n  }\n  function ensureTwikoo(cb){\n    if(window.twikoo){cb();return}\n    const s=document.createElement("script");\n    s.src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js";\n    s.async=true;\n    s.onload=cb;\n    document.body.appendChild(s);\n  }\n  function render(items){\n    if(list){ list.removeAttribute(\'aria-busy\'); }\n    if(!list || !items || items.length==0) {\n      //显示一个空提示\n      list.innerHTML=\\`\n        <li class="text-slate-500 dark:text-slate-200 text-center">还没有留言哦</li>\n      \\`;\n      return;\n    }\n    list.innerHTML="";\n    items.forEach((it,index)=>{\n      const url=it.url||it.link||"";\n      const path=pathFromUrl(url);\n      const title=titleMap[path]||path;\n      const full=stripHtml(it.comment||it.content||"");\n      const short=full.length>maxLen?full.slice(0,maxLen)+"…":full;\n      const li=document.createElement("li");\n      li.className="group rounded-[25px] hover:bg-primary/5 transition-all duration-300 intersect:animate-fadeUp opacity-0 p-3 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-darkmode-txt-light [&_*]:hover:text-darkmode-txt-p";\n      li.style.animationDelay=\\`\\${index * 200}ms\\`;\n      li.innerHTML=\\`\n        <a class="no-underline hover:text-primary" href="\\${url}">\n          <div class="text-txt-light dark:text-darkmode-txt-light flex items-center gap-2 mt-1 h-8">\n            <span class="glass w-9 h-9 rounded-full overflow-hidden hover:rotate-12 duration-300">\n              <img src="\\${it.avatar||it.avatarUrl||""}" alt="\\${it.nick||it.nickname||"匿名"}" class="w-9 h-9 rounded-full">\n            </span>\n            <div class="flex flex-col justify-center leading-tight h-8">\n              <span class="text-base text-txt-p dark:text-darkmode-txt-p">\\${it.nick||"匿名"}</span>\n              <span class="text-xs text-slate-500 dark:text-slate-200">\\${new Date(it.created||Date.now()).toLocaleString()}</span>\n            </div>\n          </div>\n          <div class="text-[#3e5f6a] dark:text-darkmode-txt-p leading-7 line-clamp-2 font-semibold mt-3" title="\\${full.replace(/"/g,\'&quot;\')}">\\${short}</div>\n          <div class="text-sm italic opacity-0 group-hover:opacity-100 text-slate-600 dark:text-slate-100/50 border-t border-slate-300/30 dark:border-darkmode-border/30 pt-1 text-right transition-opacity duration-300">\n            来自：\\${title}\n          </div>\n        </a>\n      \\`;\n      list.appendChild(li);\n    });\n  }\n  function load(){\n    list = document.getElementById("recent-comments-list");\n    if(!list){return}\n    if(!twikooEnvId){\n      showError("留言模块未加载，Twikoo envId 未配置。");\n      return;\n    }\n    showLoading();\n    ensureTwikoo(()=>{\n      if(!window.twikoo){\n        showError("评论系统初始化失败");\n        return;\n      }\n      window.twikoo.getRecentComments({ envId: twikooEnvId, pageSize: limit })\n        .then((res)=>{\n          const arr=res?.comments||res||[];\n          console.log(\'从twikoo获取评论列表\',arr)\n          render(arr);\n        })\n        .catch((err)=>{\n          console.error(\'获取最近评论失败\', err);\n          showError("评论获取失败，请稍后重试。");\n        });\n    });\n  }\n  // document.addEventListener("DOMContentLoaded", load);\n  document.addEventListener("astro:page-load", load);\n  function ensureTwikoo(cb){\n    if(window.twikoo){cb();return}\n    const s=document.createElement("script");\n    s.src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js";\n    s.async=true;\n    s.onload=cb;\n    s.onerror=()=>{\n      showError("评论系统加载失败，请稍后重试。");\n    };\n    document.body.appendChild(s);\n  }\n})();</script>'])), maybeRenderHead(), defineScriptVars({
    twikooEnvId: "https://najim-twikoo.netlify.app/.netlify/functions/twikoo",
    limit,
    titleMap
  }));
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/RecentComments.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getEntries("blog", sortByDate);
  const publishedPosts = allPosts.filter((post) => post.data.status === "published").sort((a, b) => {
    const dateA = new Date(a.data.publishedAt || 0);
    const dateB = new Date(b.data.publishedAt || 0);
    return dateB.getTime() - dateA.getTime();
  });
  const latestNotes = await getEntries(
    "notes",
    sortByDate
  );
  publishedPosts.slice(0, 8).map((post) => ({
    id: post.id,
    slug: post.id,
    title: post.data.title,
    image: post.data.image || __ASTRO_IMAGE_IMPORT_Z1VeAuF,
    imageAlt: post.data.imageAlt || post.data.title,
    excerpt: post.data.description || "",
    publishedAt: post.data.publishedAt || /* @__PURE__ */ new Date(),
    date: post.data.publishedAt || /* @__PURE__ */ new Date(),
    categories: post.data.categories ? [post.data.categories] : [],
    tags: post.data.tags || [],
    complexity: "beginner",
    views: post.data.views || 0,
    featured: post.data.featured || false
  }));
  const featuredPosts = (await getEntries("blog", sortByDate)).slice(0, 8);
  const allCategories = publishedPosts.flatMap((post) => post.data.categories || []).filter(Boolean);
  const uniqueCategories = [...new Set(allCategories)].sort();
  const categories = uniqueCategories.map((category) => ({
    name: category,
    count: publishedPosts.filter(
      (post) => post.data.categories?.includes(category)
    ).length,
    id: category,
    slug: category?.toLowerCase().replace(/\s+/g, "-")
  }));
  const recommendedPosts = featuredPosts.slice(0, 4);
  await getSiteStats();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8" data-astro-cid-j7pv25f6> <!-- Hero Banner --> <section class="rounded-[35px] mb-4" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 xl:grid-cols-3 gap-6" data-astro-cid-j7pv25f6> <!-- 左侧：博主信息 (1/4) --> <div class="xl:col-span-1" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "textClass": "h-full", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="rounded-[35px] intersect:animate-fadeUp h-full" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "AuthorProfile", $$AuthorProfile, { "data-astro-cid-j7pv25f6": true })} </div> ` })} </div> <!-- 右侧：文章日历 (3/4) --> <div class="hidden md:block xl:col-span-2 h-full" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "containerClass": "h-full", "wrapperClass": "dock h-full", "textClass": "p-3", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="rounded-lg intersect:animate-fadeUp h-full" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "ArticleCalendar", $$ArticleCalendar, { "data-astro-cid-j7pv25f6": true })} </div> ` })} </div> </div> </section> <!-- Categories Section --> <section class="rounded-lg" data-astro-cid-j7pv25f6> <!-- Categories Grid --> <div class="flex flex-wrap gap-2" data-astro-cid-j7pv25f6> ${categories.slice(0, 6).map((category, index) => renderTemplate`<a${addAttribute(`/blog/categories/${category.slug}`, "href")} class="text-txt-light dark:text-darkmode-txt-light font-medium"${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "wrapperClass": "button", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <span class="" data-astro-cid-j7pv25f6>${category.name}</span> ` })} </a>`)} </div> </section> <!-- Main Content Grid --> <section class="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6 my-4" data-astro-cid-j7pv25f6> <!-- Left Column: Featured Articles --> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "containerClass": "lg:col-span-3", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`  <section class="rounded-lg" data-astro-cid-j7pv25f6> <div class="p-3" data-astro-cid-j7pv25f6> <div class="mb-2" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold mb-2 text-txt-p dark:text-darkmode-txt-p" data-astro-cid-j7pv25f6>
最新文章
</h2> </div> <!-- Articles Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-astro-cid-j7pv25f6> ${featuredPosts.map((post, index) => renderTemplate`<div class="transform hover:scale-105 transition-transform duration-300 intersect:animate-fadeUp" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "BlogCard", $$Card, { "entry": post, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <!-- View All Articles Button --> <div class="text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Button", $$Button, { "label": "\u67E5\u770B\u6240\u6709\u6587\u7AE0", "link": "/blog", "newtab": false, "hoverInvert": true, "color": "", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> ` })} <!-- Right Column: Sidebar --> <div class="flex flex-col lg:col-span-1 space-y-6" data-astro-cid-j7pv25f6> <!-- Recommended Articles --> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <section class="rounded-lg pt-3" data-astro-cid-j7pv25f6> <div class="flex items-center justify-between mb-4 px-3" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-txt-p dark:text-darkmode-txt-p" data-astro-cid-j7pv25f6>
推荐阅读
</h3> </div> <div class="space-y-2 px-2 md:px-0" data-astro-cid-j7pv25f6> ${recommendedPosts.slice(0, 4).map((post, index) => renderTemplate`<div class="transform hover:scale-105 transition-transform duration-300 intersect:animate-fadeUp"${addAttribute(`animation-delay: ${index * 200}ms`, "style")} data-astro-cid-j7pv25f6> ${renderComponent($$result3, "RecommendedReadCardComponent", $$RecommendedReadCard, { "entry": post, "showImage": true, "showReadingTime": true, "compact": false, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> </section> ` })} <!-- </section> --> <!-- Site Messages --> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "HomeNotesPreview", $$HomeNotesPreview, { "entries": latestNotes, "limit": 5, "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "RecentComments", $$RecentComments, { "limit": 5, "data-astro-cid-j7pv25f6": true })} ` })} <!-- </section> --> </div> </section> </div>  ` })}  <!-- 社交按钮脚本已移至 AuthorProfile 组件 --> ${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/index.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
