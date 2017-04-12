'use strict'

const path = require('path')
const { copy, rmDir, mkDir, writeFile } = require('./lib/fs')
const markup = require('./src/index')

const outputPath = path.join(__dirname, 'build')
const srcPath = path.join(__dirname, 'src')

rmDir(outputPath)
  .chain(_ => mkDir(outputPath))
  .chain(_ => copy(path.join(srcPath, 'CNAME'), path.join(outputPath, 'CNAME')))
  .chain(_ => copy(path.join(srcPath, 'styles.css'), path.join(outputPath, 'styles.css')))
  .chain(_ => writeFile(path.join(outputPath, 'index.html'), markup()))
  .fork(
    err => console.error('Error: ', err),
    data => console.log(data || 'Build succeeded.')
  )
