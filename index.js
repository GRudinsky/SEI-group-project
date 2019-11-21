const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { dbURI, port } = require('./config/environment')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')
const errorHandler = require('./lib/errorHandler')


mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => console.log('Mongo is connected')
)

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

app.use('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`Up and running on port ${port}`))

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))

module.exports = app