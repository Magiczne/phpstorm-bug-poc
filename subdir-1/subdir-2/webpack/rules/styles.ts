import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import Sass from 'sass'

export default {
  test: /\.(css|scss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'autoprefixer',
            [
              'cssnano',
              {
                discardUnused: false,
                minifyFontValues: {
                  removeQuotes: false
                },
                safe: true
              }
            ]
          ]
        },
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        implementation: Sass,
        sourceMap: true
      }
    }
  ]
}
