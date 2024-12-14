/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = new Array(nums.length);
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Result at index `i` is sum of result at `i-1` and element at `i`.
    result[i] = result[i - 1] + nums[i];
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};

//Approach 2 in JS

//*Using Input Array for Output*//
//Be wary though about when modifying the input array
//because unexpected behavior could occur when an array after being used as input because it no longer has it's original values because they have been overwritten
