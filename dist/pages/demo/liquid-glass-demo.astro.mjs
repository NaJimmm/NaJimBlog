import { a as createComponent, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$LiquidGlassLess } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const $$LiquidGlassDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Liquid Glass \u6548\u679C\u6F14\u793A", "description": "\u5C55\u793ALiquidGlassLess\u7EC4\u4EF6\u7684\u5404\u79CD\u73BB\u7483\u8D28\u611F\u6548\u679C", "data-astro-cid-e6rtvy42": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="liquid-glass-demo-container" data-astro-cid-e6rtvy42> <!-- 动态背景 --> <div class="animated-background" data-astro-cid-e6rtvy42></div> <!-- 主要内容区域 --> <div class="demo-content" data-astro-cid-e6rtvy42> <h3 class="demo-title" data-astro-cid-e6rtvy42>Liquid Glass 效果演示</h3> <!-- 效果变体展示 --> <div class="max-w-[1200px]" data-astro-cid-e6rtvy42> <div class="flex flex-row justify-between gap-10" data-astro-cid-e6rtvy42> <!-- 轻量效果 --> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "containerClass": " w-full", "wrapperClass": "button h-24", "data-astro-cid-e6rtvy42": true }, { "default": ($$result3) => renderTemplate` <div class="variant-content" data-astro-cid-e6rtvy42> <h3 data-astro-cid-e6rtvy42>通透效果</h3> </div> ` })} <!-- 重量效果 --> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "containerClass": " w-full", "wrapperClass": "button h-24", "heavy": true, "data-astro-cid-e6rtvy42": true }, { "default": ($$result3) => renderTemplate` <div class="variant-content" data-astro-cid-e6rtvy42> <h3 data-astro-cid-e6rtvy42>厚重效果</h3> </div> ` })} <!-- 扁平化降级 --> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "containerClass": " w-full", "wrapperClass": "button h-24", "data-astro-cid-e6rtvy42": true }, { "default": ($$result3) => renderTemplate` <div class="variant-content" data-astro-cid-e6rtvy42> <h3 data-astro-cid-e6rtvy42>扁平化降级</h3> </div> ` })} </div> </div> </div> </div> ` })}  ${renderScript($$result, "/Users/najim/Project/study/NaJimBlog/src/pages/demo/liquid-glass-demo.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/demo/liquid-glass-demo.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/demo/liquid-glass-demo.astro";
const $$url = "/demo/liquid-glass-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LiquidGlassDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
