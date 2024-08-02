// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/* eslint-disable */
const { webpackPlugin } = require('./src/plugins').default;
const { ProvidePlugin } = require('webpack');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const rehypePrettyCode = require('rehype-pretty-code');

const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  title: 'Developer Jun',
  tagline: '',
  url: 'https://docs.immutable.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'jjunhaa0211',
  projectName: 'Developer_Jun',

  plugins: [
    () => ({
      name: 'custom-webpack-config',
      configureWebpack(config) {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve('process/browser'),
            }),
          ],
          resolve: {
            fallback: {
              stream: require.resolve('stream-browserify'),
              path: require.resolve('path-browserify'),
              buffer: require.resolve('buffer/'),
              url: require.resolve('url/'),
            },
          },
        };
      },
    }),
  ],
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/immutable/imx-docs/tree/main/',
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: 'nord', // 사용할 shiki 테마
                onVisitLine(node) {
                  if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: ' ' }];
                  }
                },
                onVisitHighlightedLine(node) {
                  node.properties.className.push('highlighted');
                },
                onVisitHighlightedWord(node) {
                  node.properties.className = ['word'];
                },
              },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      logo: {
        alt: 'Immutable Logo',
        src: 'junha',
        srcDark: 'junha',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Home',
        },
        {
          type: 'doc',
          docId: 'overview/welcome',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'SDKs',
          type: 'doc',
          docId: 'guides/getting-started-guide',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['solidity'],
    },
    algolia: {
      appId: '2KKA2HFUSD',
      apiKey: '2cb7547e9bf1ee7ee1b033acb6387c1d',
      indexName: 'prod_imxdocs',
      contextualSearch: true,
    },
  }),
};

module.exports = config;
