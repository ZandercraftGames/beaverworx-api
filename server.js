const apiKeyAuth = require('./middlewares/apiKeyAuth')
var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose')
var Task = require('./api/models/beaverworxModel') // created model loading here
var bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/beaverworxdb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/beaverworxRoutes') // importing route
routes(app) // register the route

app.listen(port)

console.log('Beaverworx API server started on: ' + port)

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

function getSecret (keyId, done) {
  if (!apiKeys.has(keyId)) {
    done(new Error('Unknown api key'))
  }
  const clientApp = apiKeys.get(keyId)
  done(null, clientApp.secret, {
    id: clientApp.id,
    name: clientApp.name
  })
}

app.use(apiKeyAuth({ getSecret }))

app.get('/protected', (req, res) => {
  res.send(`Hello ${req.credentials.name}`)
})
