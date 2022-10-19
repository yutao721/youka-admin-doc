import{_ as a,f as s,e as n,N as e}from"./plugin-vue_export-helper.87254cb5.js";const _='{"title":"\u767B\u5F55&\u6CE8\u518C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9ED8\u8BA4\u914D\u7F6E","slug":"\u9ED8\u8BA4\u914D\u7F6E"},{"level":3,"title":"","slug":""}],"relativePath":"guide/component.md","lastUpdated":1665999044519}',t={},p=e(`__VP_STATIC_START__<h1 id="\u767B\u5F55-\u6CE8\u518C"><a class="header-anchor" href="#\u767B\u5F55-\u6CE8\u518C" aria-hidden="true">#</a> \u767B\u5F55&amp;\u6CE8\u518C</h1><h2 id="\u9ED8\u8BA4\u914D\u7F6E"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E</h2><p>\u767B\u5F55\u9875\u9762<code>views/login</code>\u53EF\u4EE5\u6839\u636E\u914D\u7F6E\u6587\u4EF6<code>views/login/utils/loginSettings.js</code>\u6765\u4FEE\u6539\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u6CE8\u518C</span>
  <span class="token literal-property property">isShowRegister</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u5FD8\u8BB0\u5BC6\u7801</span>
  <span class="token literal-property property">isShowForget</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9A8C\u8BC1\u7801\u5F00\u5173 \u63A7\u5236\u767B\u5F55\u548C\u6CE8\u518C</span>
  <span class="token literal-property property">captchaEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5012\u8BA1\u65F6\u6309\u94AE\u6587\u6848</span>
  <span class="token literal-property property">verifyBtnText</span><span class="token operator">:</span> <span class="token string">&#39;\u83B7\u53D6\u9A8C\u8BC1\u7801&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5012\u8BA1\u65F6\u65F6\u95F4(\u79D2)</span>
  <span class="token literal-property property">verifyBtnTime</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u5E94\u9875\u9762\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://gitee.com/yutao618/images/raw/master/images/20221017172348.png" alt=""></p><p>\u5982\u679C\u9879\u76EE\u4E0D\u9700\u8981\u6CE8\u518C\uFF0CisShowRegister\u7F6E\u4E3Afalse\u5373\u53EF\u9690\u85CF\u6CE8\u518C\u5165\u53E3\uFF1B\u5982\u679C\u9879\u76EE\u4E0D\u9700\u8981\u627E\u56DE\u5BC6\u7801\u529F\u80FD\uFF0C\u5219isShowForget\u7F6E\u4E3Afalse\u5373\u53EF\u3002</p><p>\u8BF4\u660E\uFF1A\u9A8C\u8BC1\u7801\u53EA\u662F\u524D\u7AEF\u968F\u673A\u751F\u6210\u7684\u6570\u5B57\uFF0C\u7B80\u5355\u6821\u9A8C\uFF0C\u5982\u6709\u5176\u5B83\u7279\u6B8A\u9700\u6C42\u53EF\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u6765\u5B9A\u5236\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u76F4\u63A5captchaEnabled\u8BBE\u7F6E\u4E3Afalse,\u5C31\u5173\u95ED\u4E86\u524D\u7AEF\u9A8C\u8BC1\u7801\u7684\u6821\u9A8C\u529F\u80FD\u3002</p><h3 id=""><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,9),o=[p];function r(c,l,i,d,k,u){return n(),s("div",null,o)}var m=a(t,[["render",r]]);export{_ as __pageData,m as default};
