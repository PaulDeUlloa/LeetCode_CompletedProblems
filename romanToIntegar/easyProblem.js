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
