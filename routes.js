const express = require('express')
const routes = express.Router()
//require('dotenv').config()

//routes
userRoute = require('./routes/api/users')


routes.use(userRoute)


module.exports = routes;