'use strict'

const path = require('path')
const { copy, rmDir, mkDir, writeFile } = require('./lib/fs')
const { buildSass } = require('./lib/sass')
const markup = require('./src/index')

const outputDir = path.join(__dirname, 'build')
const htmlOutputPath = path.join(outputDir, 'index.html')
const srcDir = path.join(__dirname, 'src')
const sassDir = path.join(srcDir, 'sass')
const sassEntry = path.join(sassDir, 'app.scss')
const cssOutputPath = path.join(outputDir, 'styles.css')
const cnamePath = path.join(srcDir, 'CNAME')
const cnameOutputPath = path.join(outputDir, 'CNAME')

rmDir(outputDir)
  .chain(_ => mkDir(outputDir))
  .chain(_ => copy(cnamePath, cnameOutputPath))
  .chain(_ => buildSass({ sassDir, sassEntry }))
  .chain(css => writeFile(cssOutputPath, css))
  .chain(_ => writeFile(htmlOutputPath, markup()))
  .fork(
    err => console.error('Error: ', err),
    data => console.log(data || 'Build succeeded.')
  )
