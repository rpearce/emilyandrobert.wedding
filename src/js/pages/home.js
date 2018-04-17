'use strict'

const layout = require('../components/layout')
const page = require('../components/home')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `Emily & Robert Are Getting Married`,
  description: `Information pertaining to the big day(s)`,
  uri: `https://rpearce.github.io/emilyandrobert.wedding`,
  cssPath: `styles.css`,
  type: `website`,
  body: page
}

module.exports = () => layout(data)
