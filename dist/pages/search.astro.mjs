import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, e as getEntriesBatch } from '../chunks/BaseLayout_BgAMFR6a.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { p as plainify } from '../chunks/textConverter_BRScpw42.mjs';
import Fuse from 'fuse.js';
export { renderers } from '../renderers.mjs';

const descriptionLength = 100;
const getPath = (entry) => {
  return `${entry.collection}/${entry.id.replace("-index", "")}`;
};
const SearchPage = ({ searchList }) => {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.description", "id", "collection", "body"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5
  });
  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
      }
    });
  }, []);
  useEffect(() => {
    let inputResult = inputVal.length >= 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);
    if (inputVal.length >= 2) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
      setSearchResults([]);
    }
  }, [inputVal]);
  return /* @__PURE__ */ jsx("section", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "container px-3 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "row mb-10 justify-center", children: /* @__PURE__ */ jsx("div", { className: "col-10 lg:col-8 px-0", children: /* @__PURE__ */ jsx("div", { className: "flex flex-nowrap", children: /* @__PURE__ */ jsx(
      "input",
      {
        className: "w-full glass rounded-[35px] p-6 text-txt-p placeholder:text-txt-light dark:placeholder:text-darkmode-txt-light focus:border-darkmode-border focus:ring-transparent dark:text-darkmode-txt-light intersect:animate-fadeDown opacity-0 intersect-no-queue",
        placeholder: "搜点什么",
        type: "search",
        name: "search",
        value: inputVal,
        onChange: handleChange,
        autoComplete: "off",
        autoFocus: true,
        ref: inputRef
      }
    ) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: searchResults?.length < 1 ? /* @__PURE__ */ jsx("div", { className: "col-10 lg:col-8 mx-auto p-2 text-center glass rounded-[35px] intersect:animate-fadeUp opacity-0", children: /* @__PURE__ */ jsx("p", { id: "no-result", children: inputVal.length < 1 ? "“嗖”的一下，就搜出来了！" : inputVal.length < 2 ? "请输入2个以上字符" : "我没找到呢，试试其他关键词" }) }) : searchResults?.map(({ item }, index) => /* @__PURE__ */ jsx("div", { className: "py-2 px-0", children: /* @__PURE__ */ jsxs("div", { className: "h-full glass col-10 lg:col-8 mx-auto rounded-[35px] p-6 intersect:animate-fade opacity-0", children: [
      /* @__PURE__ */ jsx("h4", { className: "mb-2", children: /* @__PURE__ */ jsx("a", { href: "/" + getPath(item), children: item.data.title }) }),
      item.data.description && /* @__PURE__ */ jsx("p", { className: "", children: item.data.description }),
      !item.data.description && item.body && /* @__PURE__ */ jsx("p", { className: "", children: plainify(item.body.slice(0, descriptionLength)) }),
      item.data.createdAt && /* @__PURE__ */ jsx("p", { className: "text-txt-light dark:text-darkmode-txt-light", children: new Date(item.data.createdAt).toLocaleDateString() })
    ] }) }, `search-${index}`)) })
  ] }) });
};

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$EntryLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntryLayout;
  const { searchList } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Search", "description": "Search for content on this site" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", SearchPage, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@components/search/Search", "client:component-export": "default" })} ` })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/search/EntryLayout.astro", void 0);

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const searchableCollections = [
    "about",
    "pages",
    "blog",
    "notes"
    //   "poetry",
    //   "portfolio",
    //   "recipes",
    //   "terms",
  ];
  const searchList = await getEntriesBatch(
    searchableCollections,
    void 0,
    false
  );
  console.log("\u51C6\u5907\u641C\u7D22\u5217\u8868", searchList);
  return renderTemplate`${renderComponent($$result, "EntryLayout", $$EntryLayout, { "searchList": searchList })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/search.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
