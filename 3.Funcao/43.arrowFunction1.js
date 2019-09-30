//objetivos:
// - sintase mais reduzida
// - this associado ao contexto onde a function foi escrita

//função comum
let dobro = function (a) {
    return 2 * a
}

//arrow function
dobro = (a) => {
    return 2 * a
}

//arrow function de 1 linha
dobro = a => 2 * a
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'//sem parametro
//ou
ola = _ => 'Olá'//possui um parametro, porem pode ser ignorado
console.log(ola());