import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BgAMFR6a.mjs';
import { u as upperHumanize } from './textConverter_BRScpw42.mjs';
import { $ as $$PageHeader } from './PageHeader_BHqLWxIi.mjs';
import { $ as $$Button } from './Button_zdAVQOWV.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$TaxaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TaxaLayout;
  const { taxonomy, taxonomyTitle, taxa, allTaxa } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": taxonomy }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": taxonomyTitle, "articleCount": taxa.length })} <section class="section"> <div class="container  px-3 lg:px-8  text-center"> <ul> ${taxa.map((taxon) => {
    const count = allTaxa.filter((c) => c === taxon).length;
    return renderTemplate`<li class="m-3 inline-block"> ${renderComponent($$result2, "Button", $$Button, { "label": `${upperHumanize(taxon)} (${count})`, "link": `/blog/${taxonomy}/${taxon}`, "hoverInvert": true })} </li>`;
  })} </ul> </div> </section> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/TaxaLayout.astro", void 0);

export { $$TaxaLayout as $ };
