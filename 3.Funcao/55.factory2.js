function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 4300.00));
console.log(criarProduto('HeadSet', 700.00));