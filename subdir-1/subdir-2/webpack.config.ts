import { resolve } from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import type { Configuration } from 'webpack'

import {
  CopyPlugin,
  DefinePlugin,
  ESLintPlugin,
  ForkTsCheckerPlugin,
  MiniCssExtractPlugin,
  StyleLintPlugin,
  VueLoaderPlugin
} from './webpack/plugins'
import { ImagesRule, ScriptsRule, StylesRule, VueRule, WebFontRule } from './webpack/rules'
import { getMagicConstant } from "./webpack/magic-constant";

const environment = process.env.NODE_ENV as Configuration['mode']
const isDevelopment = environment === 'development'
const devtoolMode = isDevelopment ? 'source-map' : false
const version = getMagicConstant()

const config: Configuration = {
  context: resolve(__dirname),
  devtool: devtoolMode,
  mode: environment ?? 'development',
  watchOptions: {
    followSymlinks: true,
    poll: true
  },
  entry: {
    home: ['./src/js/pages/home.ts']
  },
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    filename: `[name]/bundle-${version}.js`
  },
  module: {
    rules: [ImagesRule, ScriptsRule, StylesRule, WebFontRule, VueRule]
  },
  resolve: {
    alias: {
      Scss: resolve(__dirname, 'src/scss'),
      vue: isDevelopment ? 'vue/dist/vue.esm-browser.js' : 'vue/dist/vue.esm-browser.prod.js'
    },
    extensions: ['.js', '.json', '.ts', '.vue', '.scss'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [
    CopyPlugin,
    DefinePlugin,
    ESLintPlugin,
    ForkTsCheckerPlugin,
    MiniCssExtractPlugin(version),
    StyleLintPlugin,
    VueLoaderPlugin
  ]
}

console.log(config)

export default config
