# ReImageVerify

前端校验验证码组件

### Usage

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

### Props

| 属性         | 类型             | 默认值           | 说明               |
| ------------ | ---------------- | ---------------- | ------------------ |
| code         | `string`         | '' | 随机展示的数字 |



