const marinas = ['Io', 'Kanon', 'Issak', 'Sorento']

marinas.forEach(function(nome, indice, array) { // forEach recebe 3 parametros padrões
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
})

marinas.forEach(nome => console.log(nome))

const exibirMarinas = nome => console.log(nome)
marinas.forEach(exibirMarinas)

