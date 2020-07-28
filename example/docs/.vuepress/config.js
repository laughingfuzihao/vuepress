module.exports = {
  title: "laughing's   blog",
  description: 'Programming  knowledge   sharing .',
  dest: 'example/docs/public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // theme: 'reco',
  theme: require.resolve('../../../'),
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Contact',
        icon: 'reco-message',
        items: [
/*          { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e', icon: 'reco-jianshu' },
          { text: 'CSDN', link: 'https://blog.csdn.net/recoluan', icon: 'reco-csdn' },
          { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
          https://www.zhihu.com/people/laughing-yaoyao*/
          { text: 'QQ:619426619', link: '/', icon: 'reco-qq' },
          { text: 'WeChat', link: '/views/61421.html', icon: 'reco-wechat' },
          { text: 'Zhihu', link: 'https://www.zhihu.com/people/laughing-yaoyao', icon: 'reco-zhihu' },
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '目录' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '分类' // 默认 “标签”
      }
    },
    type: 'blog',
    logo: '/head.png',
    authorAvatar: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '',
    // 作者
    author: 'laughing',
    // 备案号
    record: '京ICP备20013876',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: 'laughing-微博热搜数据抓取工具',
        desc: '基于element-ui的小工具',
        email: '619426619@qq.com',
        link: 'http://49.232.61.212/weibo/#/'
      },
      {
        title: 'laughing-微博热搜数据查询',
        desc: '抓取的数据库信息',
        email: '619426619@qq.com',
        link: 'http://49.232.61.212/weibo/#/search'
      },

    ]
  }
}
