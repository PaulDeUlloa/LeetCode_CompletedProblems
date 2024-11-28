/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let timeoutInProgress = null;
  let argsToProcess = null;

  const timeoutFunction = () => {
    if (argsToProcess === null) {
      timeoutInProgress = null; //entering waiting phase here
    } else {
      fn(...argsToProcess);
      argsToProcess = null;
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  };

  return function throttled(...args) {
    if (timeoutInProgress) {
      argsToProcess = args;
    } else {
      fn(...args); // entering the looping phase here
      timeoutInProgress = setTimeout(timeoutFunction, t);
    }
  };
};

// Approach 1 - Recursive setTimeout Calls

// A good way to think of this problem is that there are two states the code can been in: looping and waiting. If the code is in the waiting state, that means there haven't been any recent function calls, and the provided callback should be immediately called as soon as the throttled function is called. Once that happens, the code enters the looping state. Now the code should keep executing the provided callback every t milliseconds with the last known arguments. Once the the throttled function wasn't called for an entire loop, it goes back to the waiting state.

// In the below code, the existence of timeoutInProgress represents if the code in the looping state or not. If the code is in the looping state, argsToProcess is just set to the most recent args. If the code is in the waiting state, fn is immediately called and a recursive loop is created.

// Inside this recursive loop, it first check if there were any function calls since the last time the loop was executed. If the answer is there were none, the code goes back to the waiting state. Otherwise, fn is executed with the last known arguments, argsToProcess is set to null, and timeoutFunction is recursively called with a delay.
