const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; //retira atributos nome e idade do objeto pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);