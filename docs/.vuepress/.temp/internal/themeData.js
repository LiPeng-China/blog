export const themeData = JSON.parse("{\"encrypt\":{},\"home\":\"/\",\"lastUpdated\":false,\"contributors\":false,\"author\":{\"name\":\"九歌·太一\"},\"darkmode\":\"toggle\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"笔记\",\"link\":\"/笔记/\"}],\"sidebar\":{\"/笔记/\":[{\"text\":\"Java\",\"collapsible\":true,\"children\":[{\"text\":\"JavaSE\",\"link\":\"JavaSE.md\"},{\"text\":\"JavaWeb\",\"link\":\"JavaWeb.md\"},{\"text\":\"JDBC\",\"link\":\"JDBC.md\"}]},{\"text\":\"Spring\",\"collapsible\":true,\"children\":[{\"text\":\"Spring\",\"link\":\"Spring.md\"},{\"text\":\"SpringBoot\",\"link\":\"SpringBoot.md\"},{\"text\":\"SpringMVC\",\"link\":\"SpringMVC.md\"},{\"text\":\"SpringCloud\",\"link\":\"SpringCloud.md\"}]},{\"text\":\"数据库\",\"collapsible\":true,\"children\":[{\"text\":\"MySQL\",\"link\":\"MySQL.md\"},{\"text\":\"Redis\",\"link\":\"Redis.md\"},{\"text\":\"MongoDB\",\"link\":\"MongoDB.md\"}]},{\"text\":\"Maven\",\"link\":\"Maven.md\"},{\"text\":\"MyBatis\",\"link\":\"MyBatis.md\"},{\"text\":\"MyBatisPlus\",\"link\":\"MyBatisPlus.md\"},{\"text\":\"Linux\",\"link\":\"Linux.md\"},{\"text\":\"Nginx\",\"link\":\"Nginx.md\"},{\"text\":\"RabbitMQ\",\"link\":\"RabbitMQ.md\"},{\"text\":\"Git\",\"link\":\"Git.md\"},{\"text\":\"Docker\",\"link\":\"Docker.md\"}]}}}}")

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
