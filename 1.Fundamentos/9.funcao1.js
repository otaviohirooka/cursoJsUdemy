console.log(typeof Object);//é função

class Produto {}
console.log(typeof Produto);//é função

//função sem retorno
function imprimiSoma(a, b) {
    console.log(a + b);
}

imprimiSoma(2, 3);
imprimiSoma(2);//o segundo parametro será undefined
imprimiSoma(2, 3, 4, 5, 6);//pega os 2 primeiros valores e ignora o restante
imprimiSoma();//NaN

//Função com retorno

function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));//b = 0 quando não é passado o segundo parametro