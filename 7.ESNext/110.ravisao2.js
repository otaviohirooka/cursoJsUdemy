// arrow function

const soma = (a, b) => a + b
console.log(soma(2, 3))

const dobro = d => d * 2
console.log(dobro(4))

// operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(2, 3, 4, 5)