//novo recurso do ES2015

const pessoa = {
    nome: 'Gabriel',
    idade: 2,
    endereco: {
        logradouro: 'Joao leme',
        numero: 104000
    }
}

const { nome, idade} = pessoa;//retira de dentro do obj pessoa o nome e a idade
console.log(nome, idade);

const { nome: n, idade:i } = pessoa;//retirando e atribuindo a variavel
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa;//se não vier nada no obj pessoa, bemHumorada recebe true
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);