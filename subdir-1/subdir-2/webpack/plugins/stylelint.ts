import StylelintWebpackPlugin from 'stylelint-webpack-plugin'

export default new StylelintWebpackPlugin({
  cache: true,
  context: 'src',
  emitError: true,
  failOnError: false,
  files: '**/*.scss',
  quiet: false
})
