// map transforma array em outro array de mesmo tamanho, sem modificar o array atual

const num = [1, 2, 3, 4, 5]

let resultado = num.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = num.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

resultado = num.map(triplo).map(soma10).map(paraDinheiro)
console.log(resultado)

