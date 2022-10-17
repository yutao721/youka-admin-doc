// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 * https://vitejs.cn/vitepress/config/basics.html
 */
module.exports = {
  base: '/',
  title: '通用管理后台',
  lang: 'zh-CN',
  // head: createHead(),
  themeConfig: {
    repo: 'vbenjs/vue-vben-admin',
    docsRepo: 'vbenjs/vue-vben-admin-doc',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar()
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vben, vitejs, vite, ant-design-vue, vue'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '指南',
      link: '/guide/',
      items: [
        {
          text: '指南',
          link: '/guide/introduction'
        },
        {
          text: '深入',
          link: '/dep/icon'
        },
        {
          text: '其他',
          link: '/other/faq'
        }
      ]
    },
    {
      text: '组件',
      link: '/components/',
      items: [
        {
          text: '介绍',
          link: '/components/introduction'
        },
        {
          text: '全局组件',
          link: '/components/glob/button'
        },
        {
          text: '常用组件',
          link: '/components/basic'
        },
        {
          text: '函数式组件',
          link: '/components/functional/context-menu'
        }
      ]
    }
  ];
}

function createSidebar() {
  return {
    '/components/': [
      {
        text: '组件',
        children: [
          {
            text: '前言',
            link: '/components/introduction'
          }
        ]
      },
      {
        text: '全局组件',
        children: [
          {
            text: 'Button',
            link: '/components/glob/button'
          }
        ]
      },
      {
        text: '常用组件',
        children: [
          {
            text: 'Basic',
            link: '/components/basic'
          },
          {
            text: 'Page',
            link: '/components/page'
          },
          {
            text: 'Icon',
            link: '/components/icon'
          },
          {
            text: 'Authority',
            link: '/components/auth'
          },
          {
            text: 'Form',
            link: '/components/form'
          },
          {
            text: 'Table',
            link: '/components/table'
          },
          {
            text: 'PopConfirmButton',
            link: '/components/pop-confirm-button'
          },
          {
            text: 'CollapseContainer',
            link: '/components/collapse-container'
          },
          {
            text: 'ScrollContainer',
            link: '/components/scroll-container'
          },
          {
            text: 'LazyContainer',
            link: '/components/lazy-container'
          },
          {
            text: 'CodeEditor',
            link: '/components/code-editor'
          },
          {
            text: 'JsonPreview',
            link: '/components/json-preview'
          },
          {
            text: 'CountDown',
            link: '/components/count-down'
          },

          {
            text: 'ClickOutSide',
            link: '/components/click-out-side'
          },
          {
            text: 'CountTo',
            link: '/components/count-to'
          },
          {
            text: 'Cropper',
            link: '/components/cropper'
          },
          {
            text: 'Description',
            link: '/components/desc'
          },
          {
            text: 'Drawer',
            link: '/components/drawer'
          },
          {
            text: 'Modal',
            link: '/components/modal'
          },
          {
            text: 'FlowChart',
            link: '/components/flow-chart'
          },
          {
            text: 'FileUpload',
            link: '/components/upload'
          },
          {
            text: 'ImageUpload',
            link: '/components/uploadImage'
          },
          {
            text: 'Tree',
            link: '/components/tree'
          },
          {
            text: 'Excel',
            link: '/components/excel'
          },
          {
            text: 'Qrcode',
            link: '/components/qrcode'
          },
          {
            text: 'Markdown',
            link: '/components/markdown'
          },
          {
            text: 'Loading',
            link: '/components/loading'
          },
          {
            text: 'Tinymce',
            link: '/components/tinymce'
          },
          {
            text: 'Time',
            link: '/components/time'
          },
          {
            text: 'StrengthMeter',
            link: '/components/strength-meter'
          },
          {
            text: 'Verify',
            link: '/components/verify'
          },
          {
            text: 'Transition',
            link: '/components/transition'
          },
          {
            text: 'VirtualScroll',
            link: '/components/virtual-scroll'
          }
        ]
      },
      {
        text: '函数式组件',
        children: [
          {
            text: 'ContextMenu',
            link: '/components/functional/context-menu'
          },
          {
            text: 'Loading',
            link: '/components/functional/loading'
          },
          {
            text: 'Preview',
            link: '/components/functional/preview'
          }
        ]
      }
    ],
    '/': [
      {
        text: '指南',
        children: [
          {
            text: '介绍',
            link: '/guide/introduction'
          },
          {
            text: '开始',
            link: '/guide/'
          },
          {
            text: '项目配置',
            link: '/guide/settings'
          },
          {
            text: '登录&注册配置',
            link: '/guide/component'
          },
          {
            text: '路由',
            link: '/guide/router'
          },
          {
            text: '菜单',
            link: '/guide/menu'
          },
          {
            text: '权限',
            link: '/guide/auth'
          },
          {
            text: 'Mock&联调',
            link: '/guide/mock'
          },
          {
            text: '样式',
            link: '/guide/design'
          },
          {
            text: '外部模块',
            link: '/guide/lib'
          },
          {
            text: '构建&部署',
            link: '/guide/deploy'
          },
          {
            text: 'Electron',
            link: '/guide/electron'
          }
        ]
      },
      {
        text: '深入',
        children: [
          {
            text: '跨域处理',
            link: '/dep/cors'
          },
          {
            text: '图标',
            link: '/dep/icon'
          },
          {
            text: '国际化',
            link: '/dep/i18n'
          },
          {
            text: '项目规范',
            link: '/dep/lint'
          },
          {
            text: '黑暗主题',
            link: '/dep/dark'
          }
        ]
      },
      {
        text: '其他',
        children: [
          {
            text: '常见问题',
            link: '/other/faq'
          },
          {
            text: '常见疑点',
            link: '/other/doubt'
          },
          {
            text: '测试服务',
            link: '/other/server'
          },
          {
            text: '相关项目',
            link: '/other/project'
          }
        ]
      }
    ]
  };
}

