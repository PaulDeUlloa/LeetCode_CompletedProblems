/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    let inProgressCount = 0;
    let functionIndex = 0;
    function helper() {
      if (functionIndex >= functions.length) {
        if (inProgressCount === 0) resolve();
        return;
      }

      while (inProgressCount < n && functionIndex < functions.length) {
        inProgressCount++;
        const promise = functions[functionIndex]();
        functionIndex++;
        promise.then(() => {
          inProgressCount--;
          helper();
        });
      }
    }
    helper();
  });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

//! We can keep track of current index in the functions array (functionIndex) and the current number of promises being executed (inProgressCount). We define a recursive function helper which will allow us to execute code asynchronously. All this code is wrapped in the returned promise's callback.

// 1. Every time we execute a new function, we increment functionIndex and we increment inProgressCount.
// 2. Every time a promise resolves, we decrement inProgressCount, and repeat step 1 while inProgressCount < n and there are still functions left to execute
// 3. If at any point, functionIndex == functions.length and inProgressCount == 0, we are done and should resolve the returned promise.
