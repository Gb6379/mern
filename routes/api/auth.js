const express = require('express')
const router = express.Router()
const AuthController = require('../../controllers/AuthController')
const { getAuthentication } = require('../../middleware/auth')
const { validate } = require('../../validation/GlobalValidator')
const {authValidationRules} = require('../../validation/AuthValidation')


router.get('/api/auth/getCredentials', getAuthentication, AuthController.getAuth)

router.post('/api/auth/login', authValidationRules(), validate, AuthController.authUser)


module.exports = router;