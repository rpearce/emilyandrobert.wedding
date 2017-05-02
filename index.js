'use strict'

const { join } = require('path')
const Task = require('data.task')
const { compose, map, sequence } = require('ramda')
const { copy, remove, mkdirp, writeFile } = require('./lib/fs')
const buildSass = require('./lib/sass')
const optimizeHtml = require('./lib/html')
const { copyPaths, outputDirectory, sourceDirectory } = require('./config')

const homePage = require('./src/js/pages/home')
const thingsToDoPage = require('./src/js/pages/things-to-do-and-see')

// Directories
const outputDir = join(__dirname, outputDirectory)
const srcDir = join(__dirname, sourceDirectory)

// Copying a list of paths
const copyPath = p => copy(join(srcDir, p), join(outputDir, p))
const copyAll = compose(
  sequence(Task.of),
  map(copyPath)
)

// Write Page
const writePage = ({ path, page }) => writeFile(join(outputDir, path), optimizeHtml(page()))
const writePages = compose(
  sequence(Task.of),
  map(writePage)
)

// Pages
const pages = [
  { path: 'index.html', page: homePage },
  { path: 'things-to-do-and-see.html', page: thingsToDoPage }
]

// Work!
remove(outputDir)
  .chain(_ => mkdirp(outputDir))
  .chain(_ => copyAll(copyPaths))
  .chain(_ => buildSass(join(srcDir, 'sass'), join(srcDir, 'sass', 'app.scss')))
  .chain(css => writeFile(join(outputDir, 'styles.css'), css))
  .chain(_ => writePages(pages))
  .fork(
    err => console.error('Error: ', err),
    data => console.log('Build succeeded:', data)
  )

