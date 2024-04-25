require("dotenv").config();
module.exports = {
  title: "Rafael Brandão",
  tagline: "Be aware to good and bad things why everything teach us something and knowledge is precious",
  //disableTitleTagline: true,
  //titleDelimiter: "*",
  url: "https://portifolio-brandao.com.br/",
  baseUrl: "/",
  customFields: {
    // Put your custom environment here
    // formAPI: process.env.FORM_SPREE,
    // test: "test",
  },
  //onBrokenLinks: "throw",
  //onBrokenMarkdownLinks: "warn",
  favicon: "img/lg_light.ico",
  // Usually your GitHub org/user name.
  projectName: "Portifolio-rafael-brandao", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "Rafael Brandão",
      logo: {
        alt: "My Site Logo",
        src: "img/logo_light.svg"
      },
      items: [
        { type: "localeDropdown", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Media",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/rafael-brand%C3%A3o-825494111/",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rafael Brandão. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          path: "./blog",
          //routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pr-br"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "pr-br": {
        label: "Português",
      },
    },
  },
};
