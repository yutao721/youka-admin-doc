# CountTo

数字动画组件， [vue-countTo](https://github.com/PanJiaChen/vue-countTo)

## Usage

```vue
<template>
  <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    data () {
      return {
        startVal: 0,
        endVal: 2017
      }
    }
  }
</script>
```

## Props

| 属性  | 说明                          | 类型     | 默认值 |
| --------- | ------------------------------------ | -------- | ------- |
| startVal  | 起始值       | Number   | 0       |
| endVal    | 结束值      | Number   | 2017    |
| duration  | 动画持续时间              | Number   | 3000    |
| autoplay  | 自动执行                | Boolean  | true    |
| decimals  | 保留小数点位数 | Number   | 0       |
| decimal   | 小数点                    | String   | .       |
| separator | 分隔符                        | String   | ,       |
| prefix    | 前缀                           | String   | ''      |
| suffix    | 后缀                           | String   | ''      |
| useEasing | 是否开启动画               | Boolean  | true    |
| easingFn  | 动画行数                  | Function | —       |

## Methods

| 名称  | 回调参数   | 说明         |
| ----- | ---------- | ------------ |
| start | `()=>void` | 开始执行动画 |
| pause | `()=>void` | 暂停 |
| reset | `()=>void` | 重置         |
