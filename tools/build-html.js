// This script copies src/index.html into /dist/index.html

import fs from 'fs'
import colors from 'colors'
import cheerio from 'cheerio'

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.error(err)
  }

  const $ = cheerio.load(markup)

  // since a separate stylesheet is only utilized for the production build,
  // we need to dynamically add this here.
  $('head').prepend('<link rel="stylesheet" href="styles.css">')

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.error(err)
    }
    console.log('index.html written to /dist'.green)
  })
})

