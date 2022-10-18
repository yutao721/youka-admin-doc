# 权限

## 为什么要有权限

做后台项目区别于做其它的项目，权限验证与安全性是非常重要的，可以说是一个后台项目一开始就必须考虑和搭建的基础核心功能。我们所要做到的是：不同的权限对应着不同的路由，同时侧边栏也需根据不同的权限，异步生成。例如：一个后台使用者不同，看到的菜单（也就是侧边栏）也有所不同，运营端可以看到关键数据板块，而其他角色看不到此菜单，如此就必须给不同的角色分配不同的权限，而不同的权限则有不同的路由菜单，就形成了不同权限的角色有着不同的页面组成。

## 权限分类

按展示级别显示可以分为：

- 页面级别  可控制页面是否显示
- 按钮级别  可控制某个按钮或者模块是否显示

按实现方式可以分为：

- 角色权限 
- 权限标识符

角色一般来说是由一系列的菜单权限所组成，可以自由组合，页面以及页面功能按钮都依次为准。

![](http://ycmall-oss.oss-cn-hangzhou.aliyuncs.com/common-static/youka-admin/auth_1.png)

从上图可以看到，common这个角色拥有后台所配置菜单所有的页面权限以及页面对应的按钮权限，唯独没有用户管理页面中重置密码的按钮权限，如果给分配到common这个角色，那此角色就看不到重置密码的按钮，这也说明了可以用角色来控制按钮功能的显示与否，当然角色也可以控制页面路由的显示，如果上图用户管理整一块都不选中，则路由菜单（侧边栏）就不会显示该页面。

对于前端配置的动态路由，也可以用`roles`字段来控制某个或者某些路由只有特定的角色能访问。

```js
{
    path: '/system/user-auth',
    component: Layout,
    hidden: true,
    roles: ['common'],
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

当然，也可以通过菜单权限比如`permissions: ['system:user:edit']`来控制路由的访问。

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

上面这个路由配置就代表，只要有`system:user:edit`菜单权限就能访问，如果很多角色中都有这个菜单权限，那么这些角色就都能访问该路由。

上面说的角色权限和菜单权限都是基于后台的菜单管理中添加的，然后根据菜单来生成的一份动态路由表。

![](http://ycmall-oss.oss-cn-hangzhou.aliyuncs.com/common-static/youka-admin/auth_2.png)

添加目录如下图：

![](http://ycmall-oss.oss-cn-hangzhou.aliyuncs.com/common-static/youka-admin/auth_3.png)

添加菜单如下图：

![](http://ycmall-oss.oss-cn-hangzhou.aliyuncs.com/common-static/youka-admin/auth_4.png)

添加按钮如下图：

![](http://ycmall-oss.oss-cn-hangzhou.aliyuncs.com/common-static/youka-admin/auth_5.png)



## 权限实现

不同的权限对应着不同的路由，同时侧边栏也需根据不同的权限，这个是权限控制的第一个需求，首先看下`src/router/index`中路由表的生成。

```js
// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard|svg', affix: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        component: () => import('@/views/system/user/profile/index'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user|svg' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        component: () => import('@/views/system/user/profile/index'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user|svg' }
      }
    ]
  },

  // form相关
  formRouter,
  // table相关
  tableRouter,
  // 功能相关
  featRouter,
  // 组件相关
  componentsRouter,
  // 图标相关
  chartsRouter
  // add new route ..
]

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [
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
]
```

可以看到有`constantRoutes`和`dynamicRoutes`2个数组，`constantRoutes`是公共路由，那些不需要动态判断权限的路由，如登录页、404、等通用页面都可以在这个数组中去声明；`dynamicRoutes`代表那些需要根据用户动态判断权限并通过`addRoutes`动态添加的页面，可以手动在里面添加路由并分配角色或者菜单权限，也可以在系统管理-菜单管理进行新增和修改操作，前端加载会自动请求接口获取菜单信息并转换成前端对应的路由。

总结来看：

1. 创建vue实例的时候将vue-router挂载，但这个时候vue-router挂载一些登录或者不用权限的公用的页面。
2. 当用户登录后，获取用role，将role和路由表每个页面的需要的权限作比较，生成最终用户可访问的路由表。
3. 调用router.addRoutes(store.getters.addRouters)添加用户可访问的路由。
4. 使用vuex管理路由表，根据vuex中可访问的路由渲染侧边栏组件

### `main.js`

在`main.js`中引入了一个`permission.js`文件：

```js
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isRelogin } from '@/utils/request'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/bind', '/register']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        isRelogin.show = true
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(() => {
          isRelogin.show = false
          store.dispatch('GenerateRoutes').then(accessRoutes => {
            // 根据roles权限生成可访问的路由表
            router.addRoutes(accessRoutes) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
          })
        }).catch(err => {
            store.dispatch('LogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
```

在`router.beforeEach`钩子中判断用户是否登录，登录之后获取到用户信息，以及用户的role,将role和路由表每个页面的需要的权限作比较，生成最终用户可访问的路由表。`store.dispatch('GenerateRoutes')`中会先向服务端请求路由数据，并路由遍历，验证是否具备权限。

```js
// 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          const sdata = JSON.parse(JSON.stringify(res.data))
          const rdata = JSON.parse(JSON.stringify(res.data))
          const sidebarRoutes = filterAsyncRouter(sdata)
          const rewriteRoutes = filterAsyncRouter(rdata, false, true)
          const asyncRoutes = filterDynamicRoutes(dynamicRoutes);
          rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
          router.addRoutes(asyncRoutes);
          commit('SET_ROUTES', rewriteRoutes)
          commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
          commit('SET_DEFAULT_ROUTES', sidebarRoutes)
          commit('SET_TOPBAR_ROUTES', sidebarRoutes)
          resolve(rewriteRoutes)
        })
      })
    }
  }
```

这里的代码说白了就是干了一件事，通过用户的权限和之前在router.js里面asyncRouterMap的每一个页面所需要的权限做匹配，最后返回一个该用户能够访问路由有哪些。

## axios拦截器

:::  warning

前端有了鉴权后端还需要鉴权吗？

前端的鉴权只是一个辅助功能，对于专业人员这些限制都是可以轻松绕过的，为保证服务器安全，无论前端是否进行了权限校验，后端接口都需要对会话请求再次进行权限校验！

:::

上面所做的那些路由权限的校验，其实接口也需要做权限的拦截

首先我们通过**request拦截器**在每个请求头里面塞入**token**，好让后端对请求进行权限验证。并创建一个respone拦截器，当服务端返回特殊的状态码，我们统一做处理，如没权限或者token失效等操作。

## 指令权限

**使用权限字符串 v-hasPermi**

```vue
// 单个
<el-button v-hasPermi="['system:user:add']">存在权限字符串才能看到</el-button>
// 多个
<el-button v-hasPermi="['system:user:add', 'system:user:edit']">包含权限字符串才能看到</el-button>
```

**使用角色字符串 v-hasRole**

```vue
// 单个
<el-button v-hasRole="['admin']">管理员才能看到</el-button>
// 多个
<el-button v-hasRole="['role1', 'role2']">包含角色才能看到</el-button>
```

::: tip

在某些情况下，它是不适合使用v-hasPermi，如元素标签组件，只能通过手动设置v-if。 可以使用全局权限判断函数，用法和指令 v-hasPermi 类似。

:::

```vue
<template>
  <el-tabs>
    <el-tab-pane v-if="checkPermi(['system:user:add'])" label="用户管理" name="user">用户管理</el-tab-pane>
    <el-tab-pane v-if="checkPermi(['system:user:add', 'system:user:edit'])" label="参数管理" name="menu">参数管理</el-tab-pane>
    <el-tab-pane v-if="checkRole(['admin'])" label="角色管理" name="role">角色管理</el-tab-pane>
    <el-tab-pane v-if="checkRole(['admin','common'])" label="定时任务" name="job">定时任务</el-tab-pane>
   </el-tabs>
</template>

<script>
import { checkPermi, checkRole } from "@/utils/permission"; // 权限判断函数

export default{
   methods: {
    checkPermi,
    checkRole
  }
}
</script>
```
































