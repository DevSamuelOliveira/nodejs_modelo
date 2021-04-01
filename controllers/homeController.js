const path = require('path')

function HomePage(req, res){
  res.sendFile(path.resolve(__dirname, '../index.html'))
}

exports.HomePage = HomePage