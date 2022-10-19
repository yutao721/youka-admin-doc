# 前言

组件分类
- 全局组件
- 局部组件
- 第三方组件


## 全局组件

该项目有以下全局组件，使用的时候可以直接使用，不用注册。

```vue
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)
Vue.component('CIcon', CIcon)
Vue.component('el-form-model', ElFormModel)
Vue.component('svg-icon', SvgIcon)
```

## 局部组件

组件大部分没有进行全局注册。采用了引入注册方式，如下

```vue
<template>
  <div class="login-code">
    <ReImageVerify ref="ReImageVerify" :code.sync="imgCode"/>
  </div>
</template>
<script>
  import ReImageVerify from '@/components/ReImageVerify';
  export default {
    components: { ReImageVerify },
    data() {
      return {
        imgCode: 1234
      }
    },
  };
</script>
```

## 第三方组件

第三方组件就是以`npm install` 安装的组件，按照第三方组件使用说明文档使用。


