'use strict'

const layout = require('../components/layout')
const page = require('../components/new-zealand/things-to-do')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `NZ – Things To Do & See`,
  description: `Information pertaining to Emily and Robert's wedding activities in New Zealand`,
  uri: `https://rpearce.github.io/emilyandrobert.wedding/new-zealand/things-to-do.html`,
  cssPath: `../styles.css`,
  type: `article`,
  body: page
}

module.exports = () => layout(data)
