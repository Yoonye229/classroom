const express = require('express')

//controller function
const {signupUser, signinUser} = require('../Controllers/userController')
const router = express.Router()
// sign in route
router.post('/signin', signinUser)
// sign up route
router.post('/signup', signupUser)


module.exports = router 