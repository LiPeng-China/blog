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
      icon: "/image/spring0.svg",
      children: [
        { text: "Spring", icon: "/image/spring.svg", link: "Spring.md" },
        { text: "SpringBoot", icon: "/image/springboot.svg", link: "SpringBoot.md" },
        { text: "SpringMVC", icon: "/image/springmvc.svg", link: "SpringMVC.md" },
        { text: "SpringCloud", icon: "/image/springcloud.svg", link: "SpringCloud.md" },
      ],
    },
    {
      text: "数据库",
      collapsible: true,
      icon: "database",
      children: [
        { text: "MySQL", icon: "/image/mysql.svg", link: "MySQL.md" },
        { text: "Redis", icon: "/image/redis.svg", link: "Redis.md" },
        { text: "MongoDB", icon: "/image/mongodb.svg", link: "MongoDB.md" },
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
        { text: "MyBatis", icon: "/image/mybatis.svg", link: "MyBatis.md" },
        { text: "MyBatisPlus", icon: "/image/mybatisplus.svg", link: "MyBatisPlus.md" },
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
  ]
});
