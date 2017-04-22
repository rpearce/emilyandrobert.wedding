'use strict'

const path = require('path')
const { copy, remove, mkdirp, writeFile } = require('./lib/fs')
const buildSass = require('./lib/sass')
const homePage = require('./src/js/pages/home')
const {
  outputDir,
  srcDir,
  sassDir,
  sassEntry,
  cssOutputPath,
  cnamePath,
  cnameOutputPath,
  fontsPath,
  fontsOutputPath,
  imagesPath,
  imagesOutputPath
} = require('./config')

remove(outputDir)
  .chain(_ => mkdirp(outputDir))
  .chain(_ => copy(cnamePath, cnameOutputPath))
  .chain(_ => copy(fontsPath, fontsOutputPath))
  .chain(_ => copy(imagesPath, imagesOutputPath))
  .chain(_ => buildSass({ sassDir, sassEntry }))
  .chain(css => writeFile(cssOutputPath, css))
  .chain(_ => writeFile(path.join(outputDir, 'index.html'), homePage()))
  .fork(
    err => console.error('Error: ', err),
    data => console.log(data || 'Build succeeded.')
  )

