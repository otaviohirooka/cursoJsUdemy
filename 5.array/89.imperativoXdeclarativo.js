const alunos = [
    {nome: 'Aiolia', nota: 7.4},
    {nome: 'Milo', nota: 9.1},
    {nome: 'Afrodite', nota: 8.0},
    {nome: 'Shura', nota: 7.0},
]

// Imperativo

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
        total1 += alunos[i].nota
}
console.log(total1 /alunos.length)

// Declarativo

const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 /alunos.length)