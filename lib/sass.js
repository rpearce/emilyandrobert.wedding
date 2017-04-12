'use strict'

const path = require('path')
const sass = require('node-sass')
const Task = require('data.task')

function buildSass({ sassDir, sassEntry }) {
  return new Task((reject, result) => {
    sass.render({
      file: sassEntry,
      includePaths: [sassDir],
      outputStyle: 'compressed'
    }, (err, data) => {
      err ? reject(err) : result(data.css.toString())
    })
  })
}

module.exports = {
  buildSass
}
