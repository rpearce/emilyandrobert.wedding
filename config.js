const path = require('path')

const srcDir = path.join(__dirname, 'src')
const outputDir = path.join(__dirname, 'build')

const sassDir = path.join(srcDir, 'sass')
const sassEntry = path.join(sassDir, 'app.scss')
const cssOutputPath = path.join(outputDir, 'styles.css')

const cnamePath = path.join(srcDir, 'CNAME')
const cnameOutputPath = path.join(outputDir, 'CNAME')

module.exports = {
  srcDir,
  outputDir,
  sassDir,
  sassEntry,
  cssOutputPath,
  cnamePath,
  cnameOutputPath
}
