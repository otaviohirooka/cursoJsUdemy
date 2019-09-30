const nome = 'Vitor';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);//expressões dentro do template

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado!')}`); //é possível colocar função dentro de template
