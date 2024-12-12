/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) {
    return "null";
  }

  if (Array.isArray(object)) {
    const elements = object.map((element) => jsonStringify(element));
    return `[${elements.join(",")}]`;
  }

  if (typeof object === "object") {
    const keys = Object.keys(object);
    const keyValuePairs = keys.map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    );
    return `{${keyValuePairs.join(",")}}`;
  }

  if (typeof object === "string") {
    return `"${object}"`;
  }

  return String(object);
};

//! Used JSON-like String Concatenation ^^

// Breakdown:
// First we need to check if the input object is null and if yes then return the string null. This is because in JavaScript, the typeof null returns object .
// Next, we check if the object is an array using the Array.isArray() method. It takes one argument and returns true if the argument is an array.
// If it is an array, iterate over each element and recursively call the jsonStringify function on each element to properly handle nested objects or arrays within the array.
// The resulting JSON string representation of each element is stored in the elements array.
// Finally, we join the elements together with commas(',') using the join() method and enclosed in square brackets('[]') to represent the array in JSON.
// Now, If the object is not an array but an object with key-value pairs, it iterates over the object's keys using Object.keys().
// For each key, we recursively call the jsonStringify function on the corresponding value and store the resulting JSON string representation in the keyValuePairs array.
// The keyValuePairs array contains strings representing each key-value pair.
// Finally, the key-value pairs are joined together with commas(',') using the join() method and enclosed in curly braces to represent the object in JSON.
// If the object is a string, we will wrap the string value in double quotes to represent it properly in JSON.
// For other types of values (numbers, booleans), they are converted to strings using the String() function.
// In the end the resulting JSON string representation is returned.

//!Solution 2

var jsonStringify = function (object) {
  switch (typeof object) {
    case "object":
      if (Array.isArray(object)) {
        const elements = object.map((element) => jsonStringify(element));
        return `[${elements.join(",")}]`;
      } else if (object) {
        const keys = Object.keys(object);
        const keyValuePairs = keys.map(
          (key) => `"${key}":${jsonStringify(object[key])}`
        );
        return `{${keyValuePairs.join(",")}}`;
      } else {
        return "null";
      }
    case "boolean":
    case "number":
      return `${object}`;
    case "string":
      return `"${object}"`;
    default:
      return "";
  }
};

// It's worth noting that the `case` statement can have multiple labels, like this:

switch (expression) {
  case "value1":
  case "value2":
    // code block that will be executed for both values
    break;
}

// In this case, the colon is still part of the label syntax, but the code block that follows will be executed for both values.
