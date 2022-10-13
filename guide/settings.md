# 项目配置项

## 环境变量配置

项目的环境变量配置位于项目根目录下

具体可以参考[Vue-cli](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

```bash
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略

```

::: tip 温馨提醒

- 请注意，只有 `NODE_ENV`，`BASE_URL` 和以 `VUE_APP_` 开头的变量将通过 `webpack.DefinePlugin` 静态地嵌入到*客户端侧*的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥，你可以项目代码中这样访问它们：

```js
console.log(process.env.NODE_ENV);
```

:::

### 如何新增(新增一个可动态修改的配置项)

1. 首先在 `.env` 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 `VUE_APP_`开头
2. `VUE_APP_` 开头的变量会自动加入环境变量




## 项目配置

::: warning

项目配置文件用于配置项目内展示的内容、布局、文本等效果，存于`localStorage`中。如果更改了项目配置，需要手动**清空** `localStorage` 缓存，刷新重新登录后方可生效。

:::

### 配置文件路径

src/settings.js

### 说明

```js
// ! 改动后需要清空浏览器缓存
module.exports = {
  // 是否显示配置入口
  isShowSettingEnter: true,
  // 侧边栏主题 深色主题theme-dark，浅色主题theme-light
  sideTheme: 'theme-dark',
  // 是否系统布局配置
  showSettings: false,
  // 是否显示顶部导航
  topNav: false,
  // 是否显示 tagsView
  tagsView: true,
  // 是否固定头部
  fixedHeader: true,
  // 是否显示logo
  sidebarLogo: true,
  // 是否显示动态标题
  dynamicTitle: true
}

```




