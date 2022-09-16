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

> 目前只支持了这些常用的组件，如需其他类型组件，可以根据需求扩展对应的类型，在`FormItem.vue`文件中加对应的type,然后再引入`element-ui`自带的组件或者是自己封装的业务组件（如`limit`,`verifyCode`）



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

:::tip

asd

::: tip

设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)

:::

类型: `(formProps: Partial<FormProps>) => Promise<void>`

说明: 设置表单 Props

**removeSchemaByFiled**

类型: `(field: string | string[]) => Promise<void>`

说明: 根据 field 删除 Schema

**appendSchemaByField**

类型: `( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) => Promise<void>`

说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后,当 first = true 时插入到第一个位置

**updateSchema**

类型: `(data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>`

说明: 更新表单的 schema, 只更新函数所传的参数

e.g

```ts
updateSchema({ field: 'filed', componentProps: { disabled: true } });
updateSchema([
  { field: 'filed', componentProps: { disabled: true } },
  { field: 'filed1', componentProps: { disabled: false } },
]);
```

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv form](https://2x.antdv.com/components/form-cn/#Form)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | -- |
| schemas | `Schema[]` | - | - | 表单配置，见下方 `FormSchema` 配置 |  |
| submitOnReset | `boolean` | `false` | - | 重置时是否提交表单 |  |
| labelCol | `Partial<ColEx>` | - | - | 整个表单通用 LabelCol 配置 |  |
| wrapperCol | `Partial<ColEx>` | - | - | 整个表单通用 wrapperCol 配置 |  |
| baseColProps | `Partial<ColEx>` | - | - | 配置所有选子项的 ColProps，不需要逐个配置，子项也可单独配置优先与全局 |  |
| baseRowStyle | `object` | - | - | 配置所有 Row 的 style 样式 |  |
| labelWidth | `number , string` | - | - | 扩展 form 组件，增加 label 宽度，表单内所有组件适用，可以单独在某个项覆盖或者禁用 |  |
| labelAlign | `string` | - | `left`,`right` | label 布局 |  |
| mergeDynamicData | `object` | - | - | 额外传递到子组件的参数 values |  |
| autoFocusFirstItem | `boolean` | `false` | - | 是否聚焦第一个输入框，只在第一个表单项为 input 的时候作用 |  |
| compact | `boolean` | `false` | `true/false` | 紧凑类型表单，减少 margin-bottom |  |
| size | `string` | `default` | `'default' , 'small' , 'large'` | 向表单内所有组件传递 size 参数,自定义组件需自行实现 size 接收 |  |
| disabled | `boolean` | `false` | `true/false` | 向表单内所有组件传递 disabled 属性，自定义组件需自行实现 disabled 接收 |  |
| autoSetPlaceHolder | `boolean` | `true` | ` true/false` | 自动设置表单内组件的 placeholder，自定义组件需自行实现 |  |
| autoSubmitOnEnter | `boolean` | `false` | ` true/false` | 在input中输入时按回车自动提交 | 2.4.0  |
| rulesMessageJoinLabel | `boolean` | `false` | `true/false` | 如果表单项有校验，会自动生成校验信息，该参数控制是否将字段中文名字拼接到自动生成的信息后方 |  |
| showAdvancedButton | `boolean` | `false` | `true/false` | 是否显示收起展开按钮 |  |
| emptySpan | `number , Partial<ColEx>` | 0 | - | 空白行格,可以是数值或者 col 对象 数 |  |
| autoAdvancedLine | `number` | 3 | - | 如果 showAdvancedButton 为 true，超过指定行数行默认折叠 |  |
| alwaysShowLines  | `number` | 1 | - | 折叠时始终保持显示的行数  | 2.7.1 |
| showActionButtonGroup | `boolean` | `true` | `true/false` | 是否显示操作按钮(重置/提交) | |
| actionColOptions | `Partial<ColEx>` | - | - | 操作按钮外层 Col 组件配置，如果开启 showAdvancedButton，则不用设置，具体见下方 actionColOptions |  |
| showResetButton | `boolean` | `true` | - | 是否显示重置按钮 |  |
| resetButtonOptions | `object` |  | - | 重置按钮配置见下方 ActionButtonOption |  |
| showSubmitButton | `boolean` | `true` | - | 是否显示提交按钮 |  |
| submitButtonOptions | `object` |  | - | 确认按钮配置见下方 ActionButtonOption |  |
| resetFunc | ` () => Promise<void>` |  | - | 自定义重置按钮逻辑`() => Promise<void>;` |  |
| submitFunc | ` () => Promise<void>` |  | - | 自定义提交按钮逻辑`() => Promise<void>;` |  |
| fieldMapToTime | `[string, [string, string], string?][]` |  | - | 用于将表单内时间区域的应设成 2 个字段,见下方说明 |  |

### ColEx

见[src/components/Form/src/types/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Form/src/types/index.ts)

### ActionButtonOption

[BasicButtonProps](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Button/types.ts)

```ts
export interface ButtonProps extends BasicButtonProps {
  text?: string;
}
```

### fieldMapToTime

将表单内时间区域的值映射成 2 个字段

如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段

```ts
useForm({
  fieldMapToTime: [
    // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间于结束时间
    // 'YYYY-MM-DD'为时间格式，参考moment
    ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],
    // 支持多个字段
    ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'],
  ],
});

// fieldMapToTime没写的时候表单获取到的值
{
  datetime: [Date(),Date()]
}
//  ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],之后
{
    datetime: [Date(),Date()],
    startTime: '2020-08-12',
    endTime: '2020-08-15',
}
```

### FormSchema

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| field | `string` | - | - | 字段名 |
| label | `string` | - | - | 标签名 |
| subLabel | `string` | - | - | 二级标签名灰色 |
| suffix | `string , number , ((values: RenderCallbackParams) => string / number);` | - | - | 组件后面的内容 |
| changeEvent | `string` | - | - | 表单更新事件名称 |
| helpMessage | `string , string[]` | - | - | 标签名右侧温馨提示 |
| helpComponentProps | `HelpComponentProps` | - | - | 标签名右侧温馨提示组件 props,见下方 HelpComponentProps |
| labelWidth | `string , number` | - | - | 覆盖统一设置的 labelWidth |
| disabledLabelWidth | `boolean` | false | true/false | 禁用 form 全局设置的 labelWidth,自己手动设置 labelCol 和 wrapperCol |
| component | `string` | - | - | 组件类型，见下方 ComponentType |
| componentProps | `any,()=>{}` | - | - | 所渲染的组件的 props |
| rules | `ValidationRule[]` | - | - | 校验规则,见下方 ValidationRule |
| required | `boolean` | - | - | 简化 rules 配置，为 true 则转化成 [{required:true}]。`2.4.0`之前的版本只支持string类型的值 |
| rulesMessageJoinLabel | `boolean` | false | - | 校验信息是否加入 label |
| itemProps | `any` | - | - | 参考下方 FormItem |
| colProps | `ColEx` | - | - | 参考上方 actionColOptions |
| defaultValue | `object` | - | - | 所渲渲染组件的初始值 |
| render | `(renderCallbackParams: RenderCallbackParams) => VNode / VNode[] / string` | - | - | 自定义渲染组件 |
| renderColContent | `(renderCallbackParams: RenderCallbackParams) => VNode / VNode[] / string` | - | - | 自定义渲染组件（需要自行包含 formItem） |
| renderComponentContent | `(renderCallbackParams: RenderCallbackParams) => any / string` | - | - | 自定义渲染组内部的 slot |
| slot | `string` | - | - | 自定义 slot，渲染组件 |
| colSlot | `string` | - | - | 自定义 slot，渲染组件 （需要自行包含 formItem） |
| show | ` boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示，css 控制，不会删除 dom |
| ifShow | ` boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示，js 控制，会删除 dom |
| dynamicDisabled | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean) ` | - | - | 动态判断当前组件是否禁用 |
| dynamicRules | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判返当前组件你校验规则 |

**RenderCallbackParams**

```ts
export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}
```

**componentProps**

- 当值为对象类型时,该对象将作为`component`所对应组件的的 props 传入组件

- 当值为一个函数时候

参数有 4 个

`schema`: 表单的整个 schemas

`formActionType`: 操作表单的函数。与 useForm 返回的操作函数一致

`formModel`: 表单的双向绑定对象，这个值是响应式的。所以可以方便处理很多操作

`tableAction`: 操作表格的函数，与 useTable 返回的操作函数一致。注意该参数只在表格内开启搜索表单的时候有值，其余情况为`null`,

```tsx
{
  // 简单例子，值改变的时候操作表格或者修改表单内其他元素的值
  component:'Input',
  componentProps: ({ schema, tableAction, formActionType, formModel }) => {
    return {
      // xxxx props
      onChange:(e)=>{
        const {reload}=tableAction
        reload()
        // or
        formModel.xxx='123'
      }
    };
  };
}
```

**HelpComponentProps**

```ts
export interface HelpComponentProps {
  maxWidth: string;
  // 是否显示序号
  showIndex: boolean;
  // 文本列表
  text: any;
  // 颜色
  color: string;
  // 字体大小
  fontSize: string;
  icon: string;
  absolute: boolean;
  // 定位
  position: any;
}
```

**ComponentType**

schema 内组件的可选类型

```tsx
export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'InputCountDown'
  | 'Select'
  | 'ApiSelect'
  | 'TreeSelect'
  | 'RadioButtonGroup'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  | 'Cascader'
  | 'DatePicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'Switch'
  | 'StrengthMeter'
  | 'Upload'
  | 'IconPicker'
  | 'Render'
  | 'Slider'
  | 'Rate'
  | 'Divider';  // v2.7.2新增
```
### Divider schema说明
`Divider`类型用于在`schemas`中占位，将会渲染成一个分割线（始终占一整行的版面），可以用于较长表单的版面分隔。请只将Divider类型的schema当作一个分割线，而不是一个常规的表单字段。
- **`Divider`仅在`showAdvancedButton`为false时才会显示**（也就是说如果启用了表单收起和展开功能，`Divider`将不会显示）
- `Divider` 使用`schema`中的`label`以及`helpMessage`来渲染分割线中的提示内容
- `Divider` 可以使用`componentProps`来设置除`type`之外的props
- `Divider` 不会渲染`AFormItem`，因此`schema`中除`label`、`componentProps`、`helpMessage`、`helpComponentProps`以外的属性不会被用到

## 自行添加需要的组件类型

在 `src/components/Form/src/componentMap.ts` 内，添加需要的组件，并在上方 **ComponentType** 添加相应的类型 key

### 方式 1

这种写法适用与适用频率较高的组件

```tsx
componentMap.set('componentName', 组件);

// ComponentType
export type ComponentType = xxxx | 'componentName';
```

### 方式 2

使用 **useComponentRegister** 进行注册

这种写法只能在当前页使用，页面销毁之后会从 componentMap 删除相应的组件

```tsx
import { useComponentRegister } from '@/components/form/index';

import { StrengthMeter } from '@/components/strength-meter/index';

useComponentRegister('StrengthMeter', StrengthMeter);
```

::: tip 提示

方式 2 出现的原因是为了减少打包体积，如果某个组件体积很大，用方式 1 的话可能会使首屏体积增加

:::

### render

自定义渲染内容

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register" @submit="handleSubmit" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Input } from 'ant-design-vue';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
      render: ({ model, field }) => {
        return h(Input, {
          placeholder: '请输入',
          value: model[field],
          onChange: (e: ChangeEvent) => {
            model[field] = e.target.value;
          },
        });
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
      renderComponentContent: () => {
        return {
          suffix: () => 'suffix',
        };
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
```

### slot

自定义渲染内容

::: tip 提示

使用插槽自定义表单域时，请注意antdv有关FormItem的[相关说明](https://2x.antdv.com/components/form-cn#API)。

:::

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register">
      <template #customSlot="{ model, field }">
        <a-input v-model:value="model[field]" />
      </template>
    </BasicForm>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { BasicModal } from '@/components/modal/index';
  export default defineComponent({
    name: 'FormDemo',
    setup(props) {
      const [register] = useForm({
        labelWidth: 100,
        actionColOptions: {
          span: 24,
        },
        schemas: [
          {
            field: 'field1',
            label: '字段1',
            slot: 'customSlot',
          },
        ],
      });
      return {
        register,
      };
    },
  });
</script>
```

### ifShow/show/dynamicDisabled

自定义显示/禁用

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 8,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        setProps,
      };
    },
  });
</script>
```

---

见 [antv form](https://2x.antdv.com/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)

## Slots

| 名称          | 说明         |
| ------------- | ------------ |
| formFooter    | 表单底部区域 |
| formHeader    | 表单顶部区域 |
| resetBefore   | 重置按钮前   |
| submitBefore  | 提交按钮前   |
| advanceBefore | 展开按钮前   |
| advanceAfter  | 展开按钮后   |

## ApiSelect

远程下拉加载组件，该组件可以用于学习参考如何自定义组件集成到 Form 组件内，将自定义组件交由 Form 去管理

### Usage

```ts
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'ApiSelect',
    label: '字段',
  },
];
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| numberToString | `boolean` | `false` | 是否将`number`值转化为`string` |
| api | `()=>Promise<{ label: string; value: string; disabled?: boolean }[]>` | - | 数据接口，接受一个 Promise 对象 |
| params | `object` | - | 接口参数。此属性改变时会自动重新加载接口数据 |
| resultField | `string` | - | 接口返回的字段，如果接口返回数组，可以不填。支持`x.x.x`格式 |
| labelField | `string` | `label` | 下拉数组项内`label`显示文本的字段，支持`x.x.x`格式 |
| valueField | `string` | `value` | 下拉数组项内`value`实际值的字段，支持`x.x.x`格式 |
| immediate | `boolean` | `true` | 是否立即请求接口，否则将在第一次点击时候触发请求 |


## ApiTreeSelect

远程下拉树加载组件，和`ApiSelect`类似，2.6.1以上版本


### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| api | `()=>Promise<{ label: string; value: string; children?: any[] }[]>` | - | 数据接口，接受一个 Promise 对象 |
| params | `object` | - | 接口参数。此属性改变时会自动重新加载接口数据 |
| resultField | `string` | - | 接口返回的字段，如果接口返回数组，可以不填。支持`x.x.x`格式 |
| immediate | `boolean` | `true` | 是否立即请求接口。 |

## RadioButtonGroup

Radio Button 风格的选择按钮

### Usage

```ts
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'RadioButtonGroup',
    label: '字段',
  },
];
```

### Props

| 属性    | 类型                                                     | 默认值 | 说明     |
| ------- | -------------------------------------------------------- | ------ | -------- |
| options | `{ label: string; value: string; disabled?: boolean }[]` | -      | 数据字段 |
