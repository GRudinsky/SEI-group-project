const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body) 
    .then(user => res.status(201).json({ message: `Thanks for Registering ${user.username}` })) 
    .catch(err => res.status(422).json(err)) 
}

// login route -/login
function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    .then(user => { 
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) 
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' }) 
      res.status(202).json({ message: `Welcome Back ${user.username}`, token })
    }) 
    .catch(() => res.status(401).json({ message: 'Unauthorized2' } ))
}

function profile(req, res) { // route for a user profile

  User
    .findById(req.currentUser._id) 
    .then(user => res.status(200).json(user)) 
    .catch(err => res.json(err))
}

module.exports = {
  profile,
  register,
  login // exporting each 'route handling' function, taking advantage of es6 object short hand, same as saying { login: login }
}