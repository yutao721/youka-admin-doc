# ImageUpload

图片上传组件，组件有2种模式，2种模式都是以element-ui中`el-upload`组件为基础，封装而成。

## 2种组件区别介绍

- ImageUpload/index.vue该组件是以action模式上传图片，需要提供上传的图片服务器地址（默认为/common/upload，需要服务端开发）
- ImageUpload/uploadByOss.vue该组件是oss签名直传，需要服务的提供一个获取oss信息的接口即可，前端直接上传到oss

> 目前大多数项目都会选择使用oss来做文件存储，采用第二种前端直接上传到oss,减轻了服务的压力，所以更推荐使用oss直传的方式，当然也可以根据自身需求来选择使用哪种组件

## 全局组件以及局部组件中的使用

`ImageUpload`在`main.js`中已经被注册成了全局组件

```js
// 图片上传组件 action模式
// import ImageUpload from '@/components/ImageUpload'

// 图片上传组件 oss签名直传
import ImageUpload from '@/components/ImageUpload/uploadByOss'

Vue.component('ImageUpload', ImageUpload)
```

可以根据自身的需求选择这个地方的组件引用，就可以切换2中不同的模式。

部分局部组件也可以选择组件引用来修改组件的使用模式，例如在FormRenderer组件中，FormItem组件中上传文件组件就直接使用了oss签名直传的模式,如有需要可以自行修改此处的组件引入；

```js
  // oss 上传文件组件
  import UploadFile from '../FileUpload/uploadByOss';
  // oss 上传图片组件
  import UploadImage from '../ImageUpload/uploadByOss';
  // 自定义 获取验证码组件
  import GetVerifyCode from './GetVerifyCode.vue';
  // 自定义 组件
  import Limit from './Limit.vue';
  // 富文本
  import wangeditor from '@/components/Editor/wangeditor';
```



## 用法

> oss直传模式比action模式只是多了disabled(是否禁用)和multiple(是否直传多选)的模式，该用法就以oss模式演示，另外一个用法也差不多，具体示例演示可以查看管理后台 功能>上传>上传文件



```vue
<template>
  <div class="app-container">
    <div class="my-10">
      <h3 class="my-5">1.上传图片(组件默认值)</h3>
      <ImageUpload v-model="fileList"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">2.上传图片(limit限制1张)</h3>
      <ImageUpload v-model="fileList" :limit="limit"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">3.上传图片(文件大小限制)</h3>
      <ImageUpload v-model="fileList" :fileSize="fileSize"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">4.上传图片(是否显示提示)</h3>
      <ImageUpload v-model="fileList" :isShowTip="isShowTip"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">5.上传图片(是否禁用)</h3>
      <ImageUpload v-model="fileList" :disabled="disabled"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">6.上传图片(是否支持多选文件)</h3>
      <ImageUpload v-model="fileList" :multiple="multiple"></ImageUpload>
    </div>

    <div class="my-10">
      <h3 class="my-5">7.上传图片(文件类型 仅支持png)</h3>
      <ImageUpload v-model="fileList" :fileType="fileType"></ImageUpload>
    </div>

  </div>
</template>

<script>
  // oss 上传图片组件
  import ImageUpload from '@/components/ImageUpload/uploadByOss'

  export default {
    components: { ImageUpload },
    data() {
      return {
        fileList: [
          {
            name: '1',
            url: 'https://zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com/upload/images/avatar_1663653848646.png'
          }
        ],
        limit: 1,
        fileSize: 0.1,
        isShowTip: false,
        disabled: true,
        multiple: true,
        fileType: ['png']
      }
    }
  }
</script>

```

## Props

| 属性              | 类型       | 默认值   | 可选值 | 说明                                     |
| ----------------- | ---------- | -------- | ------ | ---------------------------------------- |
| value             | `string[]` | -        | -      | 已上传的图片列表，支持v-model           |
| isShowTip  | `boolean`  | true    | -      | 是否显示提示               |
| fileSize           | `number`   | 5        | -      | 单个图片最大体积，单位 M                 |
| limit         | `number`   | 5 | -      | 最大上传数量          |
| fileType            | `string[]` | `['png', 'jpg', 'jpeg']`       | -      | 限制上传格式，例如 `['png', 'jpg', 'jpeg']` |
| multiple          | `boolean`  | false        | -      | 开启多图片上传                           |
| disabled      | `boolean`      | false        | -      | 是否禁用                           |

## plugins/uploadFile.js

```js
export async function uploadFile(type = 12, file, onUploadProgress, cancelToken) {
  if (!file || typeof file === 'string') {
    return file;
  }
  const { data: { accessid, policy, signature, host, dir } } = await getOssSgn({ type });
  const form = new FormData();
  form.append('OSSAccessKeyId', accessid);
  form.append('policy', policy);
  form.append('Signature', signature);
  const extname = path.extname(file.name);
  const basename = path.basename(file.name, extname);
  const filename = `${basename}_${Date.now()}${extname}`;
  form.append('key', `${dir}/${filename}`);
  form.append('file', file);

  const response = await axios.post(host, form, {
    onUploadProgress,
    cancelToken
  });

  if (response.status >= 200 && response.status < 300) {
    return `https:${host}/${dir}/${filename}`;
  }

  throw new Error(response.statusText);
}
```

oss直传组件在`handleUploadFile`方法中是调用了`plugins/uploadFile.js`中了uploadFile方法，该方法有4个参数：

- type getOssSgn该方法需要，参见后面getOssSgn方法说明
- file File对象
- onUploadProgress 上传进度，提供给axios使用
- cancelToken 取消 提供给axios使用

该方法就是oss直传的关键，需要在getOssSgn中拿到`accessid, policy, signature, host, dir`等信息，再通过axios进行上传。

## getOssSgn 

获取oss相关信息，一般由服务端提供接口动态获取得到，参数type可根据项目需求可传可不传，这里我只是用了其他项目获取oss的接口相同的信息来处理。**返回值必须如下data**，否则需要修改`plugins/uploadFile.js`中的`uploadFile`方法，根据返回值来拼接需要的相关信息。

```json
{
cd: 0,
code: 0,
msg: "ok",
data: {
    accessid: "LTAI5tLWYQ6gVMhvFNVRbkQ1",
    host: "//zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com",
    policy: "eyJleHBpcmF0aW9uIjoiMjAyMi0xMC0xNlQxNjoyMzoyOFoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidXBsb2FkXC9pbWFnZXMiXV19",
    signature: "ru+WzVN43utQlIj+fQUMUovaG9g=",
    expire: 1665908608,
    dir: "upload/images"
    }
}
```

