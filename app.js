const { readFile } = require('fs');


const getText = (path) => {
            return new Promise((resolve, reject) => {
            // readFile('./content/first.txt', 'utf8', (err, data) => {
            readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// const start = async () => {
//     const first = await getText('./content/first.txt')
//     console.log(first)
// }
// start()

const start = async () => {
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}
start();











// readFile('../content/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         return
//     } else {
//         console.log(data)
//     }
// })