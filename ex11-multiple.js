// When doing asynchronous programming you will often want to perform multiple
// operations in parallel. In some cases you may wish to delay further processing
// until a list of async operations have completed.

const all = (prom1, prom2) => {
  return new Promise((fulfill, reject) => {

    let counter = 0;
    let output = [];

    prom1.then((value) => {
      output[0] = value;
      counter++;
      if(counter >= 2) {
        fulfill(output);
      }
    });

    prom2.then((value) => {
      output[1] = value;
      counter++;
      if(counter >= 2) {
        fulfill(output);
      }
    });
  })
}

all(getPromise1(), getPromise2())
.then(console.log);
