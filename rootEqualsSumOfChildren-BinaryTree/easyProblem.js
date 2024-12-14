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
