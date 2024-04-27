export default {
  "title": "Haochen",
  "tagline": "Learning is a Lifelong Process",
  "url": "https://haochenqi.com/",
  "baseUrl": "/",
  "customFields": {},
  "favicon": "img/favicon.ico",
  "projectName": "Haochen-Blog",
  "stylesheets": [
    "https://fonts.font.im/css?family=Raleway:500,700"
  ],
  "themeConfig": {
    "navbar": {
      "title": "Haochen",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/haochen.logo.svg"
      },
      "items": [
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/HaochenQ",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Social Media",
          "items": [
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/in/haochen-qi-a36393171/"
            },
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/haochen.qi.520"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/HaochenQ"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024 Haochen. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\Rafa\\Desktop\\Nova pasta (3)\\Haochen-Blog-main\\sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "path": "./blog",
          "showReadingTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\Rafa\\Desktop\\Nova pasta (3)\\Haochen-Blog-main\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "zh-cn"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr"
      },
      "zh-cn": {
        "label": "中文",
        "direction": "ltr"
      }
    }
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};