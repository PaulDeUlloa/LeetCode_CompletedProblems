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

// each time we are cycling through the stack we are checking for similar parentheses and then popping them until the array is valid or invalid.

//! Mapping Relationships:

// The mappings object establishes relationships between closing brackets and their corresponding opening brackets.

//! Validation Logic:

// As we iterate through each character in the input string (s), we need to check if it's a closing bracket.

// If it is, we will pop the top element from our stack (which holds opening brackets) and verify if it matches with its corresponding opening bracket as defined in our mappings.

// If it doesn’t match, then we know that the sequence is invalid.

//! Stack Usage:

// The stack data structure is used here to keep track of unmatched opening brackets.

// When you encounter an opening bracket (like "(", "{", or "["), you push it onto the stack.

// When encountering a closing bracket (like ")", "}", or "]"), you check whether there’s an appropriate matching opening bracket at the top of the stack using your mappings.

//! Handling Edge Cases:

// By using this mapping approach, you're able to handle nested structures effectively and ensure that every type of parenthesis matches correctly while also considering their order.

// Iterating through this string would result in pushing "{", "[", and then pushing "(" onto the stack until reaching the first closing brace ("}").

// At this point, checking against our mapping tells us that for closure with this brace, we should have had previously opened {. Since that’s true (the last opened was {)—the process continues without returning false.

// Following similar logic through all characters ensures completeness via both stack management and mapping validation.
