import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme";

export default defineUserConfig({
  base: "/blog/",
  theme,
  lang: "zh-CN",

  plugins: [
    // 搜索插件
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      locales: {
        "/zh/": {
          cancel: "取消",
          placeholder: "搜索",
          search: "搜索",
          searching: "搜索中",
          select: "选择",
          navigate: "切换",
          exit: "关闭",
          history: "搜索历史",
          emptyHistory: "无搜索历史",
          emptyResult: "没有找到结果",
          loading: "正在加载搜索索引...",
        },
      },
    }),
  ],
});
