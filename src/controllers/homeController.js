const path = require('path')

function HomePage(req, res){
  res.render('index')
}

exports.HomePage = HomePage