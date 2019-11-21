// const dbURI = 'mongodb://localhost/rekordr'

const dbURI = process.env.MONGODB_URI || `mongodb://localhost/rekordr${process.env.NODE_ENV || 'dev' || 'https://www.mlab.com/databases/heroku_237q2c2c'}`
const port = 4000
const secret = 'Shhhh it\'s a secret'

module.exports = {
  dbURI,
  secret,
  port
}


