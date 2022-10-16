import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  test: /\.font\.ts/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        url: false
      }
    },
    {
      loader: 'webfonts-loader',
      options: {
        publicPath: '../'
      }
    }
  ]
}
