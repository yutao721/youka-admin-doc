import{_ as s,f as n,e as a,N as t}from"./plugin-vue_export-helper.87254cb5.js";const m='{"title":"\u6837\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"windicss","slug":"windicss"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528 Scss","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528-scss"},{"level":2,"title":"\u5F00\u542F scoped","slug":"\u5F00\u542F-scoped"},{"level":2,"title":"\u6DF1\u5EA6\u9009\u62E9\u5668","slug":"\u6DF1\u5EA6\u9009\u62E9\u5668"},{"level":2,"title":"windiscss\u96C6\u6210","slug":"windiscss\u96C6\u6210"}],"relativePath":"guide/design.md","lastUpdated":1663149919476}',p={},e=t(`<h1 id="\u6837\u5F0F"><a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a> \u6837\u5F0F</h1><h2 id="\u4ECB\u7ECD"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u548C\u89C4\u5212\u6837\u5F0F\u6587\u4EF6\u3002</p><p>\u9ED8\u8BA4\u4F7F\u7528 scss \u4F5C\u4E3A\u9884\u5904\u7406\u8BED\u8A00\uFF0C\u5EFA\u8BAE\u5728\u4F7F\u7528\u524D\u6216\u8005\u9047\u5230\u7591\u95EE\u65F6\u5B66\u4E60\u4E00\u4E0B scss\u7684\u76F8\u5173\u7279\u6027\uFF08\u5982\u679C\u60F3\u83B7\u53D6\u57FA\u7840\u7684 CSS \u77E5\u8BC6\u6216\u67E5\u9605\u5C5E\u6027\uFF0C\u8BF7\u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">MDN \u6587\u6863</a>\uFF09\u3002</p><p>\u9879\u76EE\u4E2D\u4F7F\u7528\u7684\u901A\u7528\u6837\u5F0F\uFF0C\u90FD\u5B58\u653E\u4E8Esrc/assets/styles\u4E0B\u9762\u3002</p><div class="language-bash"><pre><code><span class="token builtin class-name">.</span>
\u251C\u2500\u2500 btn.scss <span class="token comment"># \u4E00\u4E9B\u6309\u94AE\u7684\u6837\u5F0F</span>
\u251C\u2500\u2500 element-ui.scss <span class="token comment"># \u590D\u5199element-ui\u7684\u6837\u5F0F</span>
\u251C\u2500\u2500 element-variables.scss <span class="token comment"># \u590D\u5199element-ui\u4E2D\u7684\u53D8\u91CF</span>
\u251C\u2500\u2500 index.scss <span class="token comment"># \u5165\u53E3</span>
\u251C\u2500\u2500 mixin.scss <span class="token comment"># scss\u4E2D\u5B9A\u4E49\u7684mixin\u65B9\u6CD5</span>
\u251C\u2500\u2500 public.scss <span class="token comment"># \u516C\u5171\u901A\u7528\u6837\u5F0F</span>
\u251C\u2500\u2500 sidebar.less  <span class="token comment"># sidebar\u7EC4\u4EF6\u6837\u5F0F</span>
\u251C\u2500\u2500 transition.scss <span class="token comment"># \u52A8\u753B\u76F8\u5173</span>
\u2514\u2500\u2500 variables.scss <span class="token comment"># \u53D8\u91CF</span>

</code></pre></div><h2 id="windicss"><a class="header-anchor" href="#windicss" aria-hidden="true">#</a> windicss</h2><p>\u9879\u76EE\u4E2D\u4F7F\u7528\u4E86 <a href="https://windicss.org/" target="_blank" rel="noopener noreferrer">windicss</a>\uFF0C\u5177\u4F53\u53C2\u89C1\u6587\u6863\u4F7F\u7528\u8BF4\u660E\u3002</p><p>\u8BED\u6CD5\u5982\u4E0B:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>relative w-full h-full px-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528-scss"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528-scss" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4F7F\u7528 Scss</h2><p>\u4E3B\u8981\u662F\u56E0\u4E3A element-ui \u9ED8\u8BA4\u4F7F\u7528scss \u4F5C\u4E3A\u6837\u5F0F\u8BED\u8A00\uFF0C\u4F7F\u7528 Scss \u53EF\u4EE5\u8DDF\u5176\u4FDD\u6301\u4E00\u81F4\u3002</p><h2 id="\u5F00\u542F-scoped"><a class="header-anchor" href="#\u5F00\u542F-scoped" aria-hidden="true">#</a> \u5F00\u542F scoped</h2><p>\u6CA1\u6709\u52A0 <code>scoped</code> \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u4F1A\u7F16\u8BD1\u6210\u5168\u5C40\u6837\u5F0F\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u5168\u5C40\u6C61\u67D3</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><p>\u4F7F\u7528 scoped \u540E\uFF0C\u7236\u7EC4\u4EF6\u7684\u6837\u5F0F\u5C06\u4E0D\u4F1A\u6E17\u900F\u5230\u5B50\u7EC4\u4EF6\u4E2D\u3002\u4E0D\u8FC7\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u7684\u6839\u8282\u70B9\u4F1A\u540C\u65F6\u53D7\u5176\u7236\u7EC4\u4EF6\u7684 scoped CSS \u548C\u5B50\u7EC4\u4EF6\u7684 scoped CSS \u7684\u5F71\u54CD\u3002\u8FD9\u6837\u8BBE\u8BA1\u662F\u4E3A\u4E86\u8BA9\u7236\u7EC4\u4EF6\u53EF\u4EE5\u4ECE\u5E03\u5C40\u7684\u89D2\u5EA6\u51FA\u53D1\uFF0C\u8C03\u6574\u5176\u5B50\u7EC4\u4EF6\u6839\u5143\u7D20\u7684\u6837\u5F0F\u3002</p></div><h2 id="\u6DF1\u5EA6\u9009\u62E9\u5668"><a class="header-anchor" href="#\u6DF1\u5EA6\u9009\u62E9\u5668" aria-hidden="true">#</a> \u6DF1\u5EA6\u9009\u62E9\u5668</h2><p>\u6709\u65F6\u6211\u4EEC\u53EF\u80FD\u60F3\u660E\u786E\u5730\u5236\u5B9A\u4E00\u4E2A\u9488\u5BF9\u5B50\u7EC4\u4EF6\u7684\u89C4\u5219\u3002</p><p>\u5982\u679C\u4F60\u5E0C\u671B <code>scoped</code> \u6837\u5F0F\u4E2D\u7684\u4E00\u4E2A\u9009\u62E9\u5668\u80FD\u591F\u4F5C\u7528\u5F97\u201C\u66F4\u6DF1\u201D\uFF0C\u4F8B\u5982\u5F71\u54CD\u5B50\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>&gt;&gt;&gt;</code> \u64CD\u4F5C\u7B26\u3002\u6709\u4E9B\u50CF Sass \u4E4B\u7C7B\u7684\u9884\u5904\u7406\u5668\u65E0\u6CD5\u6B63\u786E\u89E3\u6790 <code>&gt;&gt;&gt;</code>\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>/deep/</code> \u6216 <code>::v-deep</code> \u64CD\u4F5C\u7B26\u53D6\u800C\u4EE3\u4E4B\u2014\u2014\u4E24\u8005\u90FD\u662F <code>&gt;&gt;&gt;</code> \u7684\u522B\u540D\uFF0C\u540C\u6837\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u3002</p><p>\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B RFC<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md" target="_blank" rel="noopener noreferrer">0023-scoped-styles-changes</a>\u3002</p><p>\u4F7F\u7528 scoped \u540E\uFF0C\u7236\u7EC4\u4EF6\u7684\u6837\u5F0F\u5C06\u4E0D\u4F1A\u6E17\u900F\u5230\u5B50\u7EC4\u4EF6\u4E2D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">::v-deep</span> <span class="token punctuation">{</span>
    <span class="token selector">.el-scrollbar__bar</span> <span class="token punctuation">{</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.el-scrollbar__wrap</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 49px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="windiscss\u96C6\u6210"><a class="header-anchor" href="#windiscss\u96C6\u6210" aria-hidden="true">#</a> windiscss\u96C6\u6210</h2><p>1.Windi CSS\u7B80\u4ECB</p><p>Windi CSS \u662F\u4E0B\u4E00\u4EE3\u5DE5\u5177\u4F18\u5148\u7684 CSS \u6846\u67B6\u3002\u5982\u679C\u4F60\u5DF2\u7ECF\u719F\u6089\u4E86 Tailwind CSS\uFF0C\u53EF\u4EE5\u628A Windi CSS \u770B\u4F5C\u662F\u6309\u9700\u4F9B\u5E94\u7684 Tailwind \u66FF\u4EE3\u65B9\u6848\uFF0C\u5B83\u4E3A\u4F60\u63D0\u4F9B\u4E86\u66F4\u5FEB\u7684\u52A0\u8F7D\u4F53\u9A8C\uFF0C\u5B8C\u7F8E\u517C\u5BB9 Tailwind v2.0\uFF0C\u5E76\u4E14\u62E5\u6709\u5F88\u591A\u989D\u5916\u7684\u9177\u70AB\u529F\u80FD\u3002</p><p>\u200B \u901A\u8FC7\u626B\u63CF HTML \u548C CSS \u6309\u9700\u751F\u6210\u5DE5\u5177\u7C7B\uFF08utilities\uFF09\uFF0CWindi CSS \u81F4\u529B\u4E8E\u5728\u5F00\u53D1\u4E2D\u63D0\u4F9B <a href="https://twitter.com/antfu7/status/1361398324587163648" target="_blank" rel="noopener noreferrer">\u66F4\u5FEB\u7684\u52A0\u8F7D\u4F53\u9A8C</a> \u4EE5\u53CA\u66F4\u5FEB\u7684 HMR\uFF0C\u5E76\u4E14\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u65E0\u9700\u5BF9 CSS \u8FDB\u884C Purge\uFF08\u4E00\u79CD\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u5BF9\u672A\u4F7F\u7528\u7684 CSS \u8FDB\u884C\u6E05\u9664\u800C\u8282\u7701\u4F53\u79EF\u7684\u6280\u672F\uFF09\u3002</p><p>2.\u5B89\u88C5vue-cli-plugin-windicss\u63D2\u4EF6</p><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vue-cli-plugin-windicss
</code></pre></div><p>3.\u5728vue.config.js\u6587\u4EF6\u4E2D\u914D\u7F6E\u63D2\u4EF6</p><div class="language-js"><pre><code><span class="token comment">//vue.config.js</span>
 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">windicss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5177\u4F53\u914D\u7F6E\u8BF7\u67E5\u770B https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>4.\u5728main\u5165\u53E3\u6587\u4EF6\u5F15\u5165\u6837\u5F0F</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;windi.css&#39;</span>
<span class="token comment">// import &#39;virtual:windi.css&#39;</span>
</code></pre></div><p>5.\u4F7F\u7528\u793A\u4F8B</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>windicss \u4F7F\u7528<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-shrink-0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-12 w-12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@/assets/logo/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-xl font-medium text-black<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ChitChat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-gray-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>You have a new message!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-12 w-12 mt-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@/assets/logo/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Woman&#39;s Face<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-center space-y-2 sm:text-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>space-y-0.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-lg text-black font-semibold<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Erin Lindford<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-gray-500 font-medium<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Product Engineer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          Message
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre></div><p>6.vscode\u63D2\u4EF6\u63A8\u8350</p><p>\u5728vscode\u7F16\u8F91\u5668\u4E2D\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5<code>Windi CSS Intellisense</code>\u63D2\u4EF6\uFF0C\u6765\u63D0\u9AD8 Windi \u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u4F8B\u5982\uFF1A\u81EA\u52A8\u8865\u5168\u3001\u8BED\u6CD5\u9AD8\u4EAE\u3001\u4EE3\u7801\u6298\u53E0\u548C\u6784\u5EFA\u3002</p><p>7.\u6269\u5C55</p><p>Atomic CSS\u539F\u2F26 CSS \u662F\u2F00\u79CD CSS \u67B6\u6784\u2F45\u6CD5\uFF0C\u4F20\u7EDF\u2F45\u6CD5\u4F7F\u2F64\u9884 \u5904\u7406\u5668\u7F16\u8BD1\u540E\u2F63\u6210\u6837\u5F0F\uFF0C\u4F46\u662F\u4F53\u79EF\u2F24\u3002\uFF08\u7C7B\u4F3C\u2F8F\u5185\u6837\u5F0F\uFF0C\u4F46\u662F \u2F8F\u5185\u6837\u5F0F\u7F3A\u70B9\uFF1A\u5197\u4F59\uFF09</p><ul><li>Tailwind\u4F9D\u8D56 PostCSS \u548C Autoprefixer + purgeCSS,\u5F00\u53D1 \u73AF\u5883 css \u4F53\u79EF\u2F24</li><li>Windi CSS\u662F\u2F00\u79CD Tailwind CSS \u66FF\u4EE3\u54C1\uFF0C\u4E0D\u4F9D\u8D56\uFF0C\u6309\u9700\u4F7F \u2F64\u3002\u91C7\u2F64\u9884\u626B\u63CF\u7684\u2F45\u5F0F\u2F63\u6210\u6837\u5F0F\u3002 \u4F46\u662F\u2F83\u5B9A\u4E49\u590D\u6742~~</li><li><a href="https://github.com/unocss/unocss" target="_blank" rel="noopener noreferrer">unocss</a>\u662F\u539F\u2F26 CSS \u5F15\u64CE\uFF0C\u89C4\u5219\u5B9A\u4E49\u7B80\u5355\u6613\u8BFB\u3002\u2F40\u6301\u9884\u8BBE\u3001 \u2F40\u6301\u5C5E\u6027\u3001\u7EAF css \u56FE\u6807</li></ul><blockquote><p>Tailwind\u5728\u9879\u76EE\u96C6\u6210\u7684\u8FC7\u7A0B\u4E2D\u7531\u4E8EPostCSS\u7248\u672C\u7684\u95EE\u9898\uFF0C\u9009\u62E9\u4E86\u6309\u9700\u4F7F\u7528\u7684<code>Windicss</code>,UnoCSS \u662F\u4E00\u4E2A\u5177\u6709\u9AD8\u6027\u80FD\u4E14\u6781\u5177\u7075\u6D3B\u6027\u7684\u5373\u65F6\u539F\u5B50\u5316 CSS \u5F15\u64CE\uFF0C\u53D7 Windi CSS\u3001Tailwind CSS\u3001Twind \u7684\u542F\u53D1\u3002UnoCSS \u662F\u4E00\u4E2A<strong>\u5F15\u64CE</strong>\uFF0C\u800C\u975E\u4E00\u6B3E<strong>\u6846\u67B6</strong>\uFF0C\u56E0\u4E3A\u5B83<strong>\u5E76\u672A\u63D0\u4F9B\u6838\u5FC3\u5DE5\u5177\u7C7B</strong>\uFF0C\u6240\u6709\u529F\u80FD\u53EF\u4EE5\u901A\u8FC7\u9884\u8BBE\u548C\u5185\u8054\u914D\u7F6E\u63D0\u4F9B\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CUnoCSS \u5E94\u7528<a href="https://github.com/antfu/unocss/tree/main/packages/preset-uno" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u9884\u8BBE</a>\u3002\u5B83\u63D0\u4F9B\u4E86\u6D41\u884C\u7684\u5B9E\u7528\u7A0B\u5E8F\u4F18\u5148\u6846\u67B6\u7684\u901A\u7528\u8D85\u96C6\uFF0C\u5305\u62EC Tailwind CSS\u3001Windi CSS\u3001Bootstrap\u3001Tachyons \u7B49.</p></blockquote><p>UnoCSS \u5728vite\u4E2D\u652F\u6301\u53CB\u597D\uFF0C\u5728webpack\u4E2D\u6709\u90E8\u5206\u6837\u5F0F\u4F1A\u4E0D\u751F\u6548\uFF0C\u56E0\u6B64\u9009\u62E9\u4E86<code>windicss</code>\u3002</p>`,41),o=[e];function c(l,u,i,k,r,g){return a(),n("div",null,o)}var v=s(p,[["render",c]]);export{m as __pageData,v as default};