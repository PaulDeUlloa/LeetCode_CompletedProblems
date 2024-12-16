var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  TreeNode.right = invertTree(root.right);
  TreeNode.left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};
