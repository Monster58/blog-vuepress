module.exports = {
  base: '/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],
  title: 'Hello VuePress',
  description: 'Just playing around',
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