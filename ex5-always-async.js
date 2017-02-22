// You can expect that the functions passed to the then method of a
// promise will be called on the next turn of the event loop.

const promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
})
.then(console.log);

console.log('MAIN PROGRAM');
