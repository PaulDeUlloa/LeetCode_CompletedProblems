/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let revertedNumber = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x == revertedNumber || x == Math.floor(revertedNumber / 10);
};

// When x < 0, x is not a palindrome.

// If the last digit of the number is 0, in order to be a palindrome.

// The first digit of the number also needs to be 0.

// Only 0 can satisfy this property.

// When the length is an odd number, we can get rid of the middle digit by revertedNumber/10.

// For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123, since
// the middle digit doesn't matter in palindrome( it will always equal to itself), we can simply get rid of it.
