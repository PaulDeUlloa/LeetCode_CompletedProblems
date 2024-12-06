/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (String(o1) !== String(o2)) return false;

  if (typeof o1 !== "object") {
    return o1 === o2;
  }

  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) return false;

    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) return false;
    }

    return true;
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) return false;

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  return true;
};

//!strict equality ('===')
//compares values for primitive types and references for objects and arrays.

//!loose equality ('==')
//performs coercion and compares values for primitive types and references for objects and arrays.

//!Object.is
//compares values using the SameValueZero algorithm and treats certain cases differently, such as positive and negative zeros and NaN.

//!React.js
//uses Oject.is() instead of === for comparing props and states in its reconciliation process.

//!Anything that can be solved with recursion can also be solved with a stack!

//Reason is that recursion relies on the call stack to manage function calls and handle the recursive process. On the other hand, a stack data structure can mimic the behavior of the call stack, allowing us to implement the same logic iteratively. This equivalence is based on the fact that both approaches follow the same //**depth-first traversal pattern**//.
