const path = require('path')

exports.HomePage = function (req, res){
  res.render('index')
}

exports.myMiddleware = function (req, res, next){
  console.log("Middleware dentro do controller")
  next()
}