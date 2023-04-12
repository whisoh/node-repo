// CommonJS, every file is module (by default)
// modules = encapsulated code (only share minimum)

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'parker'

// const sayHi = (name) => {
//     console.log(`hello there ${name}`)
// }

// console.log (names)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
// console.log(data)

require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.parker)
