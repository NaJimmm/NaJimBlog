import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$LiquidGlassLess, g as getIndex } from '../chunks/BaseLayout_BgAMFR6a.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BHqLWxIi.mjs';
import { r as renderEntry } from '../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$EntryLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntryLayout;
  const { entry } = Astro2.props;
  const { title, description } = entry.data;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<div class="container pb-4 px-3 lg:px-8"> <div class="row justify-center markdown-content"> ${renderComponent($$result2, "LiquidGlassLess", $$LiquidGlassLess, { "heavy": true, "textClass": "p-3 lg:p-8" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/terms/EntryLayout.astro", void 0);

const $$Terms = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getIndex("terms");
  return renderTemplate`${renderComponent($$result, "EntryLayout", $$EntryLayout, { "entry": entry })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/terms.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
