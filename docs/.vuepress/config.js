const BLOG_BASE_PATH = '/blog/'

module.exports = {
  //站点配置
  base: '/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  title: 'zCloud',
  description: '个人网站',
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '简历', link: '/resume/' },
      { text: 'GitHub', link: 'https://github.com/Monster58' },
    ],
    sidebar: {
      '/blog/': [
        // '',     /* /blog/ */
        {
          title: '前端开发',
          path: `${BLOG_BASE_PATH}web/`,
          children: [
            {
              title: '第一篇笔记',
              path: `${BLOG_BASE_PATH}web/`
            }
          ]
        }
      ],
    },
    displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
    lastUpdated: 'Last Updated' // string | boolean
  },
  plugins: [
    '@vuepress/back-to-top',//回到顶部
  ],
  //开发配置
  extraWatchFiles: [//监听文件变动将会触发 vuepress 重新构建，并实时更新。
    '/README.md',
    '.vuepress/theme/layouts/HomeLayout.vue',
    './config.js'
  ],
  port: 3000,
  theme: undefined,
  markdown: {
    lineNumbers: true //代码块显示行号
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}