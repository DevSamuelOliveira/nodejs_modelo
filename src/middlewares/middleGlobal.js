module.exports = function (req, res, next) {
  console.log("Testando middleware global")
  next()
}