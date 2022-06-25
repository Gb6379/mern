const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/UserController')

router.get('/testeControler', UserController.teste)

router.post('/api/createUser', UserController.register)
router.get('/api/users', UserController.getAllUsers)
module.exports = router;