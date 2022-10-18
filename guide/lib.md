# 引入外部模块

除了自带组件以外，有时我们还需要引入其他外部模块。我们以 `vue-count-to` 为例：

## 安装

安装 `vue-count-to`

```bash
# 在终端输入下面的命令完成安装
yarn add vue-count-to
```

## 使用

### 全局使用
在main.js中注册全局组件
```js
import countTo from 'vue-count-to'
Vue.component('countTo', countTo)
```

### 局部使用

```vue
<template>
 <div>
  <count-to
       ref="example"
       :start-val="_startVal"
       :end-val="_endVal"
       :duration="_duration"
       :decimals="_decimals"
       :separator="_separator"
       :prefix="_prefix"
       :suffix="_suffix"
       :autoplay="false"
       class="example"
     />
</div>
</template>

<script>
  import countTo from 'vue-count-to'
  export default {
    name: 'CountToDemo',
    components: { countTo },
    data() {
      return {
        setStartVal: 0,
        setEndVal: 2017,
        setDuration: 4000,
        setDecimals: 0,
        setSeparator: ',',
        setSuffix: ' rmb',
        setPrefix: '¥ '
      }
    },
  }
</script>
```

## 注意

- 如果组件有依赖样式，则需要再引入样式文件
