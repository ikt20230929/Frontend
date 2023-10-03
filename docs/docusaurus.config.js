// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frontend',
  tagline: 'Frontend dokumentáció',
  favicon: '../favicon.ico',

  url: 'https://ikt20230929.github.io',
  baseUrl: '/Frontend/docs/',

  organizationName: 'ikt20230929',
  projectName: 'Frontend',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },

        pages: false,
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Frontend',
        logo: {
          alt: 'Frontend Logo',
          src: '../favicon-32x32.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Test',
                to: '/docs/',
              },
            ],
          },
        ],
        copyright: `The source code is licensed MIT. The website content is licensed CC BY-NC-SA 4.0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
