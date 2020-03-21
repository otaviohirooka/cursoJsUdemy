const contadorA = require('./97.instanciaUnica')
const contadorB = require('./97.instanciaUnica')

const contadorC = require('./98.instanciaNova')()
const contadorD = require('./98.instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorB.valor)
console.log(contadorA.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor)
console.log(contadorD.valor)