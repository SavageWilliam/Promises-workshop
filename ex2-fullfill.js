// Most promises are created with new Promise(executor), in which executor is
// a callback function with the signature function (fulfill, reject).

require('es6-promise');

'use strict'

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
      fulfill('FULFILLED!');
  }, 300);
})
.then(console.log);
