# 路由和侧边栏

路由和侧边栏是组织起一个后台应用的关键骨架。

本项目侧边栏和路由是绑定在一起的，所以你只有在 `@/router/index.js` 下面配置对应的路由，侧边栏就能动态的生成了。大大减轻了手动重复编辑侧边栏的工作量。当然这样就需要在配置路由的时候遵循一些约定的规则。

> `src/router/modules`用于存放路由模块，是为了把路由按照模块分割，避免`@/router/index.js`过大;目前modules中存放的都是demo中所使用到的路由页面，正式项目可以把这些删除，并在`@/router/index.js`中相应的删除。

## 配置项

首先我们了解一下本项目配置路由时提供了哪些配置项。

```js
// 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
hidden: true // (默认 false)
//当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: 'noRedirect'
// 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
// 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
// 若你想不管路由下面的 children 声明的个数都显示你的根路由
// 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
alwaysShow: true
name: 'router-name' // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
meta: {
  roles: ['admin', 'editor'] // 设置该路由进入的权限，支持多个权限叠加
  title: 'title' // 设置该路由在侧边栏和面包屑中展示的名字
  icon: 'svg-name' // 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
  noCache: true // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  breadcrumb: false //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
  affix: true // 如果设置为true，它则会固定在tags-view中(默认 false)
  // 当路由设置了该属性，则会高亮相对应的侧边栏。
  // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
  // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
  activeMenu: '/article/list'
}
```

**示例：**

```js
{
  path: '/permission',
  component: Layout,
  redirect: '/permission/index', //重定向地址，在面包屑中点击会重定向去的地址
  hidden: true, // 不在侧边栏显示
  alwaysShow: true, //一直显示根路由
  meta: { roles: ['admin','editor'] }, //你可以在根路由设置权限，这样它下面所有的子路由都继承了这个权限
  children: [{
    path: 'index',
    component: ()=>import('permission/index'),
    name: 'permission',
    meta: {
      title: 'permission',
      icon: 'lock', //图标
      roles: ['admin','editor'], //或者你可以给每一个子路由设置自己的权限
      noCache: true // 不会被 <keep-alive> 缓存
    }
  }]
}
```

## 路由

这里的路由分为两种，`constantRoutes` 和 `asyncRoutes`。

**constantRoutes：** 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面，在`@/router/index.js`配置对应的公共路由。

**asyncRoutes：** 代表那些需求动态判断权限并通过 `addRoutes` 动态添加的页面，在`@/store/modules/permission.js`加载后端接口路由配置。

具体的会在 [权限验证](auth.md) 页面介绍。

::: tip 
- 动态路由可以在系统管理-菜单管理进行新增和修改操作，前端加载会自动请求接口获取菜单信息并转换成前端对应的路由。
- 动态路由在生产环境下会默认使用路由懒加载，实现方式参考loadView方法的判断。
:::

其它的配置和 [vue-router](https://router.vuejs.org/zh-cn/) 官方并没有区别，自行查看文档。

::: warning 注意事项
如果这里有一个需要非常注意的地方就是 `404` 页面一定要最后加载，如果放在 constantRoutes 一同声明了 `404` ，后面的所有页面都会被拦截到`404` ，详细的问题见 [addRoutes when you've got a wildcard route for 404s does not work](https://github.com/vuejs/vue-router/issues/1176)
:::

## 侧边栏

本项目侧边栏主要基于 `element-ui` 的 `el-menu` 改造。

前面也介绍了，侧边栏是通过读取路由并结合权限判断而动态生成的，而且还需要支持路由无限嵌套，所以这里还使用到了递归组件。


这里同时也改造了 `element-ui` 默认侧边栏不少的样式，所有的 css 都可以在 `@/styles/sidebar.scss` 中找到，你也可以根据自己的需求进行修改。

**这里需要注意一下**，一般侧边栏有两种形式即：`submenu` 和 直接 `el-menu-item`。 一个是嵌套子菜单，另一个则是直接一个链接.

在 `Sidebar` 中已经帮你做了判断，当你一个路由下面的 `children` 声明的路由大于>1 个时，自动会变成嵌套的模式。如果子路由正好等于一个就会默认将子路由作为根路由显示在侧边栏中，若不想这样，可以通过设置在根路由中设置`alwaysShow: true`来取消这一特性。如：

```js
// No submenu, because children.length===1
{
  path: '/icon',
  component: Layout,
  children: [{
    path: 'index',
    component: ()=>import('svg-icons/index'),
    name: 'icons',
    meta: { title: 'icons', icon: 'icon' }
  }]
},
// Has submenu, because children.length>=1
{
  path: '/components',
  component: Layout,
  name: 'component-demo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    { path: 'tinymce', component: ()=>import('components-demo/tinymce'), name: 'tinymce-demo', meta: { title: 'tinymce' }},
    { path: 'markdown', component: ()=>import('components-demo/markdown'), name: 'markdown-demo', meta: { title: 'markdown' }},
  ]
}
```

## 面包屑

本项目中也封装了一个面包屑导航，它也是通过 `watch $route` 变化动态生成的。它和 menu 也一样，也可以通过之前那些配置项控制一些路由在面包屑中的展现。大家也可以结合自己的业务需求增改这些自定义属性。比如可以在路由中声明`breadcrumb:false`，让其不在 breadcrumb 面包屑显示。


## 侧边栏滚动问题

之前版本的滚动都是用 css 来做处理的

```css
overflow-y: scroll;

::-webkit-scrollbar {
  display: none;
}
```

首先这样写会有兼容性问题，在火狐或者其它低版本浏览器中都会比较不美观。其次在侧边栏收起的情况下，受限于 `element-ui`的 `menu` 组件的实现方式，不能使用该方式来处理。

所以现版本中使用了 `el-scrollbar` 来处理侧边栏滚动问题。


## 侧边栏 外链

你也可以在侧边栏中配置一个外链，只要你在 `path` 中填写了合法的 url 路径，当你点击侧边栏的时候就会帮你新开这个页面。

例如：

```json
{
  "path": "external-link",
  "component": Layout,
  "children": [
    {
      "path": "https://github.com/yutao721/youka-admin",
      "meta": { "title": "externalLink", "icon": "link|svg" }
    }
  ]
}
```

## 侧边栏 图标

图标使用详细可以查看[图标](/dep/icon.md) 

在Sidebar侧边栏中，只能使用svg的方式渲染图标，也就是说不能使用ement-ui库自带的图标，具体代码参考src/layout/components/Sidebar/item.vue

```vue
render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<c-icon icon-class={icon}/>)
    }

    if (title) {
      if (title.length > 5) {
        vnodes.push(<span slot='title' title={(title)}>{(title)}</span>)
      } else {
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
    }
    return vnodes
  }
```

这个组件就是Sidebar侧边栏中，icon以及title显示的地方，可以看到采用了`CIcon`组件去渲染的，`CIcon`组件就是支持2种svg，如果想要支持ement-ui库自带的图标，可自行修改此处代码逻辑。

- 使用项目本地svg示例, 如`chart|svg`

```js
{
  path: '/charts',
    component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: { title: '图表', icon: 'chart|svg' },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/demo/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '键盘图表', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/demo/charts/line'),
      name: 'LineChart',
      meta: { title: '折线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/demo/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '混合图表', noCache: true }
    }
  ]
}
```

- 使用 [Iconify](https://iconify.design/)查询的值，如`logos:element`

  ```js
  {
    'name': 'Form',
    'path': '/form',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': Layout,
    'alwaysShow': true,
    'meta': { 'title': '表单', 'icon': 'tool|svg', 'noCache': false, 'link': null },
    'children': [
      {
        'name': 'Element',
        'path': 'element',
        'hidden': false,
        component: () => import('@/views/demo/feat/form/element'),
        'meta': { 'title': 'element', 'icon': 'logos:element', 'noCache': false, 'link': null }
      },
      {
        'name': 'ElFormSchema',
        'path': 'elFormSchema',
        'hidden': false,
        component: () => import('@/views/demo/feat/form/elFormSchema'),
        'meta': { 'title': 'elFormSchema', 'icon': 'file-icons:json-1', 'noCache': false, 'link': null }
      },
      {
        'name': 'ElFormModel',
        'path': 'elFormModel',
        'hidden': false,
        component: () => import('@/views/demo/feat/form/elFormModel'),
        'meta': { 'title': 'elFormModel', 'icon': 'carbon:model', 'noCache': false, 'link': null }
      },
      {
        'name': 'ElFormRenderer',
        'path': 'elFormRenderer',
        'hidden': false,
        component: () => import('@/views/demo/feat/form/elFormRenderer'),
        'meta': { 'title': 'elFormRenderer', 'icon': 'carbon:model', 'noCache': false, 'link': null }
      }
  
    ]
  }
  ```

  



