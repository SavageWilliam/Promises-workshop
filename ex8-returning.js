// The key thing to understand here is that your handlers will wrap your
// return values in promises even if they are obtained synchronously.

const attachTitle = (name) => {
  return `DR. ${name}`;
}

const promise = new Promise((fulfill, reject) => {
  return fulfill('MANHATTAN');
})

//alternative: const promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);
