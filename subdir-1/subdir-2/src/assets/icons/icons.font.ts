module.exports = {
  files: ['./svg/*.svg'],
  fontName: 'icons',
  classPrefix: 'icons-',
  baseSelector: '.icons',
  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  fileName: `fonts/${Math.random().toString(36).substring(2)}.[fontname].[ext]`,
  cssTemplate: './icons.font.css.hbs'
}
