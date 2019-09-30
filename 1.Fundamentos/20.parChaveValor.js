//par nome/valor

const saudacao = 'Ciao';

function exec() {
    const saudacao = 'Oi';
    return saudacao
}

//Objeto são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Gabriel',
    idade: 2,
    peso: 3,
    endereço: {
        logradouro: 'João leme',
        numero: 104000
    }
}

console.log(saudacao);
console.log(exec());