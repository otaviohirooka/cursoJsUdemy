const spectros = ['Minos', 'Radamanthys', 'Aiacos']
spectros.pop() // remove ultimo elemento

console.log(spectros)
spectros.push('Luni')
console.log(spectros)

spectros.shift() // remove o primeiro
console.log(spectros)

spectros.unshift('Papillon') // add no primeiro
console.log(spectros)

spectros.splice(2, 0, 'Zeros', 'Valentine')
console.log(spectros)

const novosEspectros = spectros.slice(2) // novo array
console.log(novosEspectros)

const novosEspectros2 = spectros.slice(1, 4)
console.log(novosEspectros2)