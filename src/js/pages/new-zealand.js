'use strict'

const layout = require('../components/layout')
const page = require('../components/new-zealand/')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `New Zealand Information`,
  description: `Information pertaining to Emily and Robert's wedding activities in New Zealand`,
  uri: `https://rpearce.github.io/emilyandrobert.wedding/new-zealand.html`,
  cssPath: `styles.css`,
  type: `article`,
  body: page
}

module.exports = () => layout(data)
