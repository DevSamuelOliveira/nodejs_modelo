require('dotenv').config()
const fs = require('fs').promises
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.port || 3000
const data = new Date()
const routes = require('./routes')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('./public'))

app.use(routes)

console.log("Aplicação iniciada na porta", port)
app.listen(port)

mongoose.connect(process.env.conection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado no banco com sucesso")
    app.emit('dbconect')
  }).catch(() => {
    app.emit('dberror')
  })

app.on('dbconect', () => {
  fs.writeFile(__dirname + '/logs/StartServer.txt', startServer(), {flag: 'a', encoding: 'utf8'})
})

app.on('dberror', () => {
  console.log("A conexão com o banco de dados não foi estabelecida e a aplicação não foi iniciada")
  fs.writeFile(__dirname + '/logs/logsErrorConectDB.txt', errorDB(), {flag: 'a', encoding: 'utf8'})
})

const startServer = () => `Servidor ininciado - ${data.toString()}\n`
const errorDB = () => `Erro de inicialização no servidor causado pelo banco de dados - ${data.toString()}\n`
