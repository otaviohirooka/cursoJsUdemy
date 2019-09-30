const notas = [6.7, 4.5, 6.0, 10.0]

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Camus',
    signo: 'Aquario',
    idade: 18
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}