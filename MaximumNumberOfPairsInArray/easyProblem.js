// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let count = 0;

  let x = nums.sort((a, b) => a - b);
  for (let i = 0; i < x.length; i++) {
    if (x[i] == x[i + 1]) {
      x.shift();
      x.shift();
      i--;
      count++;
    }
  }

  return [count, x.length];
};
