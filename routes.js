const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const {myMiddleware} = require('./src/middlewares/middlewares')

route.get('/', myMiddleware, homeController.HomePage) 

module.exports = route