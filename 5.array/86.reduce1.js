const alunos = [
    {nome: 'Aiolia', nota: 7.8, bolsista: false},
    {nome: 'Milo', nota: 9.1, bolsista: true},
    {nome: 'Afrodite', nota: 8.0, bolsista: false},
    {nome: 'Shura', nota: 7.0, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)