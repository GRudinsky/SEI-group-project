const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { dbURI, port } = require('./config/environment')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')
const axios = require('axios')


mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => console.log('Mongo is connected')
)

app.use(bodyParser.json())
app.use(logger)

app.use('/api', router)

app.listen(port, () => console.log(`Up and running on port ${port}`))

module.exports = app