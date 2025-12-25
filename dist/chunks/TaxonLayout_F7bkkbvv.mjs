import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BgAMFR6a.mjs';
import { $ as $$PageHeader } from './PageHeader_BHqLWxIi.mjs';
import { u as upperHumanize } from './textConverter_BRScpw42.mjs';
import { $ as $$BlogListCard } from './BlogListCard_Cmhot4Lg.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$TaxonLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TaxonLayout;
  const { taxon, entries } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": upperHumanize(taxon) }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": taxon, "articleCount": entries.length })} <section class=""> <div class="pb-0"> <div class="container px-3 lg:px-8"> <div class="row"> ${entries.map((entry) => renderTemplate`<div class=""> ${renderComponent($$result2, "BlogListCard", $$BlogListCard, { "entry": entry })} </div>`)} </div> </div> </div> </section> </div> ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/TaxonLayout.astro", void 0);

export { $$TaxonLayout as $ };
