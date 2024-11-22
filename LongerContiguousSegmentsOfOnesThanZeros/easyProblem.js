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
