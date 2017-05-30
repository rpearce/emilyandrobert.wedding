'use strict'

const layout = require('../components/layout')
const page = require('../components/registry')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `Wedding Registry`,
  description: `Wedding Registry`,
  uri: `https://emilyandrobert.wedding/registry.html`,
  cssPath: `/styles.css`,
  type: `article`,
  body: page
}

module.exports = () => layout(data)
