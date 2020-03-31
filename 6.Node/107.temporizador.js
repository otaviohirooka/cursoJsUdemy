const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 1', function() {
    console.log('Executando tafera 1! ', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tafera 1!')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.daysOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tafera 2! ', new Date().getSeconds())
})