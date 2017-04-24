'use strict'

const layout = require('../components/layout')
const home = require('../components/home')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `Emily & Robert Are Getting Married`,
  description: `Information pertaining to the big day(s)`,
  uri: `https://emilyandrobert.wedding`,
  cssPath: `styles.css`,
  type: `website`,
  body: home
}

module.exports = () => layout(data)
