import { defaultTheme } from 'vuepress';
import { navBar } from './config_navbar';
import { sideBar } from './config_sidebar';

export default {
  theme: defaultTheme({
    // 默认主题配置
    // 导航栏配置
    navbar: navBar,

    // 侧边栏配置
    sidebar: sideBar,

  }),
}