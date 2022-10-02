const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

// To Register a user
router.post('/register', userController.registerUser)






// To login a user
router.post('/login', userController.loginUser)

module.exports = router