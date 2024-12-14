/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  if (root.val === root.left.val + root.right.val) {
    return true;
  } else {
    return false;
  }
};

//We say root.left.val instead of root.val.left so we know which value to go to
// first, before a value is provided. Basically the way I understood it was to give it
// directions first then it'll know which value to give you. So its not blindly giving you a value.

// How it works
// When we write `root.left.val`, we're saying:

// Start with the root node.

// Access its left property, which gives us the left child node.

// Access the val property of the left child node, which gives us its value.

// Similarly, when we write `root.right.val`, we're saying:

// Start with the root node.

// Access its right property, which gives us the right child node.

// Access the val property of the right child node, which gives us its value.

//!Important
// However, there's an important note to make here: if the `left` or `right` child node is `null`, attempting to access its `val` property will throw a `TypeError`. This is because `null` doesn't have a `val` property.
// In the context of this code snippet, it's assumed that the `root` node has both left and right child nodes, and that they are not `null`. If this assumption is not valid, the code will throw an error.
