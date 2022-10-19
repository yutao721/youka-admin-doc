import{_ as n,f as s,e as a,N as t}from"./plugin-vue_export-helper.87254cb5.js";const m='{"title":"FileUpload","description":"","frontmatter":{},"headers":[{"level":2,"title":"2\u79CD\u7EC4\u4EF6\u533A\u522B\u4ECB\u7ECD","slug":"_2\u79CD\u7EC4\u4EF6\u533A\u522B\u4ECB\u7ECD"},{"level":2,"title":"\u5168\u5C40\u7EC4\u4EF6\u4EE5\u53CA\u5C40\u90E8\u7EC4\u4EF6\u4E2D\u7684\u4F7F\u7528","slug":"\u5168\u5C40\u7EC4\u4EF6\u4EE5\u53CA\u5C40\u90E8\u7EC4\u4EF6\u4E2D\u7684\u4F7F\u7528"},{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"plugins/uploadFile.js","slug":"plugins-uploadfile-js"},{"level":2,"title":"getOssSgn","slug":"getosssgn"}],"relativePath":"components/upload.md","lastUpdated":1665970302263}',p={},o=t(`<h1 id="fileupload"><a class="header-anchor" href="#fileupload" aria-hidden="true">#</a> FileUpload</h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u67092\u79CD\u6A21\u5F0F\uFF0C2\u79CD\u6A21\u5F0F\u90FD\u662F\u4EE5element-ui\u4E2D<code>el-upload</code>\u7EC4\u4EF6\u4E3A\u57FA\u7840\uFF0C\u5C01\u88C5\u800C\u6210\u3002</p><h2 id="_2\u79CD\u7EC4\u4EF6\u533A\u522B\u4ECB\u7ECD"><a class="header-anchor" href="#_2\u79CD\u7EC4\u4EF6\u533A\u522B\u4ECB\u7ECD" aria-hidden="true">#</a> 2\u79CD\u7EC4\u4EF6\u533A\u522B\u4ECB\u7ECD</h2><ul><li>FileUpload/index.vue\u8BE5\u7EC4\u4EF6\u662F\u4EE5action\u6A21\u5F0F\u4E0A\u4F20\u6587\u4EF6\uFF0C\u9700\u8981\u63D0\u4F9B\u4E0A\u4F20\u7684\u56FE\u7247\u670D\u52A1\u5668\u5730\u5740\uFF08\u9ED8\u8BA4\u4E3A/common/upload\uFF0C\u9700\u8981\u670D\u52A1\u7AEF\u5F00\u53D1\uFF09</li><li>FileUpload/uploadByOss.vue\u8BE5\u7EC4\u4EF6\u662Foss\u7B7E\u540D\u76F4\u4F20\uFF0C\u9700\u8981\u670D\u52A1\u7684\u63D0\u4F9B\u4E00\u4E2A\u83B7\u53D6oss\u4FE1\u606F\u7684\u63A5\u53E3\u5373\u53EF\uFF0C\u524D\u7AEF\u76F4\u63A5\u4E0A\u4F20\u5230oss</li></ul><blockquote><p>\u76EE\u524D\u5927\u591A\u6570\u9879\u76EE\u90FD\u4F1A\u9009\u62E9\u4F7F\u7528oss\u6765\u505A\u6587\u4EF6\u5B58\u50A8\uFF0C\u91C7\u7528\u7B2C\u4E8C\u79CD\u524D\u7AEF\u76F4\u63A5\u4E0A\u4F20\u5230oss,\u51CF\u8F7B\u4E86\u670D\u52A1\u7684\u538B\u529B\uFF0C\u6240\u4EE5\u66F4\u63A8\u8350\u4F7F\u7528oss\u76F4\u4F20\u7684\u65B9\u5F0F\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u6765\u9009\u62E9\u4F7F\u7528\u54EA\u79CD\u7EC4\u4EF6</p></blockquote><h2 id="\u5168\u5C40\u7EC4\u4EF6\u4EE5\u53CA\u5C40\u90E8\u7EC4\u4EF6\u4E2D\u7684\u4F7F\u7528"><a class="header-anchor" href="#\u5168\u5C40\u7EC4\u4EF6\u4EE5\u53CA\u5C40\u90E8\u7EC4\u4EF6\u4E2D\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5168\u5C40\u7EC4\u4EF6\u4EE5\u53CA\u5C40\u90E8\u7EC4\u4EF6\u4E2D\u7684\u4F7F\u7528</h2><p><code>FileUpload</code>\u5728<code>main.js</code>\u4E2D\u5DF2\u7ECF\u88AB\u6CE8\u518C\u6210\u4E86\u5168\u5C40\u7EC4\u4EF6</p><div class="language-js"><pre><code><span class="token comment">// \u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6 action\u6A21\u5F0F</span>
<span class="token comment">// import FileUpload from &#39;@/components/FileUpload&#39;</span>

<span class="token comment">// \u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6 oss\u7B7E\u540D\u76F4\u4F20</span>
<span class="token keyword">import</span> FileUpload <span class="token keyword">from</span> <span class="token string">&#39;@/components/FileUpload/uploadByOss&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;FileUpload&#39;</span><span class="token punctuation">,</span> FileUpload<span class="token punctuation">)</span>
</code></pre></div><p>\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u7684\u9700\u6C42\u9009\u62E9\u8FD9\u4E2A\u5730\u65B9\u7684\u7EC4\u4EF6\u5F15\u7528\uFF0C\u5C31\u53EF\u4EE5\u5207\u63622\u4E2D\u4E0D\u540C\u7684\u6A21\u5F0F\u3002</p><p>\u90E8\u5206\u5C40\u90E8\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u9009\u62E9\u7EC4\u4EF6\u5F15\u7528\u6765\u4FEE\u6539\u7EC4\u4EF6\u7684\u4F7F\u7528\u6A21\u5F0F\uFF0C\u4F8B\u5982\u5728FormRenderer\u7EC4\u4EF6\u4E2D\uFF0CFormItem\u7EC4\u4EF6\u4E2D\u4E0A\u4F20\u6587\u4EF6\u7EC4\u4EF6\u5C31\u76F4\u63A5\u4F7F\u7528\u4E86oss\u7B7E\u540D\u76F4\u4F20\u7684\u6A21\u5F0F,\u5982\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u4FEE\u6539\u6B64\u5904\u7684\u7EC4\u4EF6\u5F15\u5165\uFF1B</p><div class="language-js"><pre><code>  <span class="token comment">// oss \u4E0A\u4F20\u6587\u4EF6\u7EC4\u4EF6</span>
  <span class="token keyword">import</span> UploadFile <span class="token keyword">from</span> <span class="token string">&#39;../FileUpload/uploadByOss&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// oss \u4E0A\u4F20\u56FE\u7247\u7EC4\u4EF6</span>
  <span class="token keyword">import</span> UploadImage <span class="token keyword">from</span> <span class="token string">&#39;../ImageUpload/uploadByOss&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49 \u83B7\u53D6\u9A8C\u8BC1\u7801\u7EC4\u4EF6</span>
  <span class="token keyword">import</span> GetVerifyCode <span class="token keyword">from</span> <span class="token string">&#39;./GetVerifyCode.vue&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49 \u7EC4\u4EF6</span>
  <span class="token keyword">import</span> Limit <span class="token keyword">from</span> <span class="token string">&#39;./Limit.vue&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5BCC\u6587\u672C</span>
  <span class="token keyword">import</span> wangeditor <span class="token keyword">from</span> <span class="token string">&#39;@/components/Editor/wangeditor&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7528\u6CD5"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><blockquote><p>oss\u76F4\u4F20\u6A21\u5F0F\u6BD4action\u6A21\u5F0F\u53EA\u662F\u591A\u4E86disabled(\u662F\u5426\u7981\u7528)\u548Cmultiple(\u662F\u5426\u76F4\u4F20\u591A\u9009)\u7684\u6A21\u5F0F\uFF0C\u8BE5\u7528\u6CD5\u5C31\u4EE5oss\u6A21\u5F0F\u6F14\u793A\uFF0C\u53E6\u5916\u4E00\u4E2A\u7528\u6CD5\u4E5F\u5DEE\u4E0D\u591A\uFF0C\u5177\u4F53\u793A\u4F8B\u6F14\u793A\u53EF\u4EE5\u67E5\u770B\u7BA1\u7406\u540E\u53F0 \u529F\u80FD&gt;\u4E0A\u4F20&gt;\u4E0A\u4F20\u6587\u4EF6</p></blockquote><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-3xl my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E0A\u4F20\u6587\u4EF6\u793A\u4F8B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1.\u4E0A\u4F20\u6587\u4EF6(\u7EC4\u4EF6\u9ED8\u8BA4\u503C)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2.\u4E0A\u4F20\u6587\u4EF6(limit\u9650\u52361\u4E2A)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>limit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3.\u4E0A\u4F20\u6587\u4EF6(\u6587\u4EF6\u5927\u5C0F\u9650\u5236)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fileSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileSize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4.\u4E0A\u4F20\u6587\u4EF6(\u662F\u5426\u663E\u793A\u63D0\u793A)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:isShowTip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShowTip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5.\u4E0A\u4F20\u6587\u4EF6(\u662F\u5426\u7981\u7528)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6.\u4E0A\u4F20\u6587\u4EF6(\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multiple<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>7.\u4E0A\u4F20\u6587\u4EF6(\u6587\u4EF6\u7C7B\u578B \u4EC5\u652F\u6301doc)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fileType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// oss \u4E0A\u4F20\u6587\u4EF6\u7EC4\u4EF6</span>
  <span class="token keyword">import</span> FileUpload <span class="token keyword">from</span> <span class="token string">&#39;@/components/FileUpload/uploadByOss&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> FileUpload <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1.text&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com/upload/images/\u65B0\u5EFA\u6587\u672C\u6587\u6863_1663667207383.txt&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isShowTip</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">multiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;doc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mark</span><span class="token operator">:</span> <span class="token string">&#39;sd&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u652F\u6301v-model</td></tr><tr><td>showFileList</td><td><code>boolean</code></td><td>true</td><td>-</td><td>\u662F\u5426\u663E\u793A\u6587\u4EF6\u5C55\u793A\u5217\u8868</td></tr><tr><td>isShowTip</td><td><code>boolean</code></td><td>true</td><td>-</td><td>\u662F\u5426\u663E\u793A\u63D0\u793A</td></tr><tr><td>fileSize</td><td><code>number</code></td><td>5</td><td>-</td><td>\u5355\u4E2A\u6587\u4EF6\u6700\u5927\u4F53\u79EF\uFF0C\u5355\u4F4D M</td></tr><tr><td>limit</td><td><code>number</code></td><td>5</td><td>-</td><td>\u6700\u5927\u4E0A\u4F20\u6570\u91CF</td></tr><tr><td>fileType</td><td><code>string[]</code></td><td><code>[&#39;doc&#39;, &#39;xls&#39;, &#39;ppt&#39;, &#39;txt&#39;, &#39;pdf&#39;]</code></td><td>-</td><td>\u9650\u5236\u4E0A\u4F20\u683C\u5F0F\uFF0C\u4F8B\u5982 <code>[&#39;doc&#39;, &#39;xls&#39;, &#39;ppt&#39;, &#39;txt&#39;, &#39;pdf&#39;]</code></td></tr><tr><td>multiple</td><td><code>boolean</code></td><td>false</td><td>-</td><td>\u5F00\u542F\u591A\u6587\u4EF6\u4E0A\u4F20</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>-</td><td>\u662F\u5426\u7981\u7528</td></tr></tbody></table><h2 id="plugins-uploadfile-js"><a class="header-anchor" href="#plugins-uploadfile-js" aria-hidden="true">#</a> plugins/uploadFile.js</h2><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token parameter">type <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span> file<span class="token punctuation">,</span> onUploadProgress<span class="token punctuation">,</span> cancelToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file <span class="token operator">||</span> <span class="token keyword">typeof</span> file <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> file<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> accessid<span class="token punctuation">,</span> policy<span class="token punctuation">,</span> signature<span class="token punctuation">,</span> host<span class="token punctuation">,</span> dir <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOssSgn</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;OSSAccessKeyId&#39;</span><span class="token punctuation">,</span> accessid<span class="token punctuation">)</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;policy&#39;</span><span class="token punctuation">,</span> policy<span class="token punctuation">)</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;Signature&#39;</span><span class="token punctuation">,</span> signature<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> extname <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> basename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>name<span class="token punctuation">,</span> extname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>extname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> form<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    onUploadProgress<span class="token punctuation">,</span>
    cancelToken
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>oss\u76F4\u4F20\u7EC4\u4EF6\u5728<code>handleUploadFile</code>\u65B9\u6CD5\u4E2D\u662F\u8C03\u7528\u4E86<code>plugins/uploadFile.js</code>\u4E2D\u4E86uploadFile\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u67094\u4E2A\u53C2\u6570\uFF1A</p><ul><li>type getOssSgn\u8BE5\u65B9\u6CD5\u9700\u8981\uFF0C\u53C2\u89C1\u540E\u9762getOssSgn\u65B9\u6CD5\u8BF4\u660E</li><li>file File\u5BF9\u8C61</li><li>onUploadProgress \u4E0A\u4F20\u8FDB\u5EA6\uFF0C\u63D0\u4F9B\u7ED9axios\u4F7F\u7528</li><li>cancelToken \u53D6\u6D88 \u63D0\u4F9B\u7ED9axios\u4F7F\u7528</li></ul><p>\u8BE5\u65B9\u6CD5\u5C31\u662Foss\u76F4\u4F20\u7684\u5173\u952E\uFF0C\u9700\u8981\u5728getOssSgn\u4E2D\u62FF\u5230<code>accessid, policy, signature, host, dir</code>\u7B49\u4FE1\u606F\uFF0C\u518D\u901A\u8FC7axios\u8FDB\u884C\u4E0A\u4F20\u3002</p><h2 id="getosssgn"><a class="header-anchor" href="#getosssgn" aria-hidden="true">#</a> getOssSgn</h2><p>\u83B7\u53D6oss\u76F8\u5173\u4FE1\u606F\uFF0C\u4E00\u822C\u7531\u670D\u52A1\u7AEF\u63D0\u4F9B\u63A5\u53E3\u52A8\u6001\u83B7\u53D6\u5F97\u5230\uFF0C\u53C2\u6570type\u53EF\u6839\u636E\u9879\u76EE\u9700\u6C42\u53EF\u4F20\u53EF\u4E0D\u4F20\uFF0C\u8FD9\u91CC\u6211\u53EA\u662F\u7528\u4E86\u5176\u4ED6\u9879\u76EE\u83B7\u53D6oss\u7684\u63A5\u53E3\u76F8\u540C\u7684\u4FE1\u606F\u6765\u5904\u7406\u3002<strong>\u8FD4\u56DE\u503C\u5FC5\u987B\u5982\u4E0Bdata</strong>\uFF0C\u5426\u5219\u9700\u8981\u4FEE\u6539<code>plugins/uploadFile.js</code>\u4E2D\u7684<code>uploadFile</code>\u65B9\u6CD5\uFF0C\u6839\u636E\u8FD4\u56DE\u503C\u6765\u62FC\u63A5\u9700\u8981\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
cd<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
msg<span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
data<span class="token operator">:</span> <span class="token punctuation">{</span>
    accessid<span class="token operator">:</span> <span class="token string">&quot;LTAI5tLWYQ6gVMhvFNVRbkQ1&quot;</span><span class="token punctuation">,</span>
    host<span class="token operator">:</span> <span class="token string">&quot;//zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
    policy<span class="token operator">:</span> <span class="token string">&quot;eyJleHBpcmF0aW9uIjoiMjAyMi0xMC0xNlQxNjoyMzoyOFoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidXBsb2FkXC9pbWFnZXMiXV19&quot;</span><span class="token punctuation">,</span>
    signature<span class="token operator">:</span> <span class="token string">&quot;ru+WzVN43utQlIj+fQUMUovaG9g=&quot;</span><span class="token punctuation">,</span>
    expire<span class="token operator">:</span> <span class="token number">1665908608</span><span class="token punctuation">,</span>
    dir<span class="token operator">:</span> <span class="token string">&quot;upload/images&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,24),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
