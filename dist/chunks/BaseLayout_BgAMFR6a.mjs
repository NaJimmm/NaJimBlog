import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, g as renderSlot, b as renderTemplate, k as defineStyleVars, u as unescapeHTML, r as renderComponent, d as renderScript, l as createTransitionScope, F as Fragment, n as renderHead } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { p as plainify } from './textConverter_BRScpw42.mjs';
import 'clsx';
import { U as UI_CONFIG, S as SITE_INFO } from './config_Cg8a3zQ4.mjs';
import { SiXiaohongshu } from 'react-icons/si';
import { FaWeixin, FaEnvelope, FaGithub, FaRss } from 'react-icons/fa';
/* empty css                         */
import { g as getCollection, a as getEntry } from './_astro_content_D8aGqn2R.mjs';
import { IoSearch } from 'react-icons/io5';
import { $ as $$Image } from './_astro_assets_DuFEGDIh.mjs';

const $$Astro$7 = createAstro("https://github.com/NaJimmm");
const $$LiquidGlassLess = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LiquidGlassLess;
  const {
    containerType = "div",
    containerClass = "",
    wrapperClass = "dock",
    animation = "fadeUp",
    heavy = false,
    showContainer = true,
    enableGlassEffect = UI_CONFIG.ENABLE_GLASS_EFFECT,
    textClass = "",
    effectClass = "",
    tintClass = "",
    shineClass = ""
  } = Astro2.props;
  const animationClass = animation !== "none" ? `intersect:animate-${animation} transition-all duration-300 fast-slow` : "";
  const effectClassStr = enableGlassEffect ? (heavy ? "liquidGlass-effect-h " : "liquidGlass-effect ") + effectClass : "";
  const tintClassStr = enableGlassEffect ? (heavy ? "liquidGlass-tint-h " : "liquidGlass-tint ") + tintClass : "";
  const shineClassStr = enableGlassEffect ? `liquidGlass-shine ${shineClass}` : "";
  const flatWrapperClass = enableGlassEffect ? wrapperClass : `${wrapperClass} bg-[#f8f9ff] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md`;
  return renderTemplate`${containerType === "section" ? renderTemplate`${maybeRenderHead()}<section${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></section>` : containerType === "nav" ? renderTemplate`<nav${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text drop-shadow-md-white ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></nav>` : containerType === "header" ? renderTemplate`<header${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></header>` : containerType === "footer" ? renderTemplate`<footer${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></footer>` : renderTemplate`<div${addAttribute(`liquid-glass-container ${containerClass}`, "class")}><div${addAttribute(`liquidGlass-wrapper ${flatWrapperClass}`, "class")}>${enableGlassEffect && renderTemplate`<div${addAttribute(`${effectClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${tintClassStr} ${animationClass}`, "class")}></div>`}${enableGlassEffect && renderTemplate`<div${addAttribute(`${shineClassStr} ${animationClass}`, "class")}></div>`}<div${addAttribute(`liquidGlass-text ${textClass} ${animationClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></div></div>`}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/LiquidGlassLess.astro", void 0);

const $$Astro$6 = createAstro("https://github.com/NaJimmm");
const $$GlassButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GlassButton;
  const {
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    icon,
    iconPosition = "left",
    className = "",
    id,
    title,
    type = "button",
    onClick,
    open = true
  } = Astro2.props;
  const variantStyles = {
    primary: {
      base: "rgba(255, 186, 186, 0.25)",
      hover: "rgba(239, 68, 68, 0.35)",
      border: "rgba(248, 113, 113, 0.4)",
      hoverBorder: "rgba(248, 113, 113, 0.6)",
      color: "#dc2626",
      hoverColor: "#ef4444",
      shadow: "rgba(220, 38, 38, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    secondary: {
      base: "rgba(59, 130, 246, 0.25)",
      hover: "rgba(59, 130, 246, 0.35)",
      border: "rgba(71, 158, 255, 0.4)",
      hoverBorder: "rgba(73, 158, 254, 0.6)",
      color: "#2563eb",
      hoverColor: "#3b82f6",
      shadow: "rgba(37, 99, 235, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    success: {
      base: "rgba(34, 197, 94, 0.25)",
      hover: "rgba(34, 197, 94, 0.35)",
      border: "rgba(74, 222, 128, 0.4)",
      hoverBorder: "rgba(74, 222, 128, 0.6)",
      color: "#16a34a",
      hoverColor: "#22c55e",
      shadow: "rgba(22, 163, 74, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    warning: {
      base: "#fb923c",
      hover: "#ffa155",
      border: "#fb7d3c",
      hoverBorder: "#ff6900",
      color: "#ffffff",
      hoverColor: "#ffffff",
      shadow: "rgba(217, 119, 6, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    danger: {
      base: "rgba(239, 68, 68, 0.25)",
      hover: "rgba(239, 68, 68, 0.35)",
      border: "rgba(248, 113, 113, 0.4)",
      hoverBorder: "rgba(248, 113, 113, 0.6)",
      color: "#dc2626",
      hoverColor: "#ef4444",
      shadow: "rgba(220, 38, 38, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    info: {
      base: "rgb(244, 244, 244, 0.4)",
      hover: "rgb(244, 244, 244, 0.6)",
      border: "rgba(255, 255, 255, 0.8)",
      hoverBorder: "rgba(255, 255, 255, 0.9)",
      color: "#383838",
      hoverColor: "#272727",
      shadow: "rgba(99, 102, 241, 0.25)",
      gradient: "rgba(255, 255, 255, 0.3)"
    },
    menu: {
      base: "rgb(244, 244, 244, 0.4)",
      hover: "rgb(244, 244, 244, 0.6)",
      border: "rgba(255, 255, 255, 0.8)",
      hoverBorder: "rgba(255, 255, 255, 0.9)",
      color: "rgb(234, 88, 12)",
      hoverColor: "rgb(249, 115, 22)",
      shadow: "rgba(150, 150, 150, 0.6)",
      gradient: "rgba(255, 255, 255, 0.3)"
    }
  };
  const sizeStyles = {
    sm: {
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
      iconSize: "0.875rem",
      gap: "0.375rem",
      // borderRadius: "0.75rem",
      borderRadius: "999px"
    },
    md: {
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      iconSize: "1rem",
      gap: "0.5rem",
      // borderRadius: "1rem",
      borderRadius: "999px"
    },
    lg: {
      padding: "1rem 1.25rem",
      fontSize: "1.1rem",
      iconSize: "1.125rem",
      gap: "0.625rem",
      // borderRadius: "1.25rem",
      borderRadius: "30px"
    },
    menu: {
      padding: "0.5rem 1rem",
      iconSize: "1.25rem",
      fontSize: "inherit",
      gap: "inherit",
      // borderRadius: "9999px",
      borderRadius: "37px"
    }
  };
  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];
  const $$definedVars = defineStyleVars([{
    variantBase: currentVariant.base,
    variantHover: currentVariant.hover,
    variantBorder: currentVariant.border,
    variantHoverBorder: currentVariant.hoverBorder,
    variantColor: currentVariant.color,
    variantHoverColor: currentVariant.hoverColor,
    variantShadow: currentVariant.shadow,
    variantGradient: currentVariant.gradient,
    sizePadding: currentSize.padding,
    sizeFontSize: currentSize.fontSize,
    sizeIconSize: currentSize.iconSize,
    sizeGap: currentSize.gap,
    sizeBorderRadius: currentSize.borderRadius
  }]);
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")}${addAttribute(type, "type")}${addAttribute(open ? `glass-button glass-button--${variant} glass-button--${size} select-none ${className} ` : `gap-[${currentSize.gap}] p-[${currentSize.padding}] select-none ${className} `, "class")}${addAttribute(disabled || loading, "disabled")}${addAttribute(title, "title")}${addAttribute(onClick, "onclick")} data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}> ${loading && renderTemplate`<svg class="glass-button__spinner" viewBox="0 0 24 24" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}> <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}></circle> <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}></path> </svg>`} ${icon && iconPosition === "left" && !loading && renderTemplate`<span class="glass-button__icon" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}>${unescapeHTML(icon)}</span>`} <span class="glass-button__content" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </span> ${icon && iconPosition === "right" && !loading && renderTemplate`<span class="glass-button__icon" data-astro-cid-xwnkcw7l${addAttribute($$definedVars, "style")}>${unescapeHTML(icon)}</span>`} </button> `;
}, "/Users/najim/Project/study/NaJimBlog/src/components/ui/GlassButton.astro", void 0);

const $$Astro$5 = createAstro("https://github.com/NaJimmm");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Social;
  const { links } = Astro2.props;
  const liClass = "inline-block px-1 intersect:animate-fade opacity-0";
  return renderTemplate`${links && renderTemplate`${maybeRenderHead()}<ul class="py-2 flex items-center">${links.wechat && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(links.wechat, "href")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "id": "wechatIcon", "variant": "info", "size": "sm", "iconPosition": "left", "title": "\u5FAE\u4FE1", "className": "min-w-10 justify-center" }, { "default": ($$result2) => renderTemplate`<span class="sr-only">公众号</span>${renderComponent($$result2, "FaWeixin", FaWeixin, { "className": "w-6 h-6   dark:hover:text-green-600 hover:text-green-600 transition duration-300" })}` })}</a></li>`}${links.xhs && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(links.xhs, "href")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "id": "xhs", "variant": "info", "size": "sm", "iconPosition": "left", "title": "\u5C0F\u7EA2\u4E66", "className": "min-w-10 justify-center" }, { "default": ($$result2) => renderTemplate`<span class="sr-only">小红书</span>${renderComponent($$result2, "SiXiaohongshu", SiXiaohongshu, { "className": "w-6 h-6  dark:hover:text-red-600 hover:text-red-600 transition duration-300" })}` })}</a></li>`}${links.email && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(`mailto:${links.email}`, "href")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "id": "email", "variant": "info", "size": "sm", "iconPosition": "left", "title": "Email", "className": "min-w-10 justify-center" }, { "default": ($$result2) => renderTemplate`<span class="sr-only">Email</span>${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "w-6 h-6  dark:hover:text-yellow-200 hover:text-yellow-200 transition duration-300" })}` })}</a></li>`}${links.github && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(links.github, "href")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "id": "github", "variant": "info", "size": "sm", "iconPosition": "left", "title": "GitHub", "className": "min-w-10 justify-center" }, { "default": ($$result2) => renderTemplate`<span class="sr-only">GitHub</span>${renderComponent($$result2, "FaGithub", FaGithub, { "className": "w-6 h-6  dark:hover:text-black hover:text-black transition duration-300" })}` })}</a></li>`}${links.rss && renderTemplate`<li${addAttribute(liClass, "class")}><a${addAttribute(links.rss, "href")}>${renderComponent($$result, "GlassButton", $$GlassButton, { "id": "rss", "variant": "info", "size": "sm", "iconPosition": "left", "title": "RSS", "className": "min-w-10 justify-center" }, { "default": ($$result2) => renderTemplate`<span class="sr-only">RSS</span>${renderComponent($$result2, "FaRss", FaRss, { "className": "w-6 h-6  dark:hover:text-blue-600 hover:text-blue-600 transition duration-300" })}` })}</a></li>`}</ul>`}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/Social.astro", void 0);

let blogCount = -1;
let categoriesCount = -1;
let tagsCount = -1;
let totalWordCount = -1;
const getIndex = async (collection) => {
  const index = await getEntry(collection, "-index");
  return index;
};
const getEntries = async (collection, sortFunction, noIndex = true, noDrafts = true) => {
  let entries = await getCollection(collection);
  entries = noIndex ? entries.filter((entry) => !entry.id.match(/^-/)) : entries;
  entries = noDrafts ? entries.filter((entry) => "draft" in entry.data && !entry.data.draft) : entries;
  entries = sortFunction ? sortFunction(entries) : entries;
  return entries;
};
const getEntriesBatch = async (collections, sortFunction, noIndex = true, noDrafts = true) => {
  const allCollections = await Promise.all(
    collections.map(async (collection) => {
      return await getEntries(collection, sortFunction, noIndex, noDrafts);
    })
  );
  return allCollections.flat();
};
const getBlogCount = async () => {
  if (blogCount !== -1) return blogCount;
  const entries = await getEntries("blog");
  const notes = await getEntries("notes");
  blogCount = entries.length + notes.length;
  return blogCount;
};
const getCategoriesCount = async () => {
  if (categoriesCount !== -1) return categoriesCount;
  try {
    const blogEntries = await getEntries("blog");
    const categories = /* @__PURE__ */ new Set();
    blogEntries.forEach((entry) => {
      if (entry.data.categories && Array.isArray(entry.data.categories)) {
        entry.data.categories.forEach((category) => {
          categories.add(category);
        });
      }
      if (entry.data.category) {
        categories.add(entry.data.category);
      }
    });
    categoriesCount = categories.size;
    return categoriesCount;
  } catch (error) {
    return 0;
  }
};
const getTagsCount = async () => {
  if (tagsCount !== -1) return tagsCount;
  try {
    const blogEntries = await getEntries("blog");
    const tags = /* @__PURE__ */ new Set();
    blogEntries.forEach((entry) => {
      if (entry.data.tags && Array.isArray(entry.data.tags)) {
        entry.data.tags.forEach((tag) => {
          tags.add(tag);
        });
      }
    });
    tagsCount = tags.size;
    return tagsCount;
  } catch (error) {
    return 0;
  }
};
const countWords = (text) => {
  if (!text) return 0;
  const cleanText = text.replace(/<[^>]*>/g, "").replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[[^\]]*\]\([^)]*\)/g, "").replace(/#{1,6}\s/g, "").replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1").replace(/\n+/g, " ").trim();
  if (!cleanText) return 0;
  const chineseChars = cleanText.match(/[\u4e00-\u9fff]/g) || [];
  const englishText = cleanText.replace(/[\u4e00-\u9fff]/g, " ");
  const englishWords = englishText.match(/\b[a-zA-Z]+\b/g) || [];
  return chineseChars.length + englishWords.length;
};
const getTotalWordCount = async () => {
  if (totalWordCount !== -1) return totalWordCount.toString();
  try {
    const [blogEntries, notesEntries] = await Promise.all([
      getEntries("blog"),
      getEntries("notes").catch(() => [])
      // notes 集合可能不存在
    ]);
    let totalWords = 0;
    blogEntries.forEach((entry) => {
      totalWords += countWords(entry.body || "");
    });
    notesEntries.forEach((entry) => {
      totalWords += countWords(entry.body || "");
    });
    if (totalWords >= 1e6) {
      return `${(totalWords / 1e6).toFixed(1)}M`;
    } else if (totalWords >= 1e3) {
      return `${(totalWords / 1e3).toFixed(1)}K`;
    }
    totalWordCount = totalWords;
    return totalWordCount.toString();
  } catch (error) {
    console.error("Error calculating total word count:", error);
    return "0";
  }
};
const getSiteRunningDays = () => {
  try {
    const startDate = new Date(SITE_INFO.START_DATE);
    const currentDate = /* @__PURE__ */ new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1e3 * 3600 * 24));
    return Math.max(0, daysDiff);
  } catch (error) {
    console.error("Error calculating site running days:", error);
    return 0;
  }
};
const getSiteStats = async () => {
  const [blogCount2, categoriesCount2, tagsCount2, totalWords] = await Promise.all([
    getBlogCount(),
    getCategoriesCount(),
    getTagsCount(),
    getTotalWordCount()
  ]);
  const runningDays = getSiteRunningDays();
  return {
    articles: blogCount2,
    categories: categoriesCount2,
    tags: tagsCount2,
    totalWords,
    runningDays
  };
};

const $$Astro$4 = createAstro("https://github.com/NaJimmm");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerMenus = [
    { name: "\u9996\u9875", url: "/", target: "_self" },
    { name: "\u535A\u5BA2", url: "/blog", target: "_self" },
    { name: "\u5173\u4E8E", url: "/about", target: "_self" },
    { name: "\u641C\u7D22", url: "/search", target: "_self" }
    // { name: "条款", url: "/terms", target: "_self" },
    // { name: "友链", url: "/links", target: "_self" },
  ];
  const socialEntry = await getEntry("social", "-index");
  const socialLinks = socialEntry?.data.platforms || {
    mpwechat: "",
    xhs: "",
    github: "",
    email: "",
    instagram: "",
    facebook: "",
    twitter: "",
    weibo: "",
    rss: ""
  };
  const siteStatsData = await getSiteStats();
  const statsData = {
    totalWords: siteStatsData.totalWords,
    runningDays: siteStatsData.runningDays,
    totalArticles: siteStatsData.articles.toString()
  };
  return renderTemplate`${maybeRenderHead()}<footer id="main-footer" class="container px-3 lg:px-8 fixed bottom-0 left-0 right-0 z-40 pointer-events-none transition-all duration-300 fast-slow"> <div class="mx-auto py-2 md:py-4"> <!-- 整体浮动容器 --> <div class="rounded-full pointer-events-auto transition-all duration-300 fast-slow"> ${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "enableGlassEffect": true, "containerType": "nav", "wrapperClass": "px-6 py-2 rounded-full hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/50", "effectClass": "rounded-full", "textClass": "rounded-full", "tintClass": "rounded-full", "shineClass": "rounded-full", "animation": "fadeDown" }, { "default": async ($$result2) => renderTemplate` <div class=""> <!-- 收缩状态：只显示重要信息 --> <div id="footer-collapsed" class="flex items-center justify-between md:flex-row flex-col gap-2 md:gap-0"> <!-- 左侧：版权信息 --> <div class="text-sm md:text-base text-txt-light dark:text-darkmode-txt-light text-center md:text-left">
© ${(/* @__PURE__ */ new Date()).getFullYear()} ·
<span class="hidden md:inline">保留所有权利 ·</span> <a${addAttribute(SITE_INFO.URL, "href")} class="hover:text-orange-500 transition-colors">
najim.com
</a> <!-- <a href={SITE_INFO.ICP.URL} target="_blank">
                {SITE_INFO.ICP.NUMBER}
              </a> --> </div> <!-- 右侧：社交链接 --> <div class="hidden md:flex md:items-center md:scale-100"> ${renderComponent($$result2, "Social", $$Social, { "links": socialLinks })} <!-- 返回顶部按钮 --> ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "back-to-top-footer", "variant": "info", "size": "sm", "className": "flex items-center gap-2  py-1 text-xs md:text-sm font-medium mx-1 w-0 opacity-0 overflow-hidden pointer-events-none transition-all duration-300 ease-in-out", "aria-label": "\u8FD4\u56DE\u9876\u90E8" }, { "default": async ($$result3) => renderTemplate` <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> <span>Top</span> ` })} </div> </div> <!-- 展开状态：显示所有信息 --> <div id="footer-expanded" class="opacity-0 max-h-0 transition-all duration-300 fast-slow overflow-hidden"> <div class="z-50 flex flex-row justify-between items-center"> <!-- 导航菜单 --> <div class="hidden md:block"> <ul class="flex flex-wrap justify-center items-center gap-1 md:gap-2"> ${footerMenus.map((menu) => renderTemplate`<li class="relative"> <a${addAttribute(menu.url, "href")}${addAttribute(menu.target, "target")} class="block px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-medium text-txt-p transition-all duration-300 dark:text-darkmode-txt-p rounded-lg relative z-10 hover:text-orange-500 hover:bg-white/10"> ${menu.name} </a> </li>`)} </ul> </div> <!-- 统计数据和返回顶部 --> <div class="text-center hidden md:flex md:items-center md:gap-2"> <div class="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 md:gap-x-2 text-xs md:text-sm text-txt-light dark:text-darkmode-txt-light"> <!-- 浏览量已取消显示 -->
·
<span>${statsData.totalArticles} 文章</span>
·
<span>全站 ${statsData.totalWords} 字</span>
·
<span>运行 ${statsData.runningDays} 天</span> </div> </div> </div> </div> </div> ` })} </div> </div> </footer> <!-- Footer 滚动控制脚本 --> ${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/components/base/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$1;
const $$ThemeScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$2(['<script data-astro-rerun>\n  const defaultTheme = "system";\n\n  function getTheme(defaultTheme) {\n    var darkMode = defaultTheme === "dark" ? true : false;\n    if (localStorage.getItem("theme") === "system") {\n      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n        darkMode = true;\n      }\n    } else if (localStorage.getItem("theme") === "dark") {\n      darkMode = true;\n    } else if (localStorage.getItem("theme") === "light") {\n      darkMode = false;\n    }\n    return darkMode;\n  }\n\n  function setTheme(darkMode) {\n    // Update DOM\n    darkMode\n      ? document.documentElement.classList.add("dark")\n      : document.documentElement.classList.remove("dark");\n    // Update localStorage\n    localStorage.setItem("theme", darkMode ? "dark" : "light");\n  }\n\n  // This prevents flickering back to default theme before the page is fully loaded\n  setTheme(getTheme(defaultTheme));\n\n  document.addEventListener("astro:page-load", () => {\n    setTheme(getTheme(defaultTheme));\n    // Theme switcher\n    var themeSwitch = document.querySelectorAll("[data-theme-switcher]");\n    themeSwitch.forEach((el) => {\n      el.addEventListener("change", (e) => {\n        setTheme(e.target.checked);\n      });\n    });\n  });\n<\/script>'])));
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/ThemeScript.astro", void 0);

const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex a mr-2"> <input class="absolute opacity-0" id="theme-switcher" data-theme-switcher type="checkbox"> <label class="relative inline-block h-4 w-6 cursor-pointer" for="theme-switcher"> <span class="sr-only">theme switcher</span> <a class="absolute -top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full" title="切换主题"> <svg class="absolute z-10 opacity-100 dark:opacity-0" viewBox="0 0 24 24" height="21" width="21"> <path fill="#000" d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path> </svg> <svg class="absolute z-10 opacity-0 dark:opacity-100" viewBox="0 0 24 24" height="21" width="21"> <path fill="#fff" d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path> </svg> </a> </label> </div> ${renderComponent($$result, "ThemeScript", $$ThemeScript, {})}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/ThemeSwitcher.astro", void 0);

new Proxy({"src":"/_astro/logo.BycYsjob.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/najim/Project/study/NaJimBlog/src/assets/image/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/najim/Project/study/NaJimBlog/src/assets/image/logo.png");
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://github.com/NaJimmm");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  let siteName = SITE_INFO?.SITE_NAME;
  let siteLogoUrl = SITE_INFO?.LOGO_IMAGE;
  const menu = [
    {
      id: 1,
      name: "\u9996\u9875",
      url: "/",
      target: "_self",
      position: "header",
      parent_id: null,
      sort_order: 1,
      children: []
    },
    {
      id: 2,
      name: "\u535A\u5BA2",
      url: "/blog",
      target: "_self",
      position: "header",
      parent_id: null,
      sort_order: 2,
      children: []
    },
    {
      id: 3,
      name: "\u52A8\u6001",
      url: "/notes",
      target: "_self",
      position: "header",
      parent_id: null,
      sort_order: 3,
      children: []
    },
    {
      id: 4,
      name: "\u5173\u4E8E",
      url: "/about",
      target: "_self",
      position: "header",
      parent_id: null,
      sort_order: 4,
      children: []
    }
    // {
    //   id: 5,
    //   name: "友链",
    //   url: "/links",
    //   target: "_self",
    //   position: "header",
    //   parent_id: null,
    //   sort_order: 5,
    //   children: [],
    // },
  ];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`container px-3 lg:px-8 pb-6 z-30 lg:mt-4 lg:rounded-full ${"sticky top-0"}`, "class")} data-astro-cid-dt2qj6rv${addAttribute(createTransitionScope($$result, "zg46k4mb"), "data-astro-transition-persist")}> ${renderComponent($$result, "LiquidGlass", $$LiquidGlassLess, { "enableGlassEffect": true, "containerType": "nav", "wrapperClass": "p-2.5 rounded-[35px] relative hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/50 !transition-colors duration-500 !delay-300", "textClass": "min-h-12 md:min-h-14 flex flex-wrap items-center justify-start", "effectClass": "rounded-[35px]", "tintClass": "rounded-[35px]", "shineClass": "rounded-[35px]", "animation": "fadeDown", "data-astro-cid-dt2qj6rv": true }, { "default": async ($$result2) => renderTemplate`  <div class="order-0 flex ml-4 items-center" data-astro-cid-dt2qj6rv> <a href="/" class="flex items-center" data-astro-cid-dt2qj6rv> ${renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": siteLogoUrl, "alt": siteName, "class": "w-8 h-8 mx-1 rounded-full", "width": 32, "height": 32, "eagerly-loaded": true, "data-astro-cid-dt2qj6rv": true })}`} ${renderTemplate`<span class="text-xl font-bold justify-center text-txt-p dark:text-darkmode-txt-p" data-astro-cid-dt2qj6rv> ${siteName} </span>`} </a> </div>  <input id="nav-toggle" type="checkbox" class="hidden" data-astro-cid-dt2qj6rv> <label for="nav-toggle" class="order-2 cursor-pointer flex items-center md:hidden text-txt-p dark:text-darkmode-txt-p lg:order-1" data-astro-cid-dt2qj6rv> <svg id="show-button" class="h-5 mx-2 fill-current block" viewBox="0 0 20 20" data-astro-cid-dt2qj6rv> <title>Menu Open</title> <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" data-astro-cid-dt2qj6rv></path> </svg> <svg id="hide-button" class="h-5 mx-2 fill-current hidden" viewBox="0 0 20 20" data-astro-cid-dt2qj6rv> <title>Menu Close</title> <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" data-astro-cid-dt2qj6rv></polygon> </svg> </label>  <ul id="nav-menu" class="bg-slate-100/90 md:bg-inherit rounded-lg text-center relative ml-8 order-3 hidden w-full p-4 md:order-1 md:flex md:w-auto md:space-x-1 md:p-0 lg:text-left lg:space-x-2" data-astro-cid-dt2qj6rv> ${menu.map((item) => renderTemplate`<li data-astro-cid-dt2qj6rv> <a${addAttribute(item.url, "href")}${addAttribute(item.target || "_self", "target")}${addAttribute(`flex items-center justify-center h-full my-4 md:my-0 border-none gap-2 px-1 font-bold text-txt-p transition-all duration-300 dark:text-darkmode-txt-p lg:px-2 rounded-xl relative z-10 hover:text-orange-600 dark:hover:text-orange-500 text-lg ${pathname === `${item.url}/` || pathname === item.url ? "text-orange-500" : ""}`, "class")} data-astro-cid-dt2qj6rv> ${renderComponent($$result2, "GlassButton", $$GlassButton, { "variant": "menu", "size": "menu", "open": pathname === `${item.url}/` || pathname === item.url, "className": "!text-orange-300  w-full", "data-astro-cid-dt2qj6rv": true }, { "default": async ($$result3) => renderTemplate`${item.icon && renderTemplate`<span class="text-sm" data-astro-cid-dt2qj6rv>${item.icon}</span>`}${item.name}` })} </a> </li>`)} </ul> <div class="order-1 ml-auto flex items-center md:order-2" data-astro-cid-dt2qj6rv> <a class="mr-4 inline-block border-border text-xl text-txt-p dark:border-darkmode-border dark:text-darkmode-txt-p" href="/search" aria-label="search" title="搜索" data-astro-cid-dt2qj6rv> ${renderComponent($$result2, "IoSearch", IoSearch, { "data-astro-cid-dt2qj6rv": true })} </a> <!-- 随机文章按钮 --> <button id="random-article-btn" class="mr-4 p-2 text-orange-400 hover:text-orange-500 dark:text-orange-500 dark:hover:text-orange-400 transition-colors group" title="随机文章" data-astro-cid-dt2qj6rv> <svg class="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-dt2qj6rv> <path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v3.5a.3.3 0 0 1-.3.3H16a.3.3 0 0 1-.212-.512l1.147-1.146A8 8 0 0 0 4.34 8.54a.6.6 0 0 1-1.159-.308A10 10 0 0 1 18.207 4.54l1.147-1.146A.3.3 0 0 1 20 4zm-16 16v-3.5a.3.3 0 0 1 .3-.3H8a.3.3 0 0 1 .212.512L7.207 18A8 8 0 0 0 19.66 15.46a.6.6 0 0 1 1.159.308A10 10 0 0 1 5.793 19.46l-1.147 1.146A.3.3 0 0 1 4 20z" data-astro-cid-dt2qj6rv></path> </svg> </button> ${renderComponent($$result2, "ThemeSwitcher", $$ThemeSwitcher, { "data-astro-cid-dt2qj6rv": true })} </div>   ` })}  ${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/components/base/Header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/Header.astro", "self");

const $$Astro$2 = createAstro("https://github.com/NaJimmm");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/najim/Project/study/NaJimBlog/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Background = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Dual Image Background -->`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/Background.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://github.com/NaJimmm");
const $$Tooltips = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tooltips;
  const props = { ...Astro2.props };
  return renderTemplate`${Object.entries(props).length > 0 && renderTemplate(_a || (_a = __template$1(['<script type="application/json" data-tooltips-options>', "<\/script>"])), unescapeHTML(JSON.stringify(props)))}${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/node_modules/astro-tooltips/Tooltips.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/najim/Project/study/NaJimBlog/node_modules/astro-tooltips/Tooltips.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _c;
const $$Astro = createAstro("https://github.com/NaJimmm");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image, noindex, canonical, keywords } = Astro2.props;
  let basicSettings = {};
  let seoSettings = {};
  let customSettings = {};
  const siteTitle = SITE_INFO.SITE_NAME;
  const siteSubTitle = SITE_INFO.SUBNAME;
  const siteImage = SITE_INFO.LOGO_IMAGE;
  const baseUrl = SITE_INFO.URL;
  const siteTagline = basicSettings?.site_tagline || "";
  const metaTitle = seoSettings?.seo_meta_title || "";
  const metaDescription = description || SITE_INFO.DESCRIPTION;
  const metaKeywords = keywords || SITE_INFO.KEY_WORDS;
  const customHeaderCode = customSettings?.custom_header_code || "";
  const customFooterCode = customSettings?.custom_footer_code || "";
  return renderTemplate(_c || (_c = __template(['<html lang="en" data-astro-cid-46beyuii> <head><!-- favicon --><link rel="logo-192x192" sizes="180x180" href="/favicon/logo-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="sitemap" href="/sitemap-index.xml"><!-- RSS Feed --><link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml"><meta name="theme-name" content="pages"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"', '><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><title>\n      ', "", "\n    </title>", '<meta name="description"', ">", '<meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><meta name="twitter:card" content="summary_large_image"><!-- DNS\u9884\u8FDE\u63A5\u548C\u9884\u53D6\u4F18\u5316 --><!-- <link rel="preconnect" href="https://fontsapi.zeoseven.com" crossorigin /> --><!-- <link rel="preconnect" href="https://fontsapi-storage.zeoseven.com" crossorigin> --><link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin><link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin><link rel="preconnect" href="https://www.googletagmanager.com" crossorigin><link rel="preconnect" href="https://hm.baidu.com" crossorigin><!-- \u9884\u53D6\u5173\u952E\u8D44\u6E90 --><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com"><!-- Katex --><link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css" integrity="sha512-fHwaWebuwA7NSF5Qg/af4UeDx9XqUpYpOGgubo3yWu+b2IQR4UeQwbb42Ti7gVAjNtVoI/I9TEoYeu9omwcC6g==" crossorigin="anonymous" referrerpolicy="no-referrer" onload="this.rel='stylesheet'">`, '<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css" integrity="sha512-fHwaWebuwA7NSF5Qg/af4UeDx9XqUpYpOGgubo3yWu+b2IQR4UeQwbb42Ti7gVAjNtVoI/I9TEoYeu9omwcC6g==" crossorigin="anonymous" referrerpolicy="no-referrer"></noscript><!-- \u9884\u52A0\u8F7D\u5173\u952E\u811A\u672C --><link rel="preload" as="script" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js" integrity="sha512-LQNxIMR5rXv7o+b1l8+N1EZMfhG7iFZ9HhnbJkTp4zjNr5Wvst75AqUeFDxeRUa7l5vEDyUiAip//r+EFLLCyA==" crossorigin="anonymous"><script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js" integrity="sha512-LQNxIMR5rXv7o+b1l8+N1EZMfhG7iFZ9HhnbJkTp4zjNr5Wvst75AqUeFDxeRUa7l5vEDyUiAip//r+EFLLCyA==" crossorigin="anonymous" referrerpolicy="no-referrer" defer><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js" integrity="sha512-iWiuBS5nt6r60fCz26Nd0Zqe0nbk1ZTIQbl3Kv7kYsX+yKMUFHzjaH2+AnM6vp2Xs+gNmaBAVWJjSmuPw76Efg==" crossorigin="anonymous" referrerpolicy="no-referrer" defer><\/script><script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js" integrity="sha384-dZ/hSVfTPHuzXyECOYCetAvMd0cgqWxN5Fh+mwo86PV4GdU9xgQ/MNzh/YM/lotR" crossorigin="anonymous" defer><\/script><!-- https://docs.astro.build/en/guides/view-transitions -->', "", "<!-- Google Analytics - \u4EC5\u5728\u751F\u4EA7\u73AF\u5883\u52A0\u8F7D -->", "<!-- \u767E\u5EA6\u7EDF\u8BA1 - \u4EC5\u5728\u751F\u4EA7\u73AF\u5883\u52A0\u8F7D -->", '<meta name="baidu-site-verification" content="codeva-RmOcCYpW8H"><!-- \u81EA\u5B9A\u4E49\u5934\u90E8\u4EE3\u7801 -->', "<!-- \u9875\u9762\u5207\u6362\u52A8\u753B\u6837\u5F0F --><!-- Supabase \u5DF2\u79FB\u9664\uFF1A\u4E0D\u518D\u52A0\u8F7D\u5168\u5C40\u5BA2\u6237\u7AEF -->", '</head> <body data-astro-cid-46beyuii> <!-- SVG \u6EE4\u955C\u5B9A\u4E49 - \u5FC5\u987B\u5728\u4F7F\u7528\u524D\u5B9A\u4E49 --> <svg style="position: absolute; width: 0; height: 0; pointer-events: none;" data-astro-cid-46beyuii> <defs data-astro-cid-46beyuii> <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" data-astro-cid-46beyuii> <feTurbulence type="fractalNoise" baseFrequency="0.001 0.004" numOctaves="1" seed="17" result="turbulence" data-astro-cid-46beyuii></feTurbulence> <!-- Liked Seeds: 5, 14, 17 --> <feComponentTransfer in="turbulence" result="mapped" data-astro-cid-46beyuii> <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" data-astro-cid-46beyuii></feFuncR> <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" data-astro-cid-46beyuii></feFuncG> <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" data-astro-cid-46beyuii></feFuncB> </feComponentTransfer> <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" data-astro-cid-46beyuii></feGaussianBlur> <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight" data-astro-cid-46beyuii> <fePointLight x="-200" y="-200" z="300" data-astro-cid-46beyuii></fePointLight> </feSpecularLighting> <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" data-astro-cid-46beyuii></feComposite> <feDisplacementMap in="SourceGraphic" in2="softMap" scale="100" xChannelSelector="R" yChannelSelector="G" data-astro-cid-46beyuii></feDisplacementMap> </filter> </defs> </svg> <!-- \u9875\u9762\u52A0\u8F7D\u52A8\u753B --> <div class="page-loading" data-astro-cid-46beyuii> <div class="loading-container" data-astro-cid-46beyuii> <div class="loading-spinner" data-astro-cid-46beyuii></div> <div class="loading-text" id="loading-text" data-astro-cid-46beyuii>\u52A0\u8F7D\u4E2D...</div> <div class="loading-progress" data-astro-cid-46beyuii></div> </div> </div> ', " ", ' <main id="main-content" class="flex-1 pb-16 md:pb-36" data-astro-cid-46beyuii> ', " </main> ", " <!-- <ObserverScript /> --> <!-- KaTeX \u521D\u59CB\u5316\u811A\u672C --> ", " <!-- \u9875\u9762\u8DF3\u8F6C\u7B49\u5F85\u52A8\u753B\u811A\u672C --> ", " <!-- \u81EA\u5B9A\u4E49\u5E95\u90E8\u4EE3\u7801 --> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title ? plainify(title) + " | " : "", siteTitle + " | " + siteSubTitle, canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`, addAttribute(plainify(description ? description : metaDescription), "content"), renderTemplate`<meta name="keywords"${addAttribute(metaKeywords, "content")}>`, addAttribute(`${plainify(metaTitle + " " + siteTagline)}`, "content"), addAttribute(plainify(description ? description : metaDescription), "content"), addAttribute(`${baseUrl}/${Astro2.url.pathname.replace("/", "")}`, "content"), addAttribute(`${baseUrl}${image ? image : siteImage}`, "content"), addAttribute(`${plainify(metaTitle + " " + siteTagline)}`, "content"), addAttribute(plainify(description ? description : metaDescription), "content"), addAttribute(`${baseUrl}${image ? image : siteImage}`, "content"), maybeRenderHead(), renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "swap", "data-astro-cid-46beyuii": true }), renderComponent($$result, "Tooltips", $$Tooltips, { "interactive": false, "delay": [100, 50], "data-astro-cid-46beyuii": true }), false, false, customHeaderCode && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(customHeaderCode)}` })}`, renderHead(), renderComponent($$result, "Background", $$Background, { "data-astro-cid-46beyuii": true }), renderComponent($$result, "Header", $$Header, { "data-astro-cid-46beyuii": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-46beyuii": true }), renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/components/base/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/components/base/BaseLayout.astro?astro&type=script&index=1&lang.ts"), customFooterCode && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(customFooterCode)}` })}`);
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$LiquidGlassLess as a, getEntries as b, $$GlassButton as c, getSiteStats as d, getEntriesBatch as e, getIndex as g };
