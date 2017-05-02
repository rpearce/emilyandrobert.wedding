'use strict'

const { join } = require('path')
const { compose, map, sequence } = require('ramda')
const Task = require('data.task')
const { copy, remove, mkdirp, writeFile } = require('./fs')

const seq = f => sequence(Task.of)(f)
const writePath = ({ path, content }) => writeFile(path, content)
const copyPath = ({ from, to }) => copy(from, to)

module.exports = ({ outputDir, copyable, writable }) =>
  remove(outputDir)
    .chain(_ => mkdirp(outputDir))
    .chain(_ => seq(map(copyPath)(copyable)))
    .chain(_ => seq(map(writePath)(writable)))
