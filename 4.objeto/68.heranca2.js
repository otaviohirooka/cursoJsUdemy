// Cadeia de prototipos (prototype chain)

Object.prototype.attr0 = 'Achei no prototype'; //não faça isso em casa!
const avo = { attr1: 'Achei no avo'}
const pai = { __proto__: avo, attr2: 'Achei no pai', attr3: 'achei no pai 2' }
const filho = { __proto__: pai, attr3: 'Achei no filho'};
console.log(filho.attr0);
console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());