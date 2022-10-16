export default {
  test: /\.(ts)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        babelrc: true
      }
    },
    {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [
          /\.vue$/
        ]
      }
    }
  ]
}
