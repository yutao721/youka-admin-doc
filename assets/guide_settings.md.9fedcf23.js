import{_ as n,f as a,e as s,N as e}from"./plugin-vue_export-helper.87254cb5.js";const m='{"title":"\u9879\u76EE\u914D\u7F6E\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u73AF\u5883\u53D8\u91CF\u914D\u7F6E","slug":"\u73AF\u5883\u53D8\u91CF\u914D\u7F6E"},{"level":3,"title":"\u5982\u4F55\u65B0\u589E(\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879)","slug":"\u5982\u4F55\u65B0\u589E-\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879"},{"level":2,"title":"\u9879\u76EE\u914D\u7F6E","slug":"\u9879\u76EE\u914D\u7F6E"},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84","slug":"\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"}],"relativePath":"guide/settings.md","lastUpdated":1665540977483}',t={},o=e(`<h1 id="\u9879\u76EE\u914D\u7F6E\u9879"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E\u9879</h1><h2 id="\u73AF\u5883\u53D8\u91CF\u914D\u7F6E"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u914D\u7F6E</h2><p>\u9879\u76EE\u7684\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u4F4D\u4E8E\u9879\u76EE\u6839\u76EE\u5F55\u4E0B</p><p>\u5177\u4F53\u53EF\u4EE5\u53C2\u8003<a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">Vue-cli</a></p><div class="language-bash"><pre><code>.env                <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165</span>
.env.local          <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>

</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><ul><li>\u8BF7\u6CE8\u610F\uFF0C\u53EA\u6709 <code>NODE_ENV</code>\uFF0C<code>BASE_URL</code> \u548C\u4EE5 <code>VUE_APP_</code> \u5F00\u5934\u7684\u53D8\u91CF\u5C06\u901A\u8FC7 <code>webpack.DefinePlugin</code> \u9759\u6001\u5730\u5D4C\u5165\u5230<em>\u5BA2\u6237\u7AEF\u4FA7</em>\u7684\u4EE3\u7801\u4E2D\u3002\u8FD9\u662F\u4E3A\u4E86\u907F\u514D\u610F\u5916\u516C\u5F00\u673A\u5668\u4E0A\u53EF\u80FD\u5177\u6709\u76F8\u540C\u540D\u79F0\u7684\u79C1\u94A5\uFF0C\u4F60\u53EF\u4EE5\u9879\u76EE\u4EE3\u7801\u4E2D\u8FD9\u6837\u8BBF\u95EE\u5B83\u4EEC\uFF1A</li></ul><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div><h3 id="\u5982\u4F55\u65B0\u589E-\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879"><a class="header-anchor" href="#\u5982\u4F55\u65B0\u589E-\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u5982\u4F55\u65B0\u589E(\u65B0\u589E\u4E00\u4E2A\u53EF\u52A8\u6001\u4FEE\u6539\u7684\u914D\u7F6E\u9879)</h3><ol><li>\u9996\u5148\u5728 <code>.env</code> \u6216\u8005\u5BF9\u5E94\u7684\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u5185\uFF0C\u65B0\u589E\u9700\u8981\u53EF\u52A8\u6001\u914D\u7F6E\u7684\u53D8\u91CF\uFF0C\u9700\u8981\u4EE5 <code>VUE_APP_</code>\u5F00\u5934</li><li><code>VUE_APP_</code> \u5F00\u5934\u7684\u53D8\u91CF\u4F1A\u81EA\u52A8\u52A0\u5165\u73AF\u5883\u53D8\u91CF</li></ol><h2 id="\u9879\u76EE\u914D\u7F6E"><a class="header-anchor" href="#\u9879\u76EE\u914D\u7F6E" aria-hidden="true">#</a> \u9879\u76EE\u914D\u7F6E</h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u9879\u76EE\u914D\u7F6E\u6587\u4EF6\u7528\u4E8E\u914D\u7F6E\u9879\u76EE\u5185\u5C55\u793A\u7684\u5185\u5BB9\u3001\u5E03\u5C40\u3001\u6587\u672C\u7B49\u6548\u679C\uFF0C\u5B58\u4E8E<code>localStorage</code>\u4E2D\u3002\u5982\u679C\u66F4\u6539\u4E86\u9879\u76EE\u914D\u7F6E\uFF0C\u9700\u8981\u624B\u52A8<strong>\u6E05\u7A7A</strong> <code>localStorage</code> \u7F13\u5B58\uFF0C\u5237\u65B0\u91CD\u65B0\u767B\u5F55\u540E\u65B9\u53EF\u751F\u6548\u3002</p></div><h3 id="\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84</h3><p>src/settings.js</p><h3 id="\u8BF4\u660E"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><div class="language-js"><pre><code><span class="token comment">// ! \u6539\u52A8\u540E\u9700\u8981\u6E05\u7A7A\u6D4F\u89C8\u5668\u7F13\u5B58</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u914D\u7F6E\u5165\u53E3</span>
  <span class="token literal-property property">isShowSettingEnter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4FA7\u8FB9\u680F\u4E3B\u9898 \u6DF1\u8272\u4E3B\u9898theme-dark\uFF0C\u6D45\u8272\u4E3B\u9898theme-light</span>
  <span class="token literal-property property">sideTheme</span><span class="token operator">:</span> <span class="token string">&#39;theme-dark&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u7CFB\u7EDF\u5E03\u5C40\u914D\u7F6E</span>
  <span class="token literal-property property">showSettings</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u9876\u90E8\u5BFC\u822A</span>
  <span class="token literal-property property">topNav</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A tagsView</span>
  <span class="token literal-property property">tagsView</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u56FA\u5B9A\u5934\u90E8</span>
  <span class="token literal-property property">fixedHeader</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793Alogo</span>
  <span class="token literal-property property">sidebarLogo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u52A8\u6001\u6807\u9898</span>
  <span class="token literal-property property">dynamicTitle</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

</code></pre></div>`,14),p=[o];function c(l,r,i,d,u,k){return s(),a("div",null,p)}var _=n(t,[["render",c]]);export{m as __pageData,_ as default};
