import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { $ as $$RecommendedReadCard$1 } from '../../chunks/RecommendedReadCard_BxzK4JI4.mjs';
import { g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

const $$RecommendedReadCard = createComponent(async ($$result, $$props, $$slots) => {
  const blogEntries = await getCollection("blog");
  const sampleEntries = blogEntries.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u63A8\u8350\u9605\u8BFB\u5361\u7247\u7EC4\u4EF6\u6F14\u793A", "data-astro-cid-dxgodyjp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8" data-astro-cid-dxgodyjp> <h1 class="text-3xl font-bold mb-8 text-center" data-astro-cid-dxgodyjp>推荐阅读卡片组件演示</h1> <div class="max-w-4xl mx-auto space-y-8" data-astro-cid-dxgodyjp> <!-- 标准模式 --> <section data-astro-cid-dxgodyjp> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-dxgodyjp>标准模式</h2> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" data-astro-cid-dxgodyjp> <div class="space-y-2" data-astro-cid-dxgodyjp> ${sampleEntries.map((entry) => renderTemplate`${renderComponent($$result2, "RecommendedReadCardComponent", $$RecommendedReadCard$1, { "entry": entry, "showImage": true, "showReadingTime": true, "compact": false, "data-astro-cid-dxgodyjp": true })}`)} </div> </div> </section> <!-- 紧凑模式 --> <section data-astro-cid-dxgodyjp> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-dxgodyjp>紧凑模式</h2> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" data-astro-cid-dxgodyjp> <div class="space-y-1" data-astro-cid-dxgodyjp> ${sampleEntries.map((entry) => renderTemplate`${renderComponent($$result2, "RecommendedReadCardComponent", $$RecommendedReadCard$1, { "entry": entry, "showImage": true, "showReadingTime": true, "compact": true, "data-astro-cid-dxgodyjp": true })}`)} </div> </div> </section> <!-- 无图片模式 --> <section data-astro-cid-dxgodyjp> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-dxgodyjp>无图片模式</h2> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" data-astro-cid-dxgodyjp> <div class="space-y-2" data-astro-cid-dxgodyjp> ${sampleEntries.map((entry) => renderTemplate`${renderComponent($$result2, "RecommendedReadCardComponent", $$RecommendedReadCard$1, { "entry": entry, "showImage": false, "showReadingTime": true, "compact": false, "data-astro-cid-dxgodyjp": true })}`)} </div> </div> </section> <!-- 仅显示日期模式 --> <section data-astro-cid-dxgodyjp> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-dxgodyjp>仅显示日期模式</h2> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" data-astro-cid-dxgodyjp> <div class="space-y-2" data-astro-cid-dxgodyjp> ${sampleEntries.map((entry) => renderTemplate`${renderComponent($$result2, "RecommendedReadCardComponent", $$RecommendedReadCard$1, { "entry": entry, "showImage": true, "showReadingTime": false, "compact": false, "data-astro-cid-dxgodyjp": true })}`)} </div> </div> </section> <!-- 侧边栏样式演示 --> <section data-astro-cid-dxgodyjp> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-dxgodyjp>侧边栏样式演示</h2> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-dxgodyjp> <!-- 主内容区域 --> <div class="lg:col-span-2" data-astro-cid-dxgodyjp> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" data-astro-cid-dxgodyjp> <h3 class="text-xl font-semibold mb-4" data-astro-cid-dxgodyjp>主要内容区域</h3> <p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-astro-cid-dxgodyjp>
这里是主要内容区域的演示。推荐阅读卡片通常会放在侧边栏中，
                为用户提供相关文章的快速访问入口。卡片设计简洁，
                包含文章标题、发布日期和预估阅读时间等关键信息。
</p> </div> </div> <!-- 侧边栏 --> <div class="lg:col-span-1" data-astro-cid-dxgodyjp> <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm" data-astro-cid-dxgodyjp> <h3 class="text-lg font-semibold mb-4" data-astro-cid-dxgodyjp>推荐阅读</h3> <div class="space-y-1" data-astro-cid-dxgodyjp> ${sampleEntries.slice(0, 3).map((entry) => renderTemplate`${renderComponent($$result2, "RecommendedReadCardComponent", $$RecommendedReadCard$1, { "entry": entry, "showImage": true, "showReadingTime": true, "compact": true, "data-astro-cid-dxgodyjp": true })}`)} </div> </div> </div> </div> </section> </div> </div> ` })} `;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/demo/recommended-read-card.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/demo/recommended-read-card.astro";
const $$url = "/demo/recommended-read-card";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RecommendedReadCard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
