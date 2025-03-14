/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let initialSteps = 0;

  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    initialSteps = initialSteps + 1;
  }
  return initialSteps;
};

// simple while loop and then returning initial steps. we also initialize the steps to zero at the beginning.
