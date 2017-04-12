'use strict'

const fs = require('fs-extra')
const taskFromNode = require('./taskFromNode')

Object.keys(fs).forEach(k => module.exports[k] = taskFromNode(fs[k]))
