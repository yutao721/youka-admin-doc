# 介绍

## 简介

`Vue-youka-Admin`是一个基于 `Vue2.0`、 `webpack`、`element-ui` 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。包括二次封装组件、utils、动态菜单、权限校验、按钮级别权限控制等功能。

## 文档

- 采用 Vitepress 开发

### 本地运行文档

如需本地运行文档，请拉取代码到本地。

```bash
# 拉取代码
git clone https://github.com/yutao721/youka-admin-doc

# 安装依赖
yarn

# 运行项目
yarn dev
```

## 需要掌握的基础知识

本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。
建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:

- [Vue2 文档](https://v2.cn.vuejs.org/v2/guide/index.html/)
- [Vue-router 3.x](https://v3.router.vuejs.org/zh/)
- [element-ui](https://element.eleme.cn/#/zh-CN/component/installation/)
- [Vuex 3.x](https://v3.vuex.vuejs.org/zh/)
- [Es6](https://es6.ruanyifeng.com/)
- [WindiCss](https://windicss.netlify.app/)

## 项目目录结构

```js
├── build										// 脚本
│   ├── index.js							    // npm run preview 执行该脚本
│   ├── new.js									// npm  run new 执行该脚本，可以新添加view页面
│   └── template								// npm  run new 使用到的模板
│       └── template.vue
├── dist										// npm run build打包之后 的代码
├── mock                                        // mock服务和api相关
├── public                                      // 静态资源目录
├── src
│   ├── api                                     // 接口api相关文件夹
│   │   ├── article.js
│   │   ├── common.js
│   │   ├── login.js
│   │   ├── menu.js
│   │   └── system
│   ├── assets                                  // 资源文件夹
│   │   ├── 401_images                          // 401 页面image
│   │   ├── 404_images                          // 404 页面image
│   │   ├── icons                               // svg icon文件夹
│   │   │    ├── svg                            // 存放svg图标，这里的svg图标会自动注册
│   │   │    ├── index.js                       // svg-icon全局组件
│   │   ├── images                              // 其他公共图片
│   │   ├── login                               // 登录相关图片
│   │   ├── logo                                // 项目logo
│   │   └── styles                              // 全局css样式表，具体参看样式部分
│   ├── components                              // 全局组件
│   │   ├── BackToTop                           // 全局组件-返回顶部
│   │   ├── Breadcrumb                          // 全局组件-面包屑
│   │   ├── Crontab                             // 全局组件-cron表达式组件
│   │   ├── DictData                            // 全局组件-字典组件
│   │   ├── DictTag                             // 全局组件-翻译数据字典组件
│   │   ├── Editor                              // 全局组件-富文本组件 文件夹
│   │   │    ├── index.vue                      // 全局组件-富文本组件-quill
│   │   │    ├── wangeditor.vue                 // 全局组件-富文本组件-wangeditor  项目已将wangeditor作为默认富文本
│   │   ├── FileUpload
│   │   │    ├── index.vue                      // 全局组件-上传文件-服务器上传
│   │   │    ├── uploadByOss.vue                // 全局组件-上传文件-OSS直传 项目已将OSS直传作为默认
│   │   ├── FormRenderer                        // 全局组件-form二次封装，使用参看文档详细说明
│   │   ├── Hamburger                           // 全局组件-Hamburger 侧边栏样式切换
│   │   ├── Icon                                // 全局组件-CIcon 
│   │   ├── IconSelect                          // 全局组件-Icon选择器
│   │   ├── ImagePreview                        // 全局组件-图片放大查看
│   │   ├── ImageUpload
│   │   │    ├── index.vue                      // 全局组件-上传图片-服务器上传
│   │   │    ├── uploadByOss.vue                // 全局组件-上传图片-OSS直传 项目已将OSS直传作为默认
│   │   ├── Pagination                          // 全局组件-分页组件
│   │   ├── PanThumb                            // 全局组件-PanThumb
│   │   ├── ParentView
│   │   ├── ReImageVerify                       // 全局组件-生成4位随机验证码
│   │   ├── RightPanel                          // 全局组件-RightPanel
│   │   ├── RightToolbar                        // 全局组件-RightToolbar
│   │   ├── Screenfull                          // 全局组件-全屏
│   │   ├── SvgIcon                             // 全局组件-SvgIcon组件
│   │   ├── ThemePicker                         // 全局组件-颜色主题选择
│   │   ├── TopNav                              // 全局组件-TopNav 
│   │   ├── elFormModel                         // 全局组件-elFormModel
│   │   └── iFrame                              // 全局组件-iFrame 外链
│   ├── config                                  // 配置文件，暂时没用到
│   │   ├── env.development.js
│   │   ├── env.production.js
│   │   ├── env.staging.js
│   │   └── index.js
│   ├── directive                               // 全局指令，如有新加，在这里增加指令
│   │   ├── clipboard                           // 全局指令-复制剪贴板
│   │   ├── dialog                              // 全局指令-弹窗相关
│   │   ├── index.js                            // 全局指令主入口
│   │   ├── module                  
│   │   ├── permission                          // 全局指令-权限
│   │   └── waves                               // 全局指令-水波纹
│   ├── filters                                 
│   │   └── index.js                            // 全局过滤器，如有新加，在这里过滤器
│   ├── layout                                  // layout相关
│   │   ├── components
│   │   ├── index.vue
│   │   └── mixin
│   ├── plugins                                 // 插件，也就是全局方法
│   │   ├── auth.js                             
│   │   ├── cache.js
│   │   ├── download.js
│   │   ├── index.js
│   │   ├── modal.js
│   │   ├── tab.js
│   │   └── uploadFile.js
│   ├── router                                  // 路由相关
│   │   ├── index.js                            // 路由主入口
│   │   └── modules                             // 路由模块
│   ├── store                                   // store状态管理
│   │   ├── getters.js
│   │   ├── index.js
│   │   └── modules
│   ├── utils                       
│   │   ├── auth.js                             // 权限认证    
│   │   ├── city-code.json                      // 省市区
│   │   ├── clipboard.js                        // 剪贴板
│   │   ├── dict                                // 字典相关
│   │   ├── errorCode.js                        // code相关
│   │   ├── generator                           // 生成代码 暂时没用到
│   │   ├── index.js                            
│   │   ├── jsencrypt.js                        // 加密
│   │   ├── permission.js                       // 权限
│   │   ├── request.js                          // 基于axios封装请求方法
│   │   ├── scroll-to.js                        // 滚动相关
│   │   └── validate.js                         // 正则表达式，所有的验证规则都写这里
│   └── views                                   // 页面
│   │   ├── components
│   │   ├── dashboard
│   │   ├── demo
│   │   ├── error
│   │   ├── index.vue
│   │   ├── login
│   │   ├── login.vue
│   │   ├── redirect.vue
│   │   ├── register.vue
│   │   ├── system
│   │   └── tool
│   ├── App.vue                                 // vue 根组件,主入口
│   ├── main.js                                 // 主入口
│   ├── permission.js                           // 权限相关，详细查看登录页面展示流程
│   ├── settings.js                             // 全局配置
├── jsconfig.json                               // js配置文件
├── package.json                                
├── babel.config.js                             // babel配置文件
└── vue.config.js                               // vue-cli配置文件
```
