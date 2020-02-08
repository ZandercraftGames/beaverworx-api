require('dotenv').config()
// const apiKeyAuth = require('api-key-auth')
const express = require('express')
const app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose')
var Task = require('./api/models/beaverworxModel') // created model loading here
var bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
/*
// Map API Keys
const apiKeys = new Map();
apiKeys.set(process.env.API_KEY_1, {
  id: 1,
  name: process.env.API_NAME_1,
  secret: process.env.API_SECRET_1
});
apiKeys.set(process.env.API_KEY_2, {
  id: 2,
  name: process.env.API_NAME_2,
  secret: process.env.API_SECRET_2
});

function getSecret(keyId, done) {
  if (!apiKeys.has(keyId)) {
    done(new Error('Unknown api key'));
  }
  const clientApp = apiKeys.get(keyId);
  done(null, clientApp.secret, {
    id: clientApp.id,
    name: clientApp.name
  });
}

app.use(apiKeyAuth({ getSecret }));

app.get('/protected', (req, res) => {
  res.send(`Hello ${req.credentials.name}`);
});
*/
var routes = require('./api/routes/beaverworxRoutes') // importing route
routes(app) // register the route

app.listen(port)

console.log('Beaverworx API server started on: ' + port)

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})