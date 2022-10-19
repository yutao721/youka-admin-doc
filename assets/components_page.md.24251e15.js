import{_ as t,f as n,e as a,N as s}from"./plugin-vue_export-helper.87254cb5.js";const y='{"title":"Pagination \u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u65B9\u5F0F","slug":"\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/page.md","lastUpdated":1666164929463}',e={},p=s(`<h1 id="pagination-\u5206\u9875"><a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a> Pagination \u5206\u9875</h1><p>Pagination \u7EC4\u4EF6\u4E3B\u8981\u662F\u57FA\u4E8E Element \u7684 <code>el-pagination</code>\u8FDB\u884C\u4E86\u4E8C\u6B21\u5C01\u88C5\uFF0C\u5E76\u62D3\u5C55\u4E86\u81EA\u52A8\u6EDA\u52A8\u7684\u529F\u80FD\u3002</p><h2 id="\u4F7F\u7528\u65B9\u5F0F"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span>
    <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:page.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listQuery.page<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:limit.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listQuery.limit<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getList<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Pagination <span class="token keyword">from</span> <span class="token string">&#39;@/components/Pagination&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">listQuery</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u6570\u636E</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="attributes"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">total</td><td style="text-align:left;">\u603B\u6761\u76EE\u6570</td><td style="text-align:center;">Number</td><td style="text-align:center;">/</td></tr><tr><td style="text-align:center;">page</td><td style="text-align:left;">\u5F53\u524D\u9875\u6570 \u652F\u6301 .sync \u4FEE\u9970\u7B26</td><td style="text-align:center;">Number</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">limit</td><td style="text-align:left;">\u6BCF\u9875\u663E\u793A\u6761\u76EE\u4E2A\u6570\uFF0C\u652F\u6301 .sync \u4FEE\u9970\u7B26</td><td style="text-align:center;">Number</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">page-sizes</td><td style="text-align:left;">\u6BCF\u9875\u663E\u793A\u4E2A\u6570\u9009\u62E9\u5668\u7684\u9009\u9879\u8BBE\u7F6E</td><td style="text-align:center;">Number []</td><td style="text-align:center;">10, 20, 30, 50]</td></tr><tr><td style="text-align:center;">hidden</td><td style="text-align:left;">\u662F\u5426\u9690\u85CF</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">auto-scroll</td><td style="text-align:left;">\u5206\u9875\u4E4B\u540E\u662F\u5426\u81EA\u52A8\u6EDA\u52A8\u5230\u9876\u90E8</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td></tr></tbody></table><p>\u5176\u5B83 Element \u7684 <code>el-pagination</code>\u652F\u6301\u7684\u5C5E\u6027\uFF0C\u5B83\u4E5F\u90FD\u652F\u6301\u3002\u8BE6\u60C5\u89C1<a href="http://element.eleme.io/#/zh-CN/component/pagination" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></p><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>pagination</td><td>\u5F53 limit \u6216\u8005 page \u53D1\u751F\u6539\u53D8\u65F6\u4F1A\u89E6\u53D1</td><td>{page,limit}</td></tr></tbody></table>`,9),o=[p];function l(c,r,i,u,d,k){return a(),n("div",null,o)}var h=t(e,[["render",l]]);export{y as __pageData,h as default};
