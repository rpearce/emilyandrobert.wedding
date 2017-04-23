'use strict'

const { join } = require('path')
const Task = require('data.task')
const { minify } = require('html-minifier')
const { chain, compose, map, sequence, unnest } = require('ramda')
const { copy, remove, mkdirp, writeFile } = require('./lib/fs')
const buildSass = require('./lib/sass')
const { copyPaths, outputDirectory, sourceDirectory } = require('./config')
const homePage = require('./src/js/pages/home')

// Directories
const outputDir = join(__dirname, outputDirectory)
const srcDir = join(__dirname, sourceDirectory)

// Helpers
const optimizeHtml = html => minify(html, { collapseWhitespace: true })
const copyPath = p => copy(join(srcDir, p), join(outputDir, p))
const copyAll = compose(
  sequence(Task.of),
  map(copyPath)
)

// Work!
remove(outputDir)
  .chain(_ => mkdirp(outputDir))
  .chain(_ => copyAll(copyPaths))
  .chain(_ => buildSass(join(srcDir, 'sass'), join(srcDir, 'sass', 'app.scss')))
  .chain(css => writeFile(join(outputDir, 'styles.css'), css))
  .chain(_ => writeFile(join(outputDir, 'index.html'), optimizeHtml(homePage())))
  .fork(
    err => console.error('Error: ', err),
    data => console.log(data || 'Build succeeded.')
  )

