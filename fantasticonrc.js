module.exports = {
  name: 'GravityIcons',
  prefix: 'gravityicon',
  inputDir: './dist/icons',
  outputDir: './dist',
  fontTypes: ['woff'],
  assetTypes: ['css', 'json', 'html'],
  templates: {
    html: './src/templates/preview.hbs',
    css: './src/templates/styles.hbs'
  },
  pathOptions: {
    json: './src/templates/mapping.json'
  },
}
