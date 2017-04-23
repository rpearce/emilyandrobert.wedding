const path = require('path')

const srcDir = path.join(__dirname, 'src')
const outputDir = path.join(__dirname, 'docs')

const sassDir = path.join(srcDir, 'sass')
const sassEntry = path.join(sassDir, 'app.scss')
const cssOutputPath = path.join(outputDir, 'styles.css')

const cnamePath = path.join(srcDir, 'CNAME')
const cnameOutputPath = path.join(outputDir, 'CNAME')

const fontsPath = path.join(srcDir, 'fonts')
const fontsOutputPath = path.join(outputDir, 'fonts')

const imagesPath = path.join(srcDir, 'images')
const imagesOutputPath = path.join(outputDir, 'images')

module.exports = {
  srcDir,
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
