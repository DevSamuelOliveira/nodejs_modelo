const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')

function myMiddleware(req, res, next) {
  console.log("Testando middleware")
  next()
}

route.get('/', myMiddleware ,homeController.HomePage) 

module.exports = route