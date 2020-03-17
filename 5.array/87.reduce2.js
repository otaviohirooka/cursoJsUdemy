const alunos = [
    {nome: 'Aiolia', nota: 7.8, bolsista: true},
    {nome: 'Milo', nota: 9.1, bolsista: false},
    {nome: 'Afrodite', nota: 8.0, bolsista: true},
    {nome: 'Shura', nota: 7.0, bolsista: false},
]

const temBolsa = alunos.map(a => a.bolsista)

const questao1 = temBolsa.reduce(function(acumulador, atual) {
    return acumulador && atual
})

const questao2 = temBolsa.reduce(function(acumulador, atual) {
    return acumulador || atual
})

console.log('Todos os alunos são bolsistas?')
console.log('Resposta: ', questao1 ? 'sim' : 'não')
console.log('Algum aluno é bolsista?')
console.log('Resposta: ', questao2 ? 'sim' : 'não')