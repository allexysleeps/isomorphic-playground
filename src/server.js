const express = require('express')
const path = require('path')
const React = require('react')
const ReactDom =require('react-dom/server')
const R = require('ramda')
import { Home } from './client/pages/Home'

const staticPath = path.resolve(__dirname, '../dist')

const PORT = process.env.PORT || 3001

const htmlTemplate = (component) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello React</title>
    </head>
    <body>
      <div id="react-container">${component}</div>
      <script type="application/javascript" src="bundle.js"></script>
    </body>
  </html>
`
const componentHtml = (component) => ReactDom.renderToString(component)
const resHtml = R.compose(htmlTemplate, componentHtml)

const app = express()

app
  .use(express.static(staticPath))
  .use((req, res) => {
    res.send(resHtml(<Home />))
  })
  .listen(PORT, () => console.log(`App running on ${PORT}`))