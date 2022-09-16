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

### 配置项说明

### .env

所有环境适用

```bash
# 端口号
VITE_PORT=3100
# 网站标题
VITE_GLOB_APP_TITLE=vben admin
# 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符
VITE_GLOB_APP_SHORT_NAME=vben_admin
```

### .env.development

开发环境适用

```bash
# 是否开启mock数据，关闭时需要自行对接后台接口
VITE_USE_MOCK=true
# 资源公共路径,需要以 /开头和结尾
VITE_PUBLIC_PATH=/
# 是否删除Console.log
VITE_DROP_CONSOLE=false
# 本地开发代理，可以解决跨域及多地址代理
# 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题
# 可以有多个，注意多个不能换行，否则代理将会失效
VITE_PROXY=[["/api","http://localhost:3000"],["api1","http://localhost:3001"],["/upload","http://localhost:3001/upload"]]
# 接口地址
# 如果没有跨域问题，直接在这里配置即可
VITE_GLOB_API_URL=/api
# 文件上传接口  可选
VITE_GLOB_UPLOAD_URL=/upload
# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=
```

::: warning 注意

这里配置的 `VITE_PROXY` 以及 `VITE_GLOB_API_URL`, /api 需要是唯一的，不要和接口有的名字冲突

如果你的接口是 `http://localhost:3000/api` 之类的，请考虑将 `VITE_GLOB_API_URL=/xxxx` 换成别的名字

:::

### .env.production

生产环境适用

```bash
# 是否开启mock
VITE_USE_MOCK=true
# 接口地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_API_URL=/api
# 文件上传地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_UPLOAD_URL=/upload
# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=
# 是否删除Console.log
VITE_DROP_CONSOLE=true
# 资源公共路径,需要以 / 开头和结尾
VITE_PUBLIC_PATH=/
# 打包是否输出gz｜br文件
# 可选: gzip | brotli | none
# 也可以有多个, 例如 ‘gzip’|'brotli',这样会同时生成 .gz和.br文件
VITE_BUILD_COMPRESS = 'gzip'
# 打包是否压缩图片
VITE_USE_IMAGEMIN = false
# 打包是否开启pwa功能
VITE_USE_PWA = false
# 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本
VITE_LEGACY = false
```

### 



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

## 缓存配置

用于配置缓存内容加密信息，对缓存到浏览器的信息进行 AES 加密

在 [/@/settings/encryptionSetting.ts](https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/encryptionSetting.ts) 内可以配置 `localStorage` 及 `sessionStorage` 缓存信息

**前提:** 使用项目自带的缓存工具类 [/@/utils/cache](https://github.com/vbenjs/vue-vben-admin/blob/main/src/utils/cache/index.ts) 来进行缓存操作

```ts
import { isDevMode } from '/@/utils/env';

// 缓存默认过期时间
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// 开启缓存加密后，加密密钥。采用aes加密
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_',
};

// 是否加密缓存，默认生产环境加密
export const enableStorageEncryption = !isDevMode();
```

## 主题色配置

默认全局主题色配置位于 [build/config/glob/themeConfig.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/build/config/themeConfig.ts) 内

只需要修改 primaryColor 为您需要的配色，然后重新执行 `yarn serve` 即可

```js
/**
 * less global variable
 */
export const primaryColor = '#0960bd';
```

## 样式配置

### css 前缀设置

用于修改项目内组件 class 的统一前缀

- 在 [src/settings/designSetting.ts](https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/designSetting.ts) 内配置

```ts
export const prefixCls = 'vben';
```

- 在 [src/design/var/index.less](https://github.com/vbenjs/vue-vben-admin/blob/main/src/design/var/index.less) 配置 css 前缀

```less
@namespace: vben;
```

### 前缀使用

**在 css 内**

```vue
<style lang="less" scoped>
  /* namespace已经全局注入，不需要额外在引入 */
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    width: 100%;
  }
</style>
```

**在 vue/ts 内**

```ts
import { useDesign } from '/@/hooks/web/useDesign';

const { prefixCls } = useDesign('app-logo');

// prefixCls => vben-app-logo
```

## 颜色配置

用于预设一些颜色数组

在 [src/settings/designSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/designSetting.ts) 内配置

```ts
//  app主题色预设
export const APP_PRESET_COLOR_LIST: string[] = [
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
];

// 顶部背景色预设
export const HEADER_PRESET_BG_COLOR_LIST: string[] = [
  '#ffffff',
  '#009688',
  '#5172DC',
  '#1E9FFF',
  '#018ffb',
  '#409eff',
  '#4e73df',
  '#e74c3c',
  '#24292e',
  '#394664',
  '#001529',
  '#383f45',
];

// 左侧菜单背景色预设
export const SIDE_BAR_BG_COLOR_LIST: string[] = [
  '#001529',
  '#273352',
  '#ffffff',
  '#191b24',
  '#191a23',
  '#304156',
  '#001628',
  '#28333E',
  '#344058',
  '#383f45',
];
```

## 组件默认参数配置

在 [src/settings/componentSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts) 内配置

```ts
// 用于配置某些组件的常规配置，而无需修改组件
import type { SorterResult } from '../components/Table';

export default {
  // 表格配置
  table: {
    // 表格接口请求通用配置，可在组件prop覆盖
    // 支持 xxx.xxx.xxx格式
    fetchSetting: {
      // 传给后台的当前页字段
      pageField: 'page',
      // 传给后台的每页显示多少条的字段
      sizeField: 'pageSize',
      // 接口返回表格数据的字段
      listField: 'items',
      // 接口返回表格总数的字段
      totalField: 'total',
    },
    // 可选的分页选项
    pageSizeOptions: ['10', '50', '80', '100'],
    //默认每页显示多少条
    defaultPageSize: 10,
    // 默认排序方法
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      return {
        // 排序字段
        field,
        // 排序方式 asc/desc
        order,
      };
    },
    // 自定义过滤方法
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  // 滚动组件配置
  scrollbar: {
    // 是否使用原生滚动样式
    // 开启后，菜单，弹窗，抽屉会使用原生滚动条组件
    native: false,
  },
};
```
