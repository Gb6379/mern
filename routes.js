const express = require('express')
const routes = express.Router()
//require('dotenv').config()

//controller routes
userRoute = require('./routes/api/users')
authRoute = require('./routes/api/auth')


routes.use(userRoute)
routes.use(authRoute)


module.exports = routes;