# 跨域处理

## 产生原因

跨域产生的原因是由于前端地址与后台接口不是同源，从而导致 ajax 不能发送

::: tip 非同源产生的问题

1. Cookie、LocalStorage 和 IndexDB 无法获取
2. DOM 无法获得
3. AJAX 请求不能发送

:::

::: tip 同源条件

**协议**，**端口**，**主机** 三者相同即为同源

反之，其中只要 **某一个** 不一样则为不同源

:::

## 解决方式

### **本地开发跨域**

本地开发一般使用下面 3 种方式进行处理

1. vue-cli 的 proxy 进行代理, 详细可以查看文档，https://cli.vuejs.org/config/#devserver-proxy

一个webpack配置信息：
```js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.baidu.com/',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        logLevel: 'debug'       // 加上这个会打印出原始代理地址
      },
      '/api2': {
          .....
      }
    }
  }
};
```
**配置中主要的参数说明**
#### '/api'

捕获API的标志，如果API中有这个字符串，那么就开始匹配代理， 比如API请求/api/users, 会被代理到请求 http://www.baidu.com/api/users 。

#### target

代理的API地址，就是需要跨域的API地址。 地址可以是域名,如：http://www.baidu.com 也可以是IP地址：http://127.0.0.1:3000 如果是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。

#### pathRewrite

路径重写，也就是说会修改最终请求的API路径。 比如访问的API路径：/api/users, 设置pathRewrite: {'^/api' : ''},后， 最终代理访问的路径：http://www.baidu.com/users， 这个参数的目的是给代理命名后，在访问时把命名删除掉。

#### changeOrigin

这个参数可以让target参数是域名。

#### secure

secure: false,不检查安全问题。 设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器

#### logLevel

logLevel: 'debug', 加上这个之后，会打印出原始代理地址

示例： 开发阶段，本地接口想代理到服务端同学电脑本地服务（http://10.225.10.31:8664/）
则对应的.env.development文件中的VUE_APP_BASE_API可以指定一个任意字符串如：'/api'
相应的vue.config.js文件中的proxy则配置如下：

```js
proxy: {
  '/api': {
    target: 'http://10.225.10.31:8664/',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,     // target是域名的话，需要这个参数，
    secure: false,          // 设置支持https协议的代理
    logLevel: 'debug'
  }
}
```
当我们的项目在`9527`端口中启动之后,就可以清晰的看到每个接口的重写地址以及原始的代理域名或者ip地址

![](/images/proxy_1.png)

页面接口请求地址如下图所示：

![](/images/proxy_2.png)

页面上本来访问的 `http://localhost:9527/api/game/tips` 接口，就代理成了`http://10.225.10.31:8664/game/tips`

#### 详细参看资料：

webpack-dev-server： https://github.com/webpack/webpack-dev-server

http-proxy-middleware： https://github.com/chimurai/http-proxy-middleware

[webpack官网 devServer.proxy配置](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)

2. 后台开启 cors
3. 使用 nginx 转发请求



### **生产环境跨域**

生产环境一般使用下面 2 种方式进行处理

1. 后台开启 cors
2. 使用 nginx 转发请求

::: tip

**后台开启 cors 一般不需要前端做任何改动**

:::

