# 登录&注册

## 默认配置

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

对应页面如下图：

![](/images/login.png)

如果项目不需要注册，isShowRegister置为false即可隐藏注册入口；如果项目不需要找回密码功能，则isShowForget置为false即可。

说明：验证码只是前端随机生成的数字，简单校验，如有其它特殊需求可根据自身需求来定制，当然也可以直接captchaEnabled设置为false,就关闭了前端验证码的校验功能。



### 
