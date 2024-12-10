var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

// Currying is a powerful technique in functional programming that transforms a function with multiple arguments into a sequence of functions. It allows you to create flexible and reusable code by enabling partial application of function arguments.

//These three dots are called the spread syntax or spread operator. The spread syntax is a feature of ES6, and it's also used in React. Spread syntax allows you to deconstruct an array or object into separate variables
