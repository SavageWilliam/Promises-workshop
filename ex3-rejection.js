const onReject = (error) => {
  console.log(error.message);
}

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
})
.then(null, onReject);
