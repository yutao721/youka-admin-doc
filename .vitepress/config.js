// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 * https://vitejs.cn/vitepress/config/basics.html
 */
module.exports = {
  base: '/youka-admin-doc/',
  title: '通用管理后台',
  description: '通用管理后台模板,功能完善中...',
  lang: 'zh-CN',
  themeConfig: {
    repo: 'yutao721/youka-admin',
    docsRepo: 'yutao721/youka-admin-doc',
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
          text: '常用组件',
          link: '/components/basic'
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
        text: '常用组件',
        children: [
          {
            text: 'Pagination ',
            link: '/components/page'
          },
          {
            text: 'Form',
            link: '/components/form'
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
            text: 'FileUpload',
            link: '/components/upload'
          },
          {
            text: 'ImageUpload',
            link: '/components/uploadImage'
          },
          {
            text: 'editor',
            link: '/components/editor'
          },
          {
            text: 'TreeSelect',
            link: '/components/tree'
          },
          {
            text: 'ReImageVerify',
            link: '/components/verify'
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
            text: '路由&菜单',
            link: '/guide/router'
          },
          {
            text: '权限验证',
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
          }
        ]
      },
      {
        text: '进阶',
        children: [
          {
            text: '跨域处理',
            link: '/dep/cors'
          },
          {
            text: '图标',
            link: '/dep/icon'
          }
        ]
      },
      {
        text: '其他',
        children: [
          {
            text: '常见问题',
            link: '/other/faq'
          }
        ]
      }
    ]
  };
}

