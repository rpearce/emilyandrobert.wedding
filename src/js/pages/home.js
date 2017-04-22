const layout = require('../components/layout')
const home = require('../components/home')

const data = {
  siteName: `Emily & Robert are getting married`,
  title: `Emily & Robert are getting married`,
  description: `Information pertaining to the big day(s)`,
  uri: `https://emilyandrobert.wedding`,
  cssPath: `styles.css`,
  type: `website`,
  body: home
}

module.exports = () => layout(data)
