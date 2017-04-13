// TODO: make in to package

'use strict'

const fs = require('fs-extra')
const taskFromFn = require('task-from-fn')

Object.keys(fs).forEach(k => module.exports[k] = taskFromFn(fs[k]))
