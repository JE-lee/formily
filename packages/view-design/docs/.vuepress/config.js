const path = require('path')
const utils = require('./util')

const excludeMds = [
  'array-cards',
  'array-collapse',
  'array-tabs',
  'form-step',
  'form-tab',
  'transfer',
  'upload',
]
const componentFiles = utils
  .getFiles(path.resolve(__dirname, '../guide'))
  .map((item) => item.replace(/(\.md)/g, ''))
  .filter(
    (item) =>
      !['el-form', 'el-form-item', 'index', ...excludeMds].includes(item)
  )

module.exports = {
  base: '/formily/',
  title: 'Formily View-design',
  dest: './doc-site',
  theme: '@vuepress-dumi/dumi',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/view-design@4.6.1/dist/styles/iview.css',
      },
    ],
  ],
  themeConfig: {
    logo: 'https://file.iviewui.com/dist/bf31433c102ed612fbe82afe000dda40.png',
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '主站',
        link: 'https://v2.formilyjs.org',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/alibaba/formily',
      },
    ],
    sidebar: {
      '/guide/': ['', ...componentFiles],
    },
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
  plugins: [
    'vuepress-plugin-typescript',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress-dumi/dumi-previewer',
    [
      '@vuepress/medium-zoom',
      {
        selector: '.content__default :not(a) > img',
      },
    ],
  ],
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          '@formily/view-design': path.resolve(
            __dirname,
            '../../../view-design/src'
          ),
        },
      },
    }
  },
}
