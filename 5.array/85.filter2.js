Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }        
    }
    return newArray
}

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 19, fragil: true},
    {nome: 'Copo de plastico', preco: 0.99, fragil: false},
]

const maisCaros = p => p.preco >= 500
const somenteFragil = p => p.fragil

resultado = produto.filter2(maisCaros).filter2(somenteFragil)
console.log(resultado)