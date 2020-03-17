// filter: filtra um array

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 19, fragil: true},
    {nome: 'Copo de plastico', preco: 0.99, fragil: false},
]

const maisCaros = p => p.preco >= 500
const somenteFragil = p => p.fragil

console.log(produto.filter(function(p) {
    return true
}))

resultado = produto.filter(maisCaros).filter(somenteFragil)
console.log(resultado)