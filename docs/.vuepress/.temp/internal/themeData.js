export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"开发环境\",\"link\":\"/Environment/\"},{\"text\":\"命令手册\",\"children\":[{\"text\":\"Linux\",\"link\":\"/Command/Linux/\"},{\"text\":\"MarkDown\",\"link\":\"/Command/Markdown/\"}]},{\"text\":\"数据库\",\"children\":[{\"text\":\"MySQL\",\"link\":\"/DataBase/MySQL/\"},{\"text\":\"Redis\",\"link\":\"/DataBase/Redis/\"}]}],\"sidebar\":{\"/Environment/\":[{\"text\":\"Docker\",\"link\":\"Docker\"},{\"text\":\"Git\",\"link\":\"Git\"},{\"text\":\"JDK\",\"link\":\"JDK\"},{\"text\":\"Maven\",\"link\":\"Maven\"},{\"text\":\"Node\",\"link\":\"Nodejs\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
