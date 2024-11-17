import { hopeTheme, mdEnhance } from "vuepress-theme-hope";

import { navBar } from "./config_navbar";
import { sideBar } from "./config_sidebar";

export default hopeTheme({
  // 1、导航栏中 Logo 的链接 2、404 页面的 返回首页 链接
  home: "/",

  // 左侧 logo
  logo: "image/logo.svg",

  // url 地址上的小 logo
  favicon: 'image/logo.svg',

  // icon 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
  iconAssets: "fontawesome",

  // 导航栏配置
  navbar: navBar,

  // 侧边栏配置
  sidebar: sideBar,

  // meta信息：lastUpdated、contributors、editLink 默认为true
  lastUpdated: false,
  contributors: false,
  editLink: false,

  // 启用热更新,以使上述三个 meta 信息生效
  hotReload: true,

  // 作者信息
  author: {
    name: "九歌·太一",
  },

  //深色模式
  darkmode: "toggle",
  // 全屏按钮
  // fullscreen: true,
  //   pageInfo: [],

  plugins: {
    //

    // 为每个文件夹自动生成带目录的 README.md
    // catalog: true,

    // maekdown 增强
    mdEnhance: {
      // 启用自定义容器
      container: true,
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      // 启用脚注
      footnote: true,
      // 开启标记
      mark: true,
      // 启用任务列表
      tasklist: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
      // 启用导入支持
      include: true,
      // 开启卡片支持
      card: true,
      // 启用图表
      chart: true,
      // 启用 ECharts 图表
      echarts: true,
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,
      // 启用 mermaid
      mermaid: true,
      // 启用流程图
      flowchart: true,
    },

    // 代码复制
    copyCode: { showInMobile: true },
    // 图片预览
    photoSwipe: true,
  },
});
