// promises allow you to return another promise in the
// then function callbacks

const promise1 = first();

const promise2 = promise1.then((result) => {
  return second(result);
});

promise2.then(console.log);
