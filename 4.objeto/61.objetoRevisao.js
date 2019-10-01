//Objeto: coleção dinâmica de parres chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';

produto.preco = 220;

delete produto.preco;
delete produto['marca do produto'];

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Gabriel',
        idade: 18,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Eduardo',
        idade: 23
    }, {
        nome: 'Gustavo',
        idade: 24
    }],
    calcularValorSeguro: function () {

    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Brasil';

console.log(carro);

delete carro.condutores;

console.log(carro);