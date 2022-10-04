const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

// To Register a user
router.post('/register', userController.registerUser)


// To login a user
router.post('/login', userController.loginUser)


// to signout or delete user
router.post('/signout', userController.signoutUser)

module.exports = router