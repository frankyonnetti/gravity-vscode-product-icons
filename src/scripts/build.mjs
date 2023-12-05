import fs from 'fs-extra'
import Fantasticon from 'fantasticon'

const name = 'GravityIcons'

// https://www.npmjs.com/package/fs-extra
fs.remove('./src/templates/mapping.json')
fs.remove('./dist/GravityIcons.css')
fs.remove('./dist/GravityIcons.html')
fs.remove('./dist/GravityIcons.woff')

Fantasticon.generateFonts({
  name,
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
})

// import icons from './icons.mjs'
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))
const icons = loadJSON('../templates/mapping.json')

fs.remove('./dist/GravityIcons.json').then(() => {
  const gravityIcons = Object.entries(icons).map(([key], idx) => {
    return [key, { fontCharacter: '\\' + (0xf101 + idx).toString(16) }]
  })

  // Create extension file
  fs.writeJSONSync(
    `./dist/${name}.json`,
    {
      fonts: [
        {
          id: name,
          src: [
            {
              path: `./dist/GravityIcons.woff`,
              format: 'woff'
            }
          ],
          weight: 'normal',
          style: 'normal'
        }
      ],

      iconDefinitions: Object.fromEntries(gravityIcons)
    },
    { spaces: 2 }
  )
})
