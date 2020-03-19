const moduloA = require('../../92.ModuloA')
console.log(moduloA.ola)

const saudacao = require('../../../node_modules/lodash/saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)