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
