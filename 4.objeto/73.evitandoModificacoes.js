//Object.preventExtensions: evita que aumente o nº de atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Azul';
delete produto.tag;
console.log(produto);

//Object.seal: não consegue adicionar ou excluir nos atributos, apenas modificar
const pessoa = {
    nome: 'Camus',
    idade: 18
}

Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.signo = 'Aquario';
delete pessoa.nome;
pessoa.idade = 19;
console.log(pessoa);

// Object.freeze: selado + valores constantes / writable = false

