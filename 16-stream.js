const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result)
})



const { createReadStream } = require('fs');

const streams = createReadStream('./content/big.txt', { highWaterMark: 90000 , encoding: 'utf8'});

// default 64kb
// last buffer - reminder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8'});


stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err));