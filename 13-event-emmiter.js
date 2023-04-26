const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data recieved user ${name} with ID: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`new logic`)
})

customEmitter.emit('response', 'john', '76')