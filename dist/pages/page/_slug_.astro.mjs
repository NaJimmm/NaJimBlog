import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as addAttribute } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$LiquidGlassLess } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { m as markdownify } from '../../chunks/textConverter_BRScpw42.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DuFEGDIh.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths() {
  const blogEntries = await getCollection("pages", ({ data }) => {
    return data.draft !== true;
  });
  const paths = blogEntries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description || entry.data.title, "image": entry.data.image?.src }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=""> <div class="container pb-4 px-3 lg:px-8"> <div class="row justify-center"> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true }, { "default": async ($$result3) => renderTemplate` <div class="rounded-lg p-8 intersect:animate-fadeUp opacity-0 intersect-no-queue"> <!-- 特色图片 --> ${entry.data.image && renderTemplate`<div class="mb-8 text-center"> ${renderComponent($$result3, "Image", $$Image, { "class": "mx-auto rounded-lg shadow-lg max-w-full h-auto", "src": entry.data.image, "alt": entry.data.title, "width": 600, "height": 600, "loading": "eager" })} </div>`} <!-- 页面标题 --> <header class="mb-8 text-center"> <h1 class="h2 mb-4">${unescapeHTML(markdownify(entry.data.title))}</h1> ${entry.data.description && renderTemplate`<p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"> ${entry.data.description} </p>`} <!-- 页面元信息 --> <div class="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400"> ${entry.data.createdAt && renderTemplate`<time${addAttribute(entry.data.createdAt.toISOString(), "datetime")}>
创建于 ${entry.data.createdAt.toLocaleDateString("zh-CN")} </time>`} ${entry.data.updatedAt && renderTemplate`<time${addAttribute(entry.data.updatedAt.toISOString(), "datetime")}>
更新于 ${entry.data.updatedAt.toLocaleDateString("zh-CN")} </time>`} </div> </header> <!-- 页面内容 --> <article class="prose prose-lg dark:prose-invert max-w-none"> <div class="markdown-content"> ${renderComponent($$result3, "Content", Content, {})} </div> </article> </div> ` })} </div> </div> </section> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/page/[slug].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/page/[slug].astro";
const $$url = "/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
