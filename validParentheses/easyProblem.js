/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const mappings = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let c of s) {
    if (mappings[c]) {
      const topElement = stack.length ? stack.pop() : "#";
      if (topElement !== mappings[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};

// the variable c is just a random letter. I tested it with p and it still works great.
