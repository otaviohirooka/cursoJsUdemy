// não aceita repetição/não indexada

const cavaleiros = new Set()

cavaleiros.add('Mu')
cavaleiros.add('Aldebaran')
cavaleiros.add('Saga').add('Maskara da Morte').add('Aiolia')
cavaleiros.add('Mu')

console.log(cavaleiros)
console.log(cavaleiros.size)
console.log(cavaleiros.has('Saga'))
console.log(cavaleiros.has('saga'))
cavaleiros.delete('Mu')
console.log(cavaleiros.has('Mu'))

const prata = ['Misty', 'Moses', 'Asterion', 'Moses']
const prataSet = new Set(prata)
console.log(prataSet)
