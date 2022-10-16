import CopyWebpackPlugin from 'copy-webpack-plugin'

export default new CopyWebpackPlugin({
  patterns: [{ from: './src/js/file-to-copy.js', to: 'file-to-copy.js' }]
})
