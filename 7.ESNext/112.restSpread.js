// rest: juntar / spread: espalhar

// spread com objeto
const funcionarios = {nome: 'Dohko', salario: 1234.56}
const clone = { ativo: true, ...funcionarios}
console.log(clone)

// spread com array
const grupoA = ['Milo', 'Mu', 'Camus']
const grupoFinal = ['Suura', ...grupoA, 'Afrodite']
console.log(grupoFinal)