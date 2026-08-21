// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "简幻欢社区维基",
  tagline: "Not Official",
  url: "https://sfe.zxpweb.link",
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: (error) => {
        throw error;
      },
    },
  },
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [require.resolve("docusaurus-lunr-search")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ZengXiaoPi/Simpfun_Wiki/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ZengXiaoPi/Simpfun_Wiki/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "简幻欢社区维基",
        logo: {
          alt: "Simpfun",
          src: "img/Simpfun.png",
        },
        items: [
          {
            type: "doc",
            docId: "main",
            position: "left",
            label: "主页",
          },
          {
            href: "https://github.com/ZengXiaoPi/Simpfun_Wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "进入维基",
                to: "/docs/main",
              },
            ],
          },
          {
            title: "友情链接",
            items: [
              {
                label: "简幻欢",
                href: "https://simpfun.cn",
              },
              {
                label: "简幻云",
                href: "https://simpcloud.cn",
              },
              {
                label: "BiliBili",
                href: "https://space.bilibili.com/1493209225",
              },
              {
                label: "CloudFlare",
                href: "https://www.cloudflare.com",
              },
            ],
          },
          {
            title: "别的东西",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ZengXiaoPi/Simpfun_Wiki",
              },
            ],
          },
        ],
        copyright: `Simpfun Wiki Team 版权所有 由 Docusaurus 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
