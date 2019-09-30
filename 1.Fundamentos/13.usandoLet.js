//usando let, a variavel dentro do bloco não sobrescritará
//a variavel de fora do bloco
let numero = 1;
{
    let numero = 2;
    console.log('Dentro: ', numero);
}
console.log('Fora: ', numero);