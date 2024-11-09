// import { NavbarConfig } from "@vuepress/theme-default";
import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
  { text: "首页", link: "/" },
  { text: "笔记", link: "/笔记/" },
  // { text: "开发环境", link: "/Environment/" },
  // {
  //   text: "命令手册",
  //   children: [
  //     { text: "Linux", link: "/Command/Linux/" },
  //     { text: "MarkDown", link: "/Command/Markdown/" },
  //   ],
  // },
  // {
  //   text: "数据库",
  //   children: [
  //     { text: "MySQL", link: "/DataBase/MySQL/" },
  //     { text: "Redis", link: "/DataBase/Redis/" },
  //   ],
  // },
  // {
  //   text: "设计模式",
  //   link: "/DesignPattren/",
  // },
  // {
  //   text: "Java",
  //   children: [
  //     { text: "函数式编程", link: "/Java/FunctionalProgramming/" },
  //     { text: "JVM虚拟机", link: "/Java/JVM/" },
  //   ],
  // },
]);
