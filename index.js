'use strict'

const path = require('path')
const { outputDir, srcDir, sassDir, sassEntry, cssOutputPath, cnamePath, cnameOutputPath } = require('./config')
const { copy, remove, mkdirp, writeFile } = require('./lib/fs')
const buildSass = require('./lib/sass')
const homePage = require('./src/js/pages/home')

remove(outputDir)
  .chain(_ => mkdirp(outputDir))
  .chain(_ => copy(cnamePath, cnameOutputPath))
  .chain(_ => buildSass({ sassDir, sassEntry }))
  .chain(css => writeFile(cssOutputPath, css))
  .chain(_ => writeFile(path.join(outputDir, 'index.html'), homePage()))
  .fork(
    err => console.error('Error: ', err),
    data => console.log(data || 'Build succeeded.')
  )
