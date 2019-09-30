console.log(typeof console);

console.log(Math.floor(4.3));

const obj1 = {};

obj1.nome = 'cadeira';//criar atributos para objeto obj1
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome; //usando o this. atributo nome fica visivel fora da função
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('mesa');
const obj3 = new Obj('mouse');

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec();