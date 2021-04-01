const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const middlewares = require('./src/middlewares/middlewares')

route.get('/', homeController.HomePage) 

module.exports = route