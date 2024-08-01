/* eslint-disable */

import { ProvidePlugin } from 'webpack';

const webpackPlugin = (context, options) => {
    return {
      name: 'webpack-plugin',
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
            },
            alias: {
              process: 'process/browser.js',
            },
          },
        };
      },
    };
  };
  
  export default { webpackPlugin };