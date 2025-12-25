import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdOrLqG4.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BgAMFR6a.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://github.com/NaJimmm");
const $$EntryLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntryLayout;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u9875\u9762\u672A\u627E\u5230", "data-astro-cid-swytp5ul": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="text-center" data-astro-cid-swytp5ul> <div class="container px-3 lg:px-8" data-astro-cid-swytp5ul> <div class="row justify-center" data-astro-cid-swytp5ul> <div id="confetti-area" class="glass-t rounded-lg p-6 col-10 intersect:animate-fadeUp opacity-0 group relative overflow-hidden" data-astro-cid-swytp5ul> <h1 class="text-[8rem] sm:text-[10rem] font-extrabold leading-relaxed bg-gradient-to-r from-stone-300  to-slate-500 bg-clip-text text-transparent drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-[1.03] group-hover:rotate-[1deg]" data-astro-cid-swytp5ul>
404
</h1> <h2 class="h2 mb-3 flex items-center justify-center gap-2 relative z-20 leading-normal" data-astro-cid-swytp5ul>
\u9875\u9762\u672A\u627E\u5230
</h2> <p class="mb-6 text-neutral-600 dark:text-neutral-300 relative z-20" data-astro-cid-swytp5ul>
\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u53EF\u80FD\u88AB\u79FB\u52A8\u3001\u91CD\u547D\u540D\uFF0C\u6216\u6682\u65F6\u4E0D\u53EF\u7528\u3002
<br class="hidden sm:inline" data-astro-cid-swytp5ul>\u4E0D\u59A8\u8FD4\u56DE\u9996\u9875\u7EE7\u7EED\u63A2\u7D22\u5427\u3002
</p> <!-- \u6492\u82B1\u5C42\uFF1A\u5728\u9F20\u6807\u60AC\u505C\u65F6\u4ECE\u9F20\u6807\u4F4D\u7F6E\u5411\u56DB\u5468\u6492\u51FA\u67AB\u53F6\u5E76\u81EA\u7531\u843D\u4F53 --> <div id="leaf-layer" class="leaf-layer absolute inset-0 pointer-events-auto z-30" data-astro-cid-swytp5ul></div> </div> </div> </div> </section>  <script type="module">
    const area = document.getElementById('confetti-area');
    const layer = document.getElementById('leaf-layer');
    const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // \u7269\u7406\u53C2\u6570\uFF08\u50CF\u7D20\u5355\u4F4D\uFF09
    const GRAVITY = 300;          // px/s^2 \u91CD\u529B\u52A0\u901F\u5EA6\uFF08\u964D\u4F4E\uFF0C\u8BA9\u6811\u53F6\u6162\u98D8\uFF09
    const DRAG = 1.2;             // \u963B\u5C3C\u7CFB\u6570\uFF08\u8FD1\u4F3C\u7A7A\u6C14\u963B\u529B\uFF09
    const WIND_NOISE = 40;        // \u6C34\u5E73\u98CE\u6270\u52A8\uFF08px/s\uFF09

    const BURST_COUNT = 1;       // \u6BCF\u6B21\u7206\u53D1\u6570\u91CF\uFF08\u51CF\u5C11\uFF09
    const TRAIL_COUNT = 2;        // \u79FB\u52A8\u65F6\u8DDF\u968F\u6570\u91CF\uFF08\u51CF\u5C11\uFF09
    const MAX_PARTICLES = 60;    // \u4E0A\u9650\u4EE5\u4FDD\u8BC1\u6027\u80FD

    const particles = new Set();
    let rafId = null;

    function rand(min, max) { return Math.random() * (max - min) + min; }
    function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

    function createLeaf(x, y) {
      if (particles.size >= MAX_PARTICLES) return;
      const el = document.createElement('span');
      el.className = 'leaf-confetti';
      // \u5173\u952E\uFF1A\u5185\u8054\u5B9A\u4F4D\u6837\u5F0F\uFF0C\u907F\u514D Astro \u6837\u5F0F\u4F5C\u7528\u57DF\u5BFC\u81F4\u7684\u9009\u62E9\u5668\u5931\u6548
      el.style.position = 'absolute';
      el.style.top = \`\${y}px\`;
      el.style.left = \`\${x}px\`;
      el.style.pointerEvents = 'none';
      el.style.willChange = 'left, top, transform, opacity';
      const glyph = document.createElement('span');
      glyph.className = 'glyph';
      glyph.textContent = '\u{1F341}';
      el.appendChild(glyph);
      layer.appendChild(el);

      const size = rand(14, 28);
      const alpha = rand(0.75, 1);
      glyph.style.fontSize = \`\${size}px\`;
      glyph.style.opacity = String(alpha);

      // \u521D\u59CB\u901F\u5EA6\uFF1A\u5411\u56DB\u5468\u968F\u673A\u629B\u5C04
      const speed = rand(50, 200);
      const angle = rand(0, Math.PI * 2);
      let vx = Math.cos(angle) * speed; // px/s
      let vy = Math.sin(angle) * speed; // px/s\uFF08\u53EF\u80FD\u5411\u4E0A\u6216\u5411\u4E0B\uFF09

      // \u65CB\u8F6C\u901F\u5EA6\uFF08\u5EA6/\u79D2\uFF09
      let rot = rand(-90, 90);
      let vrot = rand(-180, 180);

      const state = {
        el, x, y, vx, vy, rot, vrot,
        last: performance.now(),
      };
      particles.add(state);
      // \u521D\u59CB\u5B9A\u4F4D\u5230\u9F20\u6807\u4F4D\u7F6E\uFF08\u65CB\u8F6C\uFF09
      el.style.transform = \`rotate(\${rot}deg)\`;
    }

    function step(ts) {
      if (particles.size === 0) { rafId = null; return; }
      for (const p of particles) {
        const dt = clamp((ts - p.last) / 1000, 0, 0.05); // \u9650\u5236\u6700\u5927\u6B65\u957F\u9632\u6B62\u5361\u987F\u8DF3\u53D8
        p.last = ts;

        // \u7A7A\u6C14\u963B\u529B\uFF08\u7B80\u5316\u4E3A\u963B\u5C3C\uFF09 + \u8F7B\u5FAE\u98CE\u566A\u58F0
        p.vx += rand(-WIND_NOISE, WIND_NOISE) * dt;
        p.vx *= (1 - DRAG * dt * 0.25);
        p.vy *= (1 - DRAG * dt * 0.15);

        // \u91CD\u529B\u52A0\u901F\u5EA6\uFF08\u964D\u4F4E\uFF09
        p.vy += GRAVITY * dt;

        // \u4F4D\u7F6E\u66F4\u65B0
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vrot * dt;

        // \u6E32\u67D3\u5230\u6837\u5F0F\uFF08\u7528 left/top \u5B9A\u4F4D\uFF0Ctransform \u4EC5\u505A\u65CB\u8F6C\uFF09
        p.el.style.left = \`\${p.x}px\`;
        p.el.style.top = \`\${p.y}px\`;
        p.el.style.transform = \`rotate(\${p.rot}deg)\`;

        const w = layer.clientWidth;
        const h = layer.clientHeight;
        // \u8D85\u51FA\u8FB9\u754C\u540E\u79FB\u9664
        if (p.y > h + 80 || p.x < -80 || p.x > w + 80) {
          p.el.remove();
          particles.delete(p);
        }
      }
      rafId = requestAnimationFrame(step);
    }

    function ensureLoop() {
      if (rafId == null) rafId = requestAnimationFrame(step);
    }

    // \u4F7F\u7528 pointer \u4E8B\u4EF6\u7684 offset \u5750\u6807\uFF08\u7ED1\u5B9A\u8986\u76D6\u5C42\u65F6\u66F4\u7A33\u5B9A\uFF09
    function getLocalPos(e) {
      let x = e.offsetX;
      let y = e.offsetY;
      if (typeof x !== 'number' || typeof y !== 'number') {
        const rect = layer.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      x = clamp(x, 0, layer.clientWidth);
      y = clamp(y, 0, layer.clientHeight);
      return { x, y };
    }

    function spawnBurst(x, y, count) {
      if (prefersReduced) return;
      for (let i = 0; i < count; i++) createLeaf(x, y);
      ensureLoop();
    }

    // \u4E8B\u4EF6\uFF1A\u8FDB\u5165\u65F6\u7206\u53D1\u3001\u79FB\u52A8\u65F6\u5C11\u91CF\u8DDF\u968F\uFF08\u7ED1\u5B9A\u8986\u76D6\u5C42 + pointer capture\uFF09
    let lastTrail = 0;
    layer.addEventListener('pointerenter', (e) => {
      const { x, y } = getLocalPos(e);
      spawnBurst(x, y, BURST_COUNT);
    });
    layer.addEventListener('pointermove', (e) => {
      const now = performance.now();
      if (now - lastTrail > 60) { // \u66F4\u9AD8\u9891\u7387\u5730\u89E6\u53D1\uFF0C\u4F46\u6570\u91CF\u66F4\u5C11
        lastTrail = now;
        const { x, y } = getLocalPos(e);
        spawnBurst(x, y, TRAIL_COUNT);
      }
    });
    layer.addEventListener('pointerdown', (e) => {
      try { layer.setPointerCapture(e.pointerId); } catch {}
    });
    layer.addEventListener('pointerup', (e) => {
      try { layer.releasePointerCapture(e.pointerId); } catch {}
    });

    // Astro \u8DEF\u7531\u5207\u6362\u65F6\u6E05\u7406
    document.addEventListener('astro:page-load', () => {
      for (const p of particles) { p.el.remove(); }
      particles.clear();
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    });
  <\/script> `], [" ", `<section class="text-center" data-astro-cid-swytp5ul> <div class="container px-3 lg:px-8" data-astro-cid-swytp5ul> <div class="row justify-center" data-astro-cid-swytp5ul> <div id="confetti-area" class="glass-t rounded-lg p-6 col-10 intersect:animate-fadeUp opacity-0 group relative overflow-hidden" data-astro-cid-swytp5ul> <h1 class="text-[8rem] sm:text-[10rem] font-extrabold leading-relaxed bg-gradient-to-r from-stone-300  to-slate-500 bg-clip-text text-transparent drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-[1.03] group-hover:rotate-[1deg]" data-astro-cid-swytp5ul>
404
</h1> <h2 class="h2 mb-3 flex items-center justify-center gap-2 relative z-20 leading-normal" data-astro-cid-swytp5ul>
\u9875\u9762\u672A\u627E\u5230
</h2> <p class="mb-6 text-neutral-600 dark:text-neutral-300 relative z-20" data-astro-cid-swytp5ul>
\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u53EF\u80FD\u88AB\u79FB\u52A8\u3001\u91CD\u547D\u540D\uFF0C\u6216\u6682\u65F6\u4E0D\u53EF\u7528\u3002
<br class="hidden sm:inline" data-astro-cid-swytp5ul>\u4E0D\u59A8\u8FD4\u56DE\u9996\u9875\u7EE7\u7EED\u63A2\u7D22\u5427\u3002
</p> <!-- \u6492\u82B1\u5C42\uFF1A\u5728\u9F20\u6807\u60AC\u505C\u65F6\u4ECE\u9F20\u6807\u4F4D\u7F6E\u5411\u56DB\u5468\u6492\u51FA\u67AB\u53F6\u5E76\u81EA\u7531\u843D\u4F53 --> <div id="leaf-layer" class="leaf-layer absolute inset-0 pointer-events-auto z-30" data-astro-cid-swytp5ul></div> </div> </div> </div> </section>  <script type="module">
    const area = document.getElementById('confetti-area');
    const layer = document.getElementById('leaf-layer');
    const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // \u7269\u7406\u53C2\u6570\uFF08\u50CF\u7D20\u5355\u4F4D\uFF09
    const GRAVITY = 300;          // px/s^2 \u91CD\u529B\u52A0\u901F\u5EA6\uFF08\u964D\u4F4E\uFF0C\u8BA9\u6811\u53F6\u6162\u98D8\uFF09
    const DRAG = 1.2;             // \u963B\u5C3C\u7CFB\u6570\uFF08\u8FD1\u4F3C\u7A7A\u6C14\u963B\u529B\uFF09
    const WIND_NOISE = 40;        // \u6C34\u5E73\u98CE\u6270\u52A8\uFF08px/s\uFF09

    const BURST_COUNT = 1;       // \u6BCF\u6B21\u7206\u53D1\u6570\u91CF\uFF08\u51CF\u5C11\uFF09
    const TRAIL_COUNT = 2;        // \u79FB\u52A8\u65F6\u8DDF\u968F\u6570\u91CF\uFF08\u51CF\u5C11\uFF09
    const MAX_PARTICLES = 60;    // \u4E0A\u9650\u4EE5\u4FDD\u8BC1\u6027\u80FD

    const particles = new Set();
    let rafId = null;

    function rand(min, max) { return Math.random() * (max - min) + min; }
    function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

    function createLeaf(x, y) {
      if (particles.size >= MAX_PARTICLES) return;
      const el = document.createElement('span');
      el.className = 'leaf-confetti';
      // \u5173\u952E\uFF1A\u5185\u8054\u5B9A\u4F4D\u6837\u5F0F\uFF0C\u907F\u514D Astro \u6837\u5F0F\u4F5C\u7528\u57DF\u5BFC\u81F4\u7684\u9009\u62E9\u5668\u5931\u6548
      el.style.position = 'absolute';
      el.style.top = \\\`\\\${y}px\\\`;
      el.style.left = \\\`\\\${x}px\\\`;
      el.style.pointerEvents = 'none';
      el.style.willChange = 'left, top, transform, opacity';
      const glyph = document.createElement('span');
      glyph.className = 'glyph';
      glyph.textContent = '\u{1F341}';
      el.appendChild(glyph);
      layer.appendChild(el);

      const size = rand(14, 28);
      const alpha = rand(0.75, 1);
      glyph.style.fontSize = \\\`\\\${size}px\\\`;
      glyph.style.opacity = String(alpha);

      // \u521D\u59CB\u901F\u5EA6\uFF1A\u5411\u56DB\u5468\u968F\u673A\u629B\u5C04
      const speed = rand(50, 200);
      const angle = rand(0, Math.PI * 2);
      let vx = Math.cos(angle) * speed; // px/s
      let vy = Math.sin(angle) * speed; // px/s\uFF08\u53EF\u80FD\u5411\u4E0A\u6216\u5411\u4E0B\uFF09

      // \u65CB\u8F6C\u901F\u5EA6\uFF08\u5EA6/\u79D2\uFF09
      let rot = rand(-90, 90);
      let vrot = rand(-180, 180);

      const state = {
        el, x, y, vx, vy, rot, vrot,
        last: performance.now(),
      };
      particles.add(state);
      // \u521D\u59CB\u5B9A\u4F4D\u5230\u9F20\u6807\u4F4D\u7F6E\uFF08\u65CB\u8F6C\uFF09
      el.style.transform = \\\`rotate(\\\${rot}deg)\\\`;
    }

    function step(ts) {
      if (particles.size === 0) { rafId = null; return; }
      for (const p of particles) {
        const dt = clamp((ts - p.last) / 1000, 0, 0.05); // \u9650\u5236\u6700\u5927\u6B65\u957F\u9632\u6B62\u5361\u987F\u8DF3\u53D8
        p.last = ts;

        // \u7A7A\u6C14\u963B\u529B\uFF08\u7B80\u5316\u4E3A\u963B\u5C3C\uFF09 + \u8F7B\u5FAE\u98CE\u566A\u58F0
        p.vx += rand(-WIND_NOISE, WIND_NOISE) * dt;
        p.vx *= (1 - DRAG * dt * 0.25);
        p.vy *= (1 - DRAG * dt * 0.15);

        // \u91CD\u529B\u52A0\u901F\u5EA6\uFF08\u964D\u4F4E\uFF09
        p.vy += GRAVITY * dt;

        // \u4F4D\u7F6E\u66F4\u65B0
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vrot * dt;

        // \u6E32\u67D3\u5230\u6837\u5F0F\uFF08\u7528 left/top \u5B9A\u4F4D\uFF0Ctransform \u4EC5\u505A\u65CB\u8F6C\uFF09
        p.el.style.left = \\\`\\\${p.x}px\\\`;
        p.el.style.top = \\\`\\\${p.y}px\\\`;
        p.el.style.transform = \\\`rotate(\\\${p.rot}deg)\\\`;

        const w = layer.clientWidth;
        const h = layer.clientHeight;
        // \u8D85\u51FA\u8FB9\u754C\u540E\u79FB\u9664
        if (p.y > h + 80 || p.x < -80 || p.x > w + 80) {
          p.el.remove();
          particles.delete(p);
        }
      }
      rafId = requestAnimationFrame(step);
    }

    function ensureLoop() {
      if (rafId == null) rafId = requestAnimationFrame(step);
    }

    // \u4F7F\u7528 pointer \u4E8B\u4EF6\u7684 offset \u5750\u6807\uFF08\u7ED1\u5B9A\u8986\u76D6\u5C42\u65F6\u66F4\u7A33\u5B9A\uFF09
    function getLocalPos(e) {
      let x = e.offsetX;
      let y = e.offsetY;
      if (typeof x !== 'number' || typeof y !== 'number') {
        const rect = layer.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      x = clamp(x, 0, layer.clientWidth);
      y = clamp(y, 0, layer.clientHeight);
      return { x, y };
    }

    function spawnBurst(x, y, count) {
      if (prefersReduced) return;
      for (let i = 0; i < count; i++) createLeaf(x, y);
      ensureLoop();
    }

    // \u4E8B\u4EF6\uFF1A\u8FDB\u5165\u65F6\u7206\u53D1\u3001\u79FB\u52A8\u65F6\u5C11\u91CF\u8DDF\u968F\uFF08\u7ED1\u5B9A\u8986\u76D6\u5C42 + pointer capture\uFF09
    let lastTrail = 0;
    layer.addEventListener('pointerenter', (e) => {
      const { x, y } = getLocalPos(e);
      spawnBurst(x, y, BURST_COUNT);
    });
    layer.addEventListener('pointermove', (e) => {
      const now = performance.now();
      if (now - lastTrail > 60) { // \u66F4\u9AD8\u9891\u7387\u5730\u89E6\u53D1\uFF0C\u4F46\u6570\u91CF\u66F4\u5C11
        lastTrail = now;
        const { x, y } = getLocalPos(e);
        spawnBurst(x, y, TRAIL_COUNT);
      }
    });
    layer.addEventListener('pointerdown', (e) => {
      try { layer.setPointerCapture(e.pointerId); } catch {}
    });
    layer.addEventListener('pointerup', (e) => {
      try { layer.releasePointerCapture(e.pointerId); } catch {}
    });

    // Astro \u8DEF\u7531\u5207\u6362\u65F6\u6E05\u7406
    document.addEventListener('astro:page-load', () => {
      for (const p of particles) { p.el.remove(); }
      particles.clear();
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "/Users/najim/Project/study/NaJimBlog/src/components/not-found/EntryLayout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "EntryLayout", $$EntryLayout, {})}`;
}, "/Users/najim/Project/study/NaJimBlog/src/pages/404.astro", void 0);

const $$file = "/Users/najim/Project/study/NaJimBlog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
