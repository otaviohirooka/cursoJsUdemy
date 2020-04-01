// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Otra string'
}

const cav = 'Saga'
const constelacao = 'Gêmeos'
console.log(tag `${cav} de ${constelacao}.`)