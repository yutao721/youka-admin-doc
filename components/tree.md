# 树形选择组件

[vue-treeselect](https://github.com/riophae/vue-treeselect) 是一个多选组件，具有对 [Vue.js](https://www.vuejs.org/)嵌套选项支持。

### 特性

- 支持嵌套选项的单选和多选
- 模糊匹配
- 异步搜索
- 延迟加载（仅在需要时加载深度选项的数据）
- 键盘支持（使用Arrow Up & Arrow Down键导航，使用键选择选项Enter等）
- 丰富的选项和高度可定制的

### 安装

```bash
npm install --save @riophae/vue-treeselect
```

### Usage

```vue
<template>
  <div id="app">
    <treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
  // import the component
  import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      }

    },
  }
</script>
```

### 文档地址

[中文文档](https://www.vue-treeselect.cn/#basic-features)
