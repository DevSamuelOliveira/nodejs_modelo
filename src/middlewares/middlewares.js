exports.myMiddleware = function (req, res, next) {
  console.log("Testando middleware")
  next()
}