'use strict'

const layout = require('../components/layout')
const page = require('../components/charleston')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `Charleston Information`,
  description: `Information pertaining to Emily and Robert's wedding activities in Charleston`,
  uri: `https://emilyandrobert.wedding/charleston.html`,
  cssPath: `styles.css`,
  type: `article`,
  body: page
}

module.exports = () => layout(data)
