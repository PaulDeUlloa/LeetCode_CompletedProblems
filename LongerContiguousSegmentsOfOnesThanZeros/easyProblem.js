/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let numberOfZeros = 0,
    numberOfOnes = 0,
    count0 = 0,
    count1 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      count0++;
      count1 = 0;
    } else {
      count1++;
      count0 = 0;
    }
    numberOfZeros = Math.max(numberOfZeros, count0);
    numberOfOnes = Math.max(numberOfOnes, count1);
  }
  return numberOfOnes > numberOfZeros;
};

//lines 14 and 17 equal zero because they should not be altered if the other count is being added to. it seems like hard coding the other counts to only increase when told to.
