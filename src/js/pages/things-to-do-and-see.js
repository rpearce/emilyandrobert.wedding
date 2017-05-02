'use strict'

const layout = require('../components/layout')
const page = require('../components/things-to-do-and-see')

const data = {
  siteName: `Emily & Robert Are Getting Married`,
  title: `Things To Do and See`,
  description: `Things to do and see around Auckland and New Zealand`,
  uri: `https://emilyandrobert.wedding/things-to-do-and-see.html`,
  cssPath: `styles.css`,
  type: `article`,
  body: page
}

module.exports = () => layout(data)
