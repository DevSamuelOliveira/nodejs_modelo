const nome = "Samuel Souza de Oliveira"
const idade = 20

const dados = {
  rua: "Santa Barbara",
  bairro: "Fazenda Coutos I",
  cidade: "Salvador",
  estado: "Bahia"
}

function exibir(){
  console.log(`Meu nome é ${nome}`)
  console.log(`Minha idade ${idade}`)
  console.log(`Moro no estado da ${dados.estado}`)
  console.log(`Na rua ${dados['rua']}`)
}

class Banco{
  constructor(){
    console.log("instancia de banco criada")
  }
}

// module.exports.nome = nome
// module.exports.idade = idade
// module.exports.dados = dados
// module.exports.exibir = exibir
// module.exports.Banco = Banco

exports.nome = nome
exports.idade = idade
exports.dados = dados

module.exports = nome