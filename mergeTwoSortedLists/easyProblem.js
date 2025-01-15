//! Approach 1: RECURSION:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

//* Complexity Analysis

//? Time complexity : O(n+m)

// Because each recursive call increments the pointer to list1 or list2 by one (approaching the dangling null at the end of each list), there will be exactly one call to mergeTwoLists per element in each list. Therefore, the time complexity is linear in the combined size of the lists.

//? Space complexity : O(n+m)

// The first call to mergeTwoLists does not return until the ends of both list1 and list2 have been reached, so n+m stack frames consume O(n+m) space.

//! Approach 2: Iteration:

//* this approach made more sense to me, it could have been the better animation that helped me grasp it more.

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let prehead = new ListNode(-1);
  let prev = prehead;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  if (list1 != null) {
    prev.next = list1;
  } else {
    prev.next = list2;
  }
  return prehead.next;
};

//! Algorithm:
// First, we set up a false "prehead" node that allows us to easily return the
// head of the merged list later. We also maintain a prev pointer, which
// points to the current node for which we are considering adjusting its next
// pointer. Then, we do the following until at least one of l1 and l2 points
// to null: if the value at l1 is less than or equal to the value at l2,
// then we connect l1 to the previous node and increment l1. Otherwise, we
// do the same, but for l2. Then, regardless of which list we connected, we
// increment prev to keep it one step behind one of our list heads.

// After the loop terminates, at most one of l1 and l2 is non-null.
// Therefore (because the input lists were in sorted order), if either list is
// non-null, it contains only elements greater than all of the
// previously-merged elements. This means that we can simply connect the
// non-null list to the merged list and return it.
