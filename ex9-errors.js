const parsePromised = (input) => {
  return new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(input));
    } catch(error) {
      reject(error)
    }
  })
}

parsePromised(process.argv[2])
.then(console.log)
.catch(console.log);
