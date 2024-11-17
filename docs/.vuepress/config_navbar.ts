// import { NavbarConfig } from "@vuepress/theme-default";
import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
  { text: "首页", icon: "house", link: "/" },
  { text: "笔记", icon: "book", link: "/笔记/" },
  { text: "面试", icon: "user", link: "/面试/" },
  { text: "工具", icon: "gear", link: "/工具/" },
]);
