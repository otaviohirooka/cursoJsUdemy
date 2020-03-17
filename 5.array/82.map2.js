const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis", "preco": 5.55}',
    '{"nome": "Caneta", "preco": 1.50}',
    '{"nome": "Caderno", "preco": 19.90}',
]

const paraObjeto = json => JSON.parse(json) 
const apenasPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto)
console.log(resultado)

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)