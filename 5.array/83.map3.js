Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))        
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis", "preco": 5.55}',
    '{"nome": "Caneta", "preco": 1.50}',
    '{"nome": "Caderno", "preco": 19.90}',
]

const paraObjeto = json => JSON.parse(json) 
const apenasPreco = produto => produto.preco

resultado = carrinho.map2(paraObjeto)
console.log(resultado)

resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)