'use strict'

const { join } = require('path')
const { compose, map, sequence } = require('ramda')
const Task = require('data.task')
const { copy, remove, mkdirp, writeFile } = require('./fs')


const writePath = ({ path, content }) => writeFile(path, content)
const writeAll = compose(
  sequence(Task.of),
  map(writePath)
)

const copyPath = ({ from, to }) => copy(from, to)
const copyAll = compose(
  sequence(Task.of),
  map(copyPath)
)

module.exports = ({ outputDir, copyable, writable }) =>
  remove(outputDir)
    .chain(_ => mkdirp(outputDir))
    .chain(_ => copyAll(copyable))
    .chain(_ => writeAll(writable))
