const path = require('path')

function HomePage(req, res){
  res.render(path.resolve(__dirname, '../index.ejs'))
}

exports.HomePage = HomePage