# Form 表单组件

## 1. element 自带Form

> 具体使用请参考`element-ui`文档，[文档地址](https://element.eleme.cn/#/zh-CN/component/form)

### 特点

- `element-ui`在很多后台管理系统中都有使用，都比较熟悉，容易上手。
- 功能组件丰富，满足大部分表单使用场景。
- 文档比较齐全
- 不足的地方就是复杂的Form表单写起来代码量会很多，维护起来不方便。

### 示例

```vue
<template>
  <div class="app-container">

    <div class="my-10 px-5 text-bold text-lg text-black">
      <h1>element 自带Form
        <el-link type="primary" href="https://element.eleme.cn/#/zh-CN/component/form" target="_blank">文档地址</el-link>
      </h1>
    </div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```

## 2.  FormRenderer组件

> 该组件是对`element-ui`中的Form组件进行二次封装，简化了Form表单的操作

### 特点

- 使用比较简单，通过items数组的操作，就可以快速完成Form的构建以及校验
- 扩展性比较强，可以根据业务逻辑封装业务组件插入表单中使用

### 示例

```vue
<template>
  <div class="app-container">
    <div class="my-10 px-5 text-bold text-lg text-black">
      <h1>ElFormModel组件</h1>
    </div>

    <form-renderer
        class="my-10 w-1/2"
        ref="form"
        label-width="190px"
        :items="items"
        :readonly="readonly"
        v-model="form"
    ></form-renderer>
    <div class="flex justify-center">
      <el-button type="primary" @click="handleNextClick">提交认证信息</el-button>
    </div>
  </div>
</template>

<script>
  import FormRenderer from '@/components/FormRenderer/index';

  export default {
    components: { FormRenderer },
    data() {
      return {
        step: 0,
        readonly: false,
        // 表单item
        items: [
          {
            key: 'businessLicenseGroup',
            label: '上传营业执照',
            type: 'group',
            inline: true,
            list: [
              {
                key: 'businessLicense',
                label: '营业执照',
                type: 'image',
                accept: ['.png', '.jpg', '.jpeg'],
                maxSize: 5 * 1024 * 1024
              }
            ]
          },
          {
            key: 'socialCreditCode',
            label: '统一社会信用代码',
            placeholder: '15、18位字母数字',
            type: 'text',
            max: 18,
            validator(value) {
              if (!value || typeof value !== 'string' || ![15, 18].includes(value.length)) {
                throw new Error('请输入15或18位字母数字');
              }
            },
            disabled(form) {
              return form.verifyProcess === 10 || form.verifyProcess === 20;
            }
          },
          {
            key: 'socialCreditOverTime',
            label: '过期时间',
            type: 'date',
            valueFormat: 'yyyyMMdd',
            hidden(form) {
              // return form.type !== 30;
            },
            disabled(form) {
              return form.noSocialCreditOverTime;
            },
            disabledDate(date) {
              return date < Date.now();
            }
          },
          {
            key: 'businessLicenseName',
            label: '营业执照名称',
            type: 'text',
            max: 30,
            disabled(form) {
              return form.verifyProcess === 10 || form.verifyProcess === 20;
            }
          },
          {
            key: 'address',
            label: '详细地址',
            type: 'text',
            max: 50,
            placeholder: '营业执照上经营场所一栏的完整地址',
            rules: [
              {
                min: 4,
                message: '长度必须大于或等于4个字符',
                trigger: 'blur'
              }
            ]
          },
          {
            key: 'email',
            label: '邮箱',
            placeholder: '请输入企业邮箱',
            type: 'email',
            max: 30
          }
        ],
        // 表单model
        form: {
          verifyProcess: 10,
          socialCreditCode: '123124'
        }
      }
    },
    methods: {
      async handleNextClick() {
        try {
          await this.$refs.form.validate();
        } catch {
          return;
        }
        // todo 业务逻辑

      }

    }
  }
</script>

```



### 参数介绍

| 参数                 | 说明                                                         | 类型    | 可选值                | 默认值 |
| :------------------- | :----------------------------------------------------------- | :------ | :-------------------- | :----- |
| value/v-model        | 表单数据对象                                                 | object  | —                     | —      |
| rules                | 表单验证规则                                                 | object  | —                     | —      |
| inline               | 行内表单模式                                                 | boolean | —                     | false  |
| labelPosition        | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string  | right/left/top        | right  |
| labelWidth           | 表单域标签的宽度，例如 '50px'。                              | string  | —                     | —      |
| items                | 表单中的form-item，详见form-item                             | Array   | —                     | —      |
| hideRequiredAsterisk | 是否隐藏必填字段的标签旁边的红色星号                         | boolean | —                     | false  |
| size                 | 用于控制该表单内组件的尺寸                                   | string  | medium / small / mini | —      |
| readonly             | 是否只读模式,只读模式不会显示表单                            | boolean | —                     | false  |

### 方法介绍

| 方法名        | 说明                                                         | 参数                                                         |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                |
| validateField | 对部分表单字段进行校验的方法                                 | Function(props: array \| string, callback: Function(errorMessage: string)) |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string)                             |

### provide

该组件通过provide()方法将该组件的实例传递给了子组件，子组件中通过`inject: ['formRenderer']`可以拿到该组件的实列，有特殊需求的时候可以去操作该实列。

### FormItem组件

> 该组件是对`el-form-item` 的封装，配合`FormRenderer`使用，不同类型有不同参数。

```vue
<template>
  <el-form ref="form"
           class="form"
           :model="value"
           :rules="rules"
           :inline="inline"
           :label-width="labelWidth"
           :label-position="labelPosition"
           :hide-required-asterisk="hideRequiredAsterisk || readonly"
           :validate-on-rule-change="false"
           :size="size">
    <template v-for="item in items">
      <form-item ref="items" :key="item.key" :item="item" v-model="value">
        <template #default="scope">
          <slot v-bind="scope"/>
        </template>
      </form-item>
    </template>
  </el-form>
</template>
```

从`FormRenderer`的实现来看，FormItem组件接受的props就只有对应的item以及表单数据对象value(也就是Form绑定的数据)。

```js
{
  key: 'socialCreditCode',
  label: '统一社会信用代码',
  placeholder: '15、18位字母数字',
  type: 'text',
  max: 18,
  validator(value) {
    if (!value || typeof value !== 'string' || ![15, 18].includes(value.length)) {
      throw new Error('请输入15或18位字母数字');
    }
  },
  disabled(form) {
    return form.verifyProcess === 10 || form.verifyProcess === 20;
  }
},
```

上面这个item只是`FormItem`其中的一个`text`类型,以下是共同拥有的属性和方法

#### type 

- 表单item类型，必传，不传则默认为渲染为element的Input（text）组件。
- 支持`text`、`textarea` 对应element的Input组件`type="password"`
- `radio`， 对应element的`radio`组件
- `checkbox`， 对应element的`checkbox`组件
- `cascade`， 对应element的`cascade`组件
- `datetime`， 对应element的`el-date-picker`组件`type=datetime`
- `date`， 对应element的`el-date-picker`组件`type=date`
- `datetimerange`， 对应element的`el-date-picker`组件`type=datetimerange`
- `daterange`， 对应element的`el-date-picker`组件`type=daterange`
- `files`， 对应封装的`FileUpload`组件
- `image`， 对应封装的`ImageUpload`组件
- `limit`,自定义组件，示例
- `verifyCode`自定义组件，获取验证码
- `group`复合组件，list: Item[]

> 目前只支持了这些type类型，如需其他类型组件，可以根据需求扩展对应的类型，在`FormItem.vue`文件中加对应的type,然后再引入`element-ui`自带的组件或者是自己封装的业务组件（如`limit`,`verifyCode`）



#### key

每一个`FormItem`的唯一值，对应的是`FormRenderer`中model，也就是`element-ui`Form中`el-form-item`组件的prop，必填且唯一。

#### label

标签文本,比如“用户名：”，“密码：”

#### placeholder

`FormItem`的占位符，并不是所有的type类型都有该字段，`el-form-item`组件支持`placeholder`的话就有这个字段；可以是一个函数。

#### rules

校验该表单的规则，具体参考[element文档](https://element.eleme.cn/#/zh-CN/component/form)

#### validator(value,form)

- 接受的是一个函数
- value代表输入（input等）或者选择（radio等）的值
- form是`FormRenderer`绑定的model,传入是为了做更复杂的校验或者表单联动

#### disabled(form)

- 接受布尔值或者一个返回布尔值的函数，为true则不能操作该条表单item
- form是`FormRenderer`绑定的model,传入是为了做更复杂的校验或者表单联动

#### hidden(form)

- 接受布尔值或者一个返回布尔值的函数，为true则不显示该条表单item
- form是`FormRenderer`绑定的model,传入是为了做更复杂的校验或者表单联动



### 自行添加需要的组件类型

在 `src/components/FormRenderer/FormItem.vue` 内，添加相应的类型 `type`

#### 方式 1

添加`elemnet-ui`组件库中现有的formItem,例如，`el-el-switch`

```tsx
<el-switch
  v-else-if="item.type === 'switch'"
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
```

#### 方式 2

添加基础或者业务组件，参考`limit`,`getVerifyCode`,`ImageUpload`等组件，这个是添加一些复杂的组件，来满足业务需求。

## 3.  elFormSchema组件

### [文档地址](http://efs.apidevelop.com/)

### 特点

- 第三方基于schema的Form表单组件
- 基于熟悉的 element-ui 表单组件，同时支持（自定义组件 和 slot）方案
- 只需要简单的schema数据配置，就能完成表单业务
- el-form-schema内置了 array、table、object 组件，来满足更加复杂的业务场景

### 功能

1. 支持 `element-ui` 所有的表单组件
2. 内置支持 `object`、`array`、`table`，可以高效解决更多复杂的业务场景（此处应该有掌声👏）
3. 内置支持 `slot` 的插槽方式
4. 内置支持给组件设置 inline 行内布局属性，让布局更加灵活
5. 内置支持给 `object`、`array` 设置 `inline` 的方式
6. 支持 `label/slot/title` 设置模板字符串
7. `vif` 在 false 情况下，自动清空组件
8. 支持组件 props 设置联动值
9. `object` 组件内置支持 card 和 fieldset 的布局类型，`array` 内置支持 card 的布局方式。
10. 支持组件之间的复杂联动，支持 vif: `字符串表达式`、props: { disabled: `字符串表达式` }、required: `字符串表达式` 和 rules: { required: `字符串表达式`, message:'必填'}
11. 支持引入自定义组件，如果要实现双向绑定使用（注意：前提该组件实现了`v-model`的语法糖）
12. 支持统一设置组件宽度

### el-form-schema 属性

| 字段           | 说明                                                         | 类型                    | 默认值 |
| -------------- | ------------------------------------------------------------ | ----------------------- | ------ |
| schema         | schema对象                                                   | 参考schema对象👇         | -      |
| v-model        | 表单数据对象                                                 | el-form-schema 自动收集 | -      |
| labelWidth     | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | string                  | -      |
| labelPosition  | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width | string                  | right  |
| labelSuffix    | 表单域标签的后缀                                             | string                  | -      |
| expandNumber   | [展开/收起]数量,主要用于查询表单的场景                       | number                  | -      |
| inline         | 行内表单模式                                                 | boolean                 | false  |
| size           | 用于控制该表单内组件的尺寸                                   | string                  | medium |
| disabled       | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean                 | -      |
| isSearchForm   | 是否是查询表单                                               | boolean                 | false  |
| isExpand       | 是否展开                                                     | boolean                 | false  |
| componentWidth | 统一组件宽度                                                 | string                  | 240px  |
| useEnterSearch | 使用enter按键查询                                            | bool                    | true   |
| apiConfig      | 配置接口（专门为 el-select、el-radio、el-checkbox 组件的items数据源配置，详见：[动态数据 (opens new window)](http://efs.apidevelop.com/guide/apiConfig.html#apiconfig-方法)） | Function                | -      |

###  el-form-schema 方法

| 方法名        | 说明                                                         | 参数                  |
| ------------- | ------------------------------------------------------------ | --------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise｜Function(callback: Function(boolean, object)) |                       |
| validateField | 对部分表单字段进行校验的方法                                 | Function(props: array |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果   | —                     |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array |

除了以上el-form的方法，内部还扩展了一个 `validateFieldPromise` 方法(详见用法：Array->自定义，来弥补 validateField 的问题。

### el-form-schema 事件

isSearchForm属性值为true，查询表单会提供 submit 和 reset 2个事件

| 字段   | 说明      |
| ------ | --------- |
| submit | 提交表单  |
| reset  | 重置表单  |
| expand | 展开/收起 |

### schema 属性值

| 字段                | 说明                                                   | 类型                                                         | 默认值                        |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------- |
| tag                 | 组件名字                                               | el-*(表单组件)、内置组件、自定义组件                         | -                             |
| label               | 标签文本                                               | string                                                       | -                             |
| default             | 默认值                                                 | bool/string/number/object/array                              | -                             |
| items               | 数据项（专门为el-select/el-radio/el-checkbox的属性）   | array/object                                                 | []                            |
| keys                | 字段映射（专门为el-select/el-radio/el-checkbox的属性） | object                                                       | {label:'label',value:'value'} |
| inline              | 是否行内布局                                           | boolean                                                      | false                         |
| vif                 | 是否显示                                               | 字符串表达式，比如: vif: "$model.id === 2"                   | -                             |
| rules               | 验证规范                                               | el-form-item（rules）                                        | -                             |
| required            | 是否必填                                               | el-form-item（required）                                     | -                             |
| tip                 | 文字提示                                               | string                                                       | -                             |
| slot                | 占位                                                   | 对象                                                         | -                             |
| labelWidthComponent | 子组件labelWidth                                       | 专门为 array/object/table 提供的                             | -                             |
| components          | 组件集合                                               | 专门为 array/object/table 提供的                             | -                             |
| class               | 类名class                                              | 专门为 array/object/table 提供的                             | -                             |
| props               | 属性值                                                 | [vue render (opens new window)](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象)（props对象） | -                             |
| style               | 样式                                                   | [vue render (opens new window)](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象)（style对象） | -                             |
| on                  | 事件                                                   | [vue render (opens new window)](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象)（on对象） | -                             |

###  内置组件

table ，object, array组件

### 组件篇🌟

#### 表单组件



```
  <template>
  <div>
    <p>{{ model }}</p>
    <el-form-schema
      :schema="schema"
      v-model="model"
      :inline="false"
      ref="efs"
      label-width="120px"
      :api-config="getApiConfig"
    >
    <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form-schema>
  </div>
</template>
<script>
export default {
  data() {
    return {
      schema: {
        text: {
          tag: "text",
          label: "文字",
          default: "hello world!"
        },
        input1: {
          tag: "el-input",
          label: "输入框"
        },
        input2: {
          tag: "el-input",
          label: "输入框",
          slot: { append: "测试" }
        },
        input3: {
          tag: "el-input",
          label: "输入框",
          slot: { prepend: "测试" }
        },
        radio: {
          tag: "el-radio",
          label: "${model.input1}-${model.input2}",
          keys: { label: 'name', value: 'id' },
          items: "$config.foo"
        },
        radioButton: {
          tag: "el-radio",
          label: "复选框",
          type: "button",
          items: ["蛋壳公寓", "原油宝", "优胜教育"],
          initValue: "蛋壳公寓"
        },
        bool: {
          tag: "el-checkbox",
          label: "bool单选",
          items: [
            { label: "", value: true },
            { label: "否", value: false }
          ]
        },
        select1: {
          tag: "el-select",
          label: "下拉框1",
          keys: { label: 'name', value: 'id' },
          items: "$config.bar",
          slot: {
            after: {
              tag: "el-input",
              vmodel: "test",
              style: { width: "100px" }
            }
          }
        },
        select2: {
          tag: "el-select",
          label: "下拉框2 (int)",
          keys: {label: 'label', value: 'id'},
          default: -1,
          items:  [{
            label:"全部",
            id: 0,
          }, {
            label: "蛋壳公寓", 
            id: 1,
          }, {
            label: "优胜教育",
            id: -1
          }]
        },
        select3: {
          tag: "el-select",
          label: "下拉分组🌟",
          group: { label: 'label', children: 'options' },
          slot: { after: "注意设置：group: { label: 'label', children: 'options' }" },
          default: "Shanghai",
          items:  [{
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          }]
        },
        checkbox: {
          tag: "el-checkbox",
          label: "复选框",
          items: ["蛋壳公寓", "原油宝", "优胜教育"]
        },
        checkboxButton: {
          tag: "el-checkbox",
          label: "复选框",
          type: "button",
          items: ["蛋壳公寓", "原油宝", "优胜教育"],
          initValue: ["蛋壳公寓"]
        },
        cascader: {
          tag: "el-cascader",
          label: "级联选择器",
          props: { options: [], filterable: true }
        },
        swtich: { 
          tag: "el-switch", 
          label: "复选框",
          default: true,
        },
        slider: {
          tag: "el-slider",
          label: "滑块",
          props: { step: 10, showStops: true }
        },
        date: {
          tag: "el-date-picker",
          label: "日期",
          props: { type: "date" }
        },
        daterange: {
          tag: "el-date-picker",
          label: "日期范围",
          props: { type: "daterange" }
        },
        datetimerange: {
          tag: "el-date-picker",
          label: "日期时间范围",
          props: { type: "datetimerange" }
        },
        timeselect: {
          tag: "el-time-select",
          label: "固定时间点",
          props: {
            pickerOptions: {
              start: "08:30",
              step: "00:15",
              end: "22:30"
            }
          }
        },
        timepicker: {
          tag: "el-time-picker",
          label: "时间选择器",
          props: { placeholder: "请选择时间" }
        },
        color: {
          tag: "el-color-picker",
          label: "颜色选择器"
        },
        upload: {
          tag: "el-upload",
          label: "上传组件",
          props: {
            listType: "picture-card",
            action: "https://jsonplaceholder.typicode.com/posts/"
          },
          slot: {
            default: { tag: "i", class: "el-icon-plus" }
          }
        }
      },
      model: {
        input1: "hello world!",
        select1: 1,
        test: "123456"
      }
    };
  },
  methods: {
    submit() {
      this.$refs.efs.validate(valid => {
        alert(valid);
      });
    },
    reset() {
      this.$refs.efs.resetFields();
    },
    arrayData(num) {
      return new Array(num)
        .fill({})
        .map((item, index) => ({ label: `测试-${index}`, value: index + 1 }));
    },
    async getApiConfig() {
      const foo = await new Promise(r => {
        setTimeout(() => 
          r([{ id: 1, name: '动态数据1' }, { id: 2, name: '动态数据2' }])
        , 500);
      });
      const bar = await new Promise(r => {
        setTimeout(() => 
          r([{ id: 1, name: 'bar1' }, { id: 2, name: 'bar2' }])
        , 500);
      });
      return { foo, bar };
    }
  },
  mounted() {
    setTimeout(()=> { 
      this.schema.select3.items = ["A", "B", "C"];
    }, 5000)
  }
};
</script>
```
# Button 按钮

::: demo 使用`type`，`plain`，`round`来定义 Button 的样式

```vue
<template>
  Small
  <button style="color: red">按钮1</button>
  Middle
  <button type="size">按钮2</button>
  Large
  <button>按钮3</button>
  Disabled
  <button disabled>按钮4</button>
</template>
```

:::