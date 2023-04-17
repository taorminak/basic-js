const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfNumbers = Array.from(String(n), Number);
  let maxNum = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const copy = [...arrayOfNumbers];
    copy.splice(i, 1);
    const num = Number(copy.join(''));
    if (num > maxNum) {
      maxNum = num;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
