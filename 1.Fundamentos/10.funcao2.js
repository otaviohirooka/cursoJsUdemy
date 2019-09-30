//Armazenando uma função em uma variável
const imprimiSoma = function (a, b) {
    console.log(a + b);
}

imprimiSoma(2, 3);

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

//retorno implicito
const subtracao = (a, b) => a - b; //bom para função que contem apenas uma única linha

console.log(subtracao(2, 3));

//apenas 1 parametro
const imprimir2 = a => console.log(a);

imprimir2('Ciao');