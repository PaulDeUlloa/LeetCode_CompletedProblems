//! Description:

// Alice is a caretaker of n gardens and she wants to plant flowers to maximize the total beauty of all her gardens.

// You are given a 0-indexed integer array flowers of size n, where flowers[i] is the number of flowers already planted in the ith garden. Flowers that are already planted cannot be removed. You are then given another integer newFlowers, which is the maximum number of flowers that Alice can additionally plant. You are also given the integers target, full, and partial.

// A garden is considered complete if it has at least target flowers. The total beauty of the gardens is then determined as the sum of the following:

// The number of complete gardens multiplied by full.
// The minimum number of flowers in any of the incomplete gardens multiplied by partial. If there are no incomplete gardens, then this value will be 0.
// Return the maximum total beauty that Alice can obtain after planting at most newFlowers flowers.

/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
function maximumBeauty(A, newFlowers, t, full, part) {
  //limit each garden's flowers to a maximum of target
  A = A.map((a) => Math.min(t, a));
  A.sort((a, b) => a - b);

  //two edge cases
  if (Math.min(...A) === t) return full * A.length;

  if (newFlowers >= t * A.length - A.reduce((accum, curr) => accum + curr)) {
    return Math.max(full * A.length, full * (A.length - 1) + part * (t - 1));
  }

  //build the array 'cost'

  let cost = [0];

  for (let i = 1; i < A.length; i++) {
    let pre = cost[cost.length - 1];
    cost.push(pre + i * (A[i] - A[i - 1]));
  }

  // skip gardens that already have 'target' Flowers
  let j = A.length - 1;

  while (j >= 0 && A[j] === t) {
    j--;
  }

  //start the iteration
  let ans = 0;

  function bisectRight(arr, target) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] <= target) {
        low = mid + 1; //move right if curr element is less than or equal to target
      } else {
        high = mid; //move left otherwise
      }
    }

    return low; //this will be the index where we can insert 'target'
  }

  while (newFlowers >= 0 && j >= 0) {
    //find the index where we can afford to spend 'new'.
    let idx = bisectRight(cost, newFlowers);
    idx = Math.min(j, idx - 1);

    //calculate current minimum flower in incomplete garden.
    const bar = A[idx] + Math.floor((newFlowers - cost[idx]) / (idx + 1));

    ans = Math.max(ans, bar * part + full * (A.length - j - 1));

    //deduct the cost for completing garden j from new and move on.

    newFlowers -= t - A[j];

    if (newFlowers < 0) {
      break;
    }

    j--;
  }
  return ans;
}
