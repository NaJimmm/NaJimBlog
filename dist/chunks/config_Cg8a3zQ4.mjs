const PAGINATION_CONFIG = {
  // 博客文章每页显示数量
  BLOG_ENTRIES_PER_PAGE: 10,
  // 站点动态默认每页显示数量
  NOTES_DEFAULT_PAGE_SIZE: 10,
  // 默认分页大小（与 astro.config.mjs 保持一致）
  DEFAULT_PAGE_SIZE: 8
};
const getPageSize = (type = "blog") => {
  switch (type) {
    case "blog":
      return PAGINATION_CONFIG.BLOG_ENTRIES_PER_PAGE;
    case "notes":
      return PAGINATION_CONFIG.NOTES_DEFAULT_PAGE_SIZE;
    default:
      return PAGINATION_CONFIG.DEFAULT_PAGE_SIZE;
  }
};
const SITE_INFO = {
  // 网站名称
  NAME: "NaJimBlog",
  SITE_NAME: "NaJim Blog",
  SUBNAME: "一个简单的Liquid Glass风格的静态网站系统",
  // 网站描述
  DESCRIPTION: "NaJim个人博客，使用Liquid Glass风格的静态网站系统，用于记录个人成长、技术分享、开发心得等网站。",
  // 网站 URL (生产环境)
  URL: "http://localhost:4321",
  AUTHOR: "NaJim",
  // 本地开发 URL
  DEV_URL: "http://localhost:4321",
  LOGO_IMAGE: "/favicon/logo.png",
  KEY_WORDS: "静态网站,静态网站系统,NaJim_CMS",
  GOOGLE_ANALYTICS_ID: "G-XXXXXX",
  // 需改为你自己的Google Analytics ID
  BAIDU_ANALYTICS_ID: "XXXXXXXXXX",
  // 需改为你自己的百度分析ID
  // 网站初始时间（用于计算运行时长）
  START_DATE: "2025-12-23",
  // ICP 备案信息
  ICP: {
    NUMBER: "备案号xxxxxx",
    URL: "https://xxxxxxxxxx"
  }
};
const UI_CONFIG = {
  ENABLE_GLASS_EFFECT: true
};
const getSiteUrl = () => {
  return SITE_INFO.DEV_URL;
};

export { PAGINATION_CONFIG as P, SITE_INFO as S, UI_CONFIG as U, getSiteUrl as a, getPageSize as g };
