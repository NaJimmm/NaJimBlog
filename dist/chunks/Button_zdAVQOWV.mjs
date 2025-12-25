import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { c as $$GlassButton } from './BaseLayout_BgAMFR6a.mjs';

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    label,
    link,
    newtab = false,
    type = "primary",
    color,
    hoverInvert = false,
    glass = true
  } = Astro2.props;
  const variantMap = {
    primary: "info",
    secondary: "secondary"
  };
  const variant = variantMap[type] || "primary";
  const size = type === "primary" ? "md" : "sm";
  return renderTemplate`${glass ? renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(newtab ? "_blank" : "", "target")} class="no-underline inline-block transform hover:scale-102 transition-transform duration-300">${renderComponent($$result, "GlassButton", $$GlassButton, { "variant": variant, "size": size, "class": "font-bold" }, { "default": ($$result2) => renderTemplate`${label}` })}</a>` : renderTemplate`<a${addAttribute(link, "href")}${addAttribute(newtab ? "_blank" : "", "target")}${addAttribute(`no-underline inline-block group intersect:animate-fadeLeft opacity-0 ${hoverInvert ? "hover:opacity-100" : ""}`, "class")}><div${addAttribute(`
    ${color ? color : "bg-bg-t dark:bg-darkmode-bg-t"}
    ${type == "primary" ? "p-0.5 rounded-md" : "p-[1.5px] rounded-sm"}`, "class")}><div${addAttribute(`bg-bg-p dark:bg-darkmode-bg-p
      ${type == "primary" ? "px-4 py-2 rounded-md" : "px-2 py-0.5 rounded-sm"}
      ${hoverInvert ? "group-hover:bg-opacity-0" : ""}`, "class")}><div${addAttribute(`text-transparent bg-clip-text
        ${color ? color : "bg-bg-t dark:bg-darkmode-bg-t"}
        ${type == "primary" ? "font-bold" : ""}
        ${hoverInvert ? "group-hover:text-txt-p dark:group-hover:text-darkmode-txt-p" : ""}`, "class")}>${label}</div></div></div></a>`}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/common/Button.astro", void 0);

export { $$Button as $ };
