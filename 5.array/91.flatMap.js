const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Shaka',
        nota: 8.9
    }, {
        nome: 'Shaka',
        nota: 8.9
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Maskara da morte',
        nota: 3.6
    }, {
        nome: 'Afrodite',
        nota: 2.5
    }]
}]

const getNotaAluno = a => a.nota
const getNotasTurma = t => t.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

console.log([].concat([ 8.9, 8.9 ], [ 3.6, 2.5 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)