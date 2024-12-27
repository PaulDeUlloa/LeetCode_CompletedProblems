/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      answer.push("FizzBuzz");
    } else if (divisibleBy3) {
      answer.push("Fizz");
    } else if (divisibleBy5) {
      answer.push("Buzz");
    } else {
      answer.push(String(i));
    }
  }
  return answer;
};

//* Approach 1: Naive Approach

// The moment you hear of FizzBuzz you think whether the number is divisible by 3, 5 or both.

// Algorithm:

// Initialize an empty answer list.
// Iterate on the numbers from 1...N.
// For every number, if it is divisible by both 3 and 5, add FizzBuzz to the answer list.
// Else, Check if the number is divisible by 3, add Fizz.
// Else, Check if the number is divisible by 5, add Buzz.
// Else, add the number.
