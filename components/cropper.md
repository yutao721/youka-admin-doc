# Cropper

一个优雅的图片裁剪插件，[vue-cropper](https://github.com/xyxiao001/vue-cropper)

### 安装

```bash
# npm 安装
npm install vue-cropper
# yarn 安装
yarn add vue-cropper
```

### Usage

```vue
<template>
  <vueCropper
    ref="cropper"
    :img="option.img"
    :outputSize="option.size"
    :outputType="option.outputType"
  ></vueCropper>
</template>
<script lang="js">
  import { VueCropper }  from 'vue-cropper' 

  export default {
    components: {
      VueCropper,
    },
    data() {
      return {
        options: {
          img: store.getters.avatar, //裁剪图片的地址
          autoCrop: true, // 是否默认生成截图框
          autoCropWidth: 200, // 默认生成截图框宽度
          autoCropHeight: 200, // 默认生成截图框高度
          fixedBox: true // 固定截图框大小 不允许改变
        },
      }
    },
  };
</script>
```

### Props

| 名称           | 功能                                                     | 默认值                 | 可选值                                    |
| -------------- | -------------------------------------------------------- | ---------------------- | ----------------------------------------- |
| img            | 裁剪图片的地址                                           | 空                     | `url 地址`, `base64`, `blob`              |
| outputSize     | 裁剪生成图片的质量                                       | `1`                    | 0.1 ~ 1                                   |
| outputType     | 裁剪生成图片的格式                                       | jpg (jpg 需要传入jpeg) | `jpeg`, `png`, `webp`                     |
| info           | 裁剪框的大小信息                                         | `true`                 | `true`, `false`                           |
| canScale       | 图片是否允许滚轮缩放                                     | `true`                 | `true`, `false`                           |
| autoCrop       | 是否默认生成截图框                                       | `false`                | `true`, `false`                           |
| autoCropWidth  | 默认生成截图框宽度                                       | 容器的 80%             | 0 ~ max                                   |
| autoCropHeight | 默认生成截图框高度                                       | 容器的 80%             | 0 ~ max                                   |
| fixed          | 是否开启截图框宽高固定比例                               | `false`                | `true`, `false`                           |
| fixedNumber    | 截图框的宽高比例                                         | `[1, 1]`               | `[ 宽度 , 高度 ]`                         |
| full           | 是否输出原图比例的截图                                   | `false`                | `true`, `false`                           |
| fixedBox       | 固定截图框大小                                           | 不允许改变             | `false`                                   |
| canMove        | 上传图片是否可以移动                                     | `true`                 | `true`, `false`                           |
| canMoveBox     | 截图框能否拖动                                           | `true`                 | `true`, `false`                           |
| original       | 上传图片按照原始比例渲染                                 | `false`                | `true`, `false`                           |
| centerBox      | 截图框是否被限制在图片里面                               | `false`                | `true`, `false`                           |
| high           | 是否按照设备的dpr 输出等比例图片                         | `true`                 | `true`, `false`                           |
| infoTrue       | true 为展示真实输出图片宽高 `false` 展示看到的截图框宽高 | false                  | `true`, `false`                           |
| maxImgSize     | 限制图片最大宽度和高度                                   | `2000`                 | 0 ~ max                                   |
| enlarge        | 图片根据截图框输出比例倍数                               | `1`                    | 0 ~ max(建议不要太大不然会卡死的呢)       |
| mode           | 图片默认渲染方式                                         | `contain`              | `contain` , `cover`, `100px`, `100%` auto |

### 可用回调方法

- `@realTime` 实时预览事件
- `@imgMoving` 图片移动回调函数
- `@cropMoving` 截图框移动回调函数
- `@imgLoad` 图片加载的回调, 返回结果 `success`, `error`

### 参考示例

在菜单组件>copper中使用了vue-cropper，并将截图上传至oss,注意以下代码的地方

```js
// 上传图片
uploadImg() {
  // 获取截图的 blob 数据
  this.$refs.cropper.getCropBlob(data => {
    let formData = new FormData();
    formData.append('avatarfile', data);

    // 由于服务端文件上传接口统一接收file对象，从而数据在提交前需要将blob数据转为file对象，转换方法如下
    const file = new window.File([data], `${Date.now()}`, { type: data.type })
    console.log(file);

    // oss 上传
    uploadFile(12, file).then(imgUrl => {
      console.log(imgUrl);
      this.open = false;
      this.options.img = imgUrl;
      this.$modal.msgSuccess('修改成功');
      this.visible = false;
    }).catch(err => {

    })
  });
},
```



### 更多文档说明

[文档地址](https://github.com/xyxiao001/vue-cropper)