# 常见问题



## 环境问题

如果出现依赖安装报错，启动报错等。先检查电脑环境有没有安装齐全。

- Node 版本必须大于`12.0.0`不支持 `13`， 推荐 14 版本。
- Git
- Yarn 最新版

## 依赖安装问题

- 如果依赖安装不了或者启动报错可以先尝试 删除 `yarn.lock` 和 `node_modules`，然后重新运行 `yarn install`
- 如果依赖安装不了或者报错，可以尝试切换手机热点来进行依赖安装。
- 如果还是不行，可以自行配置国内镜像安装。
- 也可以在项目根目录创建 `.npmrc` 文件，内容如下

```bash
# .npmrc
registry = https://registry.npm.taobao.org
```

然后重新执行`yarn run reinstall`等待安装完成即可

## 更新中...