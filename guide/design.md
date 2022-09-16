# 样式

## 介绍

主要介绍如何在项目中使用和规划样式文件。

默认使用 scss 作为预处理语言，建议在使用前或者遇到疑问时学习一下 scss的相关特性（如果想获取基础的 CSS 知识或查阅属性，请参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)）。

项目中使用的通用样式，都存放于src/assets/styles下面。

```bash
.
├── btn.scss # 一些按钮的样式
├── element-ui.scss # 复写element-ui的样式
├── element-variables.scss # 复写element-ui中的变量
├── index.scss # 入口
├── mixin.scss # scss中定义的mixin方法
├── public.scss # 公共通用样式
├── sidebar.less  # sidebar组件样式
├── transition.scss # 动画相关
└── variables.scss # 变量

```

## windicss

项目中使用了 [windicss](https://windicss.org/)，具体参见文档使用说明。

语法如下:

```html
<div class="relative w-full h-full px-4"></div>
```



## 为什么使用 Scss

主要是因为 element-ui 默认使用scss 作为样式语言，使用  Scss 可以跟其保持一致。

## 开启 scoped

没有加 `scoped` 属性，默认会编译成全局样式，可能会造成全局污染

```vue
<style></style>

<style scoped></style>
```

::: tip 温馨提醒

使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

:::

## 深度选择器

有时我们可能想明确地制定一个针对子组件的规则。

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符。有些像 Sass 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作。

详情可以查看 RFC[0023-scoped-styles-changes](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)。

使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：

```vue
<style scoped lang="scss">
::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
</style>
```

## windiscss集成

1.Windi CSS简介

   Windi CSS 是下一代工具优先的 CSS 框架。如果你已经熟悉了 Tailwind CSS，可以把 Windi CSS 看作是按需供应的 Tailwind 替代方案，它为你提供了更快的加载体验，完美兼容 Tailwind v2.0，并且拥有很多额外的酷炫功能。

​	通过扫描 HTML 和 CSS 按需生成工具类（utilities），Windi CSS 致力于在开发中提供 [更快的加载体验](https://twitter.com/antfu7/status/1361398324587163648) 以及更快的 HMR，并且在生产环境下无需对 CSS 进行 Purge（一种在生产环境中对未使用的 CSS 进行清除而节省体积的技术）。

2.安装vue-cli-plugin-windicss插件

```bash
yarn add -D vue-cli-plugin-windicss
```

3.在vue.config.js文件中配置插件

```js
//vue.config.js
 
module.exports = {
  pluginOptions: {
    windicss: {
      // 具体配置请查看 https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
}
```

4.在main入口文件引入样式

```js
import 'windi.css'
// import 'virtual:windi.css'
```

5.使用示例

```vue
<template>
  <div class="app-container">
    <h3>windicss 使用</h3>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="@/assets/logo/logo.png" alt="Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>

    <div class="h-12 w-12 mt-10"></div>

    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:(py-4 flex items-center space-y-0 space-x-6)">
      <img class="block mx-auto h-24 rounded-full sm:(mx-0 flex-shrink-0)" src="@/assets/logo/logo.png" alt="Woman's Face"/>
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Erin Lindford</p>
          <p class="text-gray-500 font-medium">Product Engineer</p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)">
          Message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>


```

6.vscode插件推荐

在vscode编辑器中可以通过安装`Windi CSS Intellisense`插件，来提高 Windi 的开发体验，例如：自动补全、语法高亮、代码折叠和构建。

7.扩展

Atomic CSS原⼦ CSS 是⼀种 CSS 架构⽅法，传统⽅法使⽤预 处理器编译后⽣成样式，但是体积⼤。（类似⾏内样式，但是 ⾏内样式缺点：冗余）

- Tailwind依赖 PostCSS 和 Autoprefixer + purgeCSS,开发 环境 css 体积⼤ 
- Windi CSS是⼀种 Tailwind CSS 替代品，不依赖，按需使 ⽤。采⽤预扫描的⽅式⽣成样式。 但是⾃定义复杂~~
- [unocss](https://github.com/unocss/unocss)是原⼦ CSS 引擎，规则定义简单易读。⽀持预设、 ⽀持属性、纯 css 图标

> Tailwind在项目集成的过程中由于PostCSS版本的问题，选择了按需使用的`Windicss`,UnoCSS 是一个具有高性能且极具灵活性的即时原子化 CSS 引擎，受 Windi CSS、Tailwind CSS、Twind 的启发。UnoCSS 是一个**引擎**，而非一款**框架**，因为它**并未提供核心工具类**，所有功能可以通过预设和内联配置提供。默认情况下，UnoCSS 应用[默认预设](https://github.com/antfu/unocss/tree/main/packages/preset-uno)。它提供了流行的实用程序优先框架的通用超集，包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等.

UnoCSS 在vite中支持友好，在webpack中有部分样式会不生效，因此选择了`windicss`。

