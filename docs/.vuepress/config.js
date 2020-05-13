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
    sidebar: [
      // '/',
      // '/page-a',
      // ['/page-b', 'Explicit link text']
    ]
  },
  //开发配置
  extraWatchFiles: [//监听文件变动将会触发 vuepress 重新构建，并实时更新。
    '../README.md'
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