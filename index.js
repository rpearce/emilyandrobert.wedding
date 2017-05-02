'use strict'

const build = require('./lib/perform')
const buildSass = require('./lib/sass')
const optimizeHtml = require('./lib/html')
const homePage = require('./src/js/pages/home')
const thingsToDoPage = require('./src/js/pages/things-to-do-and-see')

buildSass('src/sass', 'src/sass/app.scss')
  .chain(css => build({
    outputDir: 'docs',
    copyable: [
      { from: 'src/fonts', to: 'docs/fonts' },
      { from: 'src/images', to: 'docs/images' },
      { from: 'src/CNAME', to: 'docs/CNAME' }
    ],
    writable: [
      { path: 'docs/index.html', content: optimizeHtml(homePage()) },
      { path: 'docs/things-to-do-and-see.html', content: optimizeHtml(thingsToDoPage()) },
      { path: 'docs/styles.css', content: css }
    ]
  }))
  .fork(
    err => console.error('Error: ', err),
    data => console.log('Build succeeded:', data)
  )
