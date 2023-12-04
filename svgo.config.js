module.exports = {
  plugins: [
    'cleanupIds',
    'collapseGroups',
    'convertShapeToPath',
    'mergePaths',
    'removeOffCanvasPaths',
    'removeTitle',
    'removeUselessStrokeAndFill',
    'removeXMLNS',
    'removeXMLProcInst',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'fill'
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor'
          }
        ]
      }
    }
  ]
}
