import{_ as n,f as s,e as a,N as p}from"./plugin-vue_export-helper.87254cb5.js";const h='{"title":"\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92","slug":"\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92"},{"level":3,"title":"\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B","slug":"\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B"},{"level":3,"title":"request.js","slug":"request-js"},{"level":3,"title":"\u4E00\u4E2A\u8BF7\u6C42\u6587\u7AE0\u5217\u8868\u9875\u7684\u4F8B\u5B50\uFF1A","slug":"\u4E00\u4E2A\u8BF7\u6C42\u6587\u7AE0\u5217\u8868\u9875\u7684\u4F8B\u5B50\uFF1A"},{"level":3,"title":"\u8BBE\u7F6E\u591A\u4E2A baseURL","slug":"\u8BBE\u7F6E\u591A\u4E2A-baseurl"},{"level":2,"title":"Mock Data","slug":"mock-data"},{"level":3,"title":"Mockjs","slug":"mockjs"},{"level":3,"title":"\u79FB\u9664","slug":"\u79FB\u9664"},{"level":3,"title":"\u65B0\u589E","slug":"\u65B0\u589E"},{"level":3,"title":"\u4FEE\u6539","slug":"\u4FEE\u6539"},{"level":3,"title":"\u591A\u4E2A server","slug":"\u591A\u4E2A-server"},{"level":3,"title":"\u542F\u7528\u7EAF\u524D\u7AEF Mock","slug":"\u542F\u7528\u7EAF\u524D\u7AEF-mock"},{"level":3,"title":"\u672C\u5730 Mock \u6570\u636E\u4E0E\u7EBF\u4E0A\u6570\u636E\u5207\u6362","slug":"\u672C\u5730-mock-\u6570\u636E\u4E0E\u7EBF\u4E0A\u6570\u636E\u5207\u6362"}],"relativePath":"guide/mock.md","lastUpdated":1666173848443}',t={},e=p(`__VP_STATIC_START__<h2 id="\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92"><a class="header-anchor" href="#\u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92" aria-hidden="true">#</a> \u548C\u670D\u52A1\u7AEF\u8FDB\u884C\u4EA4\u4E92</h2><h3 id="\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B"><a class="header-anchor" href="#\u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> \u524D\u7AEF\u8BF7\u6C42\u6D41\u7A0B</h3><p>\u4E00\u4E2A\u5B8C\u6574\u7684\u524D\u7AEF UI \u4EA4\u4E92\u5230\u670D\u52A1\u7AEF\u5904\u7406\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p><ol><li>UI \u7EC4\u4EF6\u4EA4\u4E92\u64CD\u4F5C\uFF1B</li><li>\u8C03\u7528\u7EDF\u4E00\u7BA1\u7406\u7684 api service \u8BF7\u6C42\u51FD\u6570\uFF1B</li><li>\u4F7F\u7528\u5C01\u88C5\u7684 request.js \u53D1\u9001\u8BF7\u6C42\uFF1B</li><li>\u83B7\u53D6\u670D\u52A1\u7AEF\u8FD4\u56DE\uFF1B</li><li>\u66F4\u65B0 data\uFF1B</li></ol><p>\u4ECE\u4E0A\u9762\u7684\u6D41\u7A0B\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406\u7EF4\u62A4\uFF0C\u7EDF\u4E00\u7684\u8BF7\u6C42\u5904\u7406\u90FD\u653E\u5728 <code>@/api</code> \u6587\u4EF6\u5939\u4E2D\uFF0C\u5E76\u4E14\u4E00\u822C\u6309\u7167 model \u7EAC\u5EA6\u8FDB\u884C\u62C6\u5206\u6587\u4EF6\uFF0C\u5982\uFF1A</p><div class="language-text"><pre><code>api/
  login.js
  article.js
  remoteSearch.js
  ...
</code></pre></div><h3 id="request-js"><a class="header-anchor" href="#request-js" aria-hidden="true">#</a> request.js</h3><p>\u5176\u4E2D\uFF0C<code>@/utils/request.js</code> \u662F\u57FA\u4E8E <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios</a> \u7684\u5C01\u88C5\uFF0C\u4FBF\u4E8E\u7EDF\u4E00\u5904\u7406 POST\uFF0CGET \u7B49\u8BF7\u6C42\u53C2\u6570\uFF0C\u8BF7\u6C42\u5934\uFF0C\u4EE5\u53CA\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u7B49\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u770B <code>request.js</code>\u3002 \u5B83\u5C01\u88C5\u4E86\u5168\u5C40 <code>request\u62E6\u622A\u5668</code>\u3001<code>response\u62E6\u622A\u5668</code>\u3001<code>\u7EDF\u4E00\u7684\u9519\u8BEF\u5904\u7406</code>\u3001<code>\u7EDF\u4E00\u505A\u4E86\u8D85\u65F6\u5904\u7406</code>\u3001<code>baseURL\u8BBE\u7F6E\u7B49</code>\u3002</p><h3 id="\u4E00\u4E2A\u8BF7\u6C42\u6587\u7AE0\u5217\u8868\u9875\u7684\u4F8B\u5B50\uFF1A"><a class="header-anchor" href="#\u4E00\u4E2A\u8BF7\u6C42\u6587\u7AE0\u5217\u8868\u9875\u7684\u4F8B\u5B50\uFF1A" aria-hidden="true">#</a> \u4E00\u4E2A\u8BF7\u6C42\u6587\u7AE0\u5217\u8868\u9875\u7684\u4F8B\u5B50\uFF1A</h3><div class="language-js"><pre><code><span class="token comment">// api/article.js</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;../utils/request&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> query
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// views/example/list</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/article&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">listLoading</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>listLoading <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>items
        <span class="token keyword">this</span><span class="token punctuation">.</span>listLoading <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8BBE\u7F6E\u591A\u4E2A-baseurl"><a class="header-anchor" href="#\u8BBE\u7F6E\u591A\u4E2A-baseurl" aria-hidden="true">#</a> \u8BBE\u7F6E\u591A\u4E2A baseURL</h3><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u591A\u4E2A<code>baseURL</code>\uFF0C\u4ECE\u800C\u8BF7\u6C42\u4E0D\u540C\u7684 api \u5730\u5740\u3002</p><div class="language-bash"><pre><code><span class="token comment"># .env.development</span>
VUE_APP_BASE_API <span class="token operator">=</span> <span class="token string">&#39;/dev-api&#39;</span> <span class="token comment">#\u6CE8\u5165\u672C\u5730 api \u7684\u6839\u8DEF\u5F84</span>
VUE_APP_BASE_API2 <span class="token operator">=</span> <span class="token string">&#39;/dev-api2&#39;</span> <span class="token comment">#\u6CE8\u5165\u672C\u5730 api2 \u7684\u6839\u8DEF\u5F84</span>
</code></pre></div><p>\u4E4B\u540E\u6839\u636E\u73AF\u5883\u53D8\u91CF\u521B\u5EFA<code>axios</code>\u5B9E\u4F8B\uFF0C\u8BA9\u5B83\u5177\u6709\u4E0D\u540C\u7684<code>baseURL</code>\u3002</p><div class="language-js"><pre><code><span class="token comment">// create an axios instance</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_API</span><span class="token punctuation">,</span> <span class="token comment">// api \u7684 base_url</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// request timeout</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> service2 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_API2</span><span class="token punctuation">,</span> <span class="token comment">// api2 \u7684 base_url</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// request timeout</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6216\u8005</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchList</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> query<span class="token punctuation">,</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span> <span class="token comment">// \u76F4\u63A5\u901A\u8FC7\u8986\u76D6\u7684\u65B9\u5F0F</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="mock-data"><a class="header-anchor" href="#mock-data" aria-hidden="true">#</a> Mock Data</h2><p>Mock \u6570\u636E\u662F\u524D\u7AEF\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u73AF\uFF0C\u662F\u5206\u79BB\u524D\u540E\u7AEF\u5F00\u53D1\u7684\u5173\u952E\u94FE\u8DEF\u3002\u901A\u8FC7\u9884\u5148\u8DDF\u670D\u52A1\u5668\u7AEF\u7EA6\u5B9A\u597D\u7684\u63A5\u53E3\uFF0C\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\u751A\u81F3\u903B\u8F91\uFF0C\u80FD\u591F\u8BA9\u524D\u7AEF\u5F00\u53D1\u66F4\u52A0\u72EC\u7ACB\u81EA\u4E3B\uFF0C\u4E0D\u4F1A\u88AB\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u6240\u963B\u585E\u3002</p><h3 id="mockjs"><a class="header-anchor" href="#mockjs" aria-hidden="true">#</a> Mockjs</h3><p>\u5728\u672C\u5730\u4F1A\u542F\u52A8\u4E00\u4E2A<code>mock-server</code>\u6765\u6A21\u62DF\u6570\u636E\uFF0C mock \u662F\u5B8C\u5168\u57FA\u4E8E<code>webpack-dev-serve</code>\u6765\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u5728\u542F\u52A8\u524D\u7AEF\u670D\u52A1\u7684\u540C\u65F6\uFF0C<code>mock-server</code>\u5C31\u4F1A\u81EA\u52A8\u542F\u52A8\uFF0C\u800C\u4E14\u8FD9\u91CC\u8FD8\u901A\u8FC7 <a href="https://github.com/paulmillr/chokidar" target="_blank" rel="noopener noreferrer">chokidar</a> \u6765\u89C2\u5BDF <code>mock</code> \u6587\u4EF6\u5939\u5185\u5BB9\u7684\u53D8\u5316\u3002\u5728\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u6E05\u9664\u4E4B\u524D\u6CE8\u518C\u7684<code>mock-api</code>\u63A5\u53E3\uFF0C\u91CD\u65B0\u52A8\u6001\u6302\u8F7D\u65B0\u7684\u63A5\u53E3\uFF0C\u4ECE\u800C\u652F\u6301\u70ED\u66F4\u65B0\u3002\u7531\u4E8E\u662F\u4E00\u4E2A\u771F\u6B63\u7684<code>server</code>\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u53F0\u4E2D\u7684<code>network</code>\uFF0C\u6E05\u695A\u7684\u77E5\u9053\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u7ED3\u6784\u3002</p><p>\u672C\u9879\u76EE\u7684\u6240\u6709\u8BF7\u6C42\u90FD\u662F\u901A\u8FC7\u5C01\u88C5\u7684request.js\u8FDB\u884C\u53D1\u9001\u7684\uFF0C\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u8BBE\u7F6E\u4E86\u4E00\u4E2A<code>baseURL</code>\uFF0C\u800C\u8FD9\u4E2A<code>baseURL</code>\u53C8\u662F\u901A\u8FC7\u8BFB\u53D6<code>process.<wbr>env.VUE_APP_BASE_API</code>\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u6765\u52A8\u6001\u8BBE\u7F6E\u7684\uFF0C\u8FD9\u6837\u65B9\u4FBF\u6211\u4EEC\u505A\u5230\u4E0D\u540C\u73AF\u5883\u4F7F\u7528\u4E0D\u540C\u7684 <code>api</code> \u5730\u5740\u3002</p><h3 id="\u79FB\u9664"><a class="header-anchor" href="#\u79FB\u9664" aria-hidden="true">#</a> \u79FB\u9664</h3><p>\u5982\u679C\u4F60\u4E0D\u60F3\u4F7F\u7528<code>mock-server</code>\u7684\u8BDD\u53EA\u8981\u5728vue.config.js\u4E2D\u79FB\u9664<code>webpack-dev-server</code>\u4E2D<code>proxy</code>\u548C<code>before</code>\u8FD9\u4E2A<code>Middleware</code>\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u73B0\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u672C\u5730\u7684\u8BF7\u6C42\u4F1A\u4EE3\u7406\u5230<code>http://localhost:\${port}/mock</code>\u4E0B\uFF0C\u5982\u679C\u4F60\u60F3\u8C03\u6574\u4E3A\u81EA\u5DF1\u7684 mock \u5730\u5740\u53EF\u4EE5\u4FEE\u6539 <code>proxy</code></p><div class="language-js"><pre><code><span class="token literal-property property">pproxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// detail: https://cli.vuejs.org/config/#devserver-proxy</span>
      <span class="token punctuation">[</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://localhost:8080</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token punctuation">[</span><span class="token string">&#39;^&#39;</span> <span class="token operator">+</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F00\u542Fmock</span>
    <span class="token literal-property property">before</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span> <span class="token operator">?</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mock/mock-server.js&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>\u8BF7\u6CE8\u610F\uFF1A\u8BE5\u64CD\u4F5C\u9700\u8981\u91CD\u542F\u670D\u52A1</strong></p></div><p><code>mock-server</code>\u53EA\u4F1A\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u7EBF\u4E0A\u751F\u4EA7\u73AF\u5883\u76EE\u524D\u4F7F\u7528<code>MockJs</code>\u8FDB\u884C\u6A21\u62DF\u3002\u5982\u679C\u4E0D\u9700\u8981\u8BF7\u79FB\u9664\u3002\u5177\u4F53\u4EE3\u7801\uFF1Amain.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mockXHR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../mock&#39;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">mockXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u65B0\u589E"><a class="header-anchor" href="#\u65B0\u589E" aria-hidden="true">#</a> \u65B0\u589E</h3><p>\u5982\u679C\u4F60\u60F3\u6DFB\u52A0 mock \u6570\u636E\uFF0C\u53EA\u8981\u5728\u6839\u76EE\u5F55\u4E0B\u627E\u5230<code>mock</code>\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u5BF9\u5176\u8FDB\u884C\u62E6\u622A\u548C\u6A21\u62DF\u6570\u636E\u5373\u53EF\u3002</p><p>\u6BD4\u5982\u6211\u73B0\u5728\u5728src/api/article\u4E2D\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u67E5\u8BE2\u67D0\u7BC7\u6587\u7AE0\u4E0B\u9762\u8BC4\u8BBA\u6570\u7684\u63A5\u53E3<code>fetchComments</code>\uFF0C\u9996\u5148\u65B0\u5EFA\u63A5\u53E3\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchComments</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/article/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/comments</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u58F0\u660E\u5B8C\u63A5\u53E3\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230\u5BF9\u5E94\u7684 mock \u6587\u4EF6\u5939mock/article.js\uFF0C\u5728\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A\u80FD\u62E6\u622A\u8DEF\u7531\u7684 mock \u63A5\u53E3</p><p><strong>\u8BF7\u6CE8\u610F\uFF0Cmock \u62E6\u622A\u662F\u57FA\u4E8E\u8DEF\u7531\u6765\u505A\u7684\uFF0C\u8BF7\u786E\u4FDD mock \u6570\u636E\u4E00\u5B9A\u80FD\u5339\u914D\u4F60\u7684 api \u8DEF\u7531\uFF0C\u652F\u6301\u6B63\u5219</strong></p><div class="language-js"><pre><code><span class="token comment">// fetchComments \u7684 mock</span>
<span class="token punctuation">{</span>
  <span class="token comment">// url \u5FC5\u987B\u80FD\u5339\u914D\u4F60\u7684\u63A5\u53E3\u8DEF\u7531</span>
  <span class="token comment">// \u6BD4\u5982 fetchComments \u5BF9\u5E94\u7684\u8DEF\u7531\u53EF\u80FD\u662F /article/1/comments \u6216\u8005 /article/2/comments</span>
  <span class="token comment">// \u6240\u4EE5\u4F60\u9700\u8981\u901A\u8FC7\u6B63\u5219\u6765\u8FDB\u884C\u5339\u914D</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/article/[A-Za-z0-9]/comments&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u548C\u4F60\u63A5\u53E3\u5B9A\u4E49\u7684\u7C7B\u578B\u4E00\u6837</span>
  <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD4\u56DE\u7684\u7ED3\u679C</span>
    <span class="token comment">// req and res detail see</span>
    <span class="token comment">// https://expressjs.com/zh-cn/api.html#req</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4FEE\u6539"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h3><p>\u6700\u5E38\u89C1\u7684\u64CD\u4F5C\u5C31\u662F\uFF1A\u4F60\u672C\u5730\u6A21\u62DF\u4E86\u4E86\u4E00\u4E9B\u6570\u636E\uFF0C\u5F85\u540E\u7AEF\u5B8C\u6210\u63A5\u53E3\u540E\uFF0C\u9010\u6B65\u66FF\u6362\u6389\u539F\u5148 mock \u7684\u63A5\u53E3\u3002</p><p>\u6211\u4EEC\u4EE5src/api/role.js\u4E2D\u7684<code>getRoles</code>\u63A5\u53E3\u4E3A\u4F8B\u3002\u5B83\u539F\u672C\u662F\u5728mock/role/index.js\u4E2D mock \u7684\u6570\u636E\u3002\u73B0\u5728\u6211\u4EEC\u9700\u8981\u5C06\u5B83\u5207\u6362\u4E3A\u771F\u5B9E\u540E\u7AEF\u6570\u636E\uFF0C\u53EA\u8981\u5728mock/role/index.js\u627E\u5230\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u4E4B\u540E\u5C06\u5B83\u5220\u9664\u5373\u53EF\u3002\u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u5728<code>network</code>\u4E2D\uFF0C\u67E5\u770B\u5230\u771F\u5B9E\u7684\u6570\u636E\u3002</p><div class="language-js"><pre><code><span class="token comment">// api \u4E2D\u58F0\u660E\u7684\u8DEF\u7531</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getRoles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/roles&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u627E\u5230\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u5E76\u5220\u9664</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/roles&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> roles
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u591A\u4E2A-server"><a class="header-anchor" href="#\u591A\u4E2A-server" aria-hidden="true">#</a> \u591A\u4E2A server</h3><p>\u76EE\u524D\u9879\u76EE\u53EA\u542F\u52A8\u4E86\u4E00\u4E2A<code>mock-server</code>\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u6709\u81EA\u5DF1\u5176\u5B83\u7684<code>mock-server</code>\u6216\u8005\u4EE3\u7406\u63A5\u53E3\u3002\u53EF\u4EE5\u4E00\u90E8\u5206\u63A5\u53E3\u8D70\u8FD9\u4E2A\u670D\u52A1\uFF0C\u53E6\u4E00\u4E9B\u63A5\u53E3\u8D70\u53E6\u4E00\u4E2A\u670D\u52A1\u3002\u53EA\u9700\u8981\u5C06\u5B83\u4EEC\u5206\u522B\u8BBE\u7F6E\u4E0D\u540C\u7684\u7684<code>baseURL</code>\u5373\u53EF\u3002</p><p>\u4E4B\u540E\u6839\u636E\u8BBE\u7F6E\u7684 url \u89C4\u5219\u5728 vue.config.js \u4E2D\u914D\u7F6E\u591A\u4E2A <code>proxy</code> \u3002</p><h3 id="\u542F\u7528\u7EAF\u524D\u7AEF-mock"><a class="header-anchor" href="#\u542F\u7528\u7EAF\u524D\u7AEF-mock" aria-hidden="true">#</a> \u542F\u7528\u7EAF\u524D\u7AEF Mock</h3><p>\u73B0\u5728\u5728mock/index.js\u4E5F\u5C01\u88C5\u4E86\u4E00\u4E2A\u7EAF\u524D\u7AEF mock \u7684\u65B9\u6CD5\uFF0C\u4F60\u53EA\u9700\u8981\u5728src/main.js\u4E2D\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mockXHR <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../mock&#39;</span>
<span class="token function">mockXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u6837\u5C31\u4F1A\u53D8\u6210\u7EAF\u524D\u7AEF mock \u6570\u636E\u4E86</p><h3 id="\u672C\u5730-mock-\u6570\u636E\u4E0E\u7EBF\u4E0A\u6570\u636E\u5207\u6362"><a class="header-anchor" href="#\u672C\u5730-mock-\u6570\u636E\u4E0E\u7EBF\u4E0A\u6570\u636E\u5207\u6362" aria-hidden="true">#</a> \u672C\u5730 Mock \u6570\u636E\u4E0E\u7EBF\u4E0A\u6570\u636E\u5207\u6362</h3><p>\u6709\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u4F1A\u9047\u5230\u672C\u5730\u4F7F\u7528 mock \u6570\u636E\uFF0C\u7EBF\u4E0A\u73AF\u5883\u4F7F\u7528\u771F\u5B9E\u6570\u636E\uFF0C\u6216\u8005\u8BF4\u4E0D\u540C\u73AF\u5883\u4F7F\u7528\u4E0D\u540C\u7684\u6570\u636E\u3002</p><ul><li><strong>Easy-Mock \u7684\u5F62\u5F0F</strong></li></ul><p>\u4F60\u9700\u8981\u4FDD\u8BC1\u4F60\u672C\u5730\u6A21\u62DF api \u9664\u4E86\u6839\u8DEF\u5F84\u5176\u5B83\u7684\u5730\u5740\u662F\u4E00\u81F4\u7684\u3002 \u6BD4\u5982\uFF1A</p><div class="language-"><pre><code>https://api-dev/login   // \u672C\u5730\u8BF7\u6C42

https://api-prod/login  // \u7EBF\u4E0A\u8BF7\u6C42
</code></pre></div><div class="language-bash"><pre><code><span class="token comment"># .env.development</span>
VUE_APP_BASE_API <span class="token operator">=</span> <span class="token string">&#39;/dev-api&#39;</span> <span class="token comment">#\u6CE8\u5165\u672C\u5730 api \u7684\u6839\u8DEF\u5F84</span>
</code></pre></div><div class="language-bash"><pre><code><span class="token comment"># .env.production</span>
VUE_APP_BASE_API <span class="token operator">=</span> <span class="token string">&#39;/prod-api&#39;</span> <span class="token comment">#\u6CE8\u5165\u7EBF\u4E0A api \u7684\u6839\u8DEF\u5F84</span>
</code></pre></div><p>\u4E4B\u540E\u6839\u636E\u73AF\u5883\u53D8\u91CF\u521B\u5EFA<code>axios</code>\u5B9E\u4F8B\uFF0C\u8BA9\u5B83\u5177\u6709\u4E0D\u540C\u7684<code>baseURL</code>\u3002</p><div class="language-js"><pre><code><span class="token comment">// create an axios instance</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_API</span><span class="token punctuation">,</span> <span class="token comment">// api \u7684 base_url</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// request timeout</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u505A\u5230\u4E86\u81EA\u52A8\u6839\u636E\u73AF\u5883\u53D8\u91CF\u5207\u6362\u672C\u5730\u548C\u7EBF\u4E0A api\u3002</p><ul><li><strong>Mock.js \u7684\u5207\u6362</strong></li></ul><p>\u5F53\u6211\u4EEC\u672C\u5730\u4F7F\u7528 <code>Mock.js</code> \u6A21\u62DF\u672C\u5730\u6570\u636E\uFF0C\u7EBF\u4E0A\u4F7F\u7528\u771F\u5B9E\u73AF\u5883 api \u65B9\u6CD5\u3002\u8FD9\u4E0E\u4E0A\u9762\u7684 easy-mock \u7684\u65B9\u6CD5\u662F\u5DEE\u4E0D\u591A\u7684\u3002\u6211\u4EEC\u4E3B\u8981\u662F\u5224\u65AD\uFF1A\u662F\u7EBF\u4E0A\u73AF\u5883\u7684\u65F6\u5019\uFF0C\u4E0D\u5F15\u5165 mock \u6570\u636E\u5C31\u53EF\u4EE5\u4E86\uFF0C\u53EA\u6709\u5728\u672C\u5730\u5F15\u5165 <code>Mock.js</code>\u3002</p><div class="language-js"><pre><code><span class="token comment">// main.js</span>
<span class="token comment">// \u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u52A0\u8F7D\u542F\u7528</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mock&#39;</span><span class="token punctuation">)</span> <span class="token comment">// simulation data</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EA\u6709\u5728\u672C\u5730\u73AF\u5883\u4E4B\u4E2D\u624D\u4F1A\u5F15\u5165 mock \u6570\u636E\u3002</p>__VP_STATIC_END__`,61),o=[e];function c(r,l,k,i,u,d){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{h as __pageData,g as default};
