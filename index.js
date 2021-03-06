'use strict'

const build = require('./lib/perform')
const buildSass = require('./lib/sass')
const optimizeHtml = require('./lib/html')
const homePage = require('./src/js/pages/home')
const nzPage = require('./src/js/pages/new-zealand')
const nzToDoPage = require('./src/js/pages/nz-things-to-do')
const chsPage = require('./src/js/pages/charleston')
const registryPage = require('./src/js/pages/registry')

buildSass('src/sass', 'src/sass/app.scss')
  .chain(css => build({
    outputDir: 'docs',
    copyable: [
      { from: 'src/fonts', to: 'docs/fonts' },
      { from: 'src/images', to: 'docs/images' },
      { from: 'src/favicon.ico', to: 'docs/favicon.ico' }
    ],
    writable: [
      { path: 'docs/index.html', content: optimizeHtml(homePage()) },
      { path: 'docs/new-zealand.html', content: optimizeHtml(nzPage()) },
      { path: 'docs/new-zealand/things-to-do.html', content: optimizeHtml(nzToDoPage()) },
      { path: 'docs/charleston.html', content: optimizeHtml(chsPage()) },
      { path: 'docs/registry.html', content: optimizeHtml(registryPage()) },
      { path: 'docs/styles.css', content: css }
    ]
  }))
  .fork(
    err => console.error('Error: ', err),
    data => console.log('Build succeeded:', data)
  )
