//promises may only resolve one time
const onReject = (error) => {
  console.log(error.message);
}

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error("I DID NOT FIRE"))
})
.then(console.log, onReject);
