//! Approach 1: Output to Array

// Put every node into an array A in order. Then the middle node is just A[A.length // 2], since we can retrieve each node by index.

// We can initialize the array to be of length 100, as we're told in the problem description that the input contains between 1 and 100 nodes.

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
  //Here, we create an array called A and initialize it with the head node of the linked list. The purpose of this array is to store all nodes in the linked list sequentially.

  while (A[A.length - 1].next != null) A.push(A[A.length - 1].next);
  //The loop continues as long as there is a next node for the last element in array A. Inside each iteration, we access the last element in array A using A[A.length - 1], and check if its .next property is not null. If it's not null, we push (add) that next node into array A.

  return A[Math.trunc(A.length / 2)];
  // After exiting from the while loop, all nodes have been collected into array A. To find and return the middle node, we calculate its index using integer division:
  // We divide the length of our collected nodes (A.length) by 2.
  // The use of Math.trunc() ensures that if there are an odd number of elements (e.g., five), truncating gives us two—pointing to position three when counting from zero—thus returning exactly our middle point!
};

//! Approach 2:

// When traversing the list with a pointer slow, make another pointer fast that traverses twice as fast. When fast reaches the end of the list, slow must be in the middle.

var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Summary

// The approach used here relies on using two pointers moving through the linked list at different speeds—this strategy effectively allows us to reach and identify where exactly in terms of placement within total nodes, our "middle" point lies.
// Using this technique ensures that we only traverse through each element once, giving us O(n) time complexity with O(1) space complexity since we're not using any extra structures; we're just using pointers!
