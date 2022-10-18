
## 和服务端进行交互

### 前端请求流程

一个完整的前端 UI 交互到服务端处理流程是这样的：

1. UI 组件交互操作；
2. 调用统一管理的 api service 请求函数；
3. 使用封装的 request.js 发送请求；
4. 获取服务端返回；
5. 更新 data；



从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 `@/api` 文件夹中，并且一般按照 model 纬度进行拆分文件，如：

```text
api/
  login.js
  article.js
  remoteSearch.js
  ...
```

### request.js

其中，`@/utils/request.js` 是基于 [axios](https://github.com/axios/axios) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 `request.js`。 它封装了全局 `request拦截器`、`response拦截器`、`统一的错误处理`、`统一做了超时处理`、`baseURL设置等`。

### 一个请求文章列表页的例子：

```js
// api/article.js
import request from '../utils/request';
export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}


// views/example/list
import { fetchList } from '@/api/article'
export default {
  data() {
    list: null,
    listLoading: true
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
```

###  设置多个 baseURL

我们可以通过环境变量设置多个`baseURL`，从而请求不同的 api 地址。

```bash
# .env.development
VUE_APP_BASE_API = '/dev-api' #注入本地 api 的根路径
VUE_APP_BASE_API2 = '/dev-api2' #注入本地 api2 的根路径
```

之后根据环境变量创建`axios`实例，让它具有不同的`baseURL`。

```js
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

const service2 = axios.create({
  baseURL: process.env.BASE_API2, // api2 的 base_url
  timeout: 5000 // request timeout
})
```

或者

```js
export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query,
    baseURL: 'xxxx' // 直接通过覆盖的方式
  })
}
```

## Mock Data

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

### Mockjs

在本地会启动一个`mock-server`来模拟数据， mock 是完全基于`webpack-dev-serve`来实现的，所以在启动前端服务的同时，`mock-server`就会自动启动，而且这里还通过 [chokidar](https://github.com/paulmillr/chokidar) 来观察 `mock` 文件夹内容的变化。在发生变化时会清除之前注册的`mock-api`接口，重新动态挂载新的接口，从而支持热更新。由于是一个真正的`server`，所以你可以通过控制台中的`network`，清楚的知道接口返回的数据结构。

本项目的所有请求都是通过封装的request.js进行发送的，所有的请求都设置了一个`baseURL`，而这个`baseURL`又是通过读取`process.env.VUE_APP_BASE_API`这个环境变量来动态设置的，这样方便我们做到不同环境使用不同的 `api` 地址。

### 移除

如果你不想使用`mock-server`的话只要在vue.config.js中移除`webpack-dev-server`中`proxy`和`before`这个`Middleware`就可以了。

现在默认情况下本地的请求会代理到`http://localhost:${port}/mock`下，如果你想调整为自己的 mock 地址可以修改 `proxy`

```js
pproxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    // 开启mock
    before: process.env.NODE_ENV === 'development' ? require('./mock/mock-server.js') : ''
```

:::tip
**请注意：该操作需要重启服务**
:::

`mock-server`只会在开发环境中使用，线上生产环境目前使用`MockJs`进行模拟。如果不需要请移除。具体代码：main.js

```js
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
```

### 新增

如果你想添加 mock 数据，只要在根目录下找到`mock`文件，添加对应的路由，对其进行拦截和模拟数据即可。

比如我现在在src/api/article中需要添加一个查询某篇文章下面评论数的接口`fetchComments`，首先新建接口：

```js
export function fetchComments(id) {
  return request({
    url: `/article/${id}/comments`,
    method: 'get'
  })
}
```

声明完接口之后，我们需要找到对应的 mock 文件夹mock/article.js，在下面创建一个能拦截路由的 mock 接口

**请注意，mock 拦截是基于路由来做的，请确保 mock 数据一定能匹配你的 api 路由，支持正则**

```js
// fetchComments 的 mock
{
  // url 必须能匹配你的接口路由
  // 比如 fetchComments 对应的路由可能是 /article/1/comments 或者 /article/2/comments
  // 所以你需要通过正则来进行匹配
  url: '/article/[A-Za-z0-9]/comments',
  type: 'get', // 必须和你接口定义的类型一样
  response: (req, res) => {
    // 返回的结果
    // req and res detail see
    // https://expressjs.com/zh-cn/api.html#req
    return {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
}
```

### 修改

最常见的操作就是：你本地模拟了了一些数据，待后端完成接口后，逐步替换掉原先 mock 的接口。

我们以src/api/role.js中的`getRoles`接口为例。它原本是在mock/role/index.js中 mock 的数据。现在我们需要将它切换为真实后端数据，只要在mock/role/index.js找到对应的路由，之后将它删除即可。这时候你可以在`network`中，查看到真实的数据。

```js
// api 中声明的路由
export function getRoles() {
  return request({
    url: '/roles',
    method: 'get'
  })
}

//找到对应的路由，并删除
{
    url: '/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },
```

### 多个 server

目前项目只启动了一个`mock-server`，当然你也可以有自己其它的`mock-server`或者代理接口。可以一部分接口走这个服务，另一些接口走另一个服务。只需要将它们分别设置不同的的`baseURL`即可。 

之后根据设置的 url 规则在 vue.config.js 中配置多个 `proxy` 。



### 启用纯前端 Mock

现在在mock/index.js也封装了一个纯前端 mock 的方法，你只需要在src/main.js中：

```js
import { mockXHR } from '../mock'
mockXHR()
```

这样就会变成纯前端 mock 数据了

### 本地 Mock 数据与线上数据切换

有很多时候我们会遇到本地使用 mock 数据，线上环境使用真实数据，或者说不同环境使用不同的数据。

- **Easy-Mock 的形式**

你需要保证你本地模拟 api 除了根路径其它的地址是一致的。
比如：

```
https://api-dev/login   // 本地请求

https://api-prod/login  // 线上请求
```

我们可以通过之后会介绍的[环境变量](/zh/guide/essentials/deploy.html#环境变量)来做到不同环境下，请求不同的 api 地址。

```bash
# .env.development
VUE_APP_BASE_API = '/dev-api' #注入本地 api 的根路径
```

```bash
# .env.production
VUE_APP_BASE_API = '/prod-api' #注入线上 api 的根路径
```

之后根据环境变量创建`axios`实例，让它具有不同的`baseURL`。

```js
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})
```

这样我们就做到了自动根据环境变量切换本地和线上 api。

- **Mock.js 的切换**

当我们本地使用 `Mock.js` 模拟本地数据，线上使用真实环境 api 方法。这与上面的 easy-mock 的方法是差不多的。我们主要是判断：是线上环境的时候，不引入 mock 数据就可以了，只有在本地引入 `Mock.js`。

```js
// main.js
// 通过环境变量来判断是否需要加载启用
if (process.env.NODE_ENV === 'development') {
  require('./mock') // simulation data
}
```

只有在本地环境之中才会引入 mock 数据。
