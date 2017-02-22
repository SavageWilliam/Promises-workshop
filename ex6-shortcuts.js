const promise = Promise.resolve('fulfilled');

const promise2 = Promise.reject(new Error('rejected'));

promise.catch((err) => {
  console.log('This shouldnt be printed');
})

promise2.catch((err) => {
  console.log(`Theres an error: ${err.message}`);
})
