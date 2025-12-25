import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const readingTime = (content, complexity) => {
  if (!content) {
    return "0分钟";
  }
  const CPS = 350 / 60;
  let images = 0;
  const chineseRegex = /[\u4e00-\u9fa5]/g;
  const englishRegex = /[a-zA-Z0-9]/g;
  const imageRegex = /\.(png|jpg|jpeg|svg|webp|gif)/gi;
  const imageMatches = content.match(imageRegex);
  images = imageMatches ? imageMatches.length : 0;
  const chineseChars = content.match(chineseRegex);
  const chineseCount = chineseChars ? chineseChars.length : 0;
  const englishChars = content.match(englishRegex);
  const englishWordCount = englishChars ? Math.ceil(englishChars.length / 5) : 0;
  const totalChars = chineseCount + englishWordCount;
  let imageSecs = 0;
  let imageFactor = 12;
  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }
  let ttr = 0;
  ttr = totalChars / CPS;
  ttr = ttr + imageSecs;
  ttr = ttr * complexity;
  ttr = Math.ceil(ttr / 60);
  if (ttr < 1) {
    ttr = 1;
  }
  return ttr + `分钟`;
};

const $$Astro = createAstro("https://github.com/NaJimmm");
const $$PlaceholderImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlaceholderImage;
  const { title, className = "" } = Astro2.props;
  const normalizedTitle = (title || "").trim();
  const firstTwo = normalizedTitle.slice(0, 2);
  const isHan = (ch) => /[\u3400-\u9FFF]/.test(ch);
  const firstTwoAreHan = firstTwo.length === 2 && isHan(firstTwo[0]) && isHan(firstTwo[1]);
  const englishWord = normalizedTitle.match(/[A-Za-z]+(?:'[A-Za-z]+)?/i)?.[0] || "";
  const displayText = firstTwoAreHan ? firstTwo : englishWord ? englishWord.toUpperCase() : firstTwo.toUpperCase();
  const gradients = [
    "from-blue-500 to-purple-600",
    "from-green-400 to-blue-500",
    "from-purple-500 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-red-400 to-pink-500",
    "from-indigo-500 to-purple-600",
    "from-teal-400 to-blue-500",
    "from-orange-400 to-red-500",
    "from-cyan-400 to-blue-500",
    "from-emerald-400 to-teal-500"
  ];
  const getGradientIndex = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash) % gradients.length;
  };
  const selectedGradient = gradients[getGradientIndex(title)];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative flex items-center justify-center bg-gradient-to-br ${selectedGradient} overflow-hidden ${className}`, "class")} data-astro-cid-oe3gw2as> <!-- 背景装饰元素 --> <div class="absolute inset-0 opacity-20" data-astro-cid-oe3gw2as> <!-- 圆形装饰 --> <div class="absolute top-4 right-4 w-16 h-16 bg-white rounded-full opacity-30" data-astro-cid-oe3gw2as></div> <div class="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-full opacity-20" data-astro-cid-oe3gw2as></div> <!-- 几何装饰 --> <div class="absolute top-1/2 left-4 w-8 h-8 bg-white transform rotate-45 opacity-25" data-astro-cid-oe3gw2as></div> </div> <!-- 主要文字 --> <div class="relative z-10 text-center" data-astro-cid-oe3gw2as> <div class="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-wider drop-shadow-lg" data-astro-cid-oe3gw2as> ${displayText} </div> <!-- 副标题效果 --> <div class="mt-2 text-white/80 text-sm md:text-base font-medium tracking-wide" data-astro-cid-oe3gw2as> ${title.length > 10 ? title.slice(0, 20) + "..." : title} </div> </div> <!-- 光泽效果 --> <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50" data-astro-cid-oe3gw2as></div> </div> `;
}, "/Users/najim/Project/study/NaJimBlog/src/components/blog/PlaceholderImage.astro", void 0);

export { $$PlaceholderImage as $, readingTime as r };
