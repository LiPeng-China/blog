// import { SidebarConfig } from "@vuepress/theme-default";
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  // 开发环境
  "/Environment/": [
    { text: "Docker", link: "Docker" },
    { text: "Git", link: "Git" },
    { text: "JDK", link: "JDK" },
    { text: "Maven", link: "Maven" },
    { text: "Node", link: "Nodejs" },
  ],
  // 设计模式
  "/DesignPattren/": [
    { text: "六大原则", link: "SOLID" },
    {
      text: "创造模式",
      collapsible: true,
      children: [
        { text: "工厂方法", link: "CreationalPattern/FactoryMethod.md" },
        { text: "抽象工厂", link: "CreationalPattern/AbstractFactory.md" },
      ],
    },
    { text: "行为模式", collapsible: true, children: [] },
    { text: "结构模式", collapsible: true, children: [] },
  ],
  // 命令手册
  "/Command/Linux": [
    { text: "cat：查看.md", link: "cat：查看.md" },
    { text: "chown：更改所有者.md", link: "chown：更改所有者.md" },
    { text: "cp：复制.md", link: "cp：复制.md" },
    { text: "du：查看大小.md", link: "du：查看大小.md" },
    { text: "mount：磁盘挂载.md", link: "mount：磁盘挂载.md" },
    { text: "zip：压缩.md", link: "zip：压缩.md" },
  ],
  "/Command/Markdown/": [
    { text: "LaTex", link: "LaTex.md" },
    { text: "mermaid", link: "mermaid.md" },
  ],
  // Java目录
  "/Java/FunctionalProgramming/": [
    { text: "01:概述", link: "01_Introduction.md" },
    { text: "02:Lambda表达式", link: "02_Lambda.md" },
    { text: "03:Stream流", link: "03_Stream.md" },
    { text: "04:Optional", link: "04_Optional.md" },
    { text: "05:函数式接口", link: "05_FunctionalInterface.md" },
    { text: "06:方法引用", link: "06_MethodReference.md" },
    { text: "07:并行流", link: "07_ParallelStream.md" },
  ],
  "/Java/JVM": [],

  // 数据库
  "/DataBase/MySQL/": [
    {
      text: "基础",
      collapsible: true,
      children: [
        { text: "select执行流程", link: "Basis/01_select执行流程.md" },
        { text: "如何存储", link: "Basis/02_如何存储.md" },
      ],
    },
    { text: "索引", collapsible: true, children: [] },
    { text: "锁", collapsible: true, children: [] },
    { text: "日志", collapsible: true, children: [] },
    { text: "内存", collapsible: true, children: [] },
    { text: "事务", collapsible: true, children: [] },
  ],
});
