//! Question
//
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  var res = 0;

  for (var i = 0; i < accounts.length; i++) {
    var temp = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    res = Math.max(res, temp);
  }
  return res;
};

//! Python3

// class Solution:
//     def maximumWealth(self, accounts: List[List[int]]) -> int:
//         # Initialize the maximum wealth seen so far to 0 (the minimum wealth possible)
//         max_wealth_so_far = 0

//         # Iterate over accounts
//         for account in accounts:
//             # Add the money in each bank
//             curr_customer_wealth = sum(account)
//             # Update the maximum wealth seen so far if the current wealth is greater
//             # If it is less than the current sum
//             max_wealth_so_far = max(max_wealth_so_far, curr_customer_wealth)

//         # Return the maximum wealth
//         return max_wealth_so_far
