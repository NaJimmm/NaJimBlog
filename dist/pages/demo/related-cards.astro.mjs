import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { f as formatDate } from '../../chunks/formatDate_D4-qXOVz.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DuFEGDIh.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1VeAuF } from '../../chunks/picture_QvSxCHZe.mjs';
import { slug } from 'github-slugger';
import { g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$RelatedCardCompact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedCardCompact;
  const {
    entry,
    width = "w-full",
    height = "h-48",
    imageAspect = "aspect-[16/9]",
    showDescription = false
  } = Astro2.props;
  const {
    title,
    description,
    // autodescription,
    createdAt,
    categories,
    image,
    imageAlt
  } = entry.data;
  const displayImage = image && typeof image === "object" && "src" in image ? image : __ASTRO_IMAGE_IMPORT_Z1VeAuF;
  const displayImageAlt = imageAlt || `${title} - \u9ED8\u8BA4\u56FE\u7247`;
  const entryDate = createdAt ? formatDate(createdAt) : null;
  const entryDescription = description;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${width} ${height} relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group`, "class")}> <a${addAttribute(`/blog/${slug(entry.data.title)}`, "href")} class="block w-full h-full relative"> <!-- 背景图片 --> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105", "src": displayImage, "alt": displayImageAlt, "width": 400, "height": 300, "loading": "lazy", "format": "webp", "quality": 75, "decoding": "async" })} <!-- 渐变遮罩层 --> <div class="absolute inset-0 bg-gradient-to-t from-black/60  to-white/10 group-hover:from-black/70 group-hover:to-white/0 transition-all ease-out duration-400"></div> <!-- 文字内容叠加层 --> <div class="absolute inset-0 p-3 flex flex-col justify-end text-white"> <!-- 分类标签 --> <!-- {
        categories && categories.length > 0 && (
          <div class="mb-2">
            <span class="inline-block px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded backdrop-blur-sm">
              {upperHumanize(categories[0])}
            </span>
          </div>
        )
      } --> <!-- 文章标题 --> <h5 class="text-md text-white font-normal line-clamp-2 leading-tight mb-1 group-hover:font-bold transition-colors duration-200 text-ellipsis whitespace-nowrap overflow-hidden"> ${title} </h5> <!-- 发布日期 --> ${entryDate && renderTemplate`<div class="text-xs text-white/80 mb-1">${entryDate}</div>`} <!-- 简短描述 --> ${showDescription && entryDescription && renderTemplate`<p class="text-xs text-white/90 line-clamp-2 leading-relaxed"> ${entryDescription} </p>`} </div> <!-- 悬停效果指示器 --> <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </div> </a> </div>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/RelatedCardCompact.astro", void 0);

const $$RelatedCards = createComponent(async ($$result, $$props, $$slots) => {
  const blogEntries = await getCollection("blog");
  const sampleEntries = blogEntries.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u76F8\u5173\u6587\u7AE0\u5361\u7247\u7EC4\u4EF6\u6F14\u793A" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8 text-center">相关文章卡片组件演示</h1> <!-- 精简卡片展示 --> <section class="mb-12"> <h2 class="text-2xl font-semibold mb-6">新的 RelatedCardCompact 组件</h2> <!-- 默认样式 --> <h3 class="text-xl font-medium mb-4">默认样式（适合相关文章推荐）</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"> ${sampleEntries.slice(0, 4).map((entry) => renderTemplate`${renderComponent($$result2, "RelatedCardCompact", $$RelatedCardCompact, { "entry": entry })}`)} </div> <!-- 自定义宽度 --> <h3 class="text-xl font-medium mb-4">自定义宽度示例</h3> <div class="flex flex-wrap gap-4 mb-8"> ${renderComponent($$result2, "RelatedCardCompact", $$RelatedCardCompact, { "entry": sampleEntries[0], "width": "w-64", "height": "h-80", "imageAspect": "aspect-square" })} ${renderComponent($$result2, "RelatedCardCompact", $$RelatedCardCompact, { "entry": sampleEntries[1], "width": "w-80", "height": "h-72", "imageAspect": "aspect-[16/9]" })} ${renderComponent($$result2, "RelatedCardCompact", $$RelatedCardCompact, { "entry": sampleEntries[2], "width": "w-72", "height": "h-96", "imageAspect": "aspect-[3/4]" })} </div> <!-- 横向布局示例 --> <h3 class="text-xl font-medium mb-4">文章底部推荐布局示例</h3> <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"> <h4 class="text-lg font-semibold mb-4">相关文章推荐</h4> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${sampleEntries.slice(0, 3).map((entry) => renderTemplate`${renderComponent($$result2, "RelatedCardCompact", $$RelatedCardCompact, { "entry": entry, "height": "h-64", "imageAspect": "aspect-[4/3]" })}`)} </div> </div> </section> <!-- 使用说明 --> <section class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"> <h2 class="text-2xl font-semibold mb-4">使用说明</h2> <div class="prose dark:prose-invert max-w-none"> <h3>RelatedCardCompact 组件特点：</h3> <ul> <li><strong>精简设计</strong>：去除了冗余元素，保留核心信息</li> <li><strong>可定制尺寸</strong>：支持自定义宽度、高度和图片宽高比</li> <li><strong>响应式布局</strong>：适配不同屏幕尺寸</li> <li><strong>优化性能</strong>：更小的图片尺寸和简化的样式</li> </ul> <h3>Props 参数：</h3> <ul> <li><code>entry</code>: BlogEntry - 必需，文章数据</li> <li> <code>width</code>: string - 可选，自定义宽度类名（默认: "w-full"）
</li> <li> <code>height</code>: string - 可选，自定义高度类名（默认: "h-auto"）
</li> <li> <code>imageAspect</code>: string - 可选，图片宽高比类名（默认:
            "aspect-[4/3]"）
</li> </ul> <h3>使用示例：</h3> <pre><code>&lt;RelatedCardCompact 
  entry=${sampleEntries}
  width="w-64" 
  height="h-80"
  imageAspect="aspect-square"
/&gt;</code></pre> </div> </section> </main> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/demo/related-cards.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/demo/related-cards.astro";
const $$url = "/demo/related-cards";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RelatedCards,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
