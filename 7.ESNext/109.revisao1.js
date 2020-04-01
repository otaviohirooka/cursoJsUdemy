// Destructuring
const [l, e, ...tras] = "Sakha"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Milo', idade: 20}
console.log(i, nome)