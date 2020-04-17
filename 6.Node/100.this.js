console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro da função:')
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)
}

logThis()