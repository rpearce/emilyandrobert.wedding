const path = require('path')

const _srcDir = path.join(__dirname, 'src')
const outputDir = path.join(__dirname, 'docs')

const sassDir = path.join(_srcDir, 'sass')
const sassEntry = path.join(sassDir, 'app.scss')
const cssOutputPath = path.join(outputDir, 'styles.css')

const cnamePath = path.join(_srcDir, 'CNAME')
const cnameOutputPath = path.join(outputDir, 'CNAME')

const fontsPath = path.join(_srcDir, 'fonts')
const fontsOutputPath = path.join(outputDir, 'fonts')

const imagesPath = path.join(_srcDir, 'images')
const imagesOutputPath = path.join(outputDir, 'images')

module.exports = {
  outputDir,
  sassDir,
  sassEntry,
  cssOutputPath,
  cnamePath,
  cnameOutputPath,
  fontsPath,
  fontsOutputPath,
  imagesPath,
  imagesOutputPath
}
