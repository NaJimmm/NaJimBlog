import { a as createComponent, b as renderTemplate, f as defineScriptVars, m as maybeRenderHead } from './astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="tcomment" class="markdown-content"></div> <script>(function(){', `
  document.addEventListener("astro:page-load", () => {
    function loadTwikoo() {
      const commentsContainer = document.getElementById("tcomment");
      if (commentsContainer) {
        if (!twikooEnvId) {
          showError("留言模块未加载，Twikoo envId 未配置。");
          return;
        }
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js";
        script.async = true;
        script.onload = () => {
          const initScript = document.createElement("script");
          initScript.innerHTML = \`
            twikoo.init({
                envId: '\${twikooEnvId}',
                el: '#tcomment',
            }).then(() => {
                // Twikoo 初始化完成后，动态加载自定义样式
                loadTwikooCustomStyles();
            });
            
            // 动态加载 Twikoo 自定义样式的函数
            function loadTwikooCustomStyles() {
                if (document.getElementById('twikoo-custom-link')) {
                    return;
                }
                
                const link = document.createElement('link');
                link.id = 'twikoo-custom-link';
                link.rel = 'stylesheet';
                link.href = '/src/styles/twikoo-custom.scss'; // 需要构建工具支持
                document.head.appendChild(link);
            }
        \`;
          document.body.appendChild(initScript);
        };
        document.body.appendChild(script);
      }
    }

    function showError(msg){
      const list = document.getElementById("tcomment");
      if(!list) return;
      list.removeAttribute('aria-busy');
      list.innerHTML = \`
        <div class="py-4">
          <div class="text-center text-red-600 dark:text-red-400">
            \${msg || "评论获取失败，请稍后重试。"}
          </div>
        </div>
      \`;
      const btn = document.getElementById("rc-retry-btn");
      if(btn){ btn.addEventListener("click", load, { once: true }); }
    }
    loadTwikoo();
  });
})();</script>`], ["", '<div id="tcomment" class="markdown-content"></div> <script>(function(){', `
  document.addEventListener("astro:page-load", () => {
    function loadTwikoo() {
      const commentsContainer = document.getElementById("tcomment");
      if (commentsContainer) {
        if (!twikooEnvId) {
          showError("留言模块未加载，Twikoo envId 未配置。");
          return;
        }
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js";
        script.async = true;
        script.onload = () => {
          const initScript = document.createElement("script");
          initScript.innerHTML = \\\`
            twikoo.init({
                envId: '\\\${twikooEnvId}',
                el: '#tcomment',
            }).then(() => {
                // Twikoo 初始化完成后，动态加载自定义样式
                loadTwikooCustomStyles();
            });
            
            // 动态加载 Twikoo 自定义样式的函数
            function loadTwikooCustomStyles() {
                if (document.getElementById('twikoo-custom-link')) {
                    return;
                }
                
                const link = document.createElement('link');
                link.id = 'twikoo-custom-link';
                link.rel = 'stylesheet';
                link.href = '/src/styles/twikoo-custom.scss'; // 需要构建工具支持
                document.head.appendChild(link);
            }
        \\\`;
          document.body.appendChild(initScript);
        };
        document.body.appendChild(script);
      }
    }

    function showError(msg){
      const list = document.getElementById("tcomment");
      if(!list) return;
      list.removeAttribute('aria-busy');
      list.innerHTML = \\\`
        <div class="py-4">
          <div class="text-center text-red-600 dark:text-red-400">
            \\\${msg || "评论获取失败，请稍后重试。"}
          </div>
        </div>
      \\\`;
      const btn = document.getElementById("rc-retry-btn");
      if(btn){ btn.addEventListener("click", load, { once: true }); }
    }
    loadTwikoo();
  });
})();</script>`])), maybeRenderHead(), defineScriptVars({
    twikooEnvId: "https://najim-twikoo.netlify.app/.netlify/functions/twikoo"
  }));
}, "/Users/najim/Project/study/NaJimBlog/src/components/base/Comment.astro", void 0);

export { $$Comment as $ };
