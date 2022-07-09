const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/UserController')
const { validate } = require('../../validation/GlobalValidator')
const { userValidationRules } = require('../../validation/UserValidator')

router.get('/testeControler', UserController.teste)

// @route       POST /api/createUser
// @description register an user
// @access      public
router.post('/api/createUser',userValidationRules(), validate, UserController.register)

//@route GET /api/login?email=admin@gmail.com&password=12345
router.get('/api/login', UserController.login)//deprecated

// @route       GET /api/users
// @description get a list of registered users 
// @access      public
router.get('/api/users', UserController.getAllUsers)

module.exports = router;