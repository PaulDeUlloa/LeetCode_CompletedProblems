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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  let right = invertTree(root.right);
  let left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};

// Note that the only differences between the Java code and the JavaScript code are:

// The public access modifier is not needed in JavaScript, so it's omitted.

// The TreeNode class is defined using a function declaration instead of a class declaration.

// The == operator is used for null checks instead of ===, but in this case, it doesn't make a difference because we're only checking for null.

// The let keyword is used to declare the left and right variables instead of TreeNode left and TreeNode right. This is because JavaScript is dynamically typed, so we don't need to specify the type of the variable.

// Everything else is the same. The code uses recursion to invert the binary tree by swapping the left and right child nodes of each node.
