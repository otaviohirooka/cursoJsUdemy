const pai = { nome: 'Saga', corCabelo: 'azul'}

const filha1 = Object.create(pai); //define objeto que foi passado por parametro como prototype
filha1.nome = 'Xina';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Marin', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Esmeralda';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for( let key in filha2) {
    filha2.hasOwnProperty(key) ? //verifica se atributo pertence ao objeto ou veio por herança
        console.log(key) : console.log('Por herança');
}