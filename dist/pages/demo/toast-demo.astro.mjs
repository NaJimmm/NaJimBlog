import { c as createAstro, a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, c as $$GlassButton } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$ToastDemo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToastDemo;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u63D0\u793A\u7EC4\u4EF6\u6F14\u793A", "description": "\u5C55\u793A\u5404\u79CD\u7C7B\u578B\u7684\u63D0\u793A\u6D88\u606F\u6548\u679C", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 max-w-4xl" data-astro-cid-lcqdza3t> <h1 class="text-3xl font-bold mb-8 text-center" data-astro-cid-lcqdza3t>提示组件演示</h1> <!-- 基本用法 --> <section class="mb-12" data-astro-cid-lcqdza3t> <h2 class="text-2xl font-semibold mb-6" data-astro-cid-lcqdza3t>基本用法</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-lcqdza3t> <button id="success-btn" class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors" data-astro-cid-lcqdza3t>
成功提示
</button> <button id="info-btn" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" data-astro-cid-lcqdza3t>
信息提示
</button> <button id="warning-btn" class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors" data-astro-cid-lcqdza3t>
警告提示
</button> <button id="error-btn" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors" data-astro-cid-lcqdza3t>
错误提示
</button> </div> </section> <!-- 位置演示 --> <section class="mb-12" data-astro-cid-lcqdza3t> <h2 class="text-2xl font-semibold mb-6" data-astro-cid-lcqdza3t>位置演示</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-astro-cid-lcqdza3t> ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "top-left-btn", "variant": "info", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
左上角
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "top-center-btn", "variant": "info", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
顶部居中
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "top-right-btn", "variant": "info", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
右上角
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "bottom-left-btn", "variant": "secondary", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
左下角
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "bottom-center-btn", "variant": "secondary", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
底部居中
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "bottom-right-btn", "variant": "secondary", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
右下角
` })} </div> </section> <!-- 高级用法 --> <section class="mb-12" data-astro-cid-lcqdza3t> <h2 class="text-2xl font-semibold mb-6" data-astro-cid-lcqdza3t>高级用法</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-astro-cid-lcqdza3t> ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "no-icon-btn", "variant": "secondary", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
无图标提示
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "no-close-btn", "variant": "secondary", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
不可关闭
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "persistent-btn", "variant": "secondary", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
持久显示
` })} </div> </section> <!-- 批量操作 --> <section class="mb-12" data-astro-cid-lcqdza3t> <h2 class="text-2xl font-semibold mb-6" data-astro-cid-lcqdza3t>批量操作</h2> <div class="flex gap-4" data-astro-cid-lcqdza3t> ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "multiple-btn", "variant": "success", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
显示多个提示
` })} ${renderComponent($$result2, "GlassButton", $$GlassButton, { "id": "clear-all-btn", "variant": "danger", "size": "md", "data-astro-cid-lcqdza3t": true }, { "default": async ($$result3) => renderTemplate`
清除所有提示
` })} </div> </section> <!-- 使用说明 --> <section class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" data-astro-cid-lcqdza3t> <h2 class="text-2xl font-semibold mb-4" data-astro-cid-lcqdza3t>使用说明</h2> <div class="prose dark:prose-invert max-w-none" data-astro-cid-lcqdza3t> <h3 data-astro-cid-lcqdza3t>JavaScript 调用方式</h3> <pre class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto" data-astro-cid-lcqdza3t><code data-astro-cid-lcqdza3t>${`// \u5BFC\u5165\u63D0\u793A\u5DE5\u5177
import { showSuccess, showInfo, showWarning, showError, showToast } from '@lib/toastUtils';

// \u5FEB\u6377\u65B9\u6CD5
showSuccess('\u64CD\u4F5C\u6210\u529F\uFF01');
showInfo('\u8FD9\u662F\u4E00\u6761\u4FE1\u606F');
showWarning('\u8BF7\u6CE8\u610F\uFF01');
showError('\u64CD\u4F5C\u5931\u8D25');

// \u5B8C\u6574\u914D\u7F6E
showToast({
  title: '\u81EA\u5B9A\u4E49\u6807\u9898',
  content: '\u81EA\u5B9A\u4E49\u5185\u5BB9',
  type: 'success',
  position: 'top-right',
  duration: 3000,
  showIcon: true,
  closable: true
});`}</code></pre> <h3 data-astro-cid-lcqdza3t>Astro 组件使用</h3> <pre class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto" data-astro-cid-lcqdza3t><code data-astro-cid-lcqdza3t>${`---
import Toast from '../../components/common/Toast.astro';
---

<Toast 
  title="\u63D0\u793A\u6807\u9898"
  content="\u63D0\u793A\u5185\u5BB9"
  type="success"
  position="top-right"
  duration={3000}
/>`}</code></pre> </div> </section> </div> ` })} ${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/pages/demo/toast-demo.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/demo/toast-demo.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/demo/toast-demo.astro";
const $$url = "/demo/toast-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ToastDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
