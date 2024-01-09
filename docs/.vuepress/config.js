
module.exports = {
    lang: 'zh-CN',
    logo: '/img/logo/favicon-wmioxuat.png',
    title: 'HamCQ手册',
    description: '业余无线电爱好者手册',
    head: [
        ['meta', { name: 'keywords', content: 'hamcq,hamcq手册,业余无线电，业余无线电手册'}]
    ],
    themeConfig: {
      logo: '/img/logo/favicon-wmioxuat.png',
      darkMode:true,
      nav: [
        { text: '首页', link: '/' },
        { text: '访问社区', link: 'https://forum.hamcq.cn', target:'_blank'},
      ],
      search: true,
      searchMaxSuggestions: 10,
      smoothScroll: true,
      nextLinks: false,
      prevLinks: false,
      // sidebar: 'auto',
      repo: 'https://github.com/HamCQ/Handbook',
      repoLabel: '仓库',
      docsBranch: 'main',
      sidebar: 'structuring',
      showToArticle:false,
      updateBar:{
        showToArticle: false, 
        moreArticle: false
      },
      titleBadge:false,
      pageStyle:"line",
      social:
      {
        iconfontCssFile: String, 
        icons: [
          {
            iconClass: "icon-youjian", 
            title: "联系我们", 
            link: "mailto:contact@hamcq.cn"
          },
          {
            iconClass: "icon-github", 
            title: "Github", 
            link: "https://github.com/HamCQ/Handbook"
          },
          {
            iconClass: "icon-zhihu", 
            title: "知乎", 
            link: "https://www.zhihu.com/column/c_1327659699995885568"
          },
          {
            iconClass: "icon-weixin", 
            title: "微信公众号", 
            link: "https://forum.hamcq.cn/d/826"
          }
        ]
      },
    },
    plugins: [
      '@vuepress/back-to-top',
      ['@vuepress/medium-zoom',
        {
          selector: '.theme-vdoing-content img:not(.no-zoom)',
          options: {
            margin: 16
          }
        }
      ],
    ],
    markdown: {
      toc: {
          includeLevel:[1, 2, 3, 4]
      }
    },
    theme: 'vdoing',
    
    head: [
      // 添加百度统计
      [
        "script",
        {},
        `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?e3319e60407fb2a26747424971fd4c3f";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      ]
    ]
}
