/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  let rem = purchaseAmount % 10;

  if (rem < 5) purchaseAmount = purchaseAmount - rem;
  else purchaseAmount = purchaseAmount + (10 - rem);
  return 100 - purchaseAmount;
};

//rem = remaining amount
// this one was fun to learn, more of these would be a great idea
