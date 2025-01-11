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

//! we check if a number is divisible by 3 or 5 since it is a simple operation using the modulo operator (%) which is very fast in most programming languages, making it ideal for filtering large datasets quickly.
//!If the result is 0, then n is divisible by the number checked.

// Algorithm:

// Initialize an empty answer list. By creating an empty array.
// Iterate on the numbers from 1...N. We start at 1.
// For every number, if it is divisible by both 3 and 5, add FizzBuzz to the answer list.
// Else, Check if the number is divisible by 3, add Fizz.
// Else, Check if the number is divisible by 5, add Buzz.
// Else, add the number.
