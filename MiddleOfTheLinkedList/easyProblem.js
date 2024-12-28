/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let A = [head];

  while (A[A.length - 1].next != null) A.push(A[A.length - 1].next);

  return A[Math.trunc(A.length / 2)];
};

//* Approach 1: Output to Array

// Put every node into an array A in order. Then the middle node is just A[A.length // 2], since we can retrieve each node by index.

// We can initialize the array to be of length 100, as we're told in the problem description that the input contains between 1 and 100 nodes.

//! Approach 2:

// When traversing the list with a pointer slow, make another pointer fast that traverses twice as fast. When fast reaches the end of the list, slow must be in the middle.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let A = [head];

  while (A[A.length - 1].next != null) A.push(A[A.length - 1].next);

  return A[Math.trunc(A.length / 2)];
};

// Summary

// The approach used here relies on using two pointers moving through the linked list at different speeds—this strategy effectively allows us to reach and identify where exactly in terms of placement within total nodes, our "middle" point lies.
// Using this technique ensures that we only traverse through each element once, giving us O(n) time complexity with O(1) space complexity since we're not using any extra structures; we're just using pointers!
