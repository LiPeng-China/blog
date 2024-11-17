// import { SidebarConfig } from "@vuepress/theme-default";
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  // 笔记
  "/笔记/": [
    {
      text: "Java",
      collapsible: true,
      children: [
        { text: "JavaSE", link: "JavaSE.md" },
        { text: "JavaWeb", link: "JavaWeb.md" },
        { text: "JDBC", link: "JDBC.md" },
        { text: "Maven", link: "Maven.md" },
      ],
    },
    {
      text: "Spring",
      collapsible: true,
      children: [
        { text: "Spring", link: "Spring.md" },
        { text: "SpringBoot", link: "SpringBoot.md" },
        { text: "SpringMVC", link: "SpringMVC.md" },
        { text: "SpringCloud", link: "SpringCloud.md" },
      ],
    },
    {
      text: "数据库",
      collapsible: true,
      children: [
        { text: "MySQL", link: "MySQL.md" },
        { text: "Redis", link: "Redis.md" },
        { text: "MongoDB", link: "MongoDB.md" },
      ],
    },
    {
      text: "Markdown",
      collapsible: true,
      children: [
        { text: "Latex", link: "Latex.md" },
        { text: "Mermaid", link: "mermaid.md" },
      ],
    },
    {
      text: "ORM",
      collapsible: true,
      children: [
        { text: "MyBatis", link: "MyBatis.md" },
        { text: "MyBatisPlus", link: "MyBatisPlus.md" },
      ],
    },
    {
      text: "中间件",
      collapsible: true,
      children: [
        { text: "Nginx", link: "Nginx.md" },
        { text: "RabbitMQ", link: "RabbitMQ.md" },
      ],
    },
    {
      text: "工具",
      collapsible: true,
      children: [
        { text: "Linux", link: "Linux.md" },
        { text: "Git", link: "Git.md" },
        { text: "Docker", link: "Docker.md" },
      ],
    },
  ],
  "/面试/": [
    { text: "408基础", link: "408基础.md" },
  ],
  "/工具/": [
    { text: "WSL", link: "WSL.md" },
    { text: "Docker", link: "Docker.md" },
    { text: "1Panel", link: "1Panel.md" },
    { text: "Sdkman", link: "Sdkman.md" },
  ]
});
