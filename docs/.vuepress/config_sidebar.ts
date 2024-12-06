// import { SidebarConfig } from "@vuepress/theme-default";
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  // 笔记
  "/笔记/": [
    {
      text: "Java",
      collapsible: true,
      icon: "/image/java.svg",
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
      icon: "/image/spring.svg",
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
      icon: "database",
      children: [
        { text: "MySQL", link: "MySQL.md" },
        { text: "Redis", link: "Redis.md" },
        { text: "MongoDB", link: "MongoDB.md" },
      ],
    },
    {
      text: "Markdown",
      collapsible: true,
      icon: "/image/markdown.svg",
      children: [
        { text: "Latex", link: "Latex.md" },
        { text: "Mermaid", link: "mermaid.md" },
      ],
    },
    {
      text: "ORM",
      collapsible: true,
      icon: "/image/orm.svg",
      children: [
        { text: "MyBatis", link: "MyBatis.md" },
        { text: "MyBatisPlus", link: "MyBatisPlus.md" },
      ],
    },
    {
      text: "中间件",
      collapsible: true,
      icon: "/image/gears.svg",
      children: [
        { text: "Nginx", link: "Nginx.md" },
        { text: "RabbitMQ", link: "RabbitMQ.md" },
      ],
    },
    {
      text: "工具",
      collapsible: true,
      icon: "/image/wrench.svg",
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
    { text: "Environment", link: "Environment.md" },
    { text: "Linux命令", link: "Linux命令.md" },
  ],
  "/开发/": [
    { text: "Git", link: "Git.md" },
    { text: "Maven", link: "Maven.md" },
    { text: "PyTorch", link: "PyTorch.md" },
    { text: "Latex", link: "Latex.md" },
  ]
});
