import{_ as a,f as n,e as s,N as t}from"./plugin-vue_export-helper.87254cb5.js";const h='{"title":"\u5F15\u5165\u5916\u90E8\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u5168\u5C40\u4F7F\u7528","slug":"\u5168\u5C40\u4F7F\u7528"},{"level":3,"title":"\u5C40\u90E8\u4F7F\u7528","slug":"\u5C40\u90E8\u4F7F\u7528"},{"level":2,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F"}],"relativePath":"guide/lib.md","lastUpdated":1666094022545}',p={},e=t(`__VP_STATIC_START__<h1 id="\u5F15\u5165\u5916\u90E8\u6A21\u5757"><a class="header-anchor" href="#\u5F15\u5165\u5916\u90E8\u6A21\u5757" aria-hidden="true">#</a> \u5F15\u5165\u5916\u90E8\u6A21\u5757</h1><p>\u9664\u4E86\u81EA\u5E26\u7EC4\u4EF6\u4EE5\u5916\uFF0C\u6709\u65F6\u6211\u4EEC\u8FD8\u9700\u8981\u5F15\u5165\u5176\u4ED6\u5916\u90E8\u6A21\u5757\u3002\u6211\u4EEC\u4EE5 <code>vue-count-to</code> \u4E3A\u4F8B\uFF1A</p><h2 id="\u5B89\u88C5"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5B89\u88C5 <code>vue-count-to</code></p><div class="language-bash"><pre><code><span class="token comment"># \u5728\u7EC8\u7AEF\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\u5B8C\u6210\u5B89\u88C5</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue-count-to
</code></pre></div><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u5168\u5C40\u4F7F\u7528"><a class="header-anchor" href="#\u5168\u5C40\u4F7F\u7528" aria-hidden="true">#</a> \u5168\u5C40\u4F7F\u7528</h3><p>\u5728main.js\u4E2D\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">import</span> countTo <span class="token keyword">from</span> <span class="token string">&#39;vue-count-to&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;countTo&#39;</span><span class="token punctuation">,</span> countTo<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5C40\u90E8\u4F7F\u7528"><a class="header-anchor" href="#\u5C40\u90E8\u4F7F\u7528" aria-hidden="true">#</a> \u5C40\u90E8\u4F7F\u7528</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>count-to</span>
       <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:start-val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_startVal<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:end-val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_endVal<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_duration<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:decimals</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_decimals<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_separator<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_prefix<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_suffix<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">:autoplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span>
     <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> countTo <span class="token keyword">from</span> <span class="token string">&#39;vue-count-to&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;CountToDemo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> countTo <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">setStartVal</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setEndVal</span><span class="token operator">:</span> <span class="token number">2017</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setDuration</span><span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setDecimals</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setSeparator</span><span class="token operator">:</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setSuffix</span><span class="token operator">:</span> <span class="token string">&#39; rmb&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">setPrefix</span><span class="token operator">:</span> <span class="token string">&#39;\xA5 &#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6CE8\u610F"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><ul><li>\u5982\u679C\u7EC4\u4EF6\u6709\u4F9D\u8D56\u6837\u5F0F\uFF0C\u5219\u9700\u8981\u518D\u5F15\u5165\u6837\u5F0F\u6587\u4EF6</li></ul>__VP_STATIC_END__`,13),o=[e];function c(l,u,r,i,k,d){return s(),n("div",null,o)}var m=a(p,[["render",c]]);export{h as __pageData,m as default};
