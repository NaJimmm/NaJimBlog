import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { u as upperHumanize, s as slugify } from '../../chunks/textConverter_BRScpw42.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_BHqLWxIi.mjs';
import { $ as $$Button } from '../../chunks/Button_zdAVQOWV.mjs';
import { g as getCollection } from '../../chunks/_astro_content_D8aGqn2R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$TaxaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TaxaLayout;
  const { taxonomy, taxa, allTaxa } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": upperHumanize(taxonomy) }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": upperHumanize(taxonomy) })} <section class="section"> <div class="container px-3 lg:px-8 text-center"> <ul> ${taxa.map((taxon) => {
    const count = allTaxa.filter((c) => c === taxon).length;
    return renderTemplate`<li class="m-3 inline-block"> ${renderComponent($$result2, "Button", $$Button, { "label": `${upperHumanize(taxon)} (${count})`, "link": `/notes/${taxonomy}/${taxon}`, "hoverInvert": true })} </li>`;
  })} </ul> </div> </section> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/notes/TaxaLayout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const taxonomy = "tags";
  const allPosts = await getCollection("notes");
  let allTaxa = [];
  allPosts.forEach((post) => {
    if (post.data.tags && Array.isArray(post.data.tags)) {
      post.data.tags.forEach((tag) => {
        allTaxa.push(slugify(tag));
      });
    }
  });
  const taxa = [...new Set(allTaxa)].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "TaxaLayout", $$TaxaLayout, { "taxonomy": taxonomy, "taxa": taxa, "allTaxa": allTaxa })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/notes/tags/index.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/notes/tags/index.astro";
const $$url = "/notes/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
