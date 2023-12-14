import fs from 'fs-extra'

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))
const icons = loadJSON('../templates/mapping.json')

const gravityIcons = Object.entries(icons).map(([key], idx) => {
  return [key, { fontCharacter: '\\' + (0xf101 + idx).toString(16) }]
})

// Create extension file
fs.writeJSONSync(
  `./dist/GravityIcons.json`,
  {
    fonts: [
      {
        id: 'GravityIcons',
        src: [
          {
            path: `./GravityIcons.woff`,
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
