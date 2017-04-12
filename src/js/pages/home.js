const layout = require('../components/layout')
const home = require('../components/home')

const data = {
  siteName: `Emily & Robert's Wedding`,
  title: `Emily & Robert's Wedding`,
  description: `Information pertaining to the big day(s)`,
  uri: `https://emilyandrobert.wedding`,
  cssPath: `styles.css`,
  type: `website`,
  body: home
}

module.exports = () => layout(data)
