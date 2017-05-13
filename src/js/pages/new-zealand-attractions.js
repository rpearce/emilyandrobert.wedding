'use strict'

const layout = require('../components/layout')
const page = require('../components/new-zealand-attractions')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `New Zealand Attractions`,
  description: `Things to do and see around Auckland and New Zealand`,
  uri: `https://emilyandrobert.wedding/new-zealand-attractions.html`,
  cssPath: `styles.css`,
  type: `article`,
  body: page
}

module.exports = () => layout(data)
