import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Warudo Handbook',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.warudo.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HakuyaLabs', // Usually your GitHub org/user name.
  projectName: 'Warudo-doc', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  scripts: [
    {src: 'https://hm.baidu.com/hm.js?c35709853d215762230812b0ef3005d0', async: true}
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/in-app.scss')
          ],
        },
        gtag: {
          trackingID: 'G-9BCC5L6S1L',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom'
  ],

  themes: [
    [

      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],

  themeConfig:
    {
      image: 'img/favicon.png',
      navbar: {
        title: 'Warudo',
        logo: {
          alt: 'Warudo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {
            position: 'left',
            label: 'Home',
            href: 'https://warudo.app/',
            target: '_blank',
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
        ],
      },
      footer: {
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'var(--ifm-background-surface-color)',
          dark: 'var(--ifm-background-surface-color)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    } satisfies Preset.ThemeConfig,
};

export default config;
