
module.exports = {
  title: "前端小厨",
  description: '每天一点点',
  theme: 'reco',
  authorAvatar: '/head.png',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: "/",
  plugins: ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
  themeConfig: {
    mode: 'light',
    subSidebar: 'auto',
    valineConfig: {
      "appId": 'Ay3SQNuAET3yFjTQWGYKtdsD-gzGzoHsz',
      "appKey": 'GBFa5YiaLXYT8aclg35I1dnt',
    },
    // 博客配置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
    ],
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '目录索引' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签索引'      // 默认文案 “标签”
      }
    },
    type: 'blog',
    // 作者
    author: 'LICZ',
    // 备案号
    record: '鄂公网安备 42018502004619号',
  },
}  
