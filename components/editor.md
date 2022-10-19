# 富文本组件

本项目有2种富文本编辑器，一个是用[quill](https://github.com/quilljs/quill)封装，另外一个是利用[wangEditor](https://www.wangeditor.com/v5/getting-started.html) 封装的。而`wangeditor`组件中已经处理好了图片，视频oss直传的逻辑，推荐使用`wangeditor`。

## 使用

```vue
<template>
  <div class="app-container">
    <h3 class="text-3xl my-10">富文本上传示例</h3>

    <div class="my-10">
      <h3 class="my-5 text-xl">wangeditor单独使用</h3>
      <wangeditor v-model="remark" :readonly="readonly"></wangeditor>
    </div>
  </div>
</template>

<script>
  import wangeditor from '@/components/Editor/wangeditor';

  export default {
    components: { wangeditor },
    data() {
      return {
        remark: '富文本上传示例',
        readonly: false
      }
    }
  }
</script>

```

## Props

| 属性          | 类型   | 默认值 | 说明       |
| ------------- | ------ | ------ | ---------- |
| value/v-model | string | ''     | 富文本数据 |
| readonly | boolean | `false`     | 是否只读 |

## 特性

`wangeditor`在element表单中使用或者是在`FormRenderer`中使用的时候，也会触发表单的校验，这个就是自定义组件触发element的校验，主要是在组件中有如下操作：

```js
onChange(editor) {
  console.log('onChange', editor.getHtml()) // onChange 时获取编辑器最新内容
  let html = editor.getHtml();
  if (html !== this.value) {
    this.$emit('input', html);
    
    // 自定义组件触发element的校验
    this.dispatch('ElFormItem', 'el.form.change', [html]);
    this.dispatch('ElFormItem', 'el.form.blur', [html]);
  }
}
```

如果自己封装的自定义组件也想触发element的校验，可以参考此组件的做法，也可以参考[此篇文章](https://juejin.cn/post/6986473074539364359)。

