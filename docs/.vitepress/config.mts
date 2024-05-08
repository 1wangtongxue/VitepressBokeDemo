import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaconf'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/VitepressBokeDemo/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
