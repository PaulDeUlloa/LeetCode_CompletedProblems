//! Approach 1: Left-to-Right Pass

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  let i = 0;

  while (i < s.length) {
    // If this is the subtractive case.
    if (i + 1 < s.length && values[s[i]] < values[s[i + 1]]) {
      total += values[s[i + 1]] - values[s[i]];
      i += 2;
    } else {
      total += values[s[i]];
      i += 1;
      //Else, this is NOT the subtractive case.
    }
  }
  return total;
};

//! Approach 2: Left-to-Right Pass Improved

/**
 * @param {string} s
 * @return {number}
 */

let values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (s) {
  let total = 0;
  let i = 0;

  while (i < s.length) {
    if (i < s.length - 1 && s.substring(i, i + 2) in values) {
      total += values[s.substring(i, i + 2)];
      i += 2;
    } else {
      total += values[s.charAt(i)];
      i++;
    }
  }

  return total;
};

//! Approach 3: Right-to-Left Pass

// Utilizing this means that we can process one symbol each time we go around the main loop. We still need to determine whether or not our current symbol should be added or subtracted by looking at the neighbour though.

// In Approach 1, we had to be careful when inspecting the next symbol to not go over the end of the string. This check wasn't difficult to do, but it increased the code complexity a bit, and it turns out we can avoid it with this approach!

// Observe the following:

// Without looking at the next symbol, we don't know whether or not the left-most symbol should be added or subtracted.
// The right-most symbol is always added. It is either by itself, or the additive part of a pair.
// So, what we can do is initialise sum to be the value of the right-most (last) symbol. Then, we work backwards through the string, starting from the second-to-last-symbol. We check the symbol after (i + 1) to determine whether the current symbol should be "added" or "subtracted".

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let lastSymbol = s[s.length - 1];
  let lastValue = values[lastSymbol];
  let total = lastValue;

  for (let i = s.length - 2; i >= 0; i--) {
    let currentSymbol = s[i];
    let currentValue = values[currentSymbol];
    if (currentValue < lastValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    lastValue = currentValue;
  }
  return total;
};

//* Complexity Analysis

// Time complexity : O(1).

// Same as Approach 1.

// Space complexity : O(1).

// Same as Approach 1.
