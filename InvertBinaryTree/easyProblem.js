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

//! An iterative approach would be the following:

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

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let current = queue.shift();
    let temp = current.left;
    current.left = current.right;
    current.right = temp;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return root;
};

// Note that the main differences between the Java code and the JavaScript code are:

// The Queue interface is not available in JavaScript, so we use an array ([]) instead. We use the push method to add elements to the end of the array (like add in Java) and the shift method to remove the first element from the array (like poll in Java).

// The LinkedList class is not needed in JavaScript, so we simply use an array ([]) instead.

// The TreeNode class is not explicitly defined in this code snippet, but it's assumed to be the same as in the previous example.

// The === operator is used for null checks instead of ==, which is a good practice in JavaScript.

// The let keyword is used to declare the queue variable instead of Queue<TreeNode> queue.

// Everything else is the same. The code uses a queue to iterate over the nodes of the binary tree, swapping the left and right child nodes of each node as it goes.

//* It would not work correctly. This is because the first assignment would overwrite the value of `current.left` with the value of `current.right`, and then the second assignment would try to assign the new value of `current.left` (which is now the old value of `current.right`) back to `current.right`. This would effectively lose the original value of `current.left`. By using a temporary variable `temp` to store the original value of `current.left`, the code can safely swap the left and right child nodes:

let temp = current.left;
current.left = current.right;
current.right = temp;

//! This way, the original value of `current.left` is preserved in `temp`, and can be safely assigned to `current.right` after `current.left` has been overwritten with the value of `current.right`.
