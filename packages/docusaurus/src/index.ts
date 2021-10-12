import { LoadContext, Plugin } from '@docusaurus/types';
import { PluginOptions } from './types';
import { Configuration, ProvidePlugin } from 'webpack';

import path from 'path';

export default function (
  _context: LoadContext,
  options: PluginOptions,
): Plugin<void> {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    name: 'docusaurus-plugin-jupyter',
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
    configureWebpack(_config: Configuration, isServer: boolean) {
      return {
        mergeStrategy: {
          'module.rules': 'prepend',
          'plugins': 'prepend',
        },
        module: {
          rules: [
            {
              test: /.*lib0.*\.m?js/,
              resolve: {
                fullySpecified: false
              }
            },
/*
            {
              test: /\.js?$/,
              loader: "babel-loader",
              options: {
                sourceType: "unambiguous",
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }],
                  "@babel/preset-react"
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
                cacheDirectory: true
              }
            },
*/
          ],
        },
        plugins: [
          new ProvidePlugin({
            process: 'process/browser'
          }),
        ]
      };
    },
  };
}
