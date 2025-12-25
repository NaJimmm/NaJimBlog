import { c as createAstro, a as createComponent, b as renderTemplate, r as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_D8aGqn2R.mjs';
import { $ as $$BaseLayout, a as $$LiquidGlassLess } from '../../chunks/BaseLayout_BgAMFR6a.mjs';
import { f as formatDate } from '../../chunks/formatDate_D4-qXOVz.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DuFEGDIh.mjs';
import { _ as __ASTRO_IMAGE_IMPORT_Z1VeAuF } from '../../chunks/picture_QvSxCHZe.mjs';
import { s as slugify } from '../../chunks/textConverter_BRScpw42.mjs';
import { $ as $$Comment } from '../../chunks/Comment_DdkkFq_2.mjs';
import { FaRegCalendarAlt, FaSmile, FaMapMarkerAlt, FaRegComment, FaRegBookmark, FaShare } from 'react-icons/fa';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://github.com/NaJimmm");
async function getStaticPaths() {
  const notesEntries = await getCollection("notes");
  return notesEntries.map((entry) => ({
    params: { slug: slugify(entry.data.title) },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { slug } = Astro2.params;
  const {
    title,
    description,
    createdAt,
    tags,
    image,
    imageAlt,
    images,
    mood,
    location
  } = entry.data;
  const displayImages = images && images.length > 0 ? images : image ? [{ src: image, alt: imageAlt || `${title} - \u9ED8\u8BA4\u56FE\u7247` }] : [];
  const entryDate = createdAt ? formatDate(createdAt) : null;
  const allNotes = await getCollection("notes");
  const relatedNotes = allNotes.filter(
    (note) => slugify(note.data.title) !== slug && note.data.tags && tags && note.data.tags.some((tag) => tags.includes(tag))
  ).slice(0, 5);
  const latestNotes = allNotes.filter((note) => slugify(note.data.title) !== slug).sort((a, b) => {
    const dateA = a.data.createdAt ? new Date(a.data.createdAt).getTime() : 0;
    const dateB = b.data.createdAt ? new Date(b.data.createdAt).getTime() : 0;
    return dateB - dateA;
  }).slice(0, 3);
  const { Content } = await renderEntry(entry);
  return renderTemplate(_a || (_a = __template(["", `  <!-- \u56FE\u7247\u9884\u89C8\u6A21\u6001\u6846 --> <div id="imageModal" class="image-modal" data-astro-cid-fezs4xpw> <div class="modal-content" data-astro-cid-fezs4xpw> <button class="modal-close" id="closeModal" data-astro-cid-fezs4xpw>&times;</button> <button class="modal-nav modal-prev" id="prevModal" data-astro-cid-fezs4xpw>&lt;</button> <img id="modalImage" class="modal-image" src="" alt="" data-astro-cid-fezs4xpw> <button class="modal-nav modal-next" id="nextModal" data-astro-cid-fezs4xpw>&gt;</button> </div> </div> <script type="module">
  let currentImageIndex = 0;
  let modalImages = [];

  // \u521D\u59CB\u5316\u56FE\u7247\u6570\u636E
  function initImageModal() {
    const imageElements = document.querySelectorAll("[data-image-index]");
    modalImages = Array.from(imageElements).map((img) => {
      const imgElement = img;
      return {
        src: imgElement.src,
        alt: imgElement.alt,
      };
    });

    // \u7ED1\u5B9A\u56FE\u7247\u70B9\u51FB\u4E8B\u4EF6
    imageElements.forEach((img, index) => {
      img.addEventListener("click", () => openImageModal(index));
    });
  }

  // \u6253\u5F00\u56FE\u7247\u6A21\u6001\u6846
  function openImageModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    if (modal && modalImage && modalImages[index]) {
      modalImage.src = modalImages[index].src;
      modalImage.alt = modalImages[index].alt;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  // \u5173\u95ED\u56FE\u7247\u6A21\u6001\u6846
  function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  // \u4E0A\u4E00\u5F20\u56FE\u7247
  function prevImage() {
    if (currentImageIndex > 0) {
      openImageModal(currentImageIndex - 1);
    }
  }

  // \u4E0B\u4E00\u5F20\u56FE\u7247
  function nextImage() {
    if (currentImageIndex < modalImages.length - 1) {
      openImageModal(currentImageIndex + 1);
    }
  }

  // \u952E\u76D8\u4E8B\u4EF6
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("imageModal");
    if (modal && modal.classList.contains("active")) {
      switch (e.key) {
        case "Escape":
          closeImageModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    }
  });

  // \u70B9\u51FB\u6A21\u6001\u6846\u80CC\u666F\u5173\u95ED
  const imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.id === "imageModal") {
        closeImageModal();
      }
    });
  }

  const closeModal = document.getElementById("closeModal");
  if (closeModal) {
    closeModal.addEventListener("click", closeImageModal);
  }

  const prevModal = document.getElementById("prevModal");
  if (prevModal) {
    prevModal.addEventListener("click", prevImage);
  }

  const nextModal = document.getElementById("nextModal");
  if (nextModal) {
    nextModal.addEventListener("click", nextImage);
  }

  // \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\u521D\u59CB\u5316
  document.addEventListener("DOMContentLoaded", initImageModal);

  // \u652F\u6301 Astro \u7684\u9875\u9762\u5207\u6362\u4E8B\u4EF6
  document.addEventListener("astro:page-load", initImageModal);

  // Supabase \u5DF2\u79FB\u9664\uFF1A\u6539\u7528\u672C\u5730\u5B58\u50A8\uFF08localStorage\uFF09

  // \u4E92\u52A8\u6309\u94AE\u529F\u80FD\u5B9E\u73B0\uFF08\u5DF2\u79FB\u9664\u70B9\u8D5E\uFF09
  let isBookmarked = false;
  let noteSlug = window.location.pathname.split("/").pop() || "";
  noteSlug = decodeURI(noteSlug);

  // \u4ECElocalStorage\u83B7\u53D6\u4E92\u52A8\u72B6\u6001\uFF08\u672C\u5730\u6A21\u5F0F\uFF09
  async function loadInteractionState() {
    const noteId = window.location.pathname;
    const savedBookmarked = localStorage.getItem(\`bookmarked_\${noteId}\`);

    isBookmarked = savedBookmarked === "true";

    updateBookmarkButton();
  }

  // \u4FDD\u5B58\u6536\u85CF\u72B6\u6001\u5230localStorage
  function saveBookmarkState() {
    const noteId = window.location.pathname;
    localStorage.setItem(\`bookmarked_\${noteId}\`, isBookmarked.toString());
  }

  // \u5DF2\u79FB\u9664\u70B9\u8D5E\u6309\u94AE\u72B6\u6001\u66F4\u65B0

  // \u66F4\u65B0\u6536\u85CF\u6309\u94AE\u72B6\u6001
  function updateBookmarkButton() {
    const bookmarkBtn = document.getElementById("bookmarkBtn");
    const bookmarkIcon = document.getElementById("bookmarkIcon");
    const bookmarkText = document.getElementById("bookmarkText");

    if (bookmarkBtn && bookmarkIcon && bookmarkText) {
      if (isBookmarked) {
        bookmarkBtn.classList.add("text-yellow-500");
        bookmarkBtn.classList.remove("text-gray-700", "dark:text-gray-100");
        bookmarkText.textContent = "\u5DF2\u6536\u85CF";
      } else {
        bookmarkBtn.classList.remove("text-yellow-500");
        bookmarkBtn.classList.add("text-gray-700", "dark:text-gray-100");
        bookmarkText.textContent = "\u6536\u85CF";
      }
    }
  }

  // \u70B9\u8D5E\u529F\u80FD\u5DF2\u79FB\u9664

  // \u6536\u85CF\u529F\u80FD - \u8C03\u7528\u6D4F\u89C8\u5668\u6536\u85CF\u5939
  function toggleBookmark() {
    if (!isBookmarked) {
      // \u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u6536\u85CF\u5939
      const title = document.title;
      const url = window.location.href;
      const message =
        navigator.userAgent.indexOf("Mac") !== -1
          ? "\u8BF7\u6309 Cmd+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939"
          : "\u8BF7\u6309 Ctrl+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939";
      showToast(message);
      // \u68C0\u67E5\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\u6DFB\u52A0\u6536\u85CF\u5939\u529F\u80FD
      // if (window.external && 'AddFavorite' in window.external) {
      //   // IE\u6D4F\u89C8\u5668
      //   (window.external as any).AddFavorite(url, title);
      //   isBookmarked = true;
      //   updateBookmarkButton();
      //   saveBookmarkState();
      //   showToast('\u5DF2\u6DFB\u52A0\u5230\u6536\u85CF\u5939');
      // } else if (window.sidebar && window.sidebar.addPanel) {
      //   // Firefox\u6D4F\u89C8\u5668
      //   window.sidebar.addPanel(title, url, '');
      //   isBookmarked = true;
      //   updateBookmarkButton();
      //   saveBookmarkState();
      //   showToast('\u5DF2\u6DFB\u52A0\u5230\u6536\u85CF\u5939');
      // } else {
      //   // \u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u63D0\u793A\u7528\u6237\u624B\u52A8\u6536\u85CF
      //   const message = navigator.userAgent.indexOf('Mac') !== -1
      //     ? '\u8BF7\u6309 Cmd+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939'
      //     : '\u8BF7\u6309 Ctrl+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939';
      //   showToast(message);

      //   // \u6A21\u62DF\u6536\u85CF\u72B6\u6001\uFF08\u4EC5\u5728\u672C\u5730\u8BB0\u5F55\uFF09
      //   isBookmarked = true;
      //   updateBookmarkButton();
      //   saveBookmarkState();
      // }
    } else {
      // \u53D6\u6D88\u6536\u85CF\uFF08\u4EC5\u672C\u5730\u72B6\u6001\uFF09
      isBookmarked = false;
      updateBookmarkButton();
      saveBookmarkState();
      showToast("\u5DF2\u53D6\u6D88\u6536\u85CF");
    }
  }

  // \u8BC4\u8BBA\u529F\u80FD
  function scrollToComments() {
    const commentSection = document.querySelector("h3");
    if (commentSection && commentSection.textContent?.includes("\u8BC4\u8BBA")) {
      commentSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // \u5206\u4EAB\u529F\u80FD
  function shareNote() {
    const title = document.title;
    const url = window.location.href;

    if (navigator.share) {
      // \u4F7F\u7528\u539F\u751F\u5206\u4EABAPI
      navigator
        .share({
          title: title,
          url: url,
        })
        .then(() => {
          showToast("\u5206\u4EAB\u6210\u529F");
        })
        .catch(() => {
          fallbackShare(title, url);
        });
    } else {
      fallbackShare(title, url);
    }
  }

  // \u5907\u7528\u5206\u4EAB\u65B9\u6CD5
  function fallbackShare(title, url) {
    // \u590D\u5236\u94FE\u63A5\u5230\u526A\u8D34\u677F
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast("\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F");
      })
      .catch(() => {
        // \u5982\u679C\u590D\u5236\u5931\u8D25\uFF0C\u663E\u793A\u5206\u4EAB\u9009\u9879
        const shareText = \`\${title} - \${url}\`;
        const shareUrl = \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(shareText)}\`;
        window.open(shareUrl, "_blank");
      });
  }

  // \u7B80\u5355\u7684\u63D0\u793A\u529F\u80FD
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className =
      "fixed top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg z-50 transition-opacity";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 2000);
  }

  // \u521D\u59CB\u5316\u4E92\u52A8\u529F\u80FD
  async function initInteractions() {
    await loadInteractionState();

    const commentBtn = document.getElementById("commentBtn");
    const bookmarkBtn = document.getElementById("bookmarkBtn");
    const shareBtn = document.getElementById("shareBtn");

    if (commentBtn) {
      commentBtn.addEventListener("click", scrollToComments);
    }

    if (bookmarkBtn) {
      bookmarkBtn.addEventListener("click", toggleBookmark);
    }

    if (shareBtn) {
      shareBtn.addEventListener("click", shareNote);
    }
  }

  // \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\u521D\u59CB\u5316\u4E92\u52A8\u529F\u80FD
  document.addEventListener("DOMContentLoaded", initInteractions);
  document.addEventListener("astro:page-load", initInteractions);
<\/script>`], ["", `  <!-- \u56FE\u7247\u9884\u89C8\u6A21\u6001\u6846 --> <div id="imageModal" class="image-modal" data-astro-cid-fezs4xpw> <div class="modal-content" data-astro-cid-fezs4xpw> <button class="modal-close" id="closeModal" data-astro-cid-fezs4xpw>&times;</button> <button class="modal-nav modal-prev" id="prevModal" data-astro-cid-fezs4xpw>&lt;</button> <img id="modalImage" class="modal-image" src="" alt="" data-astro-cid-fezs4xpw> <button class="modal-nav modal-next" id="nextModal" data-astro-cid-fezs4xpw>&gt;</button> </div> </div> <script type="module">
  let currentImageIndex = 0;
  let modalImages = [];

  // \u521D\u59CB\u5316\u56FE\u7247\u6570\u636E
  function initImageModal() {
    const imageElements = document.querySelectorAll("[data-image-index]");
    modalImages = Array.from(imageElements).map((img) => {
      const imgElement = img;
      return {
        src: imgElement.src,
        alt: imgElement.alt,
      };
    });

    // \u7ED1\u5B9A\u56FE\u7247\u70B9\u51FB\u4E8B\u4EF6
    imageElements.forEach((img, index) => {
      img.addEventListener("click", () => openImageModal(index));
    });
  }

  // \u6253\u5F00\u56FE\u7247\u6A21\u6001\u6846
  function openImageModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    if (modal && modalImage && modalImages[index]) {
      modalImage.src = modalImages[index].src;
      modalImage.alt = modalImages[index].alt;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  // \u5173\u95ED\u56FE\u7247\u6A21\u6001\u6846
  function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  // \u4E0A\u4E00\u5F20\u56FE\u7247
  function prevImage() {
    if (currentImageIndex > 0) {
      openImageModal(currentImageIndex - 1);
    }
  }

  // \u4E0B\u4E00\u5F20\u56FE\u7247
  function nextImage() {
    if (currentImageIndex < modalImages.length - 1) {
      openImageModal(currentImageIndex + 1);
    }
  }

  // \u952E\u76D8\u4E8B\u4EF6
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("imageModal");
    if (modal && modal.classList.contains("active")) {
      switch (e.key) {
        case "Escape":
          closeImageModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    }
  });

  // \u70B9\u51FB\u6A21\u6001\u6846\u80CC\u666F\u5173\u95ED
  const imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.id === "imageModal") {
        closeImageModal();
      }
    });
  }

  const closeModal = document.getElementById("closeModal");
  if (closeModal) {
    closeModal.addEventListener("click", closeImageModal);
  }

  const prevModal = document.getElementById("prevModal");
  if (prevModal) {
    prevModal.addEventListener("click", prevImage);
  }

  const nextModal = document.getElementById("nextModal");
  if (nextModal) {
    nextModal.addEventListener("click", nextImage);
  }

  // \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\u521D\u59CB\u5316
  document.addEventListener("DOMContentLoaded", initImageModal);

  // \u652F\u6301 Astro \u7684\u9875\u9762\u5207\u6362\u4E8B\u4EF6
  document.addEventListener("astro:page-load", initImageModal);

  // Supabase \u5DF2\u79FB\u9664\uFF1A\u6539\u7528\u672C\u5730\u5B58\u50A8\uFF08localStorage\uFF09

  // \u4E92\u52A8\u6309\u94AE\u529F\u80FD\u5B9E\u73B0\uFF08\u5DF2\u79FB\u9664\u70B9\u8D5E\uFF09
  let isBookmarked = false;
  let noteSlug = window.location.pathname.split("/").pop() || "";
  noteSlug = decodeURI(noteSlug);

  // \u4ECElocalStorage\u83B7\u53D6\u4E92\u52A8\u72B6\u6001\uFF08\u672C\u5730\u6A21\u5F0F\uFF09
  async function loadInteractionState() {
    const noteId = window.location.pathname;
    const savedBookmarked = localStorage.getItem(\\\`bookmarked_\\\${noteId}\\\`);

    isBookmarked = savedBookmarked === "true";

    updateBookmarkButton();
  }

  // \u4FDD\u5B58\u6536\u85CF\u72B6\u6001\u5230localStorage
  function saveBookmarkState() {
    const noteId = window.location.pathname;
    localStorage.setItem(\\\`bookmarked_\\\${noteId}\\\`, isBookmarked.toString());
  }

  // \u5DF2\u79FB\u9664\u70B9\u8D5E\u6309\u94AE\u72B6\u6001\u66F4\u65B0

  // \u66F4\u65B0\u6536\u85CF\u6309\u94AE\u72B6\u6001
  function updateBookmarkButton() {
    const bookmarkBtn = document.getElementById("bookmarkBtn");
    const bookmarkIcon = document.getElementById("bookmarkIcon");
    const bookmarkText = document.getElementById("bookmarkText");

    if (bookmarkBtn && bookmarkIcon && bookmarkText) {
      if (isBookmarked) {
        bookmarkBtn.classList.add("text-yellow-500");
        bookmarkBtn.classList.remove("text-gray-700", "dark:text-gray-100");
        bookmarkText.textContent = "\u5DF2\u6536\u85CF";
      } else {
        bookmarkBtn.classList.remove("text-yellow-500");
        bookmarkBtn.classList.add("text-gray-700", "dark:text-gray-100");
        bookmarkText.textContent = "\u6536\u85CF";
      }
    }
  }

  // \u70B9\u8D5E\u529F\u80FD\u5DF2\u79FB\u9664

  // \u6536\u85CF\u529F\u80FD - \u8C03\u7528\u6D4F\u89C8\u5668\u6536\u85CF\u5939
  function toggleBookmark() {
    if (!isBookmarked) {
      // \u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u6536\u85CF\u5939
      const title = document.title;
      const url = window.location.href;
      const message =
        navigator.userAgent.indexOf("Mac") !== -1
          ? "\u8BF7\u6309 Cmd+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939"
          : "\u8BF7\u6309 Ctrl+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939";
      showToast(message);
      // \u68C0\u67E5\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\u6DFB\u52A0\u6536\u85CF\u5939\u529F\u80FD
      // if (window.external && 'AddFavorite' in window.external) {
      //   // IE\u6D4F\u89C8\u5668
      //   (window.external as any).AddFavorite(url, title);
      //   isBookmarked = true;
      //   updateBookmarkButton();
      //   saveBookmarkState();
      //   showToast('\u5DF2\u6DFB\u52A0\u5230\u6536\u85CF\u5939');
      // } else if (window.sidebar && window.sidebar.addPanel) {
      //   // Firefox\u6D4F\u89C8\u5668
      //   window.sidebar.addPanel(title, url, '');
      //   isBookmarked = true;
      //   updateBookmarkButton();
      //   saveBookmarkState();
      //   showToast('\u5DF2\u6DFB\u52A0\u5230\u6536\u85CF\u5939');
      // } else {
      //   // \u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u63D0\u793A\u7528\u6237\u624B\u52A8\u6536\u85CF
      //   const message = navigator.userAgent.indexOf('Mac') !== -1
      //     ? '\u8BF7\u6309 Cmd+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939'
      //     : '\u8BF7\u6309 Ctrl+D \u5C06\u6B64\u9875\u9762\u6DFB\u52A0\u5230\u6536\u85CF\u5939';
      //   showToast(message);

      //   // \u6A21\u62DF\u6536\u85CF\u72B6\u6001\uFF08\u4EC5\u5728\u672C\u5730\u8BB0\u5F55\uFF09
      //   isBookmarked = true;
      //   updateBookmarkButton();
      //   saveBookmarkState();
      // }
    } else {
      // \u53D6\u6D88\u6536\u85CF\uFF08\u4EC5\u672C\u5730\u72B6\u6001\uFF09
      isBookmarked = false;
      updateBookmarkButton();
      saveBookmarkState();
      showToast("\u5DF2\u53D6\u6D88\u6536\u85CF");
    }
  }

  // \u8BC4\u8BBA\u529F\u80FD
  function scrollToComments() {
    const commentSection = document.querySelector("h3");
    if (commentSection && commentSection.textContent?.includes("\u8BC4\u8BBA")) {
      commentSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // \u5206\u4EAB\u529F\u80FD
  function shareNote() {
    const title = document.title;
    const url = window.location.href;

    if (navigator.share) {
      // \u4F7F\u7528\u539F\u751F\u5206\u4EABAPI
      navigator
        .share({
          title: title,
          url: url,
        })
        .then(() => {
          showToast("\u5206\u4EAB\u6210\u529F");
        })
        .catch(() => {
          fallbackShare(title, url);
        });
    } else {
      fallbackShare(title, url);
    }
  }

  // \u5907\u7528\u5206\u4EAB\u65B9\u6CD5
  function fallbackShare(title, url) {
    // \u590D\u5236\u94FE\u63A5\u5230\u526A\u8D34\u677F
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast("\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F");
      })
      .catch(() => {
        // \u5982\u679C\u590D\u5236\u5931\u8D25\uFF0C\u663E\u793A\u5206\u4EAB\u9009\u9879
        const shareText = \\\`\\\${title} - \\\${url}\\\`;
        const shareUrl = \\\`https://twitter.com/intent/tweet?text=\\\${encodeURIComponent(shareText)}\\\`;
        window.open(shareUrl, "_blank");
      });
  }

  // \u7B80\u5355\u7684\u63D0\u793A\u529F\u80FD
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className =
      "fixed top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg z-50 transition-opacity";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 2000);
  }

  // \u521D\u59CB\u5316\u4E92\u52A8\u529F\u80FD
  async function initInteractions() {
    await loadInteractionState();

    const commentBtn = document.getElementById("commentBtn");
    const bookmarkBtn = document.getElementById("bookmarkBtn");
    const shareBtn = document.getElementById("shareBtn");

    if (commentBtn) {
      commentBtn.addEventListener("click", scrollToComments);
    }

    if (bookmarkBtn) {
      bookmarkBtn.addEventListener("click", toggleBookmark);
    }

    if (shareBtn) {
      shareBtn.addEventListener("click", shareNote);
    }
  }

  // \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u540E\u521D\u59CB\u5316\u4E92\u52A8\u529F\u80FD
  document.addEventListener("DOMContentLoaded", initInteractions);
  document.addEventListener("astro:page-load", initInteractions);
<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description || "", "data-astro-cid-fezs4xpw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container px-3 lg:px-8" data-astro-cid-fezs4xpw> <div class="grid grid-cols-1 lg:grid-cols-4 gap-6" data-astro-cid-fezs4xpw> <!-- 主内容区 --> <div class="w-full lg:col-span-3" data-astro-cid-fezs4xpw> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "containerClass": "pb-6 rounded-xl", "textClass": "p-3 md:p-5", "animation": "fadeRight", "data-astro-cid-fezs4xpw": true }, { "default": async ($$result3) => renderTemplate`  <div class="flex items-center mb-6" data-astro-cid-fezs4xpw> <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700" data-astro-cid-fezs4xpw> <img${addAttribute(__ASTRO_IMAGE_IMPORT_Z1VeAuF.src, "src")} alt="作者头像" class="w-full h-full object-cover" data-astro-cid-fezs4xpw> </div> <div class="ml-4" data-astro-cid-fezs4xpw> <h4 class="font-bold text-lg" data-astro-cid-fezs4xpw>NaJim</h4> <div class="flex items-center text-sm text-gray-700 dark:text-gray-100" data-astro-cid-fezs4xpw> ${entryDate && renderTemplate`<span class="flex items-center" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-1", "data-astro-cid-fezs4xpw": true })} ${entryDate} </span>`} </div> </div> </div>  <h1 class="text-3xl font-bold mb-4" data-astro-cid-fezs4xpw>${title}</h1>  <div class="flex flex-wrap gap-4 mb-6" data-astro-cid-fezs4xpw> ${mood && renderTemplate`<div class="flex items-center text-gray-600 dark:text-gray-300" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "FaSmile", FaSmile, { "className": "mr-1", "data-astro-cid-fezs4xpw": true })} <span data-astro-cid-fezs4xpw>${mood}</span> </div>`} ${location && renderTemplate`<div class="flex items-center text-gray-600 dark:text-gray-300" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "FaMapMarkerAlt", FaMapMarkerAlt, { "className": "mr-1", "data-astro-cid-fezs4xpw": true })} <span data-astro-cid-fezs4xpw>${location}</span> </div>`} </div>  ${displayImages.length > 0 && renderTemplate`<div class="mb-6" data-astro-cid-fezs4xpw> <div${addAttribute(`image-grid image-grid-${Math.min(displayImages.length, 9)}`, "class")} data-astro-cid-fezs4xpw> ${displayImages.slice(0, 9).map((img, index) => renderTemplate`<div class="image-item" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "Image", $$Image, { "src": img.src, "alt": img.alt || `\u56FE\u7247 ${index + 1}`, "width": 800, "height": 800, "quality": 95, "format": "webp", "class": "w-full h-full object-cover shadow-lg rounded-[25px] cursor-pointer hover:opacity-90 transition-opacity", "data-image-index": index, "data-astro-cid-fezs4xpw": true })} </div>`)} </div> </div>`} <div class="md:text-lg prose dark:prose-invert max-w-none mb-8 text-txt-s dark:text-darkmode-txt-s" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "Content", Content, { "data-astro-cid-fezs4xpw": true })} </div>  ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-6" data-astro-cid-fezs4xpw> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/notes/tags/${tag}`, "href")} class="px-3 py-1 glass-l text-sm rounded-full hover:bg-white/40 transition-colors duration-300" data-astro-cid-fezs4xpw>
#${tag} </a>`)} </div>`} <div class="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6" data-astro-cid-fezs4xpw> <div class="flex justify-around" data-astro-cid-fezs4xpw> <button id="commentBtn" class="flex items-center gap-2 text-gray-700 dark:text-gray-100 hover:text-blue-500 transition-colors" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "FaRegComment", FaRegComment, { "data-astro-cid-fezs4xpw": true })} <span data-astro-cid-fezs4xpw>评论</span> </button> <button id="bookmarkBtn" class="flex items-center gap-2 text-gray-700 dark:text-gray-100 hover:text-yellow-500 transition-colors" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "FaRegBookmark", FaRegBookmark, { "id": "bookmarkIcon", "data-astro-cid-fezs4xpw": true })} <span id="bookmarkText" data-astro-cid-fezs4xpw>收藏</span> </button> <button id="shareBtn" class="flex items-center gap-2 text-gray-700 dark:text-gray-100 hover:text-green-500 transition-colors" data-astro-cid-fezs4xpw> ${renderComponent($$result3, "FaShare", FaShare, { "data-astro-cid-fezs4xpw": true })} <span data-astro-cid-fezs4xpw>分享</span> </button> </div> </div> ` })} <!-- 评论区占位 --> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "containerClass": "pb-6 rounded-xl", "textClass": "p-5", "data-astro-cid-fezs4xpw": true }, { "default": async ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-4" data-astro-cid-fezs4xpw>评论</h3> ${renderComponent($$result3, "Comment", $$Comment, { "data-astro-cid-fezs4xpw": true })} ` })} </div> <!-- 侧边栏 --> <div class="lg:col-span-1" data-astro-cid-fezs4xpw> <!-- 相关动态 --> ${relatedNotes.length > 0 && renderTemplate`${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "wrapperClass": "dock !p-6 mb-6", "containerClass": "rounded-xl", "textClass": "p-1", "animation": "fadeLeft", "data-astro-cid-fezs4xpw": true }, { "default": async ($$result3) => renderTemplate` <h3 class="font-bold mb-4" data-astro-cid-fezs4xpw>相关动态</h3> <div class="space-y-2" data-astro-cid-fezs4xpw> ${relatedNotes.map((note) => renderTemplate`<div class="dark:border-gray-800 p-3 rounded-lg hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300 [&_*]:hover:text-darkmode-txt-p" data-astro-cid-fezs4xpw> <a${addAttribute(`/notes/${slugify(note.data.title)}`, "href")} class="block hover:text-primary-500 transition-colors" data-astro-cid-fezs4xpw> <h5 class="font-medium line-clamp-2" data-astro-cid-fezs4xpw> ${note.data.title} </h5> <p class="text-sm text-gray-700 dark:text-gray-400 mt-1" data-astro-cid-fezs4xpw> ${note.data.createdAt && formatDate(note.data.createdAt)} </p> </a> </div>`)} </div> ` })}`} <!-- 最新动态 --> ${renderComponent($$result2, "LiquidGlass", $$LiquidGlassLess, { "heavy": true, "containerClass": "pb-4 rounded-xl", "textClass": "p-1", "animation": "fadeLeft", "data-astro-cid-fezs4xpw": true }, { "default": async ($$result3) => renderTemplate` <h3 class="font-bold mb-4 px-2" data-astro-cid-fezs4xpw>最新动态</h3> <div class="space-y-2" data-astro-cid-fezs4xpw> ${latestNotes.map((note) => renderTemplate`<div class="dark:border-gray-800 p-3 rounded-lg hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300 [&_*]:hover:text-darkmode-txt-p" data-astro-cid-fezs4xpw> <a${addAttribute(`/notes/${slugify(note.data.title)}`, "href")} class="block hover:text-primary-500 transition-colors" data-astro-cid-fezs4xpw> <h5 class="text-txt-p dark:text-darkmode-txt-p font-bold line-clamp-2" data-astro-cid-fezs4xpw> ${note.data.title} </h5> <p class="text-md text-gray-700 dark:text-darkmode-txt-p" data-astro-cid-fezs4xpw> ${note.data.description && note.data.description} </p> <p class="text-sm text-gray-500 dark:text-gray-400 mt-1" data-astro-cid-fezs4xpw> ${note.data.createdAt && formatDate(note.data.createdAt)} </p> </a> </div>`)} </div> <div class="mt-2 text-center" data-astro-cid-fezs4xpw> <a href="/notes" class="text-primary-500 hover:text-primary-600 transition-colors" data-astro-cid-fezs4xpw>
查看全部动态
</a> </div> ` })} </div> </div> </div> ` }));
}, "/Users/najim/Project/study/NaJimBlog/src/pages/notes/[slug].astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/notes/[slug].astro";
const $$url = "/notes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
