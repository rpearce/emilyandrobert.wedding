'use strict'

const fs = require('fs-extra')
const Task = require('data.task')
const { compose, map, sequence, unnest } = require('ramda')

function rmDir(dirPath) {
  return new Task((reject, result) => {
    fs.remove(dirPath, (err, _) => {
      err ? reject(err) : result()
    })
  })
}

function mkDir(dirPath) {
  return new Task((reject, result) => {
    fs.mkdirp(dirPath, (err, _) => {
      err ? reject(err) : result()
    })
  })
}

function writeFile(filename, content) {
  return new Task((reject, result) => {
    fs.writeFile(filename, content, err => {
      err ? reject(err) : result()
    })
  })
}

function copy(filename, newFilename) {
  return new Task((reject, result) => {
    fs.copy(filename, newFilename, err => {
      err ? reject(err) : result()
    })
  })
}

const sequenceTasks = compose(
  unnest,
  map(sequence(Task.of))
)

const writeFiles = sequenceTasks

module.exports = {
  copy,
  mkDir,
  rmDir,
  writeFile,
  writeFiles
}
