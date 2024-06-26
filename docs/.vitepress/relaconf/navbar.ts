import { DefaultTheme } from 'vitepress';

export const nav:DefaultTheme.NavItem[]=[
    {
        text: '首页',
        link: '/' // 表示docs/index.md
      },
      {
        text: '个人成长',
        items: [
          {
            text: '笔记',
            link: ' /views/try/tryIndex.md' // 表示docs/views/Travel/index.md
          },

        ]
      },
      {
        text: '前端开发',
        items: [
          {
            text: '学习uniapp',
            link: '/views/uniapp/studayUniapp.md' // 表示docs/views/Travel/index.md
          },
          {
            text: '学习vitepress',
            link: '/views/vitepress/studayVitepress.md' // 表示docs/views/Travel/index.md
          },
        ]
      },

]
export const sidebar:DefaultTheme.Sidebar=[
        {
            items: [
              {
                // text: '学习uniapp',
                link: '/views/uniapp/studayUniapp.md' // 表示docs/views/Travel/index.md
              },

            ]
          },

    ]
