# 通用管理后台使用指南

 ## 背景

大部分项目的使用和维护都需要一个后台管理系统，目前所使用的后台管理系统大多数都是服务端同学直接找的是开源的管理系统（大多数是服务端接口都是已经有的）进行删减二次开发，或者是前端同学自己搭建或者第三方的开源项目，导致项目架构多元化，代码风格不一致，对用的是服务端可能也是每个项目通用的功能开发起来也是有所不同。就导致每开始新一个项目的时候就会前后端又要重新开始对接一些通用的功能，而且大部分后台都是服务端自己独立开发，有时候又会有前端参与，后期维护起来也不是很方便。

 ## 目的

  1. 统一前后端技术栈（目前是`Vue2`）
  2. 公共模块前后端统一（登录，用户，角色，菜单..）
  3. 开发和维护公共组件
  4. 形成统一代码风格，后期前后端维护方便
  5. 形成真正意义上的前后端通用管理后台模板
  6. ...

 ## 需要掌握的基础知识

  本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。
  建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

  - [Vue2 文档](https://v2.cn.vuejs.org/v2/guide/index.html/)
  - [Vue-router 3.x](https://v3.router.vuejs.org/zh/)
  - [element-ui](https://element.eleme.cn/#/zh-CN/component/installation/)
  - [Vuex 3.x](https://v3.vuex.vuejs.org/zh/)
  - [Es6](https://es6.ruanyifeng.com/)
  - [WindiCss](https://windicss.netlify.app/)

 ## 准备工作
1. 本地环境需要安装 、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

   > [Node.js](http://nodejs.org/) 版本要求`12.x`以上，且不能为`13.x`版本，这里推荐 `14.x` 及以上
   >
   > 本项目开发使用Node版本：16.1.0

2. 工具配置

> 如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化
>
>   - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
>   - [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
>   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
>   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
>   - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
>   - [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

3. 安装依赖

   执行以下命令行

```shell
yarn
```

  或者

```shell
npm install
```

若安装依赖失败，可以尝试多安装几次，或者先删除 `node_modules`、`yarn.lock`、`package.lock.json` 后再进行依赖重新安装（安装速度会明显变慢）。

也可以使用淘宝镜像快速安装：

```sh
npm install --registry=https://registry.npmmirror.com
```

## 启动项目

```sh
npm run dev
```

如果是第一次登录或者是token失效，则会进入登录页面，如下展示：
![](/images/login1.png)

如果项目不需要注册，isShowRegister置为false即可隐藏注册入口；如果项目不需要找回密码功能，则isShowForget置为false即可。

说明：验证码只是前端随机生成的数字，简单校验，如有其它特殊需求可根据自身需求来定制，当然也可以直接captchaEnabled设置为false,就关闭了前端验证码的校验功能。

登录页面`views/login`可以根据配置文件`views/login/utils/loginSettings.js`来修改，默认配置如下：

```js
export default {
  // 是否显示注册
  isShowRegister: true,
  // 是否显示忘记密码
  isShowForget: true,
  // 验证码开关 控制登录和注册
  captchaEnabled: true,
  // 倒计时按钮文案
  verifyBtnText: '获取验证码',
  // 倒计时时间(秒)
  verifyBtnTime: 60,
}
```

## 菜单&页面渲染流程

第一步：提交登录表单，服务端返回一个token,前端本地保存，加在后续的接口请求头header头上传给服务端，服务端用来做各种校验。

第二步：获取当前用户信息（角色，菜单权限，用户基本信息）

第三步：向后端请求路由数据，根据roles权限生成可访问的路由表

> 页面刷新的时候也会重新执行第二步和第三步



详细流程可以查看 [processon登录部分](https://www.processon.com/v/63e2348f56e18032d4ad68ad) 或者下图所示
![](/images/登录&页面展示.jpg)

## 权限管理使用流程

#### 1.  使用管理员账号添加菜单

- 目录

目录对应的是一级菜单，访问的路由地址是如：`user`，如外网地址需内链访问则以`http(s)://`开头，如下图所示：

![](/images/caidan_1.png)

这种`目录`选项的菜单一般就是对应的是一级或者二级目录，外链，没有实质性对应的页面

- 菜单

![](/images/caidan_2.png)

这种`菜单`选项的菜单就是对应的页面级别了，组件的路径就是必须的，显示、隐藏就可以控制页面是否在侧边栏展示

- 按钮

![](/images/caidan_3.png)

这种`按钮`选项的菜单就是对应页面中按钮级别的权限了，根据角色或者直接这种权限，可以控制不同账户对每个页面有不同的操作权限。

示例：

```vue
<el-col :span="1.5">
    <el-button
    type="primary"
    plain
    icon="el-icon-plus"
    size="mini"
    @click="handleAdd"
    v-hasPermi="['system:user:add']"
    >新增</el-button>
</el-col>
```

按钮上通过指令`v-hasPermi="['system:user:add']"`绑定之后，只有有`system:user:add`这种权限标识符的角色或者其他用户才能看见该入口，也就是有机会去操作这个按钮。

:::  warning

所有的权限标识符必须唯一！！只有需要使用权限的页面和按钮才需要在这里增加菜单，公共页面则不需要在这个地方添加

:::

#### 2. 给角色绑定菜单权限

![](/images/juese_1.png)

上图可以看出来，common这种角色，就没有用户管理中的`重置密码`权限，可以根据角色的特点选择相对应的菜单和按钮

#### 3. 给用户绑定角色

![](/images/user_1.png)

这样，该用户登录的时候就会有某种角色，而角色绑定了对应的菜单以及按钮，就可以根据不同的账户和角色类型做到不同的账户有不同的操作权限。

**同理，在开发阶段，如果需要新添加页面或者按钮，则需要在菜单管理中增加菜单或者按钮，然后再给角色绑定新添加的页面菜单和按钮，这样新添加的页面或者按钮权限才能生效。别忘了，如果是按钮，需要通过指令`v-hasPermi="['XXX:XXX:XXX']"`绑定按钮，不然权限也不生效了。**

## 路由的使用以及侧边栏的展示

通过给账户分配了角色，角色中绑定了菜单，当我们在用这个账号登录之后或者刷新页面的时候，通过获取用户信息`getInfo`接口，获取到用户的对应的角色`roles`以及 权限标识`permissions`，然后再根据`roles`获取相应的动态路由，路由对应着项目中的各个组件，才最终动态显示页面和侧边栏。

### 路由配置项



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
  icon: 'svg-name' // 设置该路由的图标，详细参见文档 进阶->图标->Sidebar中icon的使用
  noCache: true // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  breadcrumb: false //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
  affix: true // 如果设置为true，它则会固定在tags-view中(默认 false)
  // 当路由设置了该属性，则会高亮相对应的侧边栏。
  // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
  // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
  activeMenu: '/article/list'
}
```

普通示例：

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
    component: ()=>import('permission/index'),// 组件
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

### 路由分类

这里的路由分为两种，`constantRoutes` 和 `asyncRoutes`。

**constantRoutes：** 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面，在`@/router/index.js`配置对应的公共路由。

**asyncRoutes：** 代表那些需求动态判断权限并通过 `addRoutes` 动态添加的页面，在`@/store/modules/permission.js`加载后端接口路由配置。

::: tip

- 动态路由可以在系统管理-菜单管理进行新增和修改操作，前端加载会自动请求接口获取菜单信息并转换成前端对应的路由。
- 动态路由在生产环境下会默认使用路由懒加载，实现方式参考loadView方法的判断。
- 不管是动态路由还是静态路由则都需要遵循上述路由的配置项

:::

侧边栏、面包屑、侧边栏外链、侧边栏图标等问题查看 [指南路由菜单部分](/guide/router.html#侧边栏)

## 如何新增一个页面

**如：新增一个 excel 页面**

### 新增 view  

第一步，在 `src/views` 文件下根据项目需求创建对应的文件夹（文件夹可以多级）和文件，一般一个路由对应一个文件，该模块下的功能组件或者方法就建议在本文件夹下创建一个`utils`或`components`文件夹，各个功能模块维护自己的`utils`或`components`组件。如：

![](/images/new_page_2.png)

**注意：**

- `template`中的根元素只能有一个div，加上类名`app-container`可以让业务代码页面保持一致的间距。

- `script`标签中就是js业务逻辑代码，data,methods等在这里面书写。

- `style`标签中是样式部分，最好加上`scoped`属性，避免样式污染，若使用csss编写样式，则需要加上`lang="scss"`属性

- `style`中也可以使用`@import` 的方式引入其他样式文件，如下图所示：

  ![](/images/new_page_3.png)

### 配置路由

页面创建之后，则需要配置路由才可以访问页面，如果熟悉 `vue-router` 的配置就很简单了。

在 `src/router/index.js` 中`constantRoutes`数组中增加需要添加的路由。



```js
{
    path: '/excel',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Excel',
    meta: { title: '表格', icon: 'excel|svg', breadcrumb: 'false' },
  },
```

::: tip
仅仅这样不会有任何效果的，它只是创建了一个基于`layout`的一级路由，如下图所示，点击之后会出现404的页面，是因为没有相对应的页面。

如果需要展示页面，则需要在它下面的 `children` 中添加子路由。

:::

![](/images/new_page_1.png)

**添加子路由：**

```js
{
  path: '/excel',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Excel',
  meta: { title: '表格', icon: 'excel|svg', breadcrumb: 'false' },
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/demo/excel/index'),
      name: 'exportExcel',
      meta: { title: '导出表格' }
    }
  ]
}
```

::: tip
由于 `children` 下面只声明了一个路由所以不会有展开箭头，如果`children`下面的路由个数大于 1 就会有展开箭头，如下面所示。
如果你想忽视这个自动判断可以使用 `alwaysShow: true`，这样它就会忽略之前定义的规则，一直显示根路由。
:::

![alwaysShow为false](/images/new_page_4.png)

上图是`alwaysShow: false`或者路由没有该选项的时候，因为 `children` 下面只声明了一个路由所以不会有展开箭头。

```diff
{
  path: '/excel',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Excel',
  meta: { title: '表格', icon: 'excel|svg', breadcrumb: 'false' },
+  alwaysShow: true,
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/demo/excel/index'),
      name: 'exportExcel',
      meta: { title: '导出表格' }
    }
  ]
}
```

使用 `alwaysShow: true`,则即使`children` 下面只声明了一个路由，也会有展开收起的效果。

![](images/new_page_5.png)

### 多级目录(嵌套路由)

如果你的路由是多级目录， 有三级路由嵌套的情况下，**不要忘记还要手动在二级目录的根文件下添加一个 `<router-view>`**。

```html
 <!-- 父级路由组件  -->
<template>
  <div>
    <!-- xxx html 内容  -->
    <router-view />
  </div>
</template>
```

原则上有多少级路由嵌套就需要多少个`<router-view>`。

### 新增 api

业务逻辑如果有api调用的场景，则需要在 `src/api` 文件夹下创建本模块对应的 api 服务。如果需要mock服务，则在`mock`文件夹下创建本模块对应的 mock 服务

![](/images/new_page_6.png)

根据服务端端接口文档，定义编写接口请求方法，接下来就可以在页面中使用刚定义的请求接口，下面就以获取文章列表接口作为演示：

**第一种方式：把文件模块中所有的请求接口一次性全部导入**

![](/images/new_page_7.png)

**第二种方式：部分导入接口情况**

![](/images/new_page_8.png)

2种方式都可以引入创建的请求方法，根据自身需求选择。



### 新增组件

个人写 vue 项目的习惯，在全局的 `@/components` 只会写一些全局的组件，如富文本，各种搜索组件，封装的日期组件等等能被公用的组件。每个页面或者模块特定的业务组件则会写在当前 views 下面。如：`@/views/article/components/xxx.vue`。这样拆分大大减轻了维护成本。

### 新添加的页面如何增加权限

以上是创建了一个没有任何权限的路由页面，就是说任何人都能访问该页面，一般公共路由页面，或者是不需要使用权限的路由页面，到此处就已经可以使用展示了，如果是新增的页面需要权限控制，动态加载，则需要如下调整。

**1. 需要在侧边栏展示的目录或者页面**

第一步，则需要在菜单管理中增加目录

![](/images/new_page_9.png)

菜单名称：侧边栏目录展示的名称

路由地址：对应的是路由表中的path，不需要/

第二步，需要在菜单管理中增加页面

![](/images/new_page_10.png)

第三步，新增或者编辑当前角色对应的菜单权限

![](/images/new_page_11.png)

这个时候再看`getRouters`接口返回值，就会多了刚才新添加的目录和菜单,侧边栏也正常显示刚添加的页面了

![](/images/new_page_12.png)

**如果还需要新目录和页面，则重复上面的操作即可；如果只是需要在某个已有目录下面添加页面，重复上面2、3步骤即可。**

**2.不需要在侧边栏展示的目录或者页面**

如果某些目录或者页面不需要在侧边栏展示，有2种方式去添加：

第一种：也是在菜单管理中去添加页面，只不过`显示状态`选择隐藏，然后给角色挂载菜单。

第二种：可以直接在`src/router/index.js`文件中的`dynamicRoutes`去添加路由菜单，这个里面的路由也会去校验权限，但是不会在侧边栏中展示。什么场景会使用这种方式去配置路由呢，比如：分配角色，这种不需要在侧边栏展示的路由页面；或者一些新增编辑二级页面都可以在这里配置，具体配置参考路由详细配置信息。

示例：

```js
{
    path: '/system/user-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:user:edit'],
    children: [
      {
        path: 'role/:userId(\\d+)',
        component: () => import('@/views/system/user/authRole'),
        name: 'AuthRole',
        meta: { title: '分配角色', activeMenu: '/system/user' }
      }
    ]
  }
```

### 新添加的按钮或者入口增加权限

如下图所示，如何给`动态路由`上的按钮增加权限呢？

![](/images/new_page_13.png)

第一步，菜单管理中找到对应的页面，增加按钮，填写按钮权限标识符，如下图所示：

![](/images/new_page_14.png)

第二步，编辑当前角色对应的菜单权限，如下图所示：

![](/images/new_page_15.png)

第三步，在按钮上使用`v-hasPermi`指令对按钮加上相对应的权限

![](/images/new_page_16.png)

到此，页面和按钮都可以根据角色配置有相应的权限了。

## [Mock&联调](/guide/mock.html)

## 构建发布

## 全局组件

## 全局方法

## 指令

## 过滤器

## FORM表单

## 常用组件
