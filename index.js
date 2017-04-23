'use strict'

const path = require('path')
const { minify } = require('html-minifier')
const { compose } = require('ramda')
const { copy, remove, mkdirp, writeFile } = require('./lib/fs')
const buildSass = require('./lib/sass')
const {
  outputDir,
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

const homePage = require('./src/js/pages/home')

const optimizeHtml = html => minify(html, { collapseWhitespace: true })

remove(outputDir)
  .chain(_ => mkdirp(outputDir))
  .chain(_ => copy(cnamePath, cnameOutputPath))
  .chain(_ => copy(fontsPath, fontsOutputPath))
  .chain(_ => copy(imagesPath, imagesOutputPath))
  .chain(_ => buildSass({ sassDir, sassEntry }))
  .chain(css => writeFile(cssOutputPath, css))
  .chain(_ => writeFile(path.join(outputDir, 'index.html'), optimizeHtml(homePage())))
  .fork(
    err => console.error('Error: ', err),
    data => console.log(data || 'Build succeeded.')
  )

