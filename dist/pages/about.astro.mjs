import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$LiquidGlassLess, g as getIndex } from '../chunks/BaseLayout_BgAMFR6a.mjs';
import { m as markdownify } from '../chunks/textConverter_BRScpw42.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DuFEGDIh.mjs';
import { r as renderEntry } from '../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$EntryLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntryLayout;
  const { entry } = Astro2.props;
  const { title, description, image, imageAlt } = entry.data;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": image?.src }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class=""> <div class="container pb-4 px-3 lg:px-8"> <div class="row justify-center markdown-content"> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "textClass": "p-3 lg:p-8" }, { "default": async ($$result3) => renderTemplate`  ${image && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "mx-auto mb-6 rounded-lg", "src": image, "alt": imageAlt, "width": 300, "height": 300, "loading": "lazy" })}`}<h1 class="h1 mb-6 text-center">${unescapeHTML(markdownify(title))}</h1> ${renderComponent($$result3, "Content", Content, {})}  ` })} </div> </div> </section> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/about/EntryLayout.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getIndex("about");
  return renderTemplate`${renderComponent($$result, "EntryLayout", $$EntryLayout, { "entry": entry })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/about.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
