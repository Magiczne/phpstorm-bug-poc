import ESLintWebpackPlugin from 'eslint-webpack-plugin'

export default new ESLintWebpackPlugin({
  cache: true,
  extensions: ['ts', 'vue']
})
