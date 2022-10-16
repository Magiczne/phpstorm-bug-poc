export default {
  test: /\.(svg|gif|png|jpg)$/,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 4 * 1024
    }
  }
}
