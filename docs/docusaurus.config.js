// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frontend',
  tagline: 'Frontend dokumentáció',
  favicon: '../favicon.ico',

  url: 'https://ikt20230929.github.io',
  baseUrl: process.env.DOCS_BASE_URL || '/public/docs/',

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
        title: 'Regisztráció',
        logo: {
          alt: 'Frontend Logo',
          src: '../favicon-32x32.png',
        },
      },
      footer: {
        copyright: 'A forráskód MIT licenc alatt áll. A weboldal tartalma CC BY-NC-SA 4.0 licenc alá tartozik.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true
      }
    }),
};

module.exports = config;
