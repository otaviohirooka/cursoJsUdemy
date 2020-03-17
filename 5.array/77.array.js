console.log(typeof Array, typeof new Array, typeof [])

let cavaleiros = new Array('Camus', 'Milo', 'Shaka')

cavaleiros = ['Camus', 'Milo', 'Shaka']

console.log(cavaleiros[0])
console.log(cavaleiros[1])
console.log(cavaleiros[2])
console.log(cavaleiros[3])

cavaleiros[3] = 'Mu'
cavaleiros.push('Afrodite')
console.log(cavaleiros.length)

cavaleiros[9] = 'Saga'
console.log(cavaleiros.length)
console.log(cavaleiros[8] === undefined)

console.log(cavaleiros)
cavaleiros.sort()
console.log(cavaleiros)

delete cavaleiros[1]
console.log(cavaleiros[1])
console.log(cavaleiros[2])

cavaleiros = ['Camus', 'Milo', 'Shaka']
cavaleiros.splice(1, 2, 'Saga', 'Kanon')
console.log(cavaleiros)

