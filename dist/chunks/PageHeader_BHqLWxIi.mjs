import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, D as spreadAttributes, r as renderComponent } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { l as lowerHumanize, u as upperHumanize } from './textConverter_BRScpw42.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://github.com/NaJimmm");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { className } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": Astro2.url.pathname === "/" ? "page" : void 0
    }
  ];
  paths.forEach((label, i) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    const decodedLabel = decodeURIComponent(label);
    label !== "page" && parts.push({
      label: lowerHumanize(decodedLabel.replace(/[-_]/g, " ")) || "",
      href,
      "aria-label": Astro2.url.pathname === href ? "page" : void 0
    });
  });
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(className, "class")}> <ol class="inline-flex" role="list"> ${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="mx-1 capitalize" role="listitem"> ${index > 0 && renderTemplate`<span class="inlin-block mr-1">/</span>`} ${index !== parts.length - 1 ? renderTemplate`<a class="text-txt-p dark:text-darkmode-txt-p"${spreadAttributes(attrs)}> ${label} </a>` : renderTemplate`<span class="text-txt-light dark:text-darkmode-txt-light">${label}</span>`} </li>`)} </ol> </nav>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/Breadcrumbs.astro", void 0);

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title = "", description, articleCount } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container"> <div class="flex flex-row items-center justify-between pb-4 intersect:animate-fadeDown"> <h1>${`${upperHumanize(title)}${articleCount ? `(${articleCount})` : ""}`}</h1> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "pl-4" })} </div> </section>`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/PageHeader.astro", void 0);

export { $$PageHeader as $ };
