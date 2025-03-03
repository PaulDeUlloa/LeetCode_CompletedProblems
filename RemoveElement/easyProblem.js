// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//! In place algorithm:

//* In Computer science an in-place algorithm is an algorithm that operates directly on the input data structure without requiring extra space proportional to the input size. Does not make a copy of the data structure.

//!

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var i = 0;
  for (var j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

//! Approach 2: Two Pointers - when elements to remove are rare

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      //reduce array size by oone
      n--;
    } else {
      i++;
    }
  }
  return n;
};
