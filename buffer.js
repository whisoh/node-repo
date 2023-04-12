// const myBuffer = Buffer.alloc(10);
const myBuffer = Buffer.from('Hello, world!');
const slice = myBuffer.slice(0, 5);
console.log(slice.toString());