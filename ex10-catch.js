// It is, therefore, a best practice to always put a rejection handler
// at the bottom of your promise chain (much like a catch block).
//
// If you are **not** returning a value from your promise to a caller,
// then attach a `done` handler to guard against uncaught exceptions.

const alwaysThrows = () => {
  throw new Error ('OH NOES');
}

const iterate = (int) => {
  console.log(int);
  return int+1;
}

const promise = Promise.resolve(iterate(1));

promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
